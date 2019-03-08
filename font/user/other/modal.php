<?php 

require '../../../server.php';
$id = $_POST['id'];
$type = $_POST['cate'];
//paper_user
$sql_paper_user = "SELECT * FROM `paper_user` WHERE paper_id = '$id' ";
$re_paper_user = mysqli_query($con,$sql_paper_user);
//paper_user


?>

<?php if($type == 'show') { ?>
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
                                    <tr>
                                        <td>แบบคำร้องทั่วไป</td>
                                        <td>18-02-2562</td>
                                        <td>เจา้หน้าที่ทั่วไป</td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td class="text-center"><i class="fas fa-angle-double-down"></i></td>
                                        <td></td>
                                    </tr>
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

<?php }else if($type == ''){ ?>






<?php } ?>