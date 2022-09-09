{*
* 2007-2014 PrestaShop
*
* NOTICE OF LICENSE
*
* This source file is subject to the Academic Free License (AFL 3.0)
* that is bundled with this package in the file LICENSE.txt.
* It is also available through the world-wide-web at this URL:
* http://opensource.org/licenses/afl-3.0.php
* If you did not receive a copy of the license and are unable to
* obtain it through the world-wide-web, please send an email
* to license@prestashop.com so we can send you a copy immediately.
*
*         DISCLAIMER   *
* *************************************** */
/* Do not edit or add to this file if you wish to upgrade Prestashop to newer
* versions in the future.
* ****************************************************
*}

<div id="omnivalt_parcel_terminal_carrier_details" style="display: none; margin-top: 10px;">
    <select class="select2 omnivalt_select" name="omnivalt_parcel_terminal" style = "width:100%;">{$parcel_terminals nofilter}</select>

    <style>
        {literal}
            #omnivalt_parcel_terminal_carrier_details{ margin-bottom: 5px }
        {/literal}
    </style>
{if isset($omniva_api_key) and $omniva_api_key != false } 
  <button type="button" id="show-omniva-map" class="btn-marker">
    <!--<i id="show-omniva-map" class="fa fa-map-marker fa-lg" aria-hidden="true"></i>-->
    <i id="show-omniva-map" class="material-icons">Rinktis iš žemėlapio</i>
  </button>
{/if}
</div>

<div id="omnivalt_parcel_terminal_carrier_details_pc" style="display: none; margin-top: 10px;">
    <select class="select2 omnivalt_select" name="omnivalt_parcel_terminal" style = "width:100%;">{$parcel_terminals_pc nofilter}</select>

    <style>
        {literal}
            #omnivalt_parcel_terminal_carrier_details_pc{ margin-bottom: 5px }
        {/literal}
    </style>
{if isset($omniva_api_key) and $omniva_api_key != false } 
  <button type="button" id="show-omniva-map" class="btn-marker">
    <!--<i id="show-omniva-map" class="fa fa-map-marker fa-lg" aria-hidden="true"></i>-->
    <i id="show-omniva-map" class="material-icons">Rinktis iš žemėlapio</i>
  </button>
{/if}
</div>
