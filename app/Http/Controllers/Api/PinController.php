<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\PinRequest;
use App\Http\Resources\PinResource;
use App\Models\Pin;
use Illuminate\Http\Request;

class PinController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return PinResource::collection(Pin::all());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $Pin = Pin::create([
            'name' => $this->createPin(4)
        ]);

        return new PinResource($Pin);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Pin  $Pin
     * @return \Illuminate\Http\Response
     */
    public function show(Pin $Pin)
    {
        return new PinResource($Pin);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Pin  $Pin
     * @return \Illuminate\Http\Response
     */
    public function update(PinRequest $request, Pin $Pin)
    {
        $Pin->update($request->validated());

        return new PinResource($Pin);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Pin  $Pin
     * @return \Illuminate\Http\Response
     */
    public function destroy(Pin $Pin)
    {
        $Pin->delete();

        return response()->noContent();
    }


    public function createPin($length){ 
        global $digits; 
        $numbers = range(0,9);
        shuffle($numbers);
        for($i = 0;$i < $length;$i++)
          $digits .= $numbers[$i];
        return $digits;
    }
}