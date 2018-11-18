<?php

Route::get('/', 'AttendancesController@index')->name('home');
Route::get('/attend', 'AttendancesController@create')->name('attend');
