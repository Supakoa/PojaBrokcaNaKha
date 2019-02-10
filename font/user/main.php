<!DOCTYPE html>
<html>

    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>User 1</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <!-- bootstrap 4.2.1 -->
        <link rel="stylesheet" href="../node_modules/bootstrap/dist/css/bootstrap.min.css">

        <!-- google fonts-->
        <link href="https://fonts.googleapis.com/css?family=Kanit" rel="stylesheet">

        <!-- icon -->
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.1/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr"
              crossorigin="anonymous">

        <!-- datatable -->
        <!-- <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/v/bs4/dt-1.10.18/datatables.min.css"/> -->
        <!-- <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/1.10.19/css/jquery.dataTables.css"> -->


        <style>
            /* Make the image fully responsive */
            .carousel-inner img {
                width: 100%;
                height: 100%;
            }

            .Gfonts {
                font-family: 'Kanit', sans-serif;
            }

        </style>
    </head>

    <body>
        <!-- body -->
        <section class="container-fluid Gfonts" style="background-color:blue">
            <div class="container" style="background-color:red">
                <div class="container fixed-top" >
                    <?php require 'navbar/navbars.php'; ?>
                </div>

                <br>

                <!-- News -->
                <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                    <ol class="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <a href = "eiei.php" target="_blank">
                                <img src="../picture/news/37869166_2315748691981362_1261623428901765120_n.jpg" class="d-block w-100" alt="...">
                            </a>
                        </div>
                        <div class="carousel-item ">
                            <img src="../picture/news/37888947_2315748711981360_6369071917374111744_n.jpg" class="d-block w-100"
                                 alt="...">
                        </div>
                        <div class="carousel-item">
                            <img src="../picture/news/38292707_2324643144425250_3892870529308164096_n.jpg" class="d-block w-100"
                                 alt="...">
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div><br><!-- News -->

                <!-- card 1 -->
                <div class="card" id="card1">
                    <div class="card-body">
                        <div class="container mt-3">
                            <div class="container">
                                <!-- Nav tabs -->
                                <ul class="nav nav-tabs row text-center">
                                    <li class="nav-item col-lg-6">
                                        <a class="nav-link active" style="background-color:#009b77;color:black;margin-right:-15px;margin-left:-15px" data-toggle="tab" href="#home">ประวัติคำร้อง</a>
                                    </li>
                                    <li class="nav-item col-lg-6">
                                        <a class="nav-link" data-toggle="tab" href="#menu1" style="background-color:#45b8ac;color:black;margin-right:-15px;margin-left:-15px">แบบคำร้อง</a>
                                    </li>
                                </ul>
                            </div>
                            <!-- Tab panes -->
                            <div class="tab-content">
                                <!-- Tab panes 1-->
                                <div id="home" class="container tab-pane active" style="background-color:#009b77;"><br>
                                    <div class="container ">
                                        <div class="row">
                                            <div class="col-lg-1"></div>
                                            <div class="col-lg-10">
                                                <div class="table-responsive">
                                                    <table class="table table-hover overflow-y: hidden">
                                                        <thead>
                                                            <tr>
                                                                <th scope="col">#</th>
                                                                <th scope="col">สถานะ</th>
                                                                <th scope="col">แบบคำร้อง</th>
                                                                <th scope="col">หมายเหตุ <span style="color:red">*</span></th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <th scope="row">1</th>
                                                                <td><span class="badge badge-danger">ไม่ผ่าน</span></td>
                                                                <td>ขอสอบย้อนหลัง</td>
                                                                <td>
                                                                    <button class="btn btn-warning btn-sm">แก้ไข</button>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                            <div class="col-lg-1"></div>
                                        </div>
                                    </div>
                                </div>
                                <!-- Tab panes 1-->

                                <!-- Tab panes 2-->
                                <div id="menu1" class="container tab-pane fade" style="background-color:#45b8ac;"><br>
                                    <div class="container accordion" id="formreport">

                                        <div class="card">
                                            <!-- form 1 -->
                                            <a class="collapsed card-link" data-toggle="collapse" href="#form1">
                                                <div class="card-header">แบบคำร้องขอตรวจสอบผลการเรียน</div>
                                            </a>

                                            <div id="form1" class="collapse" data-parent="#formreport">
                                                <div class="card-body">
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                                                    ex ea commodo consequat.
                                                </div>
                                            </div>
                                            <!-- form 1 -->

                                            <!-- form 2 -->
                                            <a class="collapsed card-link" data-toggle="collapse" href="#form2">
                                                <div class="card-header">แบบฟอร์มแจ้งสาเหตุการขาดสอบรายวิชาศึกษาทั่วไป</div>
                                            </a>

                                            <div id="form2" class="collapse" data-parent="#formreport">
                                                <div class="card-body">
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                                                    ex ea commodo consequat.
                                                </div>
                                            </div>
                                            <!-- form 2 -->

                                            <!-- form 3 -->
                                            <a class="collapsed card-link" data-toggle="collapse" href="#form3">
                                                <div class="card-header">แบบคำร้องขอแก้ไขผลการเรียน</div>
                                            </a>

                                            <div id="form3" class="collapse" data-parent="#formreport">
                                                <div class="card-body">
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                                                    ex ea commodo consequat.
                                                </div>
                                            </div>
                                            <!-- form 3 -->

                                            <!-- form 4 -->
                                            <a class="collapsed card-link" data-toggle="collapse" href="#form4">
                                                <div class="card-header">แบบคำร้องขอสอบภายหลัง</div>
                                            </a>

                                            <div id="form4" class="collapse" data-parent="#formreport">
                                                <div class="card-body">
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                                                    ex ea commodo consequat.
                                                </div>
                                            </div>
                                            <!-- form 4 -->

                                            <!-- form 5 -->
                                            <a class="collapsed card-link" data-toggle="collapse" href="#form5">
                                                <div class="card-header">แบบใบลาป่วย ลากิจ</div>
                                            </a>

                                            <div id="form5" class="collapse" data-parent="#formreport">
                                                <div class="card-body">
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                                                    ex ea commodo consequat.
                                                </div>
                                            </div>
                                            <!-- form 5 -->

                                            <!-- form 6 -->
                                            <a class="collapsed card-link" data-toggle="collapse" href="#form6">
                                                <div class="card-header">ใบคำร้องขอรหัสผ่านเข้าระบบ</div>
                                            </a>

                                            <div id="form6" class="collapse" data-parent="#formreport">
                                                <div class="card-body">
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                                                    ex ea commodo consequat.
                                                </div>
                                            </div>
                                            <!-- form 6 -->

                                            <!-- form 7 -->
                                            <a class="collapsed card-link" data-toggle="collapse" href="#form7">
                                                <div class="card-header">แบบคำร้องทั่วไป</div>
                                            </a>

                                            <div id="form7" class="collapse" data-parent="#formreport">
                                                <div class="card-body">
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                                                    ex ea commodo consequat.
                                                </div>
                                            </div>
                                            <!-- form 7 -->

                                            <!-- form 8 -->
                                            <a class="collapsed card-link" data-toggle="collapse" href="#form8">
                                                <div class="card-header">แบบประเมิณความพอใจ</div>
                                            </a>

                                            <div id="form8" class="collapse" data-parent="#formreport">
                                                <div class="card-body">
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                                                    ex ea commodo consequat.
                                                </div>
                                            </div>
                                            <!-- form 8 -->
                                        </div><br>

                                    </div>
                                </div>
                                <!-- Tab panes 2-->

                            </div>
                        </div>
                    </div>
                </div><br>
                <!-- card 1 -->


                <!-- card 2-->
                <div class="card" id="card2">
                    <div class="card-header text-center">
                        <h3>ติดต่อเจ้าหน้าที่</h3>
                    </div>
                    <div class="card-body">
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-7">
                                    <div class="card">
                                        <!-- card 2.1 -->
                                        <div class="card-body">
                                            <div class="table-responsive ">
                                                <table class="table display overflow-y: hidden">
                                                    <thead>
                                                        <tr>
                                                            <th>status</th>
                                                            <th>ข้อความ</th>
                                                            <th>ผู้ส่ง</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td><span class="badge badge-danger">ยังไม่ได้อ่าน</span></td>
                                                            <td>
                                                                <!-- Small modal -->
                                                                <button type="button" class="btn btn-info btn-sm"
                                                                        data-toggle="modal" data-target="#confirm">เจ้าหน้าที่</button>

                                                                <div id="confirm" class="modal fade bd-example-modal-sm"
                                                                     tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel"
                                                                     aria-hidden="true">
                                                                    <div class="modal-dialog modal-sm">
                                                                        <div class="modal-content ">
                                                                            <div class="modal-header">
                                                                                <h5 class="modal-title" id="exampleModalLabel">เจ้าหน้าที่</h5>
                                                                                <button type="button" class="close"
                                                                                        data-dismiss="modal" aria-label="Close">
                                                                                    <span aria-hidden="true">&times;</span>
                                                                                </button>
                                                                            </div>
                                                                            <div class="modal-body text-center">
                                                                                55555555555
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <!-- Small modal -->
                                                            </td>
                                                            <td> เจ้าหน้าที่ </td>
                                                        </tr>
                                                        <tr>
                                                            <td><span class="badge badge-success">อ่านแล้ว</span></td>
                                                            <td>
                                                                <!-- Small modal -->
                                                                <button type="button" class="btn btn-info btn-sm"
                                                                        data-toggle="modal" data-target="#confirm1">เจ้าหน้าที่</button>

                                                                <div id="confirm1" class="modal fade bd-example-modal-sm"
                                                                     tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel"
                                                                     aria-hidden="true">
                                                                    <div class="modal-dialog modal-sm">
                                                                        <div class="modal-content ">
                                                                            <div class="modal-header">
                                                                                <h5 class="modal-title" id="exampleModalLabel">เจ้าหน้าที่</h5>
                                                                                <button type="button" class="close"
                                                                                        data-dismiss="modal" aria-label="Close">
                                                                                    <span aria-hidden="true">&times;</span>
                                                                                </button>
                                                                            </div>
                                                                            <div class="modal-body text-center">
                                                                                55555555555
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <!-- Small modal -->
                                                            </td>
                                                            <td> เจ้าหน้าที่ </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div><!-- card 2.1 -->
                                </div>
                                <div class="col-lg-2"></div>
                                <div class="col-lg-3">
                                    <div class="card">
                                        <!-- card 2.2 -->
                                        <div class="card-body">
                                            <div class="container text-center">
                                                <button type="button" class="btn btn-primary" data-toggle="modal"
                                                        data-target="#exampleModal" data-whatever="@getbootstrap">ส่งข้อความ <i
                                                        class="fas fa-comment"></i></button>
                                            </div>
                                        </div>
                                    </div><!-- card 2.2 -->
                                </div>
                            </div>
                        </div>
                    </div>
                </div><br><!-- card 2-->

            </div>
        </section><br><!-- body -->
        <footer class="text-center">
            <p>Create by: CEFSSRU</p>
            <p>Contact Location: <a href="#">สำนักงานวิชาการทั่วไปฯ</a>.</p>
        </footer>

        <!-- modal card 3.2 -->
        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
             aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">ติดต่อเจ้าหน้าที่</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <form>
                            <div class="form-group">
                                <label for="recipient-name" class="col-form-label">เรื่อง:</label>
                                <input type="text" class="form-control" id="recipient-name">
                            </div>
                            <div class="form-group">
                                <label for="message-text" class="col-form-label">ข้อความ:</label>
                                <textarea class="form-control" id="message-text"></textarea>
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">ปิด</button>
                        <button type="button" class="btn btn-primary">ส่งข้อความ</button>
                    </div>
                </div>
            </div>
        </div>
        <!--modal card 3.2 -->


        <!-- Jquery -->
        <script src="../node_modules/jquery/dist/jquery.min.js"></script>
        <!-- <script type="text/javascript" charset="utf8" src="https://cdn.datatables.net/1.10.19/js/jquery.dataTables.js"></script> -->
        <!-- <script type="text/javascript" src="https://cdn.datatables.net/v/bs4/dt-1.10.18/datatables.min.js"></script> -->
        <script>
            //tap
            $(document).ready(function () {
                $(".nav-tabs a").click(function () {
                    $(this).tab('show');
                });
            });

            //time news
            $('.carousel').carousel({
                interval: 2000
            })
            //modal
            $('#myModal').on('shown.bs.modal', function () {
                $('#myInput').trigger('focus')
            })

            //datatable
            // $(document).ready( function () {
            //     $('#table_id').DataTable();
            // } );
        </script>

        <!-- bootstrap 4.2.1 -->
        <script src="../node_modules/popper.js/dist/popper.min.js"></script>
        <script src="../node_modules/bootstrap/dist/js/bootstrap.min.js"></script>

    </body>

</html>