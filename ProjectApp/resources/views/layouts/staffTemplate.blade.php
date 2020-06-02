<!DOCTYPE html>
<html lang="en">

<head>
    <link rel="icon" href="{{url('/images/logo.png')}}" type="image/gif" sizes="36x36">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    @include('Includes.css')
    @stack('css')
    <title>Staff Template</title>
</head>

<body>
    <div class="body" id="main">
        @include('layouts.inc.navStaff')
        <div class="container h-100 mt-4 p-5">
            @yield('main')
        </div>
        <footer class="footer">
            CE devoleper Team
        </footer>
    </div>

    @include('Includes.js')

    @stack('js')

</body>

</html>
