
<!DOCTYPE html>

<head>
  @extends('layouts.header')
</head>
  
<body>
  @section('index-content')
<center>
<meta id="csrf-token" content="{!! csrf_token() !!}">
<div class="div1">
  <p class="a">  <b id="x"> X</b> Player 1: <strong class="player1" data-id="player1"></strong></p>
  <p class="b"> <b id="o"> O</b> Player 2 : <strong class="player2" data-id="player2"></strong></p>
  
  <p class="c" ><strong id="player" data-id=""> JOHN </strong>'s turn </p>
  
  <input class="input1" type="text" placeholder="Enter Cell Number">
  <button class="button1" type="button"> Enter </button>
 
  <table class = "table1">
      <tr>
        <td id="1">1</td>
        <td id="2">2</td>
        <td id="3">3</td>
      </tr>

      <tr>
        <td id="4">4</td>
        <td id="5">5</td>
        <td id="6">6</td>
      </tr>

      <tr>
        <td id="7">7</td>
        <td id="8">8</td>  
        <td id="9">9</td>
      </tr>
  </table>
</div>

<div class="div1">
 
  
  <table class="table2" >
    
      <tr>
        <th>Player Name</th>
        <th>Score</th>
      </tr>
    @foreach($player as $play)
      <tr id="tr{{$play->id}}">
        <td>{{$play->playername}}</td>
        <td>{{$play->score}}</td>
      </tr>
     @endforeach
  </table>

</div>
@stop
</body>



</html>