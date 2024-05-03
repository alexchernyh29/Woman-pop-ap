import svg4everybody from 'svg4everybody';
import $ from 'jquery';

$(() => {
	$('.popup__button').click(function(event) {
        event.preventDefault();
        $.ajax({
            url: '/save_form/',
            type: 'POST',
            data: $('#myForm').serialize(),
            dataType: 'json',
            success: function(response) {
                if (response.error === 0) {
					$(".popup__content").hide();
					$(".popup__button").hide();
					$(".popup__button-answer").show();
					$(".popup__answer").css('display', 'flex');
                    $('.popup__title.answer').text('Заявка на участие в Shkulev sup-завтраке отправлена.');
					$('.popup__info.small').text('Подтверждение участия вы получите на электронную почту, которую указали в заявке.');
					$(".popup__button-answer").click(function(){
						$(".popup__button-answer").hide();
						$(".popup__answer").css('display', 'none');
						$(".popup__content").show();
						$(".popup__button").show();
					});
                } else {
					$(".popup__content").hide();
					$(".popup__button").hide();
					$(".popup__button-answer").show();
					$(".popup__answer").css('display', 'flex');
                    $('.popup__title.answer').text('Что-то пошло не так.');
					$('.popup__info.small').text('Попробуйте заполнить заявку снова. При повторном возникновении этой проблемы, напишите нам на почту');
					$('.popup__mail').text('supbreakfast@sholding.ru.');
					$(".popup__button-answer").click(function(){
						$(".popup__button-answer").hide();
						$(".popup__answer").css('display', 'none');
						$(".popup__content").show();
						$(".popup__button").show();
					});
                }
            },
            error: function() {
				$(".popup__content").hide();
				$(".popup__button").hide();
				$(".popup__button-answer").show();
				$(".popup__answer").css('display', 'flex');
				$('.popup__title.answer').text('Что-то пошло не так.');
				$('.popup__info.small').text('Попробуйте заполнить заявку снова. При повторном возникновении этой проблемы, напишите нам на почту');
				$('.popup__mail').text('supbreakfast@sholding.ru.');
				$(".popup__button-answer").click(function(){
					$(".popup__button-answer").hide();
					$(".popup__answer").css('display', 'none');
					$(".popup__content").show();
					$(".popup__button").show();
				});
            }
        });
    });
});
