<!DOCTYPE html>
<html lang="en">

<head>
<link rel="icon" href="{{url('/images/logo.png')}}" type="image/gif" sizes="36x36">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    @stack('css')
    <link rel="stylesheet" href="{{ asset('node_modules/bootstrap/dist/css/bootstrap.min.css')}}">
    <link rel="stylesheet" href="{{ asset('node_modules/CEstyle/dist/css/CEindex.css')}}">
    <link rel="stylesheet" href="{{ asset('node_modules/CEstyle/dist/css/CEadmin.css')}}">
    <!-- fontawesom -->
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
        integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous">
    <title>Admin Template</title>
</head>

<body>
    <div id="mySidenav" class="sidenav">
        <span window.location.href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</span>
        <a href="{{url('/admin/index')}}"><i class="fa fa-home" aria-hidden="true"></i> หน้าแรก</a>
        <a href="{{url('/admin/mail')}}"><i class="fas fa-envelope-open"></i> ข้อความ</a>
        <a href="{{url('/admin/papers')}}"><i class="fas fa-folder"></i> เอกสาร</a>
        <a href="{{url('/admin/news')}}"><i class="fas fa-newspaper"></i> หน้าข่าว</a>
        <a href="{{url('/admin/document/step')}}"><i class="fas fa-stream"></i> ขั้นตอนเอกสาร</a>
    </div>

    <div class="body" id="main">
        <nav class="navbar navbar-expand-lg navbar-light bg-light shadow">
            <a class="navbar-brand" href="#" onclick="openNav()">
                <img src="{{url('images/logo.png')}}" width="70" height="70" class="d-inline-block align-top" alt="">
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                <ul class="navbar-nav">
                    <li class="nav-item active align-middle">
                    <a class="nav-link" href="#"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSElEB7aM36PB-C-AJW6Z308tsVc5LJTydI-Ab86qqAVtsyrRVl" alt="" width="30" height="30" ><span> ผู้ดูแลระบบ</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">ออกจากระบบ</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#" id="lang"><span id="eng">ENG</span>/<span class="m-1 p-1 text-light bg-dark rounded" id="th">TH</span></a>
                    </li>
                </ul>
            </div>
        </nav>

        <div class="container h-100">
            @yield('main')
        </div>
        <footer class="footer">
            CE devoleper Team
        </footer>
    </div>
    @yield('modal')
    <script src="{{ asset('node_modules/jquery/dist/jquery.min.js')}}"></script>
    <script src="{{ url('https://getbootstrap.com/docs/4.1/assets/js/vendor/popper.min.js')}}"></script>
    <script src="{{ asset('node_modules/bootstrap/dist/js/bootstrap.min.js')}}"></script>
    @stack('js')

    <script>
        function openNav() {
            document.getElementById("mySidenav").style.width = "20%";
            document.getElementById("main").style.width = "80%";
            document.getElementById('main').style.float = "right";
        }

        function closeNav() {
            document.getElementById("mySidenav").style.width = "0";
            document.getElementById("main").style.width = "100%";
        }

        var coute =0;
            $('#lang').on('click', function (e) {
                if(coute == 0){
                    $('#eng').addClass('m-1 p-1 text-light bg-dark rounded');
                    $('#th').removeClass('m-1 p-1 text-light bg-dark rounded');
                    coute++;
                }else{
                    --coute;
                    $('#eng').removeClass('m-1 p-1 text-light bg-dark rounded');
                    $('#th').addClass('m-1 p-1 text-light bg-dark rounded');
                }
            });

    </script>
</body>

</html>
