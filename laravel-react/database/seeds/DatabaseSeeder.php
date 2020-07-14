<?php

use Illuminate\Database\Seeder;
use App\Form as AppForm;
use Illuminate\Support\Facades\Storage;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call([
            role::class,
            admin::class,
            faculty::class,
            major::class,
            status::class,
            subject::class
        ]);

        $json = Storage::disk("public")->get("form_template.json");
        $data = json_decode($json, true);
        foreach ($data as $key => $value){
            $text  = "[";
            foreach ($value['inputs'] as  $input) {
                $text .= "{";
                foreach($input as $key2 => $value3) {
                    if (!is_array($value3)){
                        $text .= " $key2 :  \"$value3\",";
                    }else{
                        $text .= " $key2 : [\"".implode("\",\"",$value3)."\"],";
                    }
                }
                $text = substr($text,0,-1);
                $text .= "},";
            }
            $text = substr($text,0,-1);
            $data[$key]['inputs'] =$text;
        }
        AppForm::insert($data);


        factory(App\User::class, 100)->create()->each(function ($user) {
//            if ($user->role_id = 3){
                $documents = factory(App\Document::class,3)->make();
                $user->documents()->saveMany($documents);
//            }
        });
    }
}
