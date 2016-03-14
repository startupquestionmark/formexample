$(function(){

	$("#testForm").submit(function (e) {

		var $this = $(this);

		// General syntax for HTML objects --> var $input = $(input);
		// General syntax for normal variables --> var number = 3;

		// Array containing input HTML elements
		var $formInputs = $('.form-container form input');

		// Variable that tracks errors for each submission
		var formHasError = false;
		
		// Loop through the inputs array and check if there are valid variables
		for(var i = 0; i < $formInputs.length; i++) {

			// Normally I would use a $formInputs[i] here, but for some reason it doesn't work.
			// According to the docs, you have to use eq(i) to access the jQuery object
			var content = $formInputs.eq(i).val();

			if(content == null || content.length <= 0) {
				$formInputs.eq(i).addClass('hasError');
				formHasError = true;
			} else {
				$formInputs.eq(i).removeClass('hasError');
				$formInputs.eq(i).addClass('correctInput');
			}
		}

		console.log(formHasError);
		if(formHasError) {
			showErrors();
			return false;
		} else {
			hideErrors();
			return true;
		}

	});

	function showErrors() {
		$('#errorMessageBox').fadeIn();
	}

	function hideErrors() {
		$('#errorMessageBox').fadeOut();
	}
});