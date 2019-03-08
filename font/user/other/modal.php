<?php 
require '../../../server/server.php';
$iduser = $_SESSION['id'];
$id = $_POST['id'];
$type = $_POST['cate'];
//paper_user
$sql_paper_user = "SELECT  FROM paper_user.comment,paper_user.timestamp,form.name,form.detail WHERE paper.form_id = form.form_id AND paper.paper_id = paper_user.paper_id AND paper_id = '$id' AND owner_id = '$isuser' ";
$re_paper_user = mysqli_query($con, $sql_paper_user);
$row_pu = mysqli_fetch_array($re_paper_user);
//paper_user


?>

<?php if ($type == 'show') { ?>
<!-- show state modal -->
<div class="modal fade" id="route" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">เส้นทางการดำเนินการ</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table table-hover overflow">
                            <thead>
                                <tr>
                                    <th>แบบคำร้อง</th>
                                    <th>วันที่ส่ง</th>
                                    <th>เส้นทางการดำเนินการ</th>
                                </tr>
                            </thead>
                            <tbody>
                            <?php while($row_pu){ ?>
                                <tr>
                                    <td><?php $row_pu['name']; ?></td>
                                    <td><?php $row_pu['timestamp']; ?></td>
                                    <td><?php $row_pu['step_now']; ?></td>
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
} else if ($type == 'Ans') { ?>


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
                        <p>ผมต้องแนบเอกสารอะไรบ้างครับในการขอลา เนื่องจากไปธุระกับครบครับ</p>
                        <p>แนบเอกสารลากิจ</p>
                    </dd>

                    <dt class="col-sm-3 text-truncate">ข้อความ : </dt>
                    <dd class="col-sm-9">
                        <p><?php echo $row_pu['detail']; ?></p>
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