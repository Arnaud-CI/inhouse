$(function() {
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
    });
});