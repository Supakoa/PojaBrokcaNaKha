<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <link rel="icon" href="{{url('/images/logo.png')}}" type="image/gif" sizes="36x36">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">

    <link rel="stylesheet" href="{{ asset('node_modules/bootstrap/dist/css/bootstrap.min.css')}}">
    <link rel="stylesheet" href="{{ asset('node_modules/CEstyle/dist/css/CEindex.css')}}">
    <!-- fontawesom -->
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
        integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous">
    <link rel="stylesheet" href="{{ asset('node_modules/CEstyle/dist/css/CEadmin.css')}}">
    <link rel="stylesheet" type="text/css" href="//cdn.datatables.net/1.10.20/css/jquery.dataTables.min.css">
    @stack('css')
    <title>User Template</title>

</head>

<body>
    @yield('login')

    {{-- @guest
        @yield('login')
    @endguest
    @auth --}}

    {{-- @endauth --}}


    <script src="{{ asset('node_modules/jquery/dist/jquery.min.js')}}"></script>
    <script src="{{ url('https://getbootstrap.com/docs/4.1/assets/js/vendor/popper.min.js')}}"></script>
    <script src="{{ asset('node_modules/bootstrap/dist/js/bootstrap.min.js')}}"></script>

    @stack('js')

    {{-- <script>
    $(document).ready(function () {
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
    var coute = 0;
    $('#lang').on('click', function (e) {
            if (coute == 0) {
                $('#eng').addClass('m-1 p-1 text-light bg-dark rounded');
                $('#th').removeClass('m-1 p-1 text-light bg-dark rounded');
                coute++;
            } else {
                --coute;
                $('#eng').removeClass('m-1 p-1 text-light bg-dark rounded');
                $('#th').addClass('m-1 p-1 text-light bg-dark rounded');
            }
    });
    </script> --}}
</body>

</html>
