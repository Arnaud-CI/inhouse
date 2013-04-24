(function($) {
	$.fn.caption=function(params) {
		params = $.extend({
    		number: 1,
    		linePoints: [[0, 0], [1, 1]],
    		text: 'Hello World!',
    		link: false,
    		alternateBadge: false
    	}, params);

		var line_settings = {
			layer: true,
			name: 'badges',
			strokeStyle: '#000066',
			strokeWidth: 1
		}, points;

		for (points = 0; points < params.linePoints.length; points++) {
			line_settings['x'+(points+1)] = params.linePoints[points][0];
			line_settings['y'+(points+1)] = params.linePoints[points][1];
		}
		$(this).drawLine(line_settings);

		if(params.alternateBadge) {
			var badgeFillStyle = '#fff';
			var colorBadgeText = '#000066';
		} else {
			var badgeFillStyle = '#000066';
			var colorBadgeText = '#fff';
		}

		$(this).drawEllipse({
			layer: true,
			name: 'badges',
			fillStyle: badgeFillStyle,
			x: params.linePoints[0][0], y: params.linePoints[0][1],
			width: 40, height: 40,
			strokeStyle: "#000066",
			strokeWidth: 1,
			click: function() {
				if(params.link) {
					$.mobile.changePage(params.link, {
						transition: "slide"
					});
				}
			}
		});

		$(this).drawText({
			layer: true,
			name: 'badges',
			fillStyle: colorBadgeText,
			x: params.linePoints[0][0], y: params.linePoints[0][1],
			text: params.number,
			align: "left",
			baseline: "middle",
			fontFamily: "Trebuchet MS, sans-serif",
			fontSize: "22pt",
			click: function() {
				if(params.link) {
					$.mobile.changePage(params.link, {
						transition: "slide"
					});
				}
			}
		});

		$(this).drawText({
			layer: true,
			name: 'badges',
			fillStyle: "#000066",
			x: params.linePoints[0][0] + 30, y: params.linePoints[0][1] - 20,
			text: params.text,
			align: "left",
			baseline: "middle",
			fontFamily: "Trebuchet MS, sans-serif",
			fontSize: "10pt",
			fontStyle: "italic",
			lineHeight: 1.3,
			fromCenter: false,
			click: function() {
				if(params.link) {
					$.mobile.changePage(params.link, {
						transition: "slide"
					});
				}
			}
		});
	}
})(jQuery);