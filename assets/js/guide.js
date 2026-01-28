/**
 * IIFE(즉시실행)
 */
(function (ui) {
	'use strict';

	// set <meta name="viewport">
	const addLibrary = () => {
		const script = document.createElement('script');
		const type = 'text/javascript';
		const src = '/assets/lib/prism/prism.js';
		script.type = type;
		script.src = src;
		$('head').prepend(script);
	};
	addLibrary();

	window.Prism = window.Prism || {};
	window.Prism.manual = true;

	ui.guide = function () {
		const $code = $('code');
		const $tool = $('<div class="code-tool"></div>');
		const $textarea = $('<textarea class="code-text"></textarea>');
		const $button = $('<button class="code-copy"><span class="icon mask"></span><span class="text">복사</span></button');
		$textarea.appendTo($tool);
		$button.appendTo($tool);
		if ($('pre:not(.code-initiated)').length) {
			$('pre').each((i, o) => {
				$tool.insertBefore($(o));
				$(o).addClass('code-initiated');
			});
		}
		if ($code.length) {
			setTimeout(() => {
				$code.each((i, o) => {
					let html = $(o).html();
					html = html.replace(/^\s*[\r\n]+/, '');
					html = html.trimEnd();
					$textarea.val(html);
					html = html.replace(/</g, '&lt;').replace(/>/g, '&gt;');
					$(o).html(html);
				});
			}, 10);
		}
		setTimeout(() => {
			const $code = $('code');
			$code.each((i, o) => {
				Prism.highlightElement(o);
			});
		}, 10);
	};
})(window[namespace]);

/**
 * document.ready
 */
$(function () {
	UX.guide();

	const unsecuredCopyToClipboard = (event) => {
		const $viewer = $(event.target).closest('.code-viewer');
		const $textarea = $('.code-text', $viewer);
		$textarea.focus();
		$textarea.select();
		try {
			document.execCommand('copy');
		} catch (err) {
			console.error('Unable to copy to clipboard', err);
		}
	};

	$('.code-viewer').each((i, o) => {
		$('.code-copy', $(o)).on('click', function (event) {
			unsecuredCopyToClipboard(event);
			$.toast({
				// type: 'success',
				// title: 'Success Message',
				message: '코드가 복사되었습니다.',
				duration: 2000,
			});
		});
	});
});
