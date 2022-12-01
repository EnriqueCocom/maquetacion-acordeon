//Función para el acordeon
$('.acordeon_titulo').click(function () {
  var t = $(this);
  var icon  = t.children('#icono');
  var tp = t.next();
  tp.slideToggle();
  icon.toggleClass('fa-plus-square fa-minus-square');
});