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
            
                <?php require 'navbar/navbars.php'; ?>
              
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
                        <img src="../picture/news/37869166_2315748691981362_1261623428901765120_n.jpg" class="d-block w-100"
                            alt="...">
                    </div>
                    <div class="carousel-item">
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

            <!-- card 1-->
            <div class="card">
                <div class="card-header text-center">
                    <h3>ฟอร์มแบบคำร้อง</h3>
                </div>
                <div class="card-body">
                    <div class="row">
                        <div class="col-lg-4">
                            <div class="container">
                                <!-- form 1 -->
                                <a href="#"><img src="../picture/form/201704_1.jpg" class="rounded-circle" alt="Cinque Terre"
                                        width="304" height="236"></a>
                            </div><!-- form 1 -->
                        </div>
                        <div class="col-lg-4">
                            <div class="container">
                                <!-- form 2 -->
                                <a href="#"><img src="../picture/form/download (1).jpg" class="rounded-circle" alt="Cinque Terre"
                                        width="304" height="236"></a>
                            </div><!-- form 2 -->
                        </div>
                        <div class="col-lg-4">
                            <div class="container">
                                <!-- form 3 -->
                                <a href="#"><img src="../picture/form/download.jpg" class="rounded-circle" alt="Cinque Terre"
                                        width="304" height="236"></a>
                            </div><!-- form 3 -->
                        </div>
                    </div><br>
                    <div class="row">
                        <div class="col-lg-4">
                            <div class="container">
                                <!-- form 4 -->
                                <a href="#"><img src="../picture/form/images.jpg" class="rounded-circle" alt="Cinque Terre"
                                        width="304" height="236"></a>
                            </div><!-- form 4 -->
                        </div>
                        <div class="col-lg-4">
                            <div class="container">
                                <!-- form 5 -->
                                <a href="#"><img src="../picture/form/images (1).jpg" class="rounded-circle" alt="Cinque Terre"
                                        width="304" height="236"></a>
                            </div><!-- form 5 -->
                        </div>
                        <div class="col-lg-4">
                            <div class="container">
                                <!-- form 6 -->
                                <a href="#"><img src="../picture/form/one_piece_-_trafalgar_law_-_3d_mousepad_morimoto_sangyou_3514.jpg"
                                        class="rounded-circle" alt="Cinque Terre" width="304" height="236"></a>
                            </div><!-- form 6 -->
                        </div>
                    </div><br>
                    <div class="row">
                        <div class="col-lg-2"></div>
                        <div class="col-lg-4">
                            <div class="container">
                                <!-- form 7 -->
                                <a href="#"><img src="../picture/form/raf,750x1000,075,t,101010_01c5ca27c6.u1.jpg"
                                        class="rounded-circle" alt="Cinque Terre" width="304" height="236"></a>
                            </div><!-- form 7 -->
                        </div>
                        <div class="col-lg-4">
                            <div class="container">
                                <!-- form 8 -->
                                <a href="#"><img src="../picture/form/Sanji.full.2148145.jpg" class="rounded-circle"
                                        alt="Cinque Terre" width="304" height="236"></a>
                            </div><!-- form 8 -->
                        </div>
                        <div class="col-lg-2"></div>
                    </div><br>
                </div>
            </div><br>
            <!-- card 1-->

            <!-- card 2-->
            <div class="card">
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
                                        <div class="table-responsive">
                                            <table class="table">
                                                <thead>
                                                    <tr>
                                                        <th>status</th>
                                                        <th>ข้อความ</th>
                                                        <th>ผู้ส่ง</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td><span class="badge badge-danger">Danger</span></td>
                                                        <td></td>
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
                                        <div class="container">
                                            <button type="button" class="btn btn-primary" data-toggle="modal"
                                                data-target="#exampleModal" data-whatever="@getbootstrap">ส่งข้อความให้เจ้าหน้าที่</button>

                                            <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog"
                                                aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div class="modal-dialog" role="document">
                                                    <div class="modal-content">
                                                        <div class="modal-header">
                                                            <h5 class="modal-title" id="exampleModalLabel">ติดต่อเจ้าหน้าที่</h5>
                                                            <button type="button" class="close" data-dismiss="modal"
                                                                aria-label="Close">
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
                                                            <button type="button" class="btn btn-secondary"
                                                                data-dismiss="modal">ปิด</button>
                                                            <button type="button" class="btn btn-primary">ส่งข้อความ</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
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

    <!-- bootstrap 4.2.1 -->
    <script src="../node_modules/jquery/dist/jquery.min.js"></script>
    <script src="../node_modules/popper.js/dist/popper.min.js"></script>
    <script src="../node_modules/bootstrap/dist/js/bootstrap.min.js"></script>
    <script>
        $('.carousel').carousel({
            interval: 2000
        })
        $('#myModal').on('shown.bs.modal', function () {
            $('#myInput').trigger('focus')
        })
    </script>
</body>

</html>