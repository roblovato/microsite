jQuery(document).ready(function($) {
	
	//Page height
	var content_height = ($('#home_content').outerHeight()) + 430;
	$('#container').css('height', content_height);
	
	//Navigation
	$('#nav a').click(function(e){
		e.preventDefault();
		var bg_change = $(this).attr('id');
		var content_change = ($(this).attr('id') + '_content');
		
		if ($(this).attr('class') != 'selected') {
			$('#nav a').removeClass('selected');
			$(this).addClass('selected');
		}
		
		if (!$('#'+content_change).hasClass('current')) {
			$('.current').fadeOut();
			$('.content').removeClass('current');
			$('#'+content_change).addClass('current').fadeIn(function(){
				var content_height = ($(this).outerHeight()) + 430;
				$('#container').css('height', content_height);
			});
		}
		
		$('body').removeClass();
		$('body').addClass(bg_change);
	});

	$('#close, #overlay').live('click', function(){
		$('#overlay, #modal').fadeOut(function(){
			$(this).remove();
		});
	});

	$('.modal').live('click', function(){
		var theLink = $(this).attr('rel');
		var content = $('#'+theLink).html();
		modalWindow(content);
	});

	$('.modal').hover(
		function () {
			var titleLoc = $(this).attr('rel');
			var titleText = $('#'+titleLoc).children('h2').text();
			$(this).append('<em>'+titleText+'</em>');
			$(this).children('em').fadeIn(300);
		},
		function () {
			$(this).children('em').fadeOut(300, function(){ $(this).remove() });
		}
	);
	
});

function modalWindow(content) {
	$('body').append($(
        '<div id="overlay"></div>' +
		'<div id="modal">' +
			'<a href="###" id="close"></a>' +
			'<div id="modal_content">' +
			content +
			'</div>' +
			'<div class="clear"></div>' +
		'</div>'
    ).hide().fadeIn().css('display', 'block'));

	var top = ($('#modal').outerHeight() / 2);
	var left = ($('#modal').outerWidth() / 2);
	
	$('#modal').css({'margin-top' : '-'+top+'px', 'margin-left' : '-'+left+'px'});
}



