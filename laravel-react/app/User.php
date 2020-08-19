<?php

namespace App;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Facades\App;
use Laravel\Passport\HasApiTokens;

class User extends Authenticatable
{
    //TODO: passport-js add HasApiTokens
    use HasApiTokens, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'student_id','title','first_name','last_name', 'email', 'password','role_id','telephone','major_id'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function documents()
    {
    return   $this->hasMany('App\Document');
    }

     public function approve_documents(){
         return $this->belongsToMany(Document::class,"user_approve");
     }

    public function major()
    {
     return  $this->belongsTo(Major::class);
    }

    public function groups(){
        return $this->belongsToMany(Group::class,"user_group")
            ->withPivot("subject_id")->withTimestamps();
    }

}
