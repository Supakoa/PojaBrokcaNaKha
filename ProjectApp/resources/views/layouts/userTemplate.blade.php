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
    @stack('css')
    <title>User Template</title>
</head>

<body>
    <div class="body" id="main">
        <nav class="navbar navbar-expand-lg navbar-light bg-light shadow fixed-top">
            <a class="navbar-brand " href="#" onclick="openNav()">
                <img src="{{url('images/logo.png')}}" width="70" height="70"
                    class="ml-5 d-inline-block align-top border-left-0 border-right-0 border-bottom border-info p-0" alt="">
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="justify-content-start collapse navbar-collapse ml-4" id="navbarNavDropdown">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a href="/user/index" class="nav-link txt-greenblue txt-hover">หน้าแรก</a>
                        </li>
                        <li class="nav-item"> 
                            <a href="/user/profile" class="nav-link txt-greenblue txt-hover">ข้อมูลส่วนตัว</a>
                        </li>
                    </ul>
                </div>
            <div class="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                
                    <ul class="navbar-nav">
                        <li class="nav-item active align-middle">
                            <a class="nav-link txt-greenblue" href="#"><img
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSElEB7aM36PB-C-AJW6Z308tsVc5LJTydI-Ab86qqAVtsyrRVl"
                                    alt="" width="30" height="30"><span> นายตะวัน เข็มทอง</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link txt-greenblue" href="#">ออกจากระบบ</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link txt-greenblue" href="#" id="lang"><span id="eng">ENG</span>/<span
                                    class="m-1 p-1 text-light bg-dark rounded" id="th">TH</span></a>
                        </li>
                    </ul>
            </div>
        </nav>

        <div class="container-fluid h-100 mt-5 p-5">
            @yield('main')
        </div>
        <footer class="footer">
            CE devoleper Team
        </footer>
    </div>

    <script src="{{ asset('node_modules/jquery/dist/jquery.min.js')}}"></script>
    <script src="{{ url('https://getbootstrap.com/docs/4.1/assets/js/vendor/popper.min.js')}}"></script>
    <script src="{{ asset('node_modules/bootstrap/dist/js/bootstrap.min.js')}}"></script>

    @stack('js')

    <script>
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

    </script>
</body>

</html>
