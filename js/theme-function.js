$(function () {

    // Submit phone send phone
    $('#form-sendPhone form').submit(function () {
        $(this).parent().addClass('hidden');
        $('#form-sendCode').removeClass('hidden');

        return false;
    });

    // Return Send Phone
    // Form send code
    $('#return-sendPhone').click(function () {
        $(this).parents('#form-sendCode').addClass('hidden');
        $('#form-sendPhone').removeClass('hidden');
    });

    $('input[name=codephone]').on("change keyup paste", function () {
        if ($(this).val() != '')
            $(this).parents('#form-sendCode').find('span.error').css('display', 'none');
    });

    $('#form-sendCode form').submit(function () {
        // Xử lý code - show error
        var valInput = $(this).find('input[name=codephone]').val();
        if (valInput != 'anhnam')
            $(this).find('span.error').css('display', 'block');
        else {
            $(this).parent().addClass('hidden');
            $('#info-register').removeClass('hidden');
        }

        return false;
    });

    //  Xử lý step
    $('#sendInfo-step1').submit(function () {
        $(this).parents('#step1').removeClass('in active');
        $('#step2').addClass('in active');
        $('#step-two').addClass('active');
        $('#step-one').removeClass('active');

        return false;
    });

    $('#sendInfo-step2').submit(function () {
        $(this).parent().removeClass('in active');
        $('#step3').addClass('in active');
        $('#step-three').addClass('active');
        $('#step-two').removeClass('active');

        return false;
    });

    $('#return-step').click(function () {
        $(this).parents('#step2').removeClass('in active');
        $('#step1').addClass('in active');
        $('#step-one').addClass('active');
        $('#step-two').removeClass('active');
    });

    $('select[name=select-staff]').on('change', function () {
        if ($(this).val() != '')
            $('select[name=select-time]').prop('disabled', false);
        else {
            $('select[name=select-time]').prop('disabled', true);
            $('#addService').prop('disabled', true);
            $(this).parents('#sendInfo-step2').find('button#nextStep3').prop('disabled', false);
        }
    });

    $('select[name=select-time]').on('change', function () {
        if ($(this).val() != '')
            $('#addService').prop('disabled', false);
        else {
            $('#addService').prop('disabled', true);
            $(this).parents('#sendInfo-step2').find('button#nextStep3').prop('disabled', false);
        }
    });

    $('#addService').click(function () {
        $(this).parents('.box-main').find('.box-result').removeClass('hidden');
        $(this).parents('#sendInfo-step2').find('button#nextStep3').prop('disabled', false);
    });

    $('.box-close a').click(function () {
        $(this).parents('.box-result').addClass('hidden');
        $(this).parents('#sendInfo-step2').find('button#nextStep3').prop('disabled', true);
    });

    //    Delete gallery
    $('.gallery-delete a').click(function () {
        $(this).parents('.col-md-4').remove();
    });


    $(".career-button").click(function () {
        $(this).parent().find('.career-f-hidden').trigger('click');
    });

    //     Script Home
    $(document).on('click', '#toggleTime > a', function () {
        $(this).parent().addClass('openTime');
    });

    $(document).on("mouseup", function (e) {
        var o = $("#toggleTime");
        o.is(e.target) || 0 !== o.has(e.target).length || (
            $('#toggleTime').removeClass('openTime')
        )
    });
});

jQuery(document).ready(function ($) {
    new WOW().init();
    $('#home-slider').on('init', function (event, slick) {
        var $currentSlider = slick.$slides.eq(0);
        $currentSlider.find('.slider-title').addClass('animated bannerZoom');
        $currentSlider.find('.slider-desc').addClass('animated fadeInDown');
        $currentSlider.find('.slider-action').addClass('animated bounceIn');
    });

    $('#home-slider').slick({
        dots: false,
        arrows: true,
        infinite: true,
        speed: 700,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 6000,
        fade: true,
        prevArrow: '<span class="slick-prev slick-arrow"><i class="fas fa-arrow-left"></i></span>',
        nextArrow: '<span class="slick-next slick-arrow"><i class="fas fa-arrow-right"></i></span>',
        responsive: [
            {
                breakpoint: 480,
            }
        ]
    }).fadeIn();
    $('#home-slider').on('afterChange', function (event, slick, currentSlide) {
        var $currentSlider = slick.$slides.eq(currentSlide);
        $currentSlider.find('.slider-title').addClass('animated bannerZoom');
        $currentSlider.find('.slider-desc').addClass('animated fadeInDown');
        $currentSlider.find('.slider-action').addClass('animated bounceIn');
    }).on('beforeChange', function (event, slick, currentSlide, nextSlide) {
        var $currentSlider = slick.$slides.eq(currentSlide);
        $currentSlider.find('.slider-title').removeClass('animated bannerZoom');
        $currentSlider.find('.slider-desc').removeClass('animated fadeInDown');
        $currentSlider.find('.slider-action').removeClass('animated bounceIn');
    });

    //    Cart
    $(document).on('click', '#addCoupon', function () {
        var valCounpon = $(this).parent().children('input[name="cart-coupon"]').val();

        if (valCounpon == '' || valCounpon != 'anhnam') {
            $('#showError').html('<div class="alert alert-danger">' +
                '  Error Lorem ipsum dolor sit amet.!' +
                '</div>');
            return false;
        } else {
            // Xử lí add Coupon thành công ...
        }
    });

    $('.changesoluong').click(function () {
        type = $(this).attr("data-type");
        parentInput = $(this).parent().parent().find('input');
        slhientai = parseInt(parentInput.val());
        if (type == 1)
            slmoi = slhientai + 1;
        else
            slmoi = slhientai - 1;
        if (slmoi > 0 && !isNaN(slmoi))
            parentInput.prop("value", slmoi);
        else
            parentInput.prop("value", slhientai);

        $('#updateCart').prop('disabled', false);
    });

    $('.changeQuantity').change(function () {
        $('#updateCart').prop('disabled', false);
    });

    if ($('.service-main').length > 0) {

        var height_neod = $('.service-main').offset().top;

    }
    var height_footer = $('#hb-footer').offset().top;
    var height_nav = $('.page-gallery .hb-navigationarea').height();
    $(window).scroll(function () {
        if ($(this).scrollTop() > height_neod) {
            $('.service-sidebar').addClass('service-fixed');
            $('.service-sidebar').css('top', height_nav + 15);
        } else {
            $('.service-sidebar').removeClass('service-fixed');
            $('.service-sidebar').css('top', 'unset');
        }

        if ($(this).scrollTop() > (height_footer - 400)) {
            $('.service-sidebar').removeClass('service-fixed');
            $('.service-sidebar').css('top', 'unset');
        }
    });
});
$(document).ready(function () {
    var mobileWidth = window.matchMedia("(max-width: 768px)");
    if (mobileWidth.matches) {
        $('.price-inner > ul > li > a').click(function () {
            var $id = $(this).attr('data-id');
            $('.price-content-item').removeClass('active');
            $('#' + $id).addClass('active');

            $('.price-inner > ul > li').removeClass('active');
            $(this).parents('.price-inner').addClass('price-fixed');
            $(this).parent().addClass('active');
            $('.price-collapse').addClass('price-active');
            $('body').css('overflow', 'hidden');
        });

        $('.price-close a').click(function () {
            $('.price-collapse.price-active').removeClass('price-active');
            $('.price-inner > ul > li').removeClass('active');
            $('.price-inner').removeClass('price-fixed');
            $('body').css('overflow', 'auto');
            $('.price-content-item').removeClass('active');
        });
    } else {
        $('.price-inner > ul > li > a').click(function () {
            $('.price-inner > ul > li').removeClass('active');
            $(this).parent().addClass('active');

            $('html, body').animate({
                scrollTop: $("#" + $(this).attr('data-id')).offset().top - 100
            }, 1000);
        });

        if ($('.price-collapse').length != 0) {
            jQuery(window).scroll(function () {
                var heightContent = $('body').outerHeight() - $('.price-collapse').outerHeight();
                var heightFooter = $('.price-collapse').offset().top + $('.price-collapse').outerHeight() - 500;
                if (jQuery(document).scrollTop() > heightContent && jQuery(document).scrollTop() <= heightFooter) {
                    $('.price-navigation').addClass('navigation-fixed');
                } else {
                    $('.price-navigation').removeClass('navigation-fixed');
                }

                $('.price-inner ul li a').each(function () {
                    var currLink = $(this);
                    var refElement = $(currLink).attr("data-id");
                    var heightScrollElement = parseInt($('#' + refElement).position().top);
                    if (heightScrollElement < jQuery(document).scrollTop()) {
                        $('.price-inner ul li').removeClass("active");
                        currLink.parent().addClass("active");
                    }
                });
            });
        }
    }
});
$(document).ready(function () {
    $('#feedback-slider').owlCarousel({
        margin: 30,
        nav: false,
        autoplay: false,
        autoplayTimeout: 8000,
        statePadding: 2,
        smartSpeed: 1000,
        dots: true,
        autoplayHoverPause: true,
        loop: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 2,
            },
            1000: {
                items: 3,
            }
        }
    });


    checkCollapsed();

    function checkCollapsed() {
        $('#hb-navigation').on('shown.bs.collapse', function (e) {
            triggerCollapsedClass();
            maxHeight = $('.hb-navigationarea').outerHeight();
            $('#hb-navigation ul li').each(function () {
                maxHeight += $(this).outerHeight();
            })
            maxHeight +=
                $('.hb-navigationarea').css({
                    'overflow-y': 'scroll',
                    'min-height': '100vh',
                    'max-height': maxHeight + 'px',
                })
        }).on('hidden.bs.collapse', function (e) {
            triggerCollapsedClass();
            $('.hb-navigationarea').css({
                'overflow-y': 'hidden',
                'min-height': 'auto',
            })
        });
    }

    function triggerCollapsedClass() {
        $("[data-toggle=collapse]").each(function (i, item) {
            var selector = $(item).attr("href");
            if ($(selector).hasClass("in")) {
                $(item).addClass("collapsed");
            } else {
                $(item).removeClass("collapsed");
            }
        });
    }

    function customSelect() {
        if ($('.js-custom_select').length) {
            $(".js-custom_select").each(function (i, item) {
                let selector = $(item).children('span');
                selector.click(function () {
                    if ($(item).hasClass('is-focus')) {
                        $(item).removeClass('is-focus');
                    } else {
                        $(item).addClass('is-focus');
                    }
                });

                let optionSelector = $(item).children('ul').find('li > a');
                /*optionSelector.click(function () {
                    if (!$(this).hasClass('active')) {
                        optionSelector.removeClass('active');
                        $(this).addClass('active');
                        selector.html($(this).find('.text').html());
                    }
                    $(item).removeClass('is-focus');
                });*/
                $(item).on('click', 'li > a', function () {
                    if (!$(this).hasClass('active')) {
                        optionSelector.removeClass('active');
                        $(this).addClass('active');
                        selector.html($(this).find('.text').html());
                    }
                    $(item).removeClass('is-focus');
                });
            });

            $(document).on("mouseup", function (e) {
                let o = $(".js-custom_select.is-focus");
                o.is(e.target) || 0 !== o.has(e.target).length || (
                    $(".js-custom_select.is-focus").removeClass('is-focus')
                )
            });
        }
    }

    customSelect();

    $('#review-slider').owlCarousel({
        margin: 30,
        nav: false,
        autoplay: true,
        autoplayTimeout: 8000,
        statePadding: 2,
        smartSpeed: 1000,
        dots: true,
        autoplayHoverPause: true,
        loop: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 2,
            },
            1000: {
                items: 3,
            }
        }
    });

    $('.form-count_button').click(function (e) {
        e.stopPropagation();
        let elmButton = $(this),
            elmButtonType = parseInt(elmButton.attr('data-type')),
            quantityCurrent = $(this).parent().find('.form-count_quantity'),
            quantityCurrentValue = parseInt(quantityCurrent.val());

        if (elmButtonType === 1) {
            quantityCurrentValue += 1;
            if (quantityCurrentValue > 1) {
                elmButton.parent().find('.form-count_button[data-type=0]').prop('disabled', false);
            }
        } else if (elmButtonType === 0) {
            quantityCurrentValue -= 1;
            if (quantityCurrentValue == 1) {
                elmButton.prop('disabled', true);
            }
        }

        quantityCurrent.val(quantityCurrentValue);
    });

    $('.form-count_quantity').keyup(function () {
        let quantityCurrent = $(this),
            quantityCurrentValue = parseInt(quantityCurrent.val());

        if (quantityCurrentValue === 1) {
            quantityCurrent.parent().find('.form-count_button[data-type=0]').prop('disabled', true);
        } else {
            quantityCurrent.parent().find('.form-count_button[data-type=0]').prop('disabled', false);
        }
    });
});