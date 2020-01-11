jQuery(function () {
    var pagetop = $('#page_top');
    pagetop.hide();
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {  //100px�X�N���[���������\��
            pagetop.fadeIn();
        } else {
            pagetop.fadeOut();
        }
    });
    pagetop.click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500); //0.5�b�����ăg�b�v�ֈړ�
        return false;
    });
});

function checkradio( disp ) {
   document.getElementById('photo1').style.display = disp;
}

document.getElementsByTagName('html')[0].oncontextmenu = function () {return false;}

document.body.oncontextmenu = function () {return false;}

jQuery1(function () {
    'use strict';
    const target1 = document.getElementById('target1'); //���x���g���������͂��萔�Ƃ��ď�����
    const target2 = document.getElementById('target2');
    const target3 = document.getElementById('target3');
    const target4 = document.getElementById('target4');
    const target5 = document.getElementById('target5');
    const target6 = document.getElementById('target6');

            target1.addEventListener('click', () => {
        target1.classList.toggle('circle1');
    });

            target2.addEventListener('click', () => {
        target2.classList.toggle('circle2');
    });

            target3.addEventListener('click', () => {
        target3.classList.toggle('circle3');
    });

            target4.addEventListener('click', () => {
        target4.classList.toggle('circle4');
    });
            target5.addEventListener('click', () => {
        target5.classList.toggle('circle5');
    });

            target6.addEventListener('click', () => {
        target6.classList.toggle('circle6');
    });

});
