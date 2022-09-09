var omnivaltDelivery = {
    init : function() {
        var self = this;
        $('.delivery-options .delivery-option input[type="radio"]').each(function() {
            var $this = $(this),
                value = $this.val(),
                carrierIds = value.split(',');
            
            if (value != omnivalt_parcel_terminal_carrier_id + ',' && value != omnivalt_parcel_terminal_carrier_id_pc + ',') {
                return;
            }
            
            var $omnivaltItem = $this.closest('.delivery-option');
            var omnivaltLocation = $omnivaltItem.find('label');
            
            //$(".delivery_option #omnivalt_parcel_terminal_carrier_details").remove();
            if (value == omnivalt_parcel_terminal_carrier_id + ',') {
             $("#hook-display-before-carrier #omnivalt_parcel_terminal_carrier_details").appendTo(omnivaltLocation);
		}
	     if (value == omnivalt_parcel_terminal_carrier_id_pc + ',') {
	     $("#hook-display-before-carrier #omnivalt_parcel_terminal_carrier_details_pc").appendTo(omnivaltLocation);	 
	     }
            //$("#HOOK_BEFORECARRIER #omnivalt_parcel_terminal_carrier_details").remove();
        });

        if ($('.delivery-options .delivery-option input[type="radio"]:checked').val() == omnivalt_parcel_terminal_carrier_id + ',') {
            $("#omnivalt_parcel_terminal_carrier_details").show();
	    $("#omnivalt_parcel_terminal_carrier_details select").show();
	    $("#omnivalt_parcel_terminal_carrier_details_pc").hide();
	     $("#omnivalt_parcel_terminal_carrier_details select").removeAttr("disabled");
	     $("#omnivalt_parcel_terminal_carrier_details #show-omniva-map").removeAttr("disabled");
	     $("#omnivalt_parcel_terminal_carrier_details_pc select").prop('disabled', 'disabled');
	     $("#omnivalt_parcel_terminal_carrier_details_pc #show-omniva-map").prop('disabled', 'disabled');
	     $("#omnivalt_parcel_terminal_carrier_details_pc select").hide();
        } else if ($('.delivery-options .delivery-option input[type="radio"]:checked').val() == omnivalt_parcel_terminal_carrier_id_pc + ',') {
            $("#omnivalt_parcel_terminal_carrier_details_pc").show();
	    $("#omnivalt_parcel_terminal_carrier_details_pc select").show();
	    $("#omnivalt_parcel_terminal_carrier_details").hide();
 	    $("#omnivalt_parcel_terminal_carrier_details select").prop('disabled', 'disabled');
	    $("#omnivalt_parcel_terminal_carrier_details_pc select").removeAttr("disabled");
	    $("#omnivalt_parcel_terminal_carrier_details select").hide();
	    $("#omnivalt_parcel_terminal_carrier_details_pc #show-omniva-map").removeAttr("disabled");
	    $("#omnivalt_parcel_terminal_carrier_details #show-omniva-map").prop('disabled', 'disabled');
        } else {
           $("#omnivalt_parcel_terminal_carrier_details").hide();
            $("#omnivalt_parcel_terminal_carrier_details_pc").hide();
        }
        
        $('form#js-delivery').off('submit').on('submit', function(){
            return self.validate();
        });

        $('select[name="omnivalt_parcel_terminal"]').off('change.Omniva').on('change.Omniva', function(e) {
            var terminal = $(this).val();
	       
            $.ajax({
                type: 'POST',
                headers: { "cache-control": "no-cache" },
                url: omnivaltdelivery_controller,
                async: true,
                cache: false,
                dataType: 'json',
                data: 'action=saveParcelTerminalDetails'
                    + '&terminal=' + terminal,
                success: function(jsonData)
                {
                    //console.log(jsonData);
                },
                error: function(XMLHttpRequest, textStatus, errorThrown) {
                    if (textStatus !== 'abort'){
                        if (!!$.prototype.fancybox)
                        $.fancybox.open([
                            {
                                type: 'inline',
                                autoScale: true,
                                minHeight: 30,
                                content: '<p class="fancybox-error">' + omnivalt_parcel_terminal_error + '</p>'
                            }],
                            {
                                padding: 0
                            }
                        );
                        else
                            alert(omnivalt_parcel_terminal_error);
                    }
                }
            });
        });
    },
    validate : function() {
		 
        if ($('.delivery-options .delivery-option input[type="radio"]:checked').val() == omnivalt_parcel_terminal_carrier_id + ',' && $('#omnivalt_parcel_terminal_carrier_details select[name="omnivalt_parcel_terminal"]').val() == "")
        {
	    
            if (!!$.prototype.fancybox) {
                $.fancybox.open([
                {
                    type: 'inline',
                    autoScale: true,
                    minHeight: 30,
                    content: '<p class="fancybox-error">' + omnivalt_parcel_terminal_error + '</p>'
                }],
                {
                    padding: 0
                });
            }
            else {
		  
                alert(omnivalt_parcel_terminal_error);
            }
        } else if ($('.delivery-options .delivery-option input[type="radio"]:checked').val() == omnivalt_parcel_terminal_carrier_id_pc + ',' && $('#omnivalt_parcel_terminal_carrier_details_pc select[name="omnivalt_parcel_terminal"]').val() == "")
        {
			 
		if (!!$.prototype.fancybox) {
                $.fancybox.open([
                {
                    type: 'inline',
                    autoScale: true,
                    minHeight: 30,
                    content: '<p class="fancybox-error">' + omnivalt_parcel_terminal_error + '</p>'
                }],
                {
                    padding: 0
                });
            }
            else {
		  
                alert(omnivalt_parcel_terminal_error);
            }

	}
        else {
            //paymentModuleConfirm(); //if opc
            return true;
        }
        return false;
    },
}
	
//when document is loaded...
$(document).ready(function(){
    $('.omnivalt_select').select2();
    omnivaltDelivery.init();
    $('.delivery-options .delivery-option input[type="radio"]').on('click',function(){
        omnivaltDelivery.init();
    });
})
