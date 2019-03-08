<?php 
require 'server.php';
$sql_fac = "SELECT * FROM `fac`";
$re_fac = mysqli_query($con,$sql_fac);
$fac = '<option disabled selected value="">กรุณาเลือกคณะ</option>';
while($r_fac = mysqli_fetch_array($re_fac)){
    $fac.= '<option value="'.$r_fac['fac_id'].'">'.$r_fac['name'].'</option>';
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

<body class="Gfonts" style="background-color:#E4EEFC">
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
                                    <div class="card " style="margin-top:100px;margin-bottom:70px">
                                        <div class="card-header text-center" style="background-color:#3782EB;color:#FFFFFF">
                                            <h4>เข้าสู่ระบบ</h4>
                                        </div>
                                        <div class="card-body" style="background-color:#F7FAFE;">
                                            <div class="container">
                                                <!-- form log-in -->
                                                <form action="">
                                                    <div class="form-group">
                                                        <label for="user">รหัสนักศึกษา / รหัสอาจารย์</label>
                                                        <input type="text" class="form-control" id="user" placeholder="ID">
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="Password1">วัน/เดือน/ปี</label>
                                                        <input type="password" class="form-control" id="Password1"
                                                            placeholder="Password">
                                                    </div>
                                                    <!-- check bot -->
                                                    <div class="g-recaptcha" data-sitekey="6LfGSZIUAAAAAPX_Wv8XdRf8FnwaE4yht4Ee_5RP"></div>
                                                    <!-- check bot -->
                                                    <br>


                                                    <div class="row">
                                                        <div class="col-lg-4">
                                                            <button type="submit" class="btn btn-primary btn-sm">เข้าสู่ระบบ</button>

                                                        </div>

                                                        <!-- register modal -->
                                                        <div class="col-lg-8 text-right">
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
    <div class="modal fade" id="modalregis" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle"
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
                                    <input id="id" name="user_id" type="text" class="form-control" required>
                                </div>
                                <div class="col-lg-6">
                                    <label for="pass">รหัสผ่าน</label>
                                    <input id="pass" name="password" type="text" class="form-control" required>
                                </div>
                                <div class="col-lg-6"></div>
                            </div>
                            <div class="row">
                                <div class="col-lg-6">
                                    <label for="fname">ชื่อ</label>
                                    <input id="fname" name="fname" type="text" class="form-control" required>

                                </div>
                                <div class="col-lg-6">
                                    <label for="lname">นามสกุล</label>
                                    <input id="lname" name="lname" type="text" class="form-control" required>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-lg-8">
                                    <label for="email">E-mail</label>
                                    <input id="email" name="email" class="form-control" type="email" required>
                                </div>
                                <div class="col-lg-4"></div>
                            </div>
                            <div class="row">
                                <div class="col-lg-6">
                                    <label for="phone">เบอร์โทรศัพท์</label>
                                    <input id="phone" name="tel" class="form-control" type="text" required>
                                </div>
                                <div class="col-lg-6"></div>
                            </div>

                            <div class="row">
                                <div class="col-lg-8">
                                    <label for="faculty">คณะ :</label>
                                    <select class="form-control custom-select" name="fac" id="faculty" required>
                                        <?php echo $fac ?>
                                    </select>
                                </div>
                                <div class="col-lg-4"></div>
                            </div>
                            <div id="eiei"></div>
                            <div class="row">
                                <div class="col-lg-8">
                                    <label for="major">สาขา :</label>
                                    <select class="form-control custom-select" name="mar" id="major" required disabled>
                                        <option disabled selected value="">กรุณาเลือกจากคณะก่อน</option>

                                    </select>
                                </div>
                                <div class="col-lg-4"></div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="submit" class="btn btn-primary"><i class="far fa-save"></i> Save</button>
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
        $('#faculty').click(function (e) {
            e.preventDefault();
            fac = $('#faculty').val();
            // $('#eiei').append(fac);

            // alert(fac)sasd
            $.post("major.php", {
                    data: fac
                },
                function (result) {
                    if(fac!=null){
                        $("#major").html(result);
                        $('#major').prop("disabled", false);
                    }
                    

                    // $("#del").modal("show");
                }

            );
        });
    </script>
</body>

</html>
<!-- {
  "success": true|false,
  "challenge_ts": timestamp,  // timestamp of the challenge load (ISO format yyyy-MM-dd'T'HH:mm:ssZZ)
  "hostname": string,         // the hostname of the site where the reCAPTCHA was solved
  "error-codes": [...]        // optional
} -->