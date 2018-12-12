$(document).ready(function(){

	$("#myform").submit(function(){

		var search = $("#books").val();

		if(search == ''){
			alert("please enter something here first")
		}

		else{
			var url = '';
			var img = '';
			var title = '';
			var author = '';

			$.get("https://www.googleapis.com/books/v1/volumes?q=" + search + "&key=AIzaSyCr5w0U1LoEM_rs6qDUc-coI-mNH40I6KU", function(response))

				console.log(response);
		}
	});

	return false;


});
