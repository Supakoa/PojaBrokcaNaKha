<?php 
require 'server/server.php';
    if(isset($_SESSION['online'])){
        if($_SESSION['online']=='1'){
            header("Location: font/user/main.php");
        }elseif($_SESSION['online']=='2'){
            header("Location: font/staff/main.php");
        }elseif($_SESSION['online']=='3'){
            header("Location: back/page/index.php");
        }
        exit;
    }
    if (isset($_SESSION['check_login'])) {
        session_destroy();
    }

$sql_fac = "SELECT * FROM `fac` ";
$re_fac = mysqli_query($con,$sql_fac);
$fac = '<option disabled selected value="">กรุณาเลือกคณะ</option>';
while($r_fac = mysqli_fetch_array($re_fac)){
    $fac.= '<option value="'.$r_fac['fac_id'].'">'.$r_fac['name'].'</option>';
}
if(isset($_POST['hide_login'])){
     //ReCAPTSHA
  $captcha;//ตัวแปร
  if (isset($_POST['g-recaptcha-response'])) {
      $captcha=$_POST['g-recaptcha-response'];
  }
    $secretKey = "6LfGSZIUAAAAAB5NSS778hOTKf3XpFy7SmQESQ1N";
    $ip = $_SERVER['REMOTE_ADDR'];
    $response=file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret=".$secretKey."&response=".$captcha."&remoteip=".$ip);
    $responseKeys = json_decode($response, true);
    if (intval($responseKeys['success']) !== 1) {
        $_SESSION['status'] = 1; //not match
        header("Location: index.php");
        echo '<h2>โปรดทำการยันยืนให้ถูกต้อง</h2>';
        $_SESSION['alert'] = 27;
        exit();
    } else {
       
        $login_id = mysqli_real_escape_string($con, $_POST['user_name']);
        $login_pw = mysqli_real_escape_string($con, $_POST['user_password']);
        $sql = "SELECT `user_id`,`password`,`role` FROM `user` WHERE`user_id` = '$login_id' AND `password` = '$login_pw' ";
        $result = mysqli_query($con,$sql);
        $_SESSION['status'] = 0; //online
        
        if ($r_a = mysqli_fetch_array($result)) {
            $_SESSION['id'] = $login_id;
            if($r_a['role']=='1'){
                header("Location: font/user/main.php");
                $_SESSION['online'] = '1';
            }elseif($r_a['role']=='2'){
                header("Location: font/staff/main.php");
                $_SESSION['online'] = '2';
            }elseif($r_a['role']=='3'){
                header("Location: back/page/index.php");
                $_SESSION['online'] = '3';
            }
            else{
                header("Location: index.php");
                $_SESSION['alert'] = 1;
            }
            exit();
            
           
        } else {
            $_SESSION['status'] = 1; //not match
            $_SESSION['alert'] = 28;
            header("Location: index.php");
        }
        exit();
    }

}
if(isset($_POST['re_btn'])){
    $user_id = $_POST['user_id'];
    $tel = $_POST['tel'];
    $pw = $_POST['pw'];
    $tname = $_POST['tname'];
    $fname = $_POST['fname'];
    $lname = $_POST['lname'];
    $name = $fname.' '.$lname;
    $tname = $_POST['tname'];
    $mar = $_POST['mar'];
    $email = 's'.$user_id.'@ssru.ac.th';
    $sql_re = "INSERT INTO `user`(`user_id`, `password`, `title`, `name`, `tel`, `email`, `role`, `status`, `major_id`) VALUES ('$user_id','$pw','$tname','$name','$tel','$email',1,1,'$mar')";
    if($re_re = mysqli_query($con,$sql_re)){
        $_SESSION['alert'] = 3;
    }else{
        $_SESSION['alert'] = 4;
    }
}


?>
<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>User 1</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="icon" type="image/ico" href="font/picture/icon.png" />


    <!-- bootstrap 4.2.1 -->
    <link rel="stylesheet" href="font/node_modules/bootstrap/dist/css/bootstrap.min.css">

    <!-- google fonts-->
    <link href="https://fonts.googleapis.com/css?family=Kanit" rel="stylesheet">

    <!-- icon -->
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.1/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr"
        crossorigin="anonymous">

    <!-- sweet alert2 -->
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@7.33.1/dist/sweetalert2.all.min.js"></script>

    <link rel="stylesheet" href="back\node_modules\animate.css\animate.min.css">

    <style>
        /* Make the image fully responsive */
    .carousel-inner img {
        width: 100%;
        height: 100%;
    }
    .Gfonts{
        font-family: 'Kanit', sans-serif;

    }
    body{
        margin-bottom:50px;
    }
    .card {
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
        transition: 0.3s;
        width: 100%;
        border-radius: 5px;
        margin-top:20px;margin-bottom:20px
    }

    .card:hover {
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    }

    img {
        border-radius: 5px 5px 0 0;
    }

    .container {
        padding: 2px 16px;
    }
  </style>

</head>

<body class="Gfonts" style="background-color:#E4EEFC" id = "login" >
    <!-- navbar -->
    <div class="container-fluid fixed-top" style="background-color:#3782EB;">
        <nav class="navbar navbar-expand-lg navbar-light  container" style="background-color:#3782EB;">
            <a class="navbar-brand" href="#">
                <img src="font/picture/form/logo.png" width="30" height="30" class="d-inline-block align-top" alt="">
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto ">
                    <li class="nav-item active">
                        <a class="nav-link" href="main.php" style="color:#FFFFFF;">หน้าแรก <span class="sr-only">(current)</span></a>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
    <!-- navbar -->

    <!-- body -->
    <div class="container-fluid Gfonts">
        <!-- style="background-color:#E4EEFC" -->
        <div class="container">
            <div class="container-fluid">
                <div class="container" style="margin-bottom:50px">
                    <!-- out row -->
                    <div class="row">
                        <div class="col-lg-2"></div>
                        <div class="col-lg-8">
                            <!-- in row -->
                            <div class="row">
                                <div class="col-lg-2"></div>
                                <div class="col-lg-8">
                                    <div class="card " id = "login2" style="margin-top:100px;margin-bottom:70px">
                                        <div class="card-header text-center" style="background-color:#3782EB;color:#FFFFFF">
                                            <h4>เข้าสู่ระบบ</h4>
                                        </div>
                                        <div class="card-body" style="background-color:#F7FAFE;">
                                            <div class="container">
                                                <!-- form log-in -->
                                                <form action="index.php" method="post">
                                                    <div class="form-group">
                                                        <label for="user">รหัสนักศึกษา / รหัสอาจารย์</label>
                                                        <input type="text" class="form-control" id="user" placeholder="ID"
                                                            name="user_name">
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="Password1">วัน/เดือน/ปี</label>
                                                        <input type="password" class="form-control" id="Password" name="user_password"
                                                            placeholder="Password">
                                                    </div>
                                                    <input type="hidden" name="hide_login" value="eiei">
                                                    <!-- check bot -->
                                                    <div class="g-recaptcha" data-sitekey="6LfGSZIUAAAAAPX_Wv8XdRf8FnwaE4yht4Ee_5RP"></div>
                                                    <!-- check bot -->
                                                    <br>


                                                    <div class="row">
                                                        <div class="col-lg-4">
                                                            <button type="submit" class="btn btn-primary btn-sm">เข้าสู่ระบบ</button>

                                                        </div>
                                                        <div class="col-lg-4">
                                                            <button type="button" id = "go" class="btn btn-primary btn-sm">ไปปปป</button>

                                                        </div>

                                                        <!-- register modal -->
                                                        <div class="col-lg-4 text-right">
                                                            <button type="button" class="btn btn-link" data-toggle="modal"
                                                                data-target="#modalregis"><i class="fas fa-registered"></i>
                                                                สมัครเข้าใช้แบบคำร้อง
                                                            </button>
                                                        </div>
                                                        <!-- register modal -->


                                                    </div>
                                                </form>
                                                <!-- form log-in -->
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-2"></div>
                            </div>
                            <!-- in row -->
                        </div>
                        <div class="col-lg-2"></div>
                    </div>
                    <!-- out row -->
                </div>
            </div>
        </div>

        <div class="container-fluid fixed-bottom" style="background-color:#87B4F3">
            <div class="container">
                <footer class="text-center" style="background-color:#87B4F3">
                    <label>Create by: CEFStyle</label><br>
                    <label>Contact Location: <a href="#">สำนักงานวิชาการทั่วไปฯ</a>.</label>
                </footer>
            </div>
        </div>
    </div>
    <!-- body -->

    <!-- Modal register-->
    <div class="modal fade animated flip" id="modalregis" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true">
        <div class="modal-dialog modal-lg" role="document">
            <form action="index.php" method="post">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalCenterTitle">กรอกข้อมูลเข้าใช้แบบคำร้อง</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="container-fluid card-body form-group">
                            <div class="row">
                                <div class="col-lg-6">
                                    <label for="id">รหัสนักศึกษา</label>
                                    <input id="re_id" name="user_id" type="text" class="form-control" required>
                                </div>
                                <div class="col-lg-6">
                                    <label for="phone">เบอร์โทรศัพท์</label>
                                    <input id="phone" name="tel" class="form-control" type="text" required>
                                </div>
                                
                            </div>
                            <div class="row">
                                <div class="col-lg-6">
                                    <label for="pass">รหัสผ่าน</label>
                                    <input id="pass" name="pw" type="password" class="form-control" required>
                                    <p id="pass_p"></p>
                                </div>
                                <div class="col-lg-6">
                                    <label for="pass">ยืนยันรหัสผ่าน</label>
                                    <input id="con_pass" name="con_pw" type="password" class="form-control" required>
                                </div>


                            </div>
                            <div class="row">
                                <div class="col-lg-2">
                                    <label for="tname">คำนำหน้าชื่อ</label>
                                    <input id="tname" name="tname" type="text" class="form-control" required>

                                </div>
                                <div class="col-lg-5">
                                    <label for="fname">ชื่อ</label>
                                    <input id="fname" name="fname" type="text" class="form-control" required>

                                </div>
                                <div class="col-lg-5">
                                    <label for="lname">นามสกุล</label>
                                    <input id="lname" name="lname" type="text" class="form-control" required>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-lg-8">
                                    <label for="faculty">คณะ :</label>
                                    <select class="form-control custom-select" name="fac" id="faculty" required>
                                        <?php echo $fac ?>
                                    </select>
                                </div>
                                <div class="col-lg-8">
                                    <label for="major">สาขา :</label>
                                    <select class="form-control custom-select" name="mar" id="major" required disabled>
                                        <option disabled selected value="">กรุณาเลือกจากคณะก่อน</option>

                                    </select>
                                </div>
                            </div>
                            <div id="eiei"></div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="submit" name = "re_btn" class="btn btn-primary"><i class="far fa-save"></i> Save</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
    <!-- Modal register-->


    <!-- bootstrap 4.2.1 -->
    <script src="font/node_modules/jquery/dist/jquery.min.js"></script>
    <script src="font/node_modules/popper.js/dist/popper.min.js"></script>
    <script src="font/node_modules/bootstrap/dist/js/bootstrap.min.js"></script>
    <script src="https://www.google.com/recaptcha/api.js" async defer></script>

    <script>
        $('#myModal').on('shown.bs.modal', function () {
            $('#myInput').trigger('focus')
        });
    </script>
    <script>
        $('#faculty').change(function (e) {
            e.preventDefault();
            fac = $('#faculty').val();
            // namefac = $('#faculty').text();
            // $('#eiei').append(fac);

            // alert(namefac);
            $.post("server/major.php", {
                    data: fac
                },
                function (result) {
                    if (fac != null) {
                        $("#major").html(result);
                        $(selector).html(htmlString);
                        $('#major').prop("disabled", false);
                    }


                    // $("#del").modal("show");
                }

            );
        });
    </script>
    <script>
        $(document).ready(function () {
            $('#pass').keyup(function () {
                check_con_pass();
            });
            $('#con_pass').keyup(function (e) {
                check_con_pass();

            });

            function check_con_pass() {
                a = $('#pass').val();
                b = $('#con_pass').val();
                $('#pass_p').text(a + " " + b);
                conpass = $('#con_pass')[0];
                if (a != b) {
                    conpass.setCustomValidity("Passwords Don't Match");

                } else {
                    conpass.setCustomValidity('');
                }
            };
        });
        $("#go").click(function (e) { 
            e.preventDefault();
           
            $("#login2").addClass("animated flip faster");
            setTimeout(function(){
                $("#login2").removeClass("animated flip faster");

            }, 500); 
           

        });
    </script>
    <!-- alert all -->
    <?php require 'server/alert.php'; ?>-
</body>

</html>