$(function(){

	$("#testForm").submit(function (e) {
		e.preventDefault();

		var firstName = $("#firstName").val();
		if (firstName == null || firstName.length <= 0) {
			showErrors("First Name");
			return;	
		}

		var lastName = $("#lastName").val();
		if (lastName == null || lastName.length <= 0) {
			$('#errorMessageBox').show();
			$('#missingVariable').text("Last Name");
			return;
		}


	});

	function showErrors(errorMessage) {
		$('#errorMessageBox').show();
		$('#missingVariable').text(errorMessage);
	}

});