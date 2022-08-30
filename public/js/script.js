$(document).ready(function(){

	$('#newplayer').click(function(){
		var player1 = prompt("Player 1  X", "Please Enter Name");
		$('.player1').text(player1);


		var player2 = prompt("Player 2  O", "Please Enter Name");
		$('.player2').text(player2);

		$('.c').show()
		$('#player').text(player1);
		$('#player').css("color","blue");
	});
 
	var playerid = $('.player1').data('id'); 
		$('#player').data('id',playerid);

	var cell = {
			cell1:"", cell2:"", cell3:"",
			cell4:"", cell5:"", cell6:"",
			cell7:"", cell8:"", cell9:""
		};

	var player = $('#player').data('id'); 
	

	$(".button1").click(function(){
		
		var input  = $(".input1").val();

		if(player == "player1"){
			
			cell['cell' + input] = "X"; 
			$('#'+input).html("<img src='/images/X.jpg'>");


			if((cell.cell1 == "X" && cell.cell2 == "X" && cell.cell3 == "X") || (cell.cell4 == "X" && cell.cell5 == "X" && cell.cell6 == "X") || (cell.cell7 == "X" && cell.cell8 == "X" && cell.cell9 == "X") || (cell.cell1 == "X" && cell.cell5 == "X" && cell.cell9 == "X") || (cell.cell3 == "X" && cell.cell5 == "X" && cell.cell7 == "X") || (cell.cell1 == "X" && cell.cell4 == "X" && cell.cell7 == "X") || (cell.cell2 == "X" && cell.cell5 == "X" && cell.cell8 == "X") || (cell.cell3 == "X" && cell.cell6 == "X" && cell.cell9 == "X"))
			{
				
				pn = $("#player").text();

				$.ajax({
					method:'Get',
					url:'/winner/' + $("#player").text(),
					dataType:'JSON',
					success:function(data){
						alert("PLAYER 1 WINS!");
						playername = data.playername;
						
						if(playername == pn)
						{
							
							$.ajax({
								method:'POST',
								url:'/update/' + data.id,
								data:{
									"_token": $('#csrf-token').attr('content'),
									'playername':playername
								},
								dataType:'json',
								success:function(data){
									//$('#tr' + data.id).replaceWith("<tr id='tr" + data.id + "'> <td>" + data.playername + "</td> <td>" + data.score + "</td></tr>");
									
									$(".table2").load(window.location + " .table2")
									
									if (window.confirm("Play Again?")) {
									   	$("#1").text("1"); cell.cell1 = "";
									   	$("#2").text("2"); cell.cell2 = "";
									    $("#3").text("3"); cell.cell3 = "";
									    $("#4").text("4"); cell.cell4 = "";
									    $("#5").text("5"); cell.cell5 = "";
									    $("#6").text("6"); cell.cell6 = "";
									   	$("#7").text("7"); cell.cell7 = "";
									    $("#8").text("8"); cell.cell8 = "";
									    $("#9").text("9"); cell.cell9 = "";
									    player = $('.player1').data('id');
									    var name = $('.player1').text();
									    $('#player').text(name);
									    $('#player').css("color","blue");
									} 
									else 
									{	
									    alert("Thanks for Playing!");
									    $("#playagain").show();
									}
								},
							});
						}
						else
						{
							
							$.ajax({
								method:'POST',
								url:'/add',
								data:{
									"_token": $('#csrf-token').attr('content'),
									'playername': $(".player1").text()
								},
								dataType:'json',
								success:function(data){
									/*$('.table2').append("<tr id='tr" + data.id + "'> <td>" + data.playername + "</td> <td>" + data.score + "</td></tr>");*/
									$(".table2").load(window.location + " .table2")
									if (window.confirm("Play Again?")) 
									{
									   	$("#1").text("1"); cell.cell1 = "";
									   	$("#2").text("2"); cell.cell2 = "";
									    $("#3").text("3"); cell.cell3 = "";
									    $("#4").text("4"); cell.cell4 = "";
									    $("#5").text("5"); cell.cell5 = "";
									    $("#6").text("6"); cell.cell6 = "";
									   	$("#7").text("7"); cell.cell7 = "";
									    $("#8").text("8"); cell.cell8 = "";
									    $("#9").text("9"); cell.cell9 = "";
									    player = $('.player1').data('id');
									    var name = $('.player1').text();
									    $('#player').text(name);
									    $('#player').css("color","blue");
									} 
									else 
									{	
									    alert("Thanks for Playing!");
									    $("#playagain").show();
									}
								},	
							});
						}
				
					},

				});


			}

			/*('.table1').replaceWith(" <table class = 'table1'><tr><td id='1'>1</td><td id='2'>2</td><td id='3'>3</td></tr><tr><td id='4'>4</td><td id='5'>5</td><td id='6'>6</td></tr><tr><td id='7'>7</td><td id='8'>8</td><td id='9'>9</td></tr></table>");*/
			else if((cell.cell1 == "X" || cell.cell1 == "O") && (cell.cell2 == "X" || cell.cell2 == "O") && (cell.cell3 == "X" || cell.cell3 == "O") && (cell.cell4 == "X" || cell.cell4 == "O") && (cell.cell5 == "X" || cell.cell5 == "O") && (cell.cell6 == "X" || cell.cell6 == "O") && (cell.cell7 == "X" || cell.cell7 == "O") && (cell.cell8 == "X" || cell.cell8 == "O") && (cell.cell9 == "X" || cell.cell9 == "O"))
			{
				 
				alert("DRAW!");

				
				if (window.confirm("Play Again?")) 
				{
				   	$("#1").text("1"); cell.cell1 = "";
				   	$("#2").text("2"); cell.cell2 = "";
				    $("#3").text("3"); cell.cell3 = "";
				    $("#4").text("4"); cell.cell4 = "";
				    $("#5").text("5"); cell.cell5 = "";
				    $("#6").text("6"); cell.cell6 = "";
				   	$("#7").text("7"); cell.cell7 = "";
				    $("#8").text("8"); cell.cell8 = "";
				    $("#9").text("9"); cell.cell9 = "";
				   	player = $('.player1').data('id');
				    var name = $('.player1').text();
				    $('#player').text(name);
				    $('#player').css("color","blue");
				} 
				else 
				{	
				    alert("Thanks for Playing!");
				}		

			}
			
		}
		
		if(player == "player2"){
		
			cell['cell' + input] = "O"; 
			$('#'+input).html("<img src='/images/O.jpg'>");

			if((cell.cell1 == "O" && cell.cell2 == "O" && cell.cell3 == "O") || (cell.cell4 == "O" && cell.cell5 == "O" && cell.cell6 == "O") || (cell.cell7 == "O" && cell.cell8 == "O" && cell.cell9 == "O") || (cell.cell1 == "O" && cell.cell5 == "O" && cell.cell9 == "O") || (cell.cell3 == "O" && cell.cell5 == "O" && cell.cell7 == "O") || (cell.cell1 == "O" && cell.cell4 == "O" && cell.cell7 == "O") || (cell.cell2 == "O" && cell.cell5 == "O" && cell.cell8 == "O") || (cell.cell3 == "O" && cell.cell6 == "O" && cell.cell9 == "O"))
			{
				
				pn = $("#player").text();

				$.ajax({
					method:'Get',
					url:'/winner/' + $("#player").text(),
					dataType:'JSON',
					success:function(data){
						alert("PLAYER 2 WINS!");
						playername = data.playername;
						
						
						if(playername == pn)
						{
							
							$.ajax({
								method:'POST',
								url:'/update/' + data.id,
								data:{
									"_token": $('#csrf-token').attr('content'),
								},
								dataType:'json',
								success:function(data){
									//$('#tr' + data.id).replaceWith("<tr id='tr" + data.id + "'> <td>" + data.playername + "</td> <td>" + data.score + "</td></tr>");
									$(".table2").load(window.location + " .table2")
									if (window.confirm("Play Again?")) 
									{
									   	$("#1").text("1"); cell.cell1 = "";
									   	$("#2").text("2"); cell.cell2 = "";
									    $("#3").text("3"); cell.cell3 = "";
									    $("#4").text("4"); cell.cell4 = "";
									    $("#5").text("5"); cell.cell5 = "";
									    $("#6").text("6"); cell.cell6 = "";
									   	$("#7").text("7"); cell.cell7 = "";
									    $("#8").text("8"); cell.cell8 = "";
									    $("#9").text("9"); cell.cell9 = "";
									    player = $('.player1').data('id');
									    var name = $('.player1').text();
									    $('#player').text(name);
									    $('#player').css("color","blue");
									} 
									else 
									{	
									    alert("Thanks for Playing!");
									}

									/*$(".table2").load(window.location + " .table2")*/
								},
							});
						}
						else
						{
							
							$.ajax({
								method:'POST',
								url:'/add',
								data:{
									"_token": $('#csrf-token').attr('content'),
									'playername': $(".player2").text()
								},
								dataType:'json',
								success:function(data){
									
									/*$('.table2').append("<tr id='tr" + data.id + "'> <td>" + data.playername + "</td> <td>" + data.score + "</td></tr>");*/
									$(".table2").load(window.location + " .table2")
									if (window.confirm("Play Again?")) {
									   	$("#1").text("1"); cell.cell1 = "";
									   	$("#2").text("2"); cell.cell2 = "";
									    $("#3").text("3"); cell.cell3 = "";
									    $("#4").text("4"); cell.cell4 = "";
									    $("#5").text("5"); cell.cell5 = "";
									    $("#6").text("6"); cell.cell6 = "";
									   	$("#7").text("7"); cell.cell7 = "";
									    $("#8").text("8"); cell.cell8 = "";
									    $("#9").text("9"); cell.cell9 = "";
									    player = $('.player1').data('id');
									    var name = $('.player1').text();
									    $('#player').text(name);
									    $('#player').css("color","blue");
									} 
									else 
									{	
									    alert("Thanks for Playing!");
									    $("#playagain").show();
									}
								},
							});
						}
				
					},

				});


			}
			else if((cell.cell1 == "X" || cell.cell1 == "O") && (cell.cell2 == "X" || cell.cell2 == "O") && (cell.cell3 == "X" || cell.cell3 == "O") && (cell.cell4 == "X" || cell.cell4 == "O") && (cell.cell5 == "X" || cell.cell5 == "O") && (cell.cell6 == "X" || cell.cell6 == "O") && (cell.cell7 == "X" || cell.cell7 == "O") && (cell.cell8 == "X" || cell.cell8 == "O") && (cell.cell9 == "X" || cell.cell9 == "O"))
			{
				alert("DRAW!");
				if (window.confirm("Play Again?")) {
				   /* ('.table1').replaceWith(" <table class = 'table1'><tr><td id='1'>1</td><td id='2'>2</td><td id='3'>3</td></tr><tr><td id='4'>4</td><td id='5'>5</td><td id='6'>6</td></tr><tr><td id='7'>7</td><td id='8'>8</td><td id='9'>9</td></tr></table>");*/
				    $("#1").text("1"); cell.cell1 = "";
				   	$("#2").text("2"); cell.cell2 = "";
				    $("#3").text("3"); cell.cell3 = "";
				    $("#4").text("4"); cell.cell4 = "";
				    $("#5").text("5"); cell.cell5 = "";
				    $("#6").text("6"); cell.cell6 = "";
				   	$("#7").text("7"); cell.cell7 = "";
				    $("#8").text("8"); cell.cell8 = "";
				    $("#9").text("9"); cell.cell9 = "";
				    player = $('.player1').data('id');
				    var name = $('.player1').text();
				    $('#player').text(name);
				    $('#player').css("color","blue");

				}
				else 
				{
				    alert("Thanks for Playing!");
				    $("#playagain").show();
				}

			}

		

		}

		if(player == "player1")
		{
			player = $('.player2').data('id');
			name = $('.player2').text();
			$('#player').css("color","red");
			$("#player").text(name);
			
		}
		else
		{
			player = $('.player1').data('id');
			name = $('.player1').text();
			$('#player').css("color","blue");
			$("#player").text(name);
		}




	});

	$('#playagain').click(function(){
		$("#1").text("1"); cell.cell1 = "";
	   	$("#2").text("2"); cell.cell2 = "";
	    $("#3").text("3"); cell.cell3 = "";
	    $("#4").text("4"); cell.cell4 = "";
	    $("#5").text("5"); cell.cell5 = "";
	    $("#6").text("6"); cell.cell6 = "";
	   	$("#7").text("7"); cell.cell7 = "";
	    $("#8").text("8"); cell.cell8 = "";
	    $("#9").text("9"); cell.cell9 = "";
	    player = $('.player1').data('id');
	    var name = $('.player1').text();
	    $('#player').text(name);
	    $('#player').css("color","blue");

	});

});







