var counter= 3;
var name = '';
var reset=function(){
$('#answers *').fadeOut(2000);
$('input').removeAttr('disabled');
counter = 3;
}
var gameCheck = function(){
	if (counter ==0) {
		reset();
	}
}
// while (name == "") {
// name=prompt("Your name, sil vous plait");
//}
$('.jumbotron  h2 span').html(name);

if ($('.true input[value="Truth"]').click(function(){
	$(this).prop('disabled', true).siblings().prop('disabled',true);
	$('#answers').append('<h2>Correct!</h2>');
	counter -= 1;
	gameCheck();
}));

	if ($('.true input[value="Lie"]').click(function(){
		$(this).prop('disabled', true).siblings().prop('disabled',true);
	$('#answers').append('<h2>Game Over!</h2>');
	reset();
}));
			if ($('.lie input[value="Truth"]').click(function(){
				$(this).prop('disabled', true).siblings().prop('disabled',true);
	$('#answers').append('<h2>Game Over!</h2>');
	reset();
}));
				if ($('.lie input[value="Lie"]').click(function(){
					$(this).prop('disabled', true).siblings().prop('disabled',true);
	$('#answers').append('<h2>Correct!</h2>');
	counter -= 1;
	gameCheck();
}));