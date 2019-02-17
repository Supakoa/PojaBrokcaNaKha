<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>User 1</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="icon" type="image/ico" href="picture/icon.png" />


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

<body>
 <!-- navbar -->
 <nav class="navbar navbar-expand-lg navbar-light Gfonts" style="background-color:#3782EB;">
                <a class="navbar-brand" href="#">
                    <img src="font/picture/form/logo.png" width="30" height="30" class="d-inline-block align-top" alt="">
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto ">
                        <li class="nav-item active" >
                            <a class="nav-link" href="main.php" style = "color:#FFFFFF;">หน้าแรก <span class="sr-only">(current)</span></a>
                        </li>
                        <!-- <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown"
                                aria-haspopup="true" aria-expanded="false">
                                อื่นๆ
                            </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a class="dropdown-item" href="#"><i class="fas fa-info-circle"></i> ข้อมูลส่วนตัว</a>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item" href="#card2"><i class="fas fa-headset"></i> ติดต่อเจ้าหน้าที่</a>
                            </div>
                        </li> -->
                    </ul>
                    <!-- <form class="form-inline my-2 my-lg-0">
                        <a class="nav-link" href="#">ออกจากระบบ <i class="fas fa-sign-out-alt"></i></a>
                    </form> -->
                </div>
            </nav><!-- navbar -->

    <!-- body -->
    <body>
    <div class="container-fluid Gfonts" style="background-color:#E4EEFC">

<div class="container" style="background-color:#AECDF7">

    

    <div class="container-fluid">
        <div class="container" style="margin-top:130px;margin-bottom:150px">
            <!-- out row -->
            <div class="row">
                <div class="col-lg-2"></div>
                <div class="col-lg-8">

                    <!-- in row -->
                    <div class="row">
                        <div class="col-lg-2"></div>
                        <div class="col-lg-8" >
                            <div class="card "  style="margin-top:100px;margin-bottom:70px">
                                <div class="card-header text-center" style="background-color:#3782EB;color:#FFFFFF">
                                    <h4>เข้าสู่ระบบ</h4>
                                </div>
                                <div class="card-body" style="background-color:#F7FAFE;" >
                                    <div class="container">
                                        <!-- form log-in -->
                                        <form action="">
                                            <div class="form-group">
                                                <label for="user">รหัสนักศึกษา / รหัสอาจารย์</label>
                                                <input type="email" class="form-control" id="user"
                                                    aria-describedby="emailHelp" placeholder="User">
                                                <small id="emailHelp" class="form-text text-muted"><span style="color:red">*</span></small>
                                            </div>
                                            <div class="form-group">
                                                <label for="Password1">วัน/เดือน/ปี</label>
                                                <input type="password" class="form-control" id="Password1"
                                                    placeholder="Password">
                                            </div>
                                            <div class="form-group form-check">
                                                <input type="checkbox" class="form-check-input" id="exampleCheck1">
                                                <label class="form-check-label" for="exampleCheck1">Check me out</label>
                                            </div>
                                            <button type="submit" class="btn btn-primary btn-sm">เข้าสู่ระบบ</button>
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
</div><!-- body --> 
    </body>
    
    

    <footer class="text-center fixed-bottom" style="background-color:#87B4F3">
        <label>Create by: CEFStyle</label><br>
        <label>Contact Location: <a href="#">สำนักงานวิชาการทั่วไปฯ</a>.</label>
    </footer>


    <!-- bootstrap 4.2.1 -->
    <script src="font/node_modules/jquery/dist/jquery.min.js"></script>
    <script src="font/node_modules/popper.js/dist/popper.min.js"></script>
    <script src="font/node_modules/bootstrap/dist/js/bootstrap.min.js"></script>

</body>

</html>