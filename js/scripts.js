// Вычисление высоты видео фона
function videoHeight() {
	$('.header-banner').height($(window).height());
}


$(document).ready(function() {
	videoHeight();
});

$(window).resize(function() {
	videoHeight();
});