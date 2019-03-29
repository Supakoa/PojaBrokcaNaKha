<?php
    require '../../server/server.php';
?>
<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">

    <!-- title -->
    <title id="tab_title"></title>
    <link rel="icon" type="image/ico" href="../image/icon/icon.png" />

    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- bootstrap 4.2.1 -->
    <link rel="stylesheet" href="../node_modules/bootstrap/dist/css/bootstrap.min.css">

    <!-- sweet alert2 -->
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@7.33.1/dist/sweetalert2.all.min.js"></script>

    <!-- w3.css -->
    <!-- <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"> -->

    <!-- mycss -->
    <link rel="stylesheet" href="style.css">

    <!-- fontawesome -->
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.1/css/all.css"
        integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous">

    <!-- animate.css -->
    <link rel="stylesheet" href="../node_modules/animate.css/animate.min.css">



</head>

<body class="">

    <nav id="mySidenav" class="sidenav"><!-- rigth nav  -->

        <ul>
            <li class="slidebrand navtap">
                <a href="#" class="" onclick="call_content('main.php');">
                    <i class="fa fa-home"></i> หน้าแรก
                </a>
            </li>
        </ul>

        <a href="#" class="navtap" onclick="call_content('inbox.php');">
            <i class="fa fa-bell"></i> ข้อความ <span class="badge text-right badge-danger"
                style="text-shadow: 0 0 0 black;">4</span>
        </a>

        <a href="#" class="navtap" onclick="call_content('document.php');">
            <i class="fa fa-folder-open"></i> เอกสาร
        </a>

        <a href="#" class="navtap" onclick="call_content('member.php');">
            <i class="fa fa-user-edit"></i> สมาชิก
        </a>

        <a href="#" class="navtap" onclick="call_content('news.php');">
            <i class="fa fa-bullhorn"></i> หน้าข่าว
        </a>

        <a href="#" class="navtap" onclick="call_content('sender.php');">
            <i class="fa fa-sort-amount-down"></i> ขั้นตอนเอกสาร
        </a>

        <a href="#" class="navtap" onclick="call_content('groups.php');"><i class="far fa-edit"></i>
            ตั้งค่ากลุ่มผู้มีสิทธิ์ลงนาม</a>

        <a href="#" class="navtap" onclick="call_content('subject.php');"><i class="fas fa-book"></i>
            ตั้งค่ารายชื่อวิชา</a>

        <a href="#" class="navtap" onclick="call_content('faculty.php');"><i class="fas fa-user-graduate"></i>
            ตั้งค่ารายชื่อคณะ/สาขา</a>

        <hr>
    </nav><!-- rigth nav -->

    <div id="main">
        <!-- start NavBar -->
        <nav class="navbar navbar-light navbar-expand-lg t" style="background-color:#84695E;color:whitesmoke">
            <!-- <span class="navbar-brand" style="font-size:30px;cursor:pointer" onclick="openNav()" >&#9776;</span> -->
            <!-- <a href="#" class="nav-item " id="nav_title"></a> -->

            <a href="#" class="navbar-brand" style="font-size:30px;cursor:pointer" onclick="openNav()">&#9776;</a>

            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                <ul class="navbar-nav">
                    <li class="nav-item active">
                        <a href="#" class="nav-link" style="color:whitesmoke;"><i class="far fa-user-circle"
                                style="color:whitesmoke;"></i>
                            ข้อมูลส่วนตัว</a>
                    </li>
                    <li class="nav-item ">
                        <a href="#" class="nav-link" style="color:whitesmoke;"><i class="fas fa-sign-out-alt"
                                style="color:whitesmoke;"></i>
                            ออกจากระบบ</a>
                    </li>
                </ul>
            </div>
        </nav>
        <!-- End NavBar -->


        <!-- start body -->
        <div class="" style="background-color:#ffffff" id="body">

            <!-- html here -->
            <div id="in_body" class="card-body" onclick="closeNav()"></div>

        </div>
        <!-- end body -->

        <!-- set to bottom -->
        <footer id="footer">
            <div class=" text-center" style="border:solid;border-color:#84695E;background-color:#84695E">

                <p style="margin-top:1%;color:whitesmoke;">©Powered by CEFStyle</p>

            </div>
        </footer>
    </div>


</body>
<script src="../node_modules/jquery/dist/jquery.min.js"></script>
<script type="text/javascript" charset="utf8" src="https://cdn.datatables.net/1.10.19/js/jquery.dataTables.js"></script>
<script type="text/javascript" src="https://cdn.datatables.net/v/bs4/dt-1.10.18/datatables.min.js"></script>
<script>

</script>
<script>
    $(document).ready(function () {
        $("#btn_singha").click(function () {

            $('#btn_singha').text("กดแล้ว");


        });
    });
    $('.navtap').click(function (e) {
        e.preventDefault();
        $('.navtap').css("background-color", "#252526");
        $(this).css("background-color", "#0672BA");
    });
    if (document.getElementById('in_body').innerHTML === '') {

        call_content('inbox.php');

    }

    function call_content(content) {



        $("#in_body").load(content);



    }
    function openNav() {
        if ($('#mySidenav').css("width") == "0px") {
            document.getElementById('mySidenav').style.width = "300px";
            document.getElementById('main').style.marginLeft = "300px";
        } else {
            document.getElementById('mySidenav').style.width = "0";
            document.getElementById('main').style.marginLeft = "0";
        }
    }

    function closeNav() {
        document.getElementById('mySidenav').style.width = "0";
        document.getElementById('main').style.marginLeft = "0";
    }
</script>

<!-- bootstrap 4.2.1 -->
<script src="../node_modules/popper.js/dist/popper.min.js"></script>
<script src="../node_modules/bootstrap/dist/js/bootstrap.min.js"></script>

<!-- <script src="jquery-3.3.1.min.js"></script> -->
<!-- 
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script> -->

</html>