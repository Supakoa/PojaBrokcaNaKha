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
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS"
        crossorigin="anonymous">
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.min.js" integrity="sha384-B0UglyR+jN6CkvvICOB2joaf5I4l3gm9GU6Hc1og6Ls7i6U/mkkaduKaBhlAXv9k"
        crossorigin="anonymous"></script>

    <!-- w3.css -->
    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">

    <!-- mycss -->
    <link rel="stylesheet" href="style.css">

    <!-- fontawesome -->
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.1/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr"
        crossorigin="anonymous">

</head>

<body class="" style="background-color:#E8F5E9;">

    <!-- start sidebar -->
    <div class="w3-sidebar w3-bar-block " style="width:15%;background-color:#56cb8d;color:black;">
        <a class="w3-bar-item w3-button" onclick="call_content('main.php','Page : Home','BackDoor : Main');">
            <h1 class="w3-center" style="color: rgb(95, 95, 95);"><i class="fas fa-home"></i> หน้าแรก</h1>
        </a>
        <div class="w3-container" style="margin-left:1%;">
            <hr>
            <a class="w3-bar-item w3-button" onclick="call_content('document.php','หน้า : เอกสาร','BackDoor : เอกสาร');"><i class="far fa-folder-open"></i>
                เอกสาร</a>
            <a class="w3-bar-item w3-button" onclick="call_content('member.php','หน้า : สมาชิก','BackDoor : สมาชิก');"><i class="fas fa-user-edit"></i>
                สมาชิก</a>
            <a class="w3-bar-item w3-button" onclick="call_content('news.php','หน้า : หน้าข่าว','BackDoor : หน้าข่าว');"><i
                    class="fas fa-bullhorn"></i>
                หน้าข่าว</a>
            <a class="w3-bar-item w3-button" onclick="call_content('sender.php','หน้า : ผู้ส่ง','BackDoor : ผู้ส่ง');"><i
                    class="fas fa-sort-amount-down"></i>
                ผู้ส่ง</a>
            <a class="w3-bar-item w3-button" onclick="call_content('Inbox.php','หน้า : ข้อความ','BackDoor : ข้อความ');"><i
                    class="fas fa-bell"></i>
                ข้อความ<span class="w3-badge w3-right w3-white" style="text-shadow: 0 0 0 black">4</span></a>
            <hr>
        </div>
    </div>
    <!-- end sidebar -->

    <div style="margin-left:15%;">

        <!-- start NavBar -->
        <div class="w3-bar " style="background-color:#2D935D">
            <a class="w3-bar-item w3-text w3-center" style="width:68%;" id="nav_title"></a>
            <!-- set to right -->
            <div class="w3-right">
                <a href="#" class="w3-bar-item w3-button w3-padding-large"><i class="far fa-user-circle"></i> ข้อมูลส่วนตัว</a>
                <a href="#" class="w3-bar-item w3-button w3-padding-large"><i class="fas fa-sign-out-alt"></i> ออกจากระบบ</a>
            </div>
        </div>
        <!-- End NavBar -->

        <!-- start body -->
        <div class="w3-container-fluid w3-card-4 " style="max-height:100%; background-color:#ffffff ;" id="body">

            <!-- html here -->
            <div id="in_body"></div>

        </div>
        <!-- end body -->

        <!-- set to bottom -->
        <footer>
            <div class="w3-container-fluid " style="text-align:center; ">
                <!-- prefooter -->
                <div class="" style="border:solid;border-color:#8CDCB1 ;background-color:#8CDCB1 " id="prefooter">
                    <h1>Footer</h1>
                </div>
                <!-- footer -->
                <div class="" style="border:solid;border-color:#2D935D;background-color:#2D935D" id="footer">
                    <p style="margin-top:1%">©Powered by CEFStyle</p>
                </div>
            </div>
        </footer>


    </div>



</body>
    <script src="../node_modules/jquery/dist/jquery.min.js"></script>
    <script type="text/javascript" charset="utf8" src="https://cdn.datatables.net/1.10.19/js/jquery.dataTables.js"></script>
    <script type="text/javascript" src="https://cdn.datatables.net/v/bs4/dt-1.10.18/datatables.min.js"></script>
    <script>
    //datatable
    $(document).ready(function () {
                    $('#table1').click(function(){
                        $(this).DataTable();
                    });
                    $('#table2').DataTable();
                    $('#table3').DataTable();

                });
    </script>
<script>
    if (document.getElementById('in_body').innerHTML === '') {
        // call_content('Inbox.php','หน้า : ข้อความ','BackDoor : ข้อความ');
        call_content('document.php','หน้า : เอกสาร','BackDoor : เอกสาร');
    }

    function call_content(content, nav_title, title) {
        
        document.getElementById('nav_title').innerHTML = nav_title;
        document.getElementById('tab_title').innerHTML = title;

        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("in_body").innerHTML = this.responseText;
            }
        };
        xhttp.open("GET", content, true);
        xhttp.send();
        
    }
</script>

<!-- bootstrap 4.2.1 -->
<script src="../node_modules/popper.js/dist/popper.min.js"></script>
<script src="../node_modules/bootstrap/dist/js/bootstrap.min.js"></script>


</html>