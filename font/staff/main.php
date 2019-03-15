<?php 
require '../../server/server.php';


$sql_paper = "SELECT paper.paper_id, paper.paper_detail, paper.timestamp, paper.owner_id, form.name, form.form_id AS formname, user.title, user.name AS username  
            FROM `paper_user`, `paper`, `form`, `user` 
            WHERE paper.form_id = form.form_id AND paper.paper_id = paper_user.paper_id AND user.user_id = paper.owner_id AND form.form_id != '8'";
$re_paper = mysqli_query($con, $sql_paper);




?>


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
    <link rel="stylesheet" href="../style.css">

    <!-- google fonts-->
    <link href="https://fonts.googleapis.com/css?family=Kanit" rel="stylesheet">

    <!-- icon -->
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.1/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous">


</head>

<body class="Gfont">
    <!-- navbar -->
    <div class="container-fluid fix-top" style="background-color:#3782EB">
        <nav class="navbar navbar-expand-lg navbar-light  container" style="background-color:#3782EB">
            <a class="navbar-brand" href="#">
                <img src="../picture/form/logo.png" width="30" height="30" class="d-inline-block align-top" alt="">
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto ">
                    <li class="nav-item active">
                        <a class="nav-link" href="main.php" style="color:#FFFFFF;"><i class="fas fa-home"></i>
                            หน้าแรก <span class="sr-only">(current)</span></a>
                    </li>
                </ul>
                <form class="form-inline my-2 my-lg-0">
                    <a class="nav-link disabled" href="#" style="color:#FFFFFF;"><i class="fas fa-user"></i>
                        Mr.RVkung</a>
                    <a class="nav-link" href="#" style="color:#FFFFFF;">ออกจากระบบ <i class="fas fa-sign-out-alt"></i></a>
                </form>
            </div>
        </nav>
    </div>
    <!-- navbar -->

    <div class="container-fluid" style="background-color:#E4EEFC">
        <div class="container" style="background-color:#AECDF7">
            <!-- div 1 -->
            <br>
            <div class="card-body" style="background-color:#F7FAFE">
                <div class="row">
                    <!-- card 1 -->
                    <div class="col-lg-12">
                        <div class="card mb-3">
                            <div class="card-header text-light" style="background-color:#78ABF2">
                                <h3>Inbox</h3>
                            </div>
                            <div class="card-body">
                                <div class="table-responsive text-nowrap">
                                    <table class="table table-hover overflow display" id="table1">
                                        <thead>
                                            <tr>
                                                <th>รหัสเอกสาร</th>
                                                <th>แบบคำร้อง</th>
                                                <th>รหัสนักศึกษา</th>
                                                <th>ชื่อ-สกุล</th>
                                                <th>วันที่-เวลา</th>
                                                <th>ตรวจสอบ</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <?php while ($row_paper = mysqli_fetch_array($re_paper)) { ?>
                                            <tr>
                                                <td><?php echo $row_paper['paper_id']; ?></td>
                                                <td><?php echo $row_paper['formname']; ?></td>
                                                <td><?php echo $row_paper['owner_id']; ?></td>
                                                <td><?php echo $row_paper['title'] . $row_paper['name']; ?></td>
                                                <td><?php echo $row_paper['timestamp']; ?></td>
                                                <td><button class="btn btn-outline-info" onclick="form_paper0('<?php echo $row_paper['paper_id']; ?>','<?php echo $row_paper['form_id']; ?>')"><i class="fas fa-file-alt"></i></button></td>
                                            </tr>
                                            <?php 
                                        } ?>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- card 1 -->
                    <!-- card 2 -->
                    <div class="col-lg-12">
                        <div class="card mb-3">
                            <div class="card-header text-light" style="background-color:#78ABF2">
                                <h3>Outbox</h3>
                            </div>
                            <div class="card-body">
                                <div class="table-responsive text-nowrap">
                                    <table class="table table-hover overflow display" id="table2">
                                        <thead>
                                            <tr>
                                                <th>รหัสเอกสาร</th>
                                                <th>แบบคำร้อง</th>
                                                <th>รหัสนักศึกษา</th>
                                                <th>ชื่อ-สกุล</th>
                                                <th>วันที่-เวลา</th>
                                                <th>รายละเอียด</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>doc57574</td>
                                                <td>แบบคำร้องขอสอบภายหลัง</td>
                                                <td>60124879041</td>
                                                <td>นาย สิงหา มาปูนี</td>
                                                <td>2019-01-18 18:44:40</td>
                                                <td><button class="btn btn-outline-info " data-toggle="modal" data-target="#modal2"><i class="fas fa-info-circle"></i></button></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- card 2 -->
                </div>
            </div><br>
            <!-- div 1 -->

            <!-- div 2 -->
            <div id="paper_form"></div>
            
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
    <!-- datatable -->
    <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/1.10.19/css/jquery.dataTables.css">
    <script type="text/javascript" charset="utf8" src="https://cdn.datatables.net/1.10.19/js/jquery.dataTables.js"></script>
    <script>
        //datatable
        $(document).ready(function() {
            $('#table1').DataTable();
            $('#table2').DataTable();

        });
    </script>

    <script>
        function form_paper0(id_paper, type) {
            $("#paper_1").html("");
            $.post("other/doc.php", {
                    id: id_paper,
                    cate: type
                },
                function(result) {
                    $("#paper_1").html(result);
                }
            );
        };

        function form_paper1(id_paper, type) {
            $("#paper_1").html("");
            $.post("other/doc.php", {
                    id: id_paper,
                    cate: type
                },
                function(result) {
                    $("#paper_1").html(result);
                }
            );
        };

    </script>

    <!-- bootstrap 4.2.1 -->
    <script src="../node_modules/popper.js/dist/popper.min.js"></script>
    <script src="../node_modules/bootstrap/dist/js/bootstrap.min.js"></script>
</body>

</html> 