const namespace = 'UX';

window[namespace] = window[namespace] || {};

/**
 * IIFE(즉시실행)
 */
(function (ui) {
	'use strict';

	ui.$window = $(window);
	ui.$document = $(document);
	ui.$html = $('html');
	ui.state = {
		initiated: 'ux-state-initiated',
		disabled: 'ux-state-disabled',
	};

	// user agent detecti
	const getBrowser = () => {
		const ua = navigator.userAgent.toLowerCase();

		ui.isMobile =
			/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(ua) ||
			/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
				ua.substr(0, 4),
			);
		ui.isAndroid = ui.isMobile && ua.indexOf('android') > -1;
		ui.isiOS = ui.isMobile && /iPhone/.test(navigator.userAgent) && !window.MSStream;
		ui.hasNotch = ui.isMobile && ui.isiOS && (window.screen.width / window.screen.height).toFixed(3) === '0.462';
		ui.isChrome = (ui.isMobile && ui.isiOS && navigator.userAgent.match('CriOS')) || (!ui.isMobile && /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor));
		ui.isEdge = !ui.isMobile && ui.isChrome && navigator.userAgent.indexOf('Edg') != -1;
		ui.isFirefox = !ui.isMobile && typeof InstallTrigger !== 'undefined';
		ui.isIE = (!ui.isMobile && /*@cc_on!@*/ false) || !!document.documentMode;
	};

	// user agent detection
	const setBrowser = () => {
		ui.$html.toggleClass('is-mobile', ui.isMobile);
		ui.$html.toggleClass('is-desktop', !ui.isMobile);
		ui.$html.toggleClass('is-android', ui.isAndroid);
		ui.$html.toggleClass('is-ios', ui.isiOS);
		ui.$html.toggleClass('has-notch', ui.hasNotch);
	};

	const logBrowser = () => {
		// prettier-ignore
		let logStyles = [
			'color: #fff',
			'padding: 4px 8px',
			'margin: 4px 0 4px -8px',
			'border-radius: 4px',
			'background-color: #069'
		].join(';');
		// prettier-ignore
		console
		.log(
			'%cnavigator.userAgent', logStyles,
			'\nMobile', ui.isMobile, 'Android', ui.isAndroid, 'iOS', ui.isiOS, 'Notch', ui.hasNotch,
			'\nChrome', ui.isChrome, 'Edge', ui.isEdge, 'Firefox', ui.isFirefox, 'IE', ui.isIE
		);
	};
	getBrowser();
	setBrowser();
	logBrowser();

	// set <meta name="theme-color">
	const metaThemeColor = () => {
		const meta = document.createElement('meta');
		const name = 'theme-color';
		let color = $('body').attr('data-color');
		const content = color;
		meta.name = name;
		meta.content = content;
		$('head').prepend(meta);
	};
	metaThemeColor();

	// set <meta name="viewport">
	const metaViewport = () => {
		const meta = document.createElement('meta');
		const name = 'viewport';
		const content = 'width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no, viewport-fit=cover';
		meta.name = name;
		meta.content = content;
		$('head').prepend(meta);
	};
	metaViewport();

	// custom event triggering
	$(document).on('keyup', function (e) {
		if (e.which == 13) $(e.target).trigger('enter');
	});
})(window[namespace]);

/**
 * etc
 */
(function (ui) {
	'use strict';

	ui.sleep = async (ms) => {
		return new Promise((resolve) => {
			setTimeout(resolve, ms);
		});
	};

	ui.header = function () {
		let logStyles = ['color: #fff', 'padding: 4px 8px', 'margin: 4px 0 4px -8px', 'border-radius: 4px', 'background-color: #333'].join(';');
		console.log('%cUX.header', logStyles);
	};

	ui.popup = function (options) {
		let $dialog;
		let $popup;
		const baseClassName = 'ux-popup';
		const backdropClassName = `${baseClassName}-backdrop`;
		const $backdrop = $(`<div class="${backdropClassName}"></div>`);
		const duration = 250;
		const defaults = {
			modal: true,
			title: '',
			autoOpen: false,
			dialogClass: baseClassName,
			draggable: false,
			width: '100%',
			height: 'auto',
			resizable: false,
			position: {
				my: 'center center',
				at: 'center center',
				of: window,
			},
			show: {
				effect: 'fade',
				duration: duration,
			},
			hide: {
				effect: 'fade',
				duration: duration,
			},
		};
		const overrideOptions = () => {
			const hasTitle = options.title ? 'popup-has-title' : '';
			const caseClassName = `${baseClassName} popup-type-${options.type} ${hasTitle}`;
			options.dialogClass = caseClassName;
			options.title && options.dialogClass;
			switch (options.type) {
				case 'bottom':
					options.position = { my: 'center bottom', at: 'center bottom', of: window };
					options.show = { effect: 'slide', duration: duration, direction: 'down' };
					options.hide = { effect: 'slide', duration: duration, direction: 'down' };
					break;
				case 'full':
					options.position = { my: 'center top', at: 'center top', of: window };
					options.show = { effect: 'fade', duration: duration };
					options.hide = { effect: 'fade', duration: duration };
					break;
				default:
					options.position = { my: 'center center', at: 'center center', of: window };
					options.show = { effect: 'fade', duration: duration };
					options.hide = { effect: 'fade', duration: duration };
			}
		};
		overrideOptions();
		const settings = $.extend(true, defaults, options);
		settings.create = onCreate;
		settings.open = onOpen;
		settings.beforeClose = onBeforeClose;
		settings.close = onClose;

		function onCreate(event, ui) {
			if ($(`.${backdropClassName}`).length < 1) $backdrop.appendTo($('body'));
			$('.ui-dialog-titlebar .ui-dialog-titlebar-close', $dialog).attr('autofocus', true);
			settings && settings.onCreate && settings.onCreate();
		}
		function onOpen(event, ui) {
			$('.close-popup', $dialog).on('click', function (event) {
				$dialog.dialog('close');
			});
			$('.confirm-popup', $dialog).on('click', function (event) {
				settings && settings.onConfirm && settings.onConfirm(event);
				$dialog.dialog('close');
			});
			$('.dismiss-popup', $dialog).on('click', function (event) {
				settings && settings.onDismiss && settings.onDismiss(event);
				$dialog.dialog('close');
			});
			$('a, button', $dialog).on('click', function (event) {
				settings && settings.onClick && settings.onClick(event);
			});
			UX.initiate();
			settings && settings.onOpen && settings.onOpen();
		}
		function onBeforeClose(event, ui) {
			settings && settings.onBeforeClose && settings.onBeforeClose();
		}
		function onClose(event, ui) {
			$backdrop.remove();
			$(this).dialog('destroy');
			options && options.onClose && options.onClose();
		}

		$dialog = $('<div></div>').dialog(settings);

		if (/^\//i.test(settings.src)) {
			$.ajax({
				type: 'GET',
				url: settings.src,
				dataType: 'html',
				async: false,
				cache: false,
				success: function (data, textStatus) {
					let $responseContainer = $('<div></div>').html(data);
					var container = $responseContainer.find('.ux-container').html();
					const $container = $(container).wrapAll('<div class="ux-container"></div>').parent();

					// var container = $responseContainer.find('.popup-content').html();
					// const $container = $(container).wrapAll('<div></div>').parent();

					// $popup = $('.ux-dialog-main', $dialog).html($container).dialog('open');
					$popup = $dialog.html($container).dialog('open');
				},
				error: function (xhr, textStatus, errorThrown) {
					if (window.console !== undefined) {
						console.log(errorThrown ? errorThrown : xhr.status);
					}
					return false;
				},
			});
		} else {
			if (typeof settings.src === 'object') {
				const $container = $(settings.src).wrapAll('<div class="ux-container"></div>').parent();
				$popup = $dialog.html($container).dialog('open');
			} else {
				const buttonConfirm = settings.buttonConfirm || '확인';
				const buttonDismiss = settings.buttonDismiss || '취소';
				let $popupContainer;
				if (settings.type === 'alert') {
					$popupContainer = $(`
						<main class="ux-main">
							<section class="ux-section section-type-content">
								<article class="ux-article">
									<div class="ux-content">
										<p>${settings.src}</p>
									</div>
								</article>
							</section>
							<section class="ux-section section-type-control">
								<article class="ux-article">
									<div class="ux-content">
										<div class="h4">
											<div class="content">
												<div class="button-bar proc">
													<button type="button" class="ux-button level-1 contained primary confirm-popup">
														<span class="text">${buttonConfirm}</span>
													</button>
												</div>
											</div>
										</div>
									</div>
								</article>
							</section>
						</main>
					`);
				} else {
					$popupContainer = $(`
						<main class="ux-main">
							<section class="ux-section section-type-content">
								<article class="ux-article">
									<div class="ux-content">
										<p>${settings.src}</p>
									</div>
								</article>
							</section>
							<section class="ux-section section-type-control">
								<article class="ux-article">
									<div class="ux-content">
										<div class="h4">
											<div class="content">
												<div class="button-bar proc">
													<button type="button" class="ux-button level-1 contained dismiss dismiss-popup">
														<span class="text">${buttonDismiss}</span>
													</button>
													<button type="button" class="ux-button level-1 contained primary confirm-popup">
														<span class="text">${buttonConfirm}</span>
													</button>
												</div>
											</div>
										</div>
									</div>
								</article>
							</section>
						</main>
					`);
				}
				$popup = $dialog.html($popupContainer).dialog('open');
			}
		}
		return $popup;
	};

	ui.initiate = function () {
		$('.ux-header').each((i, o) => {
			$(o).layoutObserver();
		});
		$('.ux-main').each((i, o) => {
			$(o).layoutObserver();
		});
		$('.ux-footer').each((i, o) => {
			$(o).layoutObserver();
		});
		$('.ux-accordion').each((i, o) => {
			$(o).uxAccordion();
		});
		$('.ux-brn').each((i, o) => {
			$(o).uxRrn();
		});
		$('.ux-button').each((i, o) => {
			$(o).uxButton();
		});
		$('.ux-checkbox').each((i, o) => {
			$(o).uxCheckbox();
		});
		$('.ux-datepicker').each((i, o) => {
			$(o).uxDatepicker();
		});
		$('.ux-file').each((i, o) => {
			$(o).uxFile();
		});
		$('.ux-field').each((i, o) => {
			$(o).uxField();
		});
		$('.ux-input').each((i, o) => {
			$(o).uxInput();
		});
		$('.ux-lottie').each((i, o) => {
			$(o).uxLottie();
		});
		$('.ux-lrn').each((i, o) => {
			$(o).uxRrn();
		});
		$('.ux-password').each((i, o) => {
			$(o).uxPassword();
		});
		$('.ux-phone').each((i, o) => {
			$(o).uxPhone();
		});
		$('.ux-radio').each((i, o) => {
			$(o).uxRadio();
		});
		$('.ux-rrn').each((i, o) => {
			$(o).uxRrn();
		});
		$('.ux-select').each((i, o) => {
			$(o).uxSelect();
		});
		$('.ux-tab').each((i, o) => {
			$(o).uxTab();
		});
		$('.ux-textfield').each((i, o) => {
			$(o).uxTextfield();
		});
	};
})(window[namespace]);

/**
 * plugins
 */
(function (ui) {
	'use strict';

	$.fn.layoutObserver = function (options) {
		const $layout = this;
		if ($layout.length < 1) return false;
		const $el = $('<div />');
		const defaults = {
			places: ['before', 'after'],
		};
		const settings = $.extend(true, defaults, options);
		const classes = $layout.prop('class').split(' ');
		const baseClassName = 'layout-observer';

		const observerCallback = (entries) => {
			let observerFor, observerClassName;
			entries.forEach((entry) => {
				let entryState = entry.isIntersecting;
				const entryClasses = entry.target.className.split(' ');
				entryClasses.forEach((entryClassName) => {
					if (entryClassName.match(/layout-observer-/)) {
						const entryData = entryClassName.replace('layout-observer-', '');
						const entryFor = entryData.split('-')[0];
						const entryPlace = entryData.split('-')[1];
						observerFor = $(`.ux-${entryFor}`);
						observerClassName = `${entryPlace}-in-view`;
					}
				});
				observerFor?.toggleClass(observerClassName, entryState);
			});
		};

		const observerOptions = {
			root: null,
			rootMargin: '0px 0px 0px 0px',
			threshold: 1,
		};

		const addObserver = (settings) => {
			classes.forEach((className) => {
				if (className.match(/ux-/)) {
					settings.places.forEach((place) => {
						const observerElement = $el.clone();
						const caseClassName = `${baseClassName}-${className.replace('ux-', '')}-${place}`;
						if (place === 'before') {
							!$layout.prev()?.hasClass(caseClassName) && observerElement.addClass(caseClassName).insertBefore($layout);
						} else {
							!$layout.next()?.hasClass(caseClassName) && observerElement.addClass(caseClassName).insertAfter($layout);
						}
						activateObserver(observerElement.get(0));
					});
				}
			});
		};

		const activateObserver = (el) => {
			const observer = new IntersectionObserver(observerCallback, observerOptions);
			observer.observe(el);
		};

		const initiate = () => {
			addObserver(settings);
		};
		$layout.parents('pre').length < 1 && !$layout.hasClass(ui.state.initiated) && initiate();

		return this.each((i, o) => {});
	};

	$.fn.uxAccordion = function (options) {
		const $ux = this;
		const $uxs = $('.ux-accordion');
		const $summary = $('> .accordion-summary', $ux);
		const $toggle = $('> .toggle-accordion', $summary);
		const key = $uxs.index($ux);
		const defaults = {
			expanded: false,
		};
		const settings = $.extend(true, defaults, options);
		settings.expanded = $ux.hasClass('expanded');

		const initiate = () => {
			const id = `accordion_checkbox_${key}`;
			const $input = $(`<input type="checkbox" id="${id}" class="accordion-checkbox">`);
			$input.prop('checked', settings.expanded).prependTo($ux);
			$toggle.attr('for', id);

			$input.off('change').on('change', function () {
				settings.expanded = $(this).is(':checked');
				sync();
				if ($(this).is(':checked')) group($(this));
			});
			$ux.addClass(ui.state.initiated);
		};
		const sync = () => {
			$ux.toggleClass('expanded', settings.expanded);
		};
		const group = (el) => {
			const $which = el.closest('.ux-accordion');
			const name = $which.attr('name');
			if (name) {
				const $group = $(`.ux-accordion[name="${name}"]`);
				const index = $group.index($which);
				$group.each((i, o) => {
					let $checkbox = $('> .accordion-checkbox', $(o));
					if (i !== index) {
						$checkbox.prop('checked', false).trigger('change');
					}
				});
			}
		};
		$ux.parents('pre').length < 1 && !$ux.hasClass(ui.state.initiated) && initiate();
		return this.each((i, o) => {});
	};

	$.fn.uxButton = function (options) {
		const $ux = this;
		const defaults = {
			type: 'button',
		};
		const settings = $.extend(true, defaults, options);

		const initiate = () => {};
		$ux.parents('pre').length < 1 && !$ux.hasClass(ui.state.initiated) && initiate();

		return this.each((i, o) => {});
	};

	$.fn.uxCheckbox = function (options) {
		const $ux = this;
		const defaults = {
			type: 'checkbox',
		};
		const settings = $.extend(true, defaults, options);

		const initiate = () => {
			const $input = $(`input[type="${settings.type}"]`, $ux);

			$input.on('change', function () {
				state($(this));
			});
			state($input);
			$ux.addClass(ui.state.initiated);
		};
		const state = (o) => {
			$ux.toggleClass('checked', o.is(':checked'));
		};
		$ux.parents('pre').length < 1 && !$ux.hasClass(ui.state.initiated) && initiate();
		return this.each((i, o) => {});
	};

	$.fn.uxDatepicker = function (options) {
		const $ux = this;
		const $input = $('input', $ux);
		const $button = $('.button-input-calendar', $ux);
		const defaults = {
			delimiter: '-',
			selectedDate: '2026-01-01',
			onselect: this[0].onselect,
		};
		const settings = $.extend(true, defaults, options);
		settings.delimiter = $ux.hasClass('dash') ? '-' : '.';
		const dateFormat = `yy${settings.delimiter}mm${settings.delimiter}dd`;
		let today = new Date();
		const yyyy = today.getFullYear();
		let mm = today.getMonth() + 1;
		let dd = today.getDate();
		today = `${yyyy}${settings.delimiter}${mm}${settings.delimiter}${dd}`;
		settings.selectedDate = $.datepicker.parseDate(dateFormat, today);
		if ($input?.val().length > 0) {
			settings.selectedDate = $.datepicker.parseDate(dateFormat, '2026.01.26');
		}

		const custom_goToToday = $.datepicker._gotoToday;
		$.datepicker._gotoToday = function (id) {
			custom_goToToday.call(this, id);
			this._selectDate(id);
		};
		$.datepicker.regional['ko'] = {
			closeText: '닫기',
			prevText: '이전달',
			nextText: '다음달',
			currentText: '오늘',
			monthNames: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'],
			monthNamesShort: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'],
			dayNames: ['일', '월', '화', '수', '목', '금', '토'],
			dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
			dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
			weekHeader: 'Wk',
			firstDay: 0,
			isRTL: false,
			showMonthAfterYear: true,
			yearSuffix: '',
		};
		$.datepicker.setDefaults($.datepicker.regional['ko']);

		const initiate = () => {
			const from = '2026';
			const to = '+5';
			const data = $ux.attr('data-json');
			if (data) {
				data = JSON.parse(data);
				if (data.from) from = data.from;
				if (data.to) to = data.to;
			}

			$button.off('click').on('click', function (event) {
				console.log('button clicked');
				popupCalendar();
				settings && settings.onchange && settings.onclick(event);
			});

			const popupCalendar = () => {
				const $calendar = $('<div></div>');
				const $datepicker = $calendar.datepicker({
					buttonText: '캘린더',
					changeYear: true,
					changeMonth: true,
					dateFormat: dateFormat,
					defaultDate: settings.selectedDate,
					setDate: settings.selectedDate,
					showMonthAfterYear: true,
					showOn: 'button',
					showOtherMonths: true,
					yearRange: from + ':' + to,
					onSelect: onSelect,
				});
				const $popupContainer = $(`
					<main class="ux-main">
						<section class="ux-section section-type-content">
							<article class="ux-article">
								<div class="ux-content">
								</div>
							</article>
						</section>
						<section class="ux-section section-type-control">
							<article class="ux-article">
								<div class="ux-content">
									<div class="h4">
										<div class="content">
											<div class="button-bar proc">
												<button type="button" class="ux-button level-1 contained primary close-popup">
													<span class="text">확인</span>
												</button>
											</div>
										</div>
									</div>
								</div>
							</article>
						</section>
					</main>
				`);
				$datepicker.appendTo($('.section-type-content .ux-content', $popupContainer));
				let $popup = UX.popup({ type: 'bottom', src: $popupContainer, title: '날짜 선택' });
			};
			const onSelect = (dateText, inst) => {
				$input.val(dateText);
				settings.selectedDate = dateText;
				settings && settings.onselect && settings.onselect(dateText);
			};
			$ux.addClass(ui.state.initiated);
		};
		$ux.parents('pre').length < 1 && !$ux.hasClass(ui.state.initiated) && initiate();

		return this.each((i, o) => {});
	};

	$.fn.uxField = function (options) {
		const $ux = this;
		const defaults = {
			standby: false,
		};
		const settings = $.extend(true, defaults, options);

		const initiate = () => {
			const $inputs = $('button, input, textarea', $ux);
			const $input = $('input', $ux);
			const $textarea = $('textarea', $ux);
			const $select = $('.ux-select', $ux);
			setTimeout(() => {
				if (!settings.standby && $input.length > 0 && $input?.val().length > 0) {
					$ux.addClass('standby');
					settings.standby = true;
				}
				if (!settings.standby && $textarea.length > 0 && $textarea?.val().length > 0) {
					$ux.addClass('standby');
					settings.standby = true;
				}
				if (!settings.standby && $select.length > 0 && !$select?.hasClass('unselected')) {
					$ux.addClass('standby');
					settings.standby = true;
				}
			}, 10);
			$ux.off('click').on('click', function () {
				$ux.addClass('standby');
			});
			$inputs.off('focusin').on('focusin', function () {
				$ux.addClass('standby');
			});
			$ux.addClass(ui.state.initiated);
		};
		$ux.parents('pre').length < 1 && !$ux.hasClass(ui.state.initiated) && initiate();

		return this.each((i, o) => {});
	};

	$.fn.uxFile = function (options) {
		const $ux = this;
		const $file = $('input[type="file"]', $ux);
		const $text = $('input[type="text"]', $ux);
		const $clear = $('.button-input-clear', $ux);
		const defaults = {
			onchange: this[0].onchange,
		};
		const settings = $.extend(true, defaults, options);

		const initiate = () => {
			$file.off('change').on('change', function (event) {
				$text.val(getFileName($file.val()));
				checkValue();
				settings && settings.onchange && settings.onchange(event);
			});
			$clear.off('click').on('click', function (event) {
				$file.val('').trigger('change');
				settings && settings.onchange && settings.onchange(event);
			});
			$ux.addClass(ui.state.initiated);
		};
		const getFileName = (path) => {
			return path.replace(/.*[\/\\]/, '');
		};
		const checkValue = () => {
			$text.toggleClass('has-value', $text.val().length > 0);
		};
		checkValue();
		$ux.parents('pre').length < 1 && !$ux.hasClass(ui.state.initiated) && initiate();

		return this.each((i, o) => {});
	};

	$.fn.uxInput = function (options) {
		const $ux = this;
		const $inputs = $('button, input, textarea', $ux);
		const defaults = {};
		const settings = $.extend(true, defaults, options);

		const initiate = () => {
			if ($ux.hasClass('readonly')) $inputs.prop('readonly', true);
			if ($ux.hasClass('disabled')) $inputs.prop('disabled', true);
		};
		$ux.parents('pre').length < 1 && initiate();

		return this.each((i, o) => {});
	};

	$.fn.uxLottie = function (options) {
		const $ux = this;
		const defaults = {
			url: '',
		};
		const settings = $.extend(true, defaults, options);
		settings.url = $ux.attr('data-url');

		const initiate = () => {
			var lottieAnimation = bodymovin.loadAnimation({
				container: $ux.get(0),
				path: settings.url,
				renderer: 'svg',
				loop: false,
				autoplay: true,
			});
			$ux.addClass(ui.state.initiated);
		};
		$ux.parents('pre').length < 1 && !$ux.hasClass(ui.state.initiated) && initiate();

		return this.each((i, o) => {});
	};

	$.fn.uxPassword = function (options) {
		const $ux = this;
		const $input = $('input', $ux);
		const $clear = $('.button-input-clear', $ux);
		const defaults = {
			oninput: this[0].oninput,
		};
		const settings = $.extend(true, defaults, options);

		const initiate = () => {
			const $placeholder = $(`<span class="placeholder">${$input.attr('placeholder')}</span>`);
			$placeholder.insertAfter($input);
			$input.off('input').on('input', function (event) {
				checkValue();
				settings && settings.oninput && settings.oninput(event);
			});
			$clear.off('click').on('click', function (event) {
				$input.val('').trigger('input');
				settings && settings.oninput && settings.oninput(event);
			});
			$ux.addClass(ui.state.initiated);
		};
		const checkValue = () => {
			$input.toggleClass('has-value', $input.val().length > 0);
		};
		checkValue();
		$ux.parents('pre').length < 1 && !$ux.hasClass(ui.state.initiated) && initiate();

		return this.each((i, o) => {});
	};

	$.fn.uxPhone = function (options) {
		const $ux = this;
		const $input = $('input', $ux);
		const defaults = {};
		const settings = $.extend(true, defaults, options);

		const initiate = () => {
			$ux.addClass(ui.state.initiated);
		};
		$ux.parents('pre').length < 1 && !$ux.hasClass(ui.state.initiated) && initiate();

		return this.each((i, o) => {});
	};

	$.fn.uxRadio = function (options) {
		const $ux = this;
		const defaults = {
			type: 'radio',
			index: -1,
			onchange: this[0].onchange,
		};
		const settings = $.extend(true, defaults, options);
		const $input = $(`input[type="${settings.type}"]`, $ux);
		const $group = $input.parents('.ux-radio-group');
		settings.index = $group.index($input);

		const initiate = () => {
			const name = $input.attr('name');
			const $name = $(`input[type="${settings.type}"][name="${name}"]`);

			$input.off('change').on('change', function (event) {
				state($(this));
				$name.each((i, o) => {
					$(o).closest('.ux-radio').toggleClass('checked', $(o).is(':checked'));
				});
				settings && settings.onchange && settings.onchange(event);
			});
			state($input);
			$ux.addClass(ui.state.initiated);
		};
		const update = () => {
			$ux.removeClass(ui.state.initiated);
			initiate();
		};
		const state = (o) => {
			$ux.toggleClass('checked', o.is(':checked'));
		};
		$ux.parents('pre').length < 1 && !$ux.hasClass(ui.state.initiated) && initiate();
		if (options === 'update') update();

		return this.each((i, o) => {});
	};

	$.fn.uxRrn = function (options) {
		const $ux = this;
		const $input = $('input', $ux);
		const $clear = $('.button-input-clear', $ux);
		const defaults = {};
		const settings = $.extend(true, defaults, options);

		const initiate = () => {
			$clear.off('click').on('click', function (event) {
				$input.val('').trigger('input');
			});
			$ux.addClass(ui.state.initiated);
		};
		$ux.parents('pre').length < 1 && !$ux.hasClass(ui.state.initiated) && initiate();

		return this.each((i, o) => {});
	};

	$.fn.uxSelect = function (options) {
		const $ux = this;
		const $button = $('.select-button', $ux);
		const $dropdown = $('.select-dropdown', $ux);
		const $options = $('> ul', $dropdown);
		const $option = $('> li', $options);
		const selectedClassName = 'selected';
		const defaults = {
			$el: $('<div></div>'),
			type: 'select',
			selected: -1,
			onchange: this[0].onchange,
		};
		const settings = $.extend(true, defaults, options);
		settings.openedClass = 'select-dropdown-opened';
		settings.placeholder = $ux.attr('placeholder') || '항목을 선택하세요';

		const initiate = () => {
			const title = settings.placeholder.replace('을 선택하세요', '').replace('를 선택하세요', '');
			let $popup;
			$options.addClass('select-options').attr('role', 'combobox');
			$option.addClass('select-option').attr({ role: 'option', tabindex: 0 });
			$option.each((i, o) => {
				if ($(o).hasClass('selected')) settings.selected = i;
			});
			$button.off('click').on('click', function () {
				const $popupContainer = $(`
					<main class="ux-main">
						<section class="ux-section section-type-content">
							<article class="ux-article">
								<div class="ux-content">
								</div>
							</article>
						</section>
					</main>
				`);
				$dropdown.appendTo($('.section-type-content .ux-content', $popupContainer));
				$popup = UX.popup({ title: title, type: 'bottom', src: $popupContainer, onClose: onDropdownClose });
				$ux.addClass(settings.openedClass);
				$ux.closest('.ux-field').addClass('standby');
			});
			$option.off('click enter').on('click enter', function (event) {
				const index = $option.index($(this));
				if (settings.selected !== index) {
					$ux.toggleClass('unselected', index === -1);
					settings && settings.onchange && settings.onchange(event);
					select(index);
				}
				$popup.dialog('close');
			});
			const index = $option.index($option.filter('.selected'));
			select(index);
			unselect(index);
			$ux.addClass(ui.state.initiated);
		};
		const update = () => {
			$options.removeClass('select-options');
			$option.removeClass('select-option');
			$ux.removeClass(ui.state.initiated);
			initiate();
		};
		const select = (index) => {
			settings.selected = index;
			if (index === -1) {
				$('.text', $button).html(settings.placeholder);
				$ux.addClass('unselected');
			} else {
				$('.text', $button).html($option.eq(index).html());
				$ux.removeClass('unselected');
			}
			$option.each((i, o) => {
				$(o).toggleClass(selectedClassName, i === index);
			});
		};
		const unselect = (index) => {
			$ux.toggleClass('unselected', index === -1);
		};
		const onDropdownClose = () => {
			$ux.removeClass(settings.openedClass);
		};
		$ux.parents('pre').length < 1 && !$ux.hasClass(ui.state.initiated) && initiate();
		if (options === 'update') update();

		return this.each((i, o) => {});
	};

	$.fn.uxSwiper = function (options) {
		const $ux = this;
		const $control = $('.swiper-control', $ux);
		const $pagination = $('.swiper-pagination', $ux);
		const $fraction = $('.swiper-fraction', $ux);
		const $operation = $('.swiper-operation', $ux);
		let swiper;
		const defaults = {
			loop: false,
			slidesPerView: 1,
			spaceBetween: 0,
			speed: 400,
		};
		const settings = $.extend(true, defaults, options);

		const initiate = () => {
			if ($pagination.length > 0) {
				settings.pagination = {
					type: 'bullets',
					el: $pagination.get(0),
				};
			}
			if ($fraction.length > 0) {
				settings.pagination = {
					type: 'fraction',
					el: $fraction.get(0),
				};
			}
			swiper = new Swiper($('.swiper', $ux).get(0), settings);
			if ($operation.length > 0) {
				const $button = $('<button type="button" class="ux-button button-swiper-operation"><span class="icon"></span><span class="text"></span></button>');
				$button.appendTo($operation);
				$button.off('click').on('click', function () {
					if (swiper.autoplay.running) {
						swiper.autoplay.stop();
					} else {
						swiper.autoplay.start();
					}
					pp();
				});
			}
			const pp = () => {
				$ux.toggleClass('running', swiper.autoplay.running);
			};
			pp();
			$ux.addClass(ui.state.initiated);
		};

		$ux.parents('pre').length < 1 && !$ux.hasClass(ui.state.initiated) && initiate();

		return swiper;
	};

	$.fn.uxTab = function (options) {
		const $ux = this;
		const $uxs = $('.ux-tab');
		const $subject = $('.tab-subject', $ux);
		const $content = $('.tab-content', $ux);
		const defaults = {
			selected: 0,
			onchange: this[0].onchange,
		};
		const settings = $.extend(true, defaults, options);
		const index = $subject.index($subject.filter('.selected'));
		if ($subject.filter('.selected').length > 0) settings.selected = index;

		const initiate = () => {
			const key = $uxs.index($ux);
			const $inputs = $('<div></div>');
			const name = `tab_subject_group_${key}`;
			$inputs.prependTo($ux);
			$subject.each((i, o) => {
				const $input = $(`<input type="radio" name="${name}" class="tab-radio">`);
				$input
					.clone()
					.attr('id', `tab_subject_${key}_${i}`)
					.prop('checked', settings.selected === i)
					.addClass(`tab-radio-${i}`)
					.appendTo($inputs);
				$(o).attr('for', `tab_subject_${key}_${i}`);
				$content.eq(i).addClass(`tab-content-${i}`);
			});
			$inputs.children().prependTo($ux);
			$inputs.remove();
			const $group = $(`input[type="radio"][name="${name}"]`);
			const $radio = $('.tab-radio', $ux);
			$radio.off('change').on('change', function (event) {
				let index = $radio.index($(this));
				settings.selected = index;
				sync();
				blob();
			});
			const $blob = $('<span class="blob"></span>');
			$blob.appendTo($('.tab-subjects', $ux));
			const sync = () => {
				$subject.each((i, o) => {
					$(o).toggleClass('selected', i === settings.selected);
				});
				$content.each((i, o) => {
					$(o).toggleClass('selected', i === settings.selected);
				});
			};
			const blob = async () => {
				await UX.sleep(100);
				let left = Math.round($subject.eq(settings.selected).position().left);
				let width = $subject.eq(settings.selected).css('width');
				$blob.css({
					left: left,
					width: width,
				});
			};
			sync();
			blob();
			$ux.addClass(ui.state.initiated);
		};

		$ux.parents('pre').length < 1 && !$ux.hasClass(ui.state.initiated) && initiate();

		return this.each((i, o) => {});
	};

	$.fn.uxTextfield = function (options) {
		const $ux = this;
		const $input = $('input', $ux);
		const $clear = $('.button-input-clear', $ux);
		const defaults = {
			oninput: this[0].oninput,
		};
		const settings = $.extend(true, defaults, options);

		const initiate = () => {
			$input.off('input').on('input', function (event) {
				checkValue();
				settings && settings.oninput && settings.oninput(event);
			});
			$clear.off('click').on('click', function (event) {
				$input.val('');
				settings && settings.oninput && settings.oninput(event);
			});
			$ux.addClass(ui.state.initiated);
		};
		const checkValue = () => {
			$input.toggleClass('has-value', $input.val().length > 0);
		};
		checkValue();
		$ux.parents('pre').length < 1 && !$ux.hasClass(ui.state.initiated) && initiate();

		return this.each((i, o) => {});
	};

	$.fn.uxTextarea = function (options) {
		const $ux = this;
		const $textarea = $('textarea', $ux);
		const defaults = {
			oninput: this[0].oninput,
		};
		const settings = $.extend(true, defaults, options);

		const initiate = () => {
			$textarea.off('input').on('input', function (event) {
				checkValue();
				settings && settings.oninput && settings.oninput(event);
			});
			$ux.addClass(ui.state.initiated);
		};
		const checkValue = () => {
			$input.toggleClass('has-value', $input.val().length > 0);
		};
		checkValue();
		$ux.parents('pre').length < 1 && !$ux.hasClass(ui.state.initiated) && initiate();

		return this.each((i, o) => {});
	};
})(window[namespace]);

/**
 * document.ready
 */
$(function () {
	UX.header();
	UX.initiate();

	// const selectmenuOptions = {
	// 	delay: 0,
	// 	position: {
	// 		my: 'center bottom',
	// 		at: 'center bottom',
	// 		of: window,
	// 	},
	// 	show: { effect: 'slide', duration: 250, direction: 'down' },
	// 	hide: { effect: 'slide', duration: 250, direction: 'down' },
	// };
	// $('.selectmenu').each((i, o) => {
	// 	$(o).selectmenu(selectmenuOptions);
	// });
});
