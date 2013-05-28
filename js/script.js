$(function() {
	var pos = [];
    var star_init_x = 277;

    $('#home div[data-role=content] a').each(function() {
        pos.push($(this).offset());
    });

    $('#home #intro .star').each(function() {
        $(this).css('left', star_init_x + 'px');
        star_init_x = star_init_x + 80;
    });

    $('#home > div:not(#intro, [data-role="header"])').hide();
    $('#home > div[data-role="header"] h1 span:first-child').css('opacity', '1');
    
    setTimeout(function() {
        $('#home > div[data-role="header"] h1 span:nth-child(2)').css('opacity', '1');
    }, 1500);

    setTimeout(function() {
        $('#home #intro #plate').fadeIn(1500);
        $('#home #intro #hand').fadeIn(1500, function() {
            $('#home #intro #plate #title').show();
            $('#home #intro .star').css('opacity', '1');
            $('#home #intro #hand').addClass('rotate');

            setTimeout(function() {
                  $('#home #intro .star').each(function() {
                    if($(this).index() > 2) {
                        $(this).toggleClass('reducing2', 3000);
                    } else {
                        $(this).toggleClass('reducing1', 3000);
                    }

                    $('#home #intro #hand').css('opacity', '0');
                    $('#home #intro #plate').animate({
                        opacity: '0',
                        top: '555px'
                    }, 2500, 'easeInQuad');

                    $('#home > div[data-role="header"] h1 span:last-child').css('opacity', '1');

                    $(this).animate({
                        left: pos[$(this).index()].left + 'px',
                        top: pos[$(this).index()].top + 'px'
                    }, 3000, 'easeInOutExpo', function() {
                        if($(this).index() == $(this).length - 1)
                        {
                            $('#home > div:not([data-role="header"])').fadeToggle(1500);

                        }
                    });
                });
            }, 2000);
        });
    }, 1500);

	function require(script) {
	    $.ajax({
	        url: script,
	        dataType: "script",
	        async: false,
	        success: function () {
	            // all good...
	        },
	        error: function () {
	            throw new Error("Could not load script " + script);
	        }
	    });
	}

	$('#option1').caption({
		number: 1,
		linePoints: [[30, 150], [30, 200], [130, 270]],
		text: "Système antirotation\ndu stator breveté",
		link: "#antirotation"
	});
	$('#option1').caption({
		number: 2,
		linePoints: [[210, 100], [210, 180], [310, 245]],
		text: "Stator en élastomère\nalimentaire",
		link: "#stator"
	});
	$('#option1').caption({
		number: 9,
		linePoints: [[410, 60], [410, 120], [440, 180]],
		text: "Tubulure de\nnettoyage",
		link: "#tubulure"
	});
	$('#option1').caption({
		number: 3,
		linePoints: [[550, 30], [550, 100], [630, 180]],
		text: "Conception du corps\noptimisée",
		link: "#corps-optimise"
	});
	$('#option1').caption({
		number: 10,
		linePoints: [[740, 50], [740, 100], [830, 170]],
		text: "Capotage de\nl'entrainement",
		link: "#capotage"
	});
	$('#option1').caption({
		number: 7,
		linePoints: [[40, 470], [40, 330]],
		text: "Pipe\nexcentrique",
		link: "#pipe-excentrique"
	});
	$('#option1').caption({
		number: 8,
		linePoints: [[190, 450], [150, 420], [150, 390]],
		text: "Socle avec pieds\nréglables",
		link: "#socle-reglable"
	});
	$('#option1').caption({
		number: 6,
		linePoints: [[350, 400], [350, 350], [290, 265]],
		text: "Rotor en inox 316L",
		alternateBadge: true
	});
	$('#option1').caption({
		number: 5,
		linePoints: [[530, 350], [530, 280], [490, 235]],
		text: "Bielle flexible en\ntitane Duraflex",
		link: "#bielle-flexible"
	});
	$('#option1').caption({
		number: 4,
		linePoints: [[730, 310], [700, 310], [670, 200]],
		text: "Garniture mécanique\nhygiénique en\ncartouche",
		link: "#garniture"
	});
	$('#option2').caption({
		number: 2,
		linePoints: [[180, 110], [180, 170], [280, 250]],
		text: "Stator en élastomère\nalimentaire",
		link: "#stator"
	});
	$('#option2').caption({
		number: 9,
		linePoints: [[380, 70], [380, 130], [430, 180]],
		text: "Tubulure de\nnettoyage",
		link: "#tubulure"
	});
	$('#option2').caption({
		number: 10,
		linePoints: [[670, 30], [670, 90], [760, 160]],
		text: "Capotage de\nl'entrainement",
		link: "#capotage"
	});
	$('#option2').caption({
		number: 7,
		linePoints: [[30, 200], [30, 300]],
		text: "Pipe excentrique",
		link: "#pipe-excentrique"
	});
	$('#option2').caption({
		number: 8,
		linePoints: [[120, 470], [70, 440], [70, 390]],
		text: "Socle avec pieds\nréglables",
		link: "#socle-reglable"
	});
	$('#option2').caption({
		number: 6,
		linePoints: [[390, 390], [390, 340], [320, 260]],
		text: "Rotor en inox 316L",
		alternateBadge: true
	});
	$('#option2').caption({
		number: 5,
		linePoints: [[560, 340], [560, 270], [515, 220]],
		text: "Bielle flexible en\ntitane Duraflex",
		link: "#bielle-flexible"
	});
	$('#option2').caption({
		number: 4,
		linePoints: [[730, 300], [680, 300], [640, 210]],
		text: "Garniture mécanique\nhygiénique en\ncartouche",
		link: "#garniture"
	});
	$("div[data-role='popup']").each(function() {
		if($(this).attr('data-video-url')) {
	        $(this).on({
	            popupbeforeposition: function () {
	                var width = $(this).attr('data-video-width');
	                var height = $(this).attr('data-video-height');
	                var poster = $(this).attr('data-video-poster');
	                var video = $(this).attr('data-video-url');

	                content = '<video width="' + width + '" height="' + height + '" poster="' + poster + '" controls ><source src="' + video + '" type="video/mp4"></video>';
	                $(this).html(content);
	            },
	            popupafterclose: function () {
	                $(this).html(null);
	            }
	        });
	    }
    });

    var imgs = ['content/img/option1-4-fond2.png', 'content/img/option1-4-fond1.png', 'content/img/option1-4-masque.png', 'content/img/option1-4-legende.png', 'content/img/options1-water.png'];

	function garniture_animation() {
		$('#garniture-animation-container').empty();

		$('<div>').css({
			'backgroundImage': 'url(' + imgs[0] + ')'
		}).appendTo($('#garniture-animation-container'));

		$('<div>').css({
			'backgroundImage': 'url(' + imgs[1] + ')'
		}).appendTo($('#garniture-animation-container'));

		setTimeout(function() {
			$('<div>').addClass('water').css({
				'backgroundImage': 'url(' + imgs[4] + ')'
			}).insertAfter($('#garniture-animation-container div:eq(0)')).animate({
				'top': '0'
			}, 4000, "easeInSine");

			$('<div>').css({
				'backgroundImage': 'url(' + imgs[2] + ')',
				'display': 'none'
			}).appendTo($('#garniture-animation-container')).fadeIn(2000);

			$('<div>').css({
				'backgroundImage': 'url(' + imgs[3] + ')',
				'display': 'none'
			}).appendTo($('#garniture-animation-container')).fadeIn(2000);
		}, 1000);
	}

	function capotage_animation() {
		var animation_interval = setInterval(function() {
			if(window.location.hash != '#capotage') {
				clearInterval(animation_interval);

				$('#capotage-animation-container div').hide();
			} else {
				$('#capotage-animation-container div').fadeToggle(1500);
			}
		}, 3000);
	}

	$(window).hashchange(function() {
		if(location.hash == '#garniture') {
			garniture_animation();
		}

		if(location.hash == '#capotage') {

			var capotage_animation_trigger = capotage_animation();
		}
	});

	$('a[target="_blank"]').click(function() {
	    window.open($(this).attr("href"), "_system");
	    
	    return false;
	});
})