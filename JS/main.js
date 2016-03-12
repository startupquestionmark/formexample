$(function(){

	$("#testForm").submit(function ( e ) {

		e.preventDefault();

		var firstName = $("#firstname").val();
		if (firstName == null || firstName.length <= 0) {
			return;
		} 
	});

});