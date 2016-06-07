// page init
jQuery(function(){
	initMenuToggle();
});

function initMenuToggle(){
	$('.menu-opener').on('click', function(){
		$('.site-menu').toggleClass('opened');
	});
}
