<!DOCTYPE html>
<html lang="en">

<head>
<link rel="icon" href="{{url('/images/logo.png')}}" type="image/gif" sizes="36x36">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    @stack('css')
    @include('Includes.css')
    <title>Admin Template</title>
</head>

<body>
    <div id="mySidenav" class="sidenav">
        <div class="w-100 text-center">
            <img src="{{url('images/logo.png')}}" width="50" height="50" class="m-auto d-inline-block border-left-0 border-right-0 border-bottom border-info p-0" alt="">
        </div>
        {{-- <span window.location.href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</span> --}}
        <a href="{{url('/admin/index')}}"><i class="fa fa-home" aria-hidden="true"></i> หน้าแรก</a>
        <a href="{{url('/admin/mail')}}"><i class="fas fa-envelope-open"></i> ข้อความ</a>
        <a href="{{url('/admin/document')}}"><i class="fas fa-folder"></i> เอกสาร</a>
        <a href="{{url('/admin/users')}}"><i class="fa fa-users" aria-hidden="true"></i> สมาชิก</a>
        <a href="{{url('/admin/news')}}"><i class="fas fa-newspaper"></i> หน้าข่าว</a>
        <a href="{{url('/admin/steps')}}"><i class="fas fa-stream"></i> ขั้นตอนเอกสาร</a>
    </div>

    <div class="body main-admin" id="main">
        <nav class="navbar navbar-expand-lg navbar-light bg-light shadow">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                <ul class="navbar-nav">
                    <li class="nav-item active align-middle">
                    <a class="nav-link" href="#"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSElEB7aM36PB-C-AJW6Z308tsVc5LJTydI-Ab86qqAVtsyrRVl" alt="" width="30" height="30" ><span> {{ auth()->user()->firstname." ".auth()->user()->lastname}}</span></a>
                    </li>
                    <li class="nav-item">
                    <form action="{{url('/logout')}}" id="logout" method="post">
                        @csrf
                        <a class="nav-link" href="#" onclick="$('#logout').submit()" >ออกจากระบบ</a>
                    </form>

                    </li>
                    <li class="nav-item">
                        <a class="nav-link txt-greenblue" href="#" id="lang"><span id="eng">ENG</span>/<span
                                class="m-1 p-1 text-light bg-dark rounded" id="th">TH</span></a>
                    </li>
                </ul>
            </div>
        </nav>

        <div class="container-fluid h-100">
            {{-- @yield('main') --}}
            <div class="container-fluid p-2 h-100" id="mainIndex">
                @yield('main-content')
            </div>
        </div>
        <footer class="footer">
            CE devoleper Team
        </footer>
    </div>
    @yield('modal')
    @include('Includes.js')

    @stack('js')

    <script>

        // function openNav() {
        //     document.getElementById("mySidenav").style.width = "15%";
        //     document.getElementById("main").style.width = "85%";
        //     document.getElementById('main').style.float = "right";
        // }

        // function closeNav() {
        //     document.getElementById("mySidenav").style.width = "0";
        //     document.getElementById("main").style.width = "100%";
        // }

        // var coute =0;
        //     $('#lang').on('click', function (e) {
        //         if(coute == 0){
        //             $('#eng').addClass('m-1 p-1 text-light bg-dark rounded');
        //             $('#th').removeClass('m-1 p-1 text-light bg-dark rounded');
        //             coute++;
        //         }else{
        //             --coute;
        //             $('#eng').removeClass('m-1 p-1 text-light bg-dark rounded');
        //             $('#th').addClass('m-1 p-1 text-light bg-dark rounded');
        //         }
        //     });

    </script>
</body>

</html>
