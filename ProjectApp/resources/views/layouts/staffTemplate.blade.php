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
        <nav class="navbar navbar-expand-lg navbar-light bg-light shadow fixed-top">
            <a class="navbar-brand" href="#" onclick="openNav()">
                <img src="{{url('images/logo.png')}}" width="50" height="50"
                    class="ml-5 d-inline-block align-top border-left-0 border-right-0 border-bottom border-info p-0" alt="">
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                <ul class="navbar-nav">
                    <li class="nav-item active align-middle">
                        <a class="nav-link" href="#"><img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSElEB7aM36PB-C-AJW6Z308tsVc5LJTydI-Ab86qqAVtsyrRVl"
                                alt="" width="30" height="30"><span> {{ auth()->user()->firstname." ".auth()->user()->lastname}}</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">ออกจากระบบ</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#" id="lang"><span id="eng">ENG</span>/<span
                                class="m-1 p-1 text-light bg-dark rounded" id="th">TH</span></a>
                    </li>
                </ul>
            </div>
        </nav>

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
