<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">

    <link rel="stylesheet" href="{{ asset('node_modules/bootstrap/dist/css/bootstrap.min.css')}}">
    <link rel="stylesheet" href="{{ asset('node_modules/CEstyle/dist/css/CEindex.css')}}">
 <!-- fontawesom -->
 <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
 integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous">
    @stack('css')
    <title>User Template</title>
</head>

<body>
    <div class="body">
        @yield('login')
        {{-- <nav>

        </nav>
        <div class="main">
            @yield('content')
        </div>
        <footer>

        </footer> --}}
    </div>

    @stack('js')
    <script src="{{ asset('node_modules/jquery/dist/jquery.min.js')}}"></script>
    <script src="{{ url('https://getbootstrap.com/docs/4.1/assets/js/vendor/popper.min.js')}}"></script>
    <script src="{{ asset('node_modules/bootstrap/dist/js/bootstrap.min.js')}}"></script>
</body>

</html>
