<?php 
require '../../../server/server.php';
require 'check_login.php';
$iduser = $_SESSION['id'];
$id = $_POST['id'];
$type = $_POST['cate'];

//paper_user
$sql_paper_user = "SELECT paper_user.comment, paper_user.timestamp, form.name,paper.paper_detail, form_way.step FROM `paper`, `paper_user`, `form`, `form_way` WHERE paper.form_id = form.form_id AND paper.paper_id = paper_user.paper_id AND form.form_id = form_way.form_id AND paper.paper_id = '$id' AND paper.owner_id = '$iduser' ";
$re_paper_user = mysqli_query($con,$sql_paper_user);
// $row_pu = mysqli_fetch_array($re_paper_user);
//paper_user 


?>

<?php if ($type == 'show') { ?>
   
<!-- show state modal -->
<div class="modal fade" id="route" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">เส้นทางการดำเนินการ</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <div class="card-body">
                    <div class="table-responsive text-nowrap">
                        <table class="table table-hover overflow">
                            <thead>
                                <tr>
                                    <th>แบบคำร้อง</th>
                                    <th>วันที่ส่ง</th>
                                    <th>เส้นทางการดำเนินการ</th>
                                </tr>
                            </thead>
                            <tbody>
                            <?php while($row_pu = mysqli_fetch_array($re_paper_user)){ ?>
                                <tr>
                                    <td><?php echo $row_pu['name']; ?></td>
                                    <td><?php echo $row_pu['timestamp']; ?></td>
                                    <td><?php echo $row_pu['step']; ?>  </td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td class="text-center"><i class="fas fa-angle-double-down"></i></td>
                                    <td></td>
                                </tr>
                            <?php }?>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>
        </div>
    </div>
</div>
<!-- show state modal -->

<?php 
} else{ 
    $row_pu = mysqli_fetch_array($re_paper_user);
    $keywords = preg_split("/๛/",$row_pu['paper_detail']);
    ?>

<!-- text modal -->
<div id="confirm1" class="modal fade bd-example-modal-sm" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-md">
        <div class="modal-content ">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">เจ้าหน้าที่</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <!-- User -->
                <dl class="row">
                    <dt class="col-sm-3 text-truncate">เรื่อง : </dt>
                    <dd class="col-sm-9">
                        <p><?php echo $keywords[0] ?></p>
                        <p> <?php 
                        print_r($keywords);
                        ?></p>
                       
                    </dd>

                    <dt class="col-sm-3 text-truncate">ข้อความ : </dt>
                    <dd class="col-sm-9">
                    <p><?php echo $keywords[1] ?></p>
                    </dd>
                </dl>
                <!-- User -->
                <hr>
                <!-- staff -->
                <dl class="row">
                    <dt class="col-sm-3">เจ้าหน้าที่ : </dt>
                    <dd class="col-sm-9">
                        <p><?php echo $row_pu['comment']; ?></p>
                    </dd>
                </dl>
            </div>
        </div>
    </div>
</div>
<!-- text modal -->



<?php 
} ?> 
<!-- <script>alert("144477");</script> -->