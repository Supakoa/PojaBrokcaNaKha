<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>อาจารย์</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="icon" type="image/ico" href="../picture/icon.png" />

    <!-- bootstrap 4.2.1 -->
    <link rel="stylesheet" href="../node_modules/bootstrap/dist/css/bootstrap.min.css">

    <!-- google fonts-->
    <link href="https://fonts.googleapis.com/css?family=Kanit" rel="stylesheet">

    <!-- icon -->
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.1/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr"
        crossorigin="anonymous">

    <link rel="stylesheet" type="text/css" media="screen" href="main.css">
    <script src="main.js"></script>
</head>

<body>
    <div class="container-fluid" style="background-color:#E4EEFC">
     <!-- navbar -->
     <div class="fix-top">
                <nav class="navbar navbar-expand-lg navbar-light  container" style="background-color:#3782EB">
                    <a class="navbar-brand" href="#">
                        <img src="../picture/form/logo.png" width="30" height="30" class="d-inline-block align-top" alt="">
                    </a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mr-auto ">
                            <li class="nav-item active">
                                <a class="nav-link" href="main.php"  style="color:#FFFFFF;"><i class="fas fa-home"></i> หน้าแรก <span class="sr-only">(current)</span></a>
                            </li>

                        </ul>
                        <form class="form-inline my-2 my-lg-0">
                            <a class="nav-link disabled" href="#"  style="color:#FFFFFF;"><i class="fas fa-user"></i> RaviKung</a>
                            <a class="nav-link" href="#"  style="color:#FFFFFF;">ออกจากระบบ <i class="fas fa-sign-out-alt"></i></a>
                        </form>
                    </div>
                </nav>
            </div>
            <!-- navbar -->
            
        <div class="container" style="background-color:#AECDF7">
            <!-- div 1 -->
            <div id="">
                <br>
                <div class="card-body" style="background-color:#F7FAFE">
                    <div class="row">
                        <!-- card 1 -->
                        <div class="col-lg-7">
                            <div class="card mb-3">
                                <div class="card-header text-light" style="background-color:#78ABF2">
                                    <h3>Inbox</h3>
                                </div>
                                <div class="card-body">
                                    <div class="table-responsive">
                                        <table class="table table-hover overflow display" id="table1">
                                            <thead>
                                                <tr>
                                                    <th>รหัสเอกสาร</th>
                                                    <th>แบบคำร้อง</th>
                                                    <th>ชื่อผู้ส่ง</th>
                                                    <th>วันที่</th>
                                                    <th>เช็คเอกสาร</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- card 1 -->
                        <!-- card 2 -->
                        <div class="col-lg-5">
                            <div class="card mb-3">
                                <div class="card-header text-light" style="background-color:#78ABF2">
                                    <h3>Outbox</h3>
                                </div>
                                <div class="card-body">
                                    <div class="table-responsive">
                                        <table class="table table-hover overflow display" id="table2">
                                            <thead>
                                                <tr>
                                                    <th>รหัสเอกสาร</th>
                                                    <th>แบบคำร้อง</th>
                                                    <th>ชื่อผู้ส่ง</th>
                                                    <th>วันที่</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- card 2 -->

                    </div>

                </div>
            </div><br>
            <!-- div 1 -->

            <!-- div 2 -->
            <div class="card-body" style="background-color:#F7FAFE">
                <!-- card 3 -->
                <div class="card text-center" id="showdata">
                    <div class="card-header text-light" style="background-color:#78ABF2">
                     <h5><i class="fas fa-lightbulb"></i> รหัสเอกสาร <i class="fas fa-angle-right"></i> 59123854</h5>
                    </div>
                    <div class="card-body">
                        <h3>แสดง เอกสารจากตาราง Inbox</h3>
                    </div>
                    <div class="card-footer text-muted">
                        <div class="row">
                            <div class="col-lg-4"><button>5555</button></div>
                            <div class="col-lg-4"><button>5555</button></div>
                            <div class="col-lg-4"><button>5555</button></div>
                        </div>
                    </div>
                </div>
                <!-- card 3 -->

            </div><br>
            <!-- div 2 -->


        </div><br>
    </div>

    <div class="container-fluid" style="background-color:#87B4F3">
        <div class="container">
            <footer class="text-center" style="background-color:#87B4F3">
                    <label>Create by: CEFStyle</label><br>
                    <label>Contact Location: <a href="#">สำนักงานวิชาการทั่วไปฯ</a>.</label>
            </footer>
        </div>
    </div>

    <!-- Jquery -->
    <script src="../node_modules/jquery/dist/jquery.min.js"></script>
    <script type="text/javascript" charset="utf8" src="https://cdn.datatables.net/1.10.19/js/jquery.dataTables.js"></script>
    <script type="text/javascript" src="https://cdn.datatables.net/v/bs4/dt-1.10.18/datatables.min.js"></script>
    <script>
        //datatable
        $(document).ready(function () {
            $('#table1').DataTable();
            $('#table2').DataTable();

        });
        
    </script>

    <!-- bootstrap 4.2.1 -->
    <script src="../node_modules/popper.js/dist/popper.min.js"></script>
    <script src="../node_modules/bootstrap/dist/js/bootstrap.min.js"></script>
</body>

</html>