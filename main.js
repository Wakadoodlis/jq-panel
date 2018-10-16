$(function () {

  $('.tab-panels .tabs li').on('click', function () {

    var $panel = $(this).closest('.tab-panels'); // closest randa artimiausia tab-panels ir taip nereikia ieskoti po visa

    $panel.find('.tabs li.active').removeClass('active');
    $(this).addClass('active');

    //kokia panele rodyti
    var panelToShow = $(this).attr('rel');

    //paslepti panele
    $panel.find('.panel.active').slideUp(800, showNextPanel);

    //rodyti kita aktyvia panele
    function showNextPanel() {
      $(this).removeClass('active');

      $('#' + panelToShow).slideDown(800, function () {
        $(this).addClass('active');
      });
    }
  });


});