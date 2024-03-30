/* global jQuery:false */
/* global ROSALEEN_STORAGE:false */

(function() {
	"use strict";

	// Init skin-specific actions on first run
	// Attention! Don't forget to add the class "inited" and check it to prevent re-initialize the elements
	jQuery( document ).on(
		'action.ready_rosaleen', function() {

			// Process Tribe Events view after it was reloaded by AJAX
			jQuery('.tribe-events-view').on( 'beforeAjaxComplete.tribeEvents beforeAjaxSuccess.tribeEvents beforeAjaxError.tribeEvents', rosaleen_tribe_events_after_ajax );
			function rosaleen_tribe_events_after_ajax( jqXHR, textStatus ) {
				setTimeout( function() {
					// Set up event handler again because .tribe-events-view was recreated after AJAX
					jQuery('.tribe-events-view').on( 'beforeAjaxComplete.tribeEvents beforeAjaxSuccess.tribeEvents beforeAjaxError.tribeEvents', rosaleen_tribe_events_after_ajax );

				}, 10 );
			}

		}
	);

    // MailChimp - ID
    //------------------
    if (jQuery('.mc4wp-form-fields').length > 0) {
        var count_mc4wp = 1;
        jQuery('.mc4wp-form-fields').each(
            function () {
                jQuery(this).find('input[type="checkbox"]').each(
                    function () {
                        var id = jQuery(this).attr('id');
                        if (id) {
                        }
                        else {
                            id = 'mc4wp';
                        }
                        jQuery(this).attr('id', id + '-' + count_mc4wp);
                        jQuery(this).next('label').attr('for', id + '-' + count_mc4wp);
                        count_mc4wp++;
                    });
            });
    }

    jQuery( document ).on(
        'action.ready_rosaleen', function() {
            // Process Tribe Events view after it was reloaded by AJAX
            jQuery('.tribe-events-view').on( 'beforeAjaxComplete.tribeEvents beforeAjaxSuccess.tribeEvents beforeAjaxError.tribeEvents', rosaleen_tribe_events_after_ajax );
            function rosaleen_tribe_events_after_ajax( jqXHR, textStatus ) {
                setTimeout( function() {
                    // Set up event handler again because .tribe-events-view was recreated after AJAX
                    jQuery('.tribe-events-view').on( 'beforeAjaxComplete.tribeEvents beforeAjaxSuccess.tribeEvents beforeAjaxError.tribeEvents', rosaleen_tribe_events_after_ajax );
                    if (ROSALEEN_STORAGE['button_hover'] && ROSALEEN_STORAGE['button_hover'] != 'default') {
                        if (ROSALEEN_STORAGE['button_hover'] != 'arrow') {
                            jQuery(
                                '.tribe-events-c-ical__link:not([class*="sc_button_hover_"]),\
                                .tribe-events-c-search__button:not([class*="sc_button_hover_"])\
                            '
                            ).addClass( 'sc_button_hover_just_init sc_button_hover_' + ROSALEEN_STORAGE['button_hover'] );
                        }
                    }
                }, 10 );
            }
        }
    );

})();
