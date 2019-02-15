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

    <div class="container fixed-top">
        <?php require 'other/navbars.php'; ?>
    </div>
    <!-- body -->
    <section class="container-fluid Gfonts" style="background-color:blue">
        <div class="container" style="background-color:red">
            <br><br><br>

            <?php require 'other/news.php'; ?>

            <div class="card">
                <div class="card-header text-center">
                    <h3>ประวิตส่วนตัว</h3>
                </div>
                <div class="card-body">
                    <div class="row">
                        <div class="col-lg-3"></div>
                        <div class="col-lg-6">
                            <div class="table-responsive">
                                <table class="table table-hover overflow">
                                    <thead>
                                        <tr>
                                            <th>ชื่อ - นามสกุล</th>
                                            <th>Password</th>
                                            <th>แก้ไข</th>
                                        </tr>

                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td> ศุภกิจ กิจนะบำรุงศํกดิ์</td>
                                            <td>16/01/2540</td>
                                            <td>
                                                <!-- Button trigger modal -->
                                                <button type="button" class="btn btn-warning btn-sm" data-toggle="modal"
                                                    data-target="#exampleModal">
                                                    แก้ไข
                                                </button>

                                                <!-- Modal -->
                                                <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog"
                                                    aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                    <div class="modal-dialog" role="document">
                                                        <div class="modal-content">
                                                            <div class="modal-header">
                                                                <h5 class="modal-title" id="exampleModalLabel">Modal
                                                                    title</h5>
                                                                <button type="button" class="close" data-dismiss="modal"
                                                                    aria-label="Close">
                                                                    <span aria-hidden="true">&times;</span>
                                                                </button>
                                                            </div>
                                                            <div class="modal-body">
                                                                <div class="card-body">
                                                                    <div class="row">
                                                                        <div class="col-lg-6">
                                                                            <label for="name">ชื่อ - นามสกุล</label>
                                                                            <input id="name" type="text" placeholder="ศุภกิจ กิจนะบำรุงศักดิ์">
                                                                        </div>
                                                                        <div class="col-lg-6">
                                                                            <label for="pass">Password</label>
                                                                            <input id="pass" type="text" placeholder="16/01/2540">
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="modal-footer">
                                                                <button type="button" class="btn btn-secondary"
                                                                    data-dismiss="modal">Close</button>
                                                                <button type="button" class="btn btn-primary">Save
                                                                    changes</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div class="col-lg-3"></div>
                    </div>


                </div>
            </div>



        </div>
    </section><!-- body -->

    <footer class="text-center">
        <label>Create by: CEFStyle</label><br>
        <label>Contact Location: <a href="#">สำนักงานวิชาการทั่วไปฯ</a>.</label>
    </footer>





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
        // $(document).ready(function () {
        //     $('#table_id').DataTable();
        // });
    </script>

    <!-- bootstrap 4.2.1 -->
    <script src="../node_modules/popper.js/dist/popper.min.js"></script>
    <script src="../node_modules/bootstrap/dist/js/bootstrap.min.js"></script>

</body>

</html>