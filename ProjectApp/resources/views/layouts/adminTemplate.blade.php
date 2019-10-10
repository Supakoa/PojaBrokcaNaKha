<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    @stack('css')
    <link rel="stylesheet" href="{{ asset('node_modules/bootstrap/dist/css/bootstrap.min.css')}}">
    <link rel="stylesheet" href="{{ asset('node_modules/CEstyle/dist/css/CEindex.css')}}">
    <title>Admin Template</title>
</head>

<body>
    <div class="navLeft">
        <ul class="nav flex-column">
            <li class="nav-item">
                <a class="nav-link active" href="#">Active</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Link</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Link</a>
            </li>
            <li class="nav-item">
                <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
            </li>
        </ul>
    </div>
    <div class="body">
        <nav class="navbar navbar-expand-lg navbar-light bg-light ">
            <a class="navbar-brand" href="#">
                <img src="{{url('images/logo.png')}}" width="70" height="70" class="d-inline-block align-top" alt="">
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                <ul class="navbar-nav">
                    <li class="nav-item active">
                        <a class="nav-link" href="#"><img src="" alt=""> <span>ผู้ดูแลระบบ</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">ออกจากระบบ</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">ENG/TH</a>
                    </li>
                    <li class="nav-item dropdown">

                    </li>
                </ul>
            </div>
        </nav>

        <div class="main">
            @yield('main')
        </div>
        <footer>
            CE devoleper Team
        </footer>
    </div>
    <script src="{{ asset('node_modules/jquery/dist/jquery.min.js')}}"></script>
    <script src="{{ url('https://getbootstrap.com/docs/4.1/assets/js/vendor/popper.min.js')}}"></script>
    <script src="{{ asset('node_modules/bootstrap/dist/js/bootstrap.min.js')}}"></script>
    @stack('js')
</body>

</html>
