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
    @include('layouts.inc.manuAdmin')
    <div class="body main-admin" id="main">
        @include('layouts.inc.navAdmin')
        <div class="container-fluid h-100">
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
