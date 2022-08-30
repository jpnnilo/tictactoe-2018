<?php

namespace App\Http\Controllers;

use App\Models\Player;
use Illuminate\Http\Request;

class PlayController extends Controller
{
    public function index()
    {
        $player = Player::orderBy('score','desc')->get();

        return view('index', compact('player'));
    }

   public function player()
   {

   }

   public function winner($name)
   {
      $winner = Player::where('playername', $name)->first();

      return response()->json($winner);
   }

   public function update($id)
   {
      $winner = Player::where('id', $id)->first();
      $winner->increment('score');
      $winner->save();
      
      return response()->json($winner);

   }

    public function add(Request $request)
   {
      $winner = new Player;
      $winner->playername = $request->playername;
      $winner->score = 1;
      $winner->save();
      return response()->json($winner);
   }
}
