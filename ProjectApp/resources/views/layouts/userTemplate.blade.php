<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <link rel="icon" href="{{url('/images/logo.png')}}" type="image/gif" sizes="36x36">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    @include('Includes.css')
    @stack('css')
    <title>User Template</title>
    <meta name="csrf-token" content="{{ csrf_token() }}" />

</head>

<body>
    <div class="body" id="main">
        @include('layouts.inc.navUser')
        <div class="container-fluid h-100 mt-4 p-5" id="main-content">
            @yield('main')
        </div>
        <footer class="footer">
            CE devoleper Team
        </footer>
    </div>
    @yield('modal')


    @include('Includes.js')
    @stack('js')

    <script>
    $(document).ready(function () {
        if (screen.width < 770) {
            $('#statusBar').addClass('mobile');
            $('#hrLine').addClass('mobile');
            $('.text-time').css('fontSize', '9px');
            $('.text-time').addClass('mb-0');
            $('.text-time').addClass('mt-2');
        }
        $('#showPapers').click(function (e) {
            $('html, body').animate({scrollTop:$(document).height()}, 'slow');
        });
    });

    $('#sended').hover(function () {
            $('#sended').removeClass('shadow');
        }, function () {
            $('#sended').addClass('shadow');
            // out
        }
    );

    </script>
</body>

</html>
