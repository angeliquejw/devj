$(document).ready(function() {
	reorderLayout();
	$('.scrollLink').click(function() {
		if ($(this).parents('div').hasClass('bioWrapper')) {
			$.scrollTo($('article:eq(1)'), 1000);
		} else if ($(this).parents().hasClass('siteFooter')) {
			$.scrollTo($('.siteHeader'), 1000);
		}
	});
	$('.siteFooter .scrollLink').hover(
		function() {
			var $this = $(this); // caching $(this)
			$this.data('initialText', $this.text());
			$this.text('\u25B2  \u25B2  \u25B2');
			$this.wrapInner('<span></span>');
		},
		function() {
			var $this = $(this); // caching $(this)
			$this.text($this.data('initialText'));
		}
	);
});

$(window).resize(reorderLayout);

function reorderLayout(){
	if($(window).width() < 900){
		$('.bioWrapper').insertAfter('article.first');
	}
	else {
		if ($('.bioWrapper').prev('article')) {
			$('.bioWrapper').prependTo('.siteSidebar');	
		}
	}
}