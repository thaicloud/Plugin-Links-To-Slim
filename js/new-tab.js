(function($) {
	$(document).ready(function () {

		// Given href values, add target=_blank to all matching links
		$.each(targets, function( index, val ) {
			$('body a[href="' + val + '"]').attr('target', '_blank');
		});

	});
})( jQuery );