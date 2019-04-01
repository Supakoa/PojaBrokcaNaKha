<?php 
require '../../../server/server.php';
require 'check_login.php';
$iduser = $_SESSION['id'];
$id = $_POST['id'];
$type = $_POST['cate'];


?>

<?php if ($type == 'show') { 
    $sql_paper_user = "SELECT user.title,user.name,paper_user.last_edit,paper_user.status FROM `paper_user`,user WHERE user.user_id = paper_user.user_id AND paper_user.paper_id ='$id'";
    $re_paper_user = mysqli_query($con, $sql_paper_user);
    // $row_puser = mysqli_fetch_array($re_paper_user);
    ?>


<!-- show state modal -->
<div class="modal fade" id="route" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">เส้นทางการดำเนินการ >> <?php echo $id; ?> <<</h5> 
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
            </div>
            <div class="modal-body">
                <div class="card-body">
                    <div class="table-responsive ">
                        <table class="table table-hover responsive nowrap">
                            <thead>
                                <tr>
                                    <th>ชื่อผู้ตรวจ</th>
                                    <th class="text-center">วันที่ตรวจ</th>
                                    <th class="text-center">สถานะการดำเนินการ</th>
                                </tr>
                            </thead>
                            <tbody>
                                <?php $i = 0;
                                while ($row_pu = mysqli_fetch_array($re_paper_user)) { ?>
                                <?php if ($i != 0) { ?>
                                <tr>
                                    <td></td>
                                    <td class="text-center"><i class="fas fa-angle-double-down"></i></td>
                                    <td></td>
                                </tr>
                                <?php } ?>
                                <tr>
                                    <td><?php echo $row_pu['title']." ".$row_pu['name']; ?></td>
                                    <td class="text-center"><?php 
                                    if($row_pu['last_edit']!=NULL){
                                        echo $row_pu['last_edit'];
                                    }else{
                                        echo "ยังไม่ได้ทำการตรวสอบ";
                                    } ?></td>
                                    <td class="text-center"><?php 
                                    if($row_pu['status']!=NULL){
                                        echo $row_pu['status'];
                                    }else{
                                        echo "ยังไม่ได้ทำการตรวสอบ";
                                    }
                                    ?> </td>
                                </tr>
                                <?php $i++;
                            
                        } ?>
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
} else {
    $row_pu = mysqli_fetch_array($re_paper_user);
    $keywords = preg_split("/๛/", $row_pu['paper_detail']);
    ?>

<!-- text modal -->
<div id="confirm1" class="modal fade bd-example-modal-sm" tabindex="-1" role="dialog"
    aria-labelledby="mySmallModalLabel" aria-hidden="true">
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