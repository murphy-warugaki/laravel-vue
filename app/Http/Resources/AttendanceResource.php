<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class AttendanceResource extends JsonResource
{
  /**
   * Transform the resource into an array.
   *
   * @param  \Illuminate\Http\Request  $request
   * @return array
   */
  public function toArray($request)
  {
	return [
	  'id'     => $this->id,
	  'name'   => $this->name,
	  'avatar' => $this->avatar,  // *1
	  'body'   => $this->body,
	  'date'   => $this->created_at->diffForHumans()  // *2
	];
  }
}
