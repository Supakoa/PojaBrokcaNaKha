<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="icon" href="{{ url('/images/logo.png') }}" type="image/gif" sizes="16x16">
        <title>Petition</title>

        <!-- Fonts -->
       <!-- <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet"> -->
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />

        <!-- Icon -->
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
        <!-- Font awesome -->
        <script src="https://kit.fontawesome.com/2b57be7c42.js" crossorigin="anonymous"></script>
    </head>
    <body>
        <div id="root"></div>


    <script src="{{ asset('js/app.js')}}"></script>
    </body>
</html>
