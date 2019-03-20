<?php 
require '../../server/server.php';
if(isset($_POST)){
    $type = $_POST['type'];
    $id = $_POST['id'];
    // print_r($_POST);
}
?>
<div class="modal fade" id="edit_group_modal" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog modal-xl">
        <div class="modal-content">
            <?php 
        if ($type==1){
    ?>
            <!-- Modal Header -->
            <div class="modal-header">
                <h4 class="modal-title">แก้ไขแบบทั่วไป</h4>
                <button type="button" class="close" data-dismiss="modal">&times;</button>
            </div>

            <!-- Modal body -->
            <div class="modal-body">
                <?php print_r($_POST); ?>
            </div>

            <!-- Modal footer -->
            <div class="modal-footer">
                <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
            </div>

            <?php } else{ ?>
            <!--ขั้นสองแบบ-->
            <!--ขั้นสองแบบ-->
            <!--ขั้นสองแบบ-->
            <!--ขั้นสองแบบ-->
            <!--ขั้นสองแบบ-->
            <!--ขั้นสองแบบ-->
            <!--ขั้นสองแบบ-->
            <!--ขั้นสองแบบ-->

            <!-- Modal Header -->
            <div class="modal-header">
                <h4 class="modal-title">แก้ไขแบบความเกี่ยวข้องต่อวิชา <?php echo $id; ?></h4>
                <button type="button" class="close" data-dismiss="modal">&times;</button>
            </div>

            <!-- Modal body -->
            <div class="modal-body">
                <div class="row">
                    <div class="col-10">
                        <table>
                            <thead>
                                <th>ลำดับ</th>
                                <th>วิชา</th>
                                <th>ผู้มีสิทธิ์ลงนามอนุมัติ</th>
                            </thead>
                            <tbody>
                                <?php 
                    $sql_sub = "SELECT * FROM `subject`";
                    $re_sub = mysqli_query($con,$sql_sub);
                    $i = 1;
                    while($row_sub = mysqli_fetch_array($re_sub)){
                        echo '<tr><td>'. $i++.'</td><td>'.$row_sub['sub_name'].'</td><td>';
                        
                        
                        
                        echo '<a href = "#" onclick = "add_user_sub(\''.$id.'\',\''.$row_sub['sub_id'].'\')" >
                        <i class="fas fa-plus-circle "></i>
                        </a>
                        
                        </td></tr>';
                    }
                    ?>

                            </tbody>
                        </table>
                    </div>
                    
                </div>

            </div>

            <!-- Modal footer -->
            <div class="modal-footer">
                <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
            </div>
            <?php }  ?>
        </div>
    </div>
</div>
<div id="add_user_insub"></div>
<script>
$(document).ready(function () {
    now_id = '<?php echo $id ; ?>';
    now_type ='<?php echo $type ; ?>';
    // alert(now_id+" : "+now_type);
});
   
    function  add_user_sub(group_id,sub) { 
        // alert(group_id+" : "+sub);
        $.post("../modal/add_user_sub.php", {id : group_id,sub_id : sub},
            function (data) {
                // alert(data);
                $('#add_user_insub').html(data);
                $('#add_sub_user').modal('show');
            }
        );
    }
    $('#edit_group_modal').modal({
        keyboard: false,
        backdrop: 'static'

    });
    
   
</script>