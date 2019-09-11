<?php 
require '../../server/server.php';

// print_r($_POST);

$id = $_POST['id'];
$sub_id = $_POST['sub_id'];


$sql_user = "SELECT `user_id`,`title`,`name` FROM `user` WHERE role = '2' ";
$re_user = mysqli_query($con,$sql_user);

// subject

$all_user = '<label for="all_user">ผู้ใช้</label>
        <select name="all_user" name="user" id = "name" class="form-control select2" required>
        <option hidden="" selected="" value="">เลือกผู้ใช้</option>';
while ($row_user = mysqli_fetch_array($re_user)) {
    $all_user .= '<option value="' . $row_user['user_id'] . '">' . $row_user['title']." ".$row_user['name']. '</option>';
}
$all_user .= '</select>';

?>

<div class="modal fade" id="add_sub_user" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">เลือกผู้ใช้งาน</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">

        <?php 
    echo $all_user ;
?>
        </form>


        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          <button type="submit" class="btn btn-primary" id="save">Save changes</button>
        </div>
      </div>
    </div>
  </div>
  <script>
    user_id = null;
    $('#name').change(function (e) {
      e.preventDefault();
      user_id = $('#name').val();

    });
    $('#save').click(function (e) {
      e.preventDefault();
      if (user_id == null) {
        Swal({
          type: 'warning',
          title: 'กรุณาเลือกผู้ใช้งาน',
          // text: 'กรุณาใช้ชื่อใหม่.',
          // footer: '<a href>Why do I have this issue?</a>'
        });
      } else {
        now_id = '<?php echo $id ; ?>';
        sub = '<?php echo $sub_id ; ?>';
        status_now = 'add';
        $.post("../send_sql/sql_add_user_sub.php", {
            id: user_id,
            sub_id: sub,
            group_id : now_id,
            status : status_now
          },
          function (data) {
            if(sub==='temp'){
              now_type = '1';
            }else{
              now_type = '2';
            }
            
            $('#add_sub_user').modal('hide');
            $('#add_sub_user').on('hidden.bs.modal', function (e) {
              $('#edit_group_modal').modal('hide');
              $('#edit_group_modal').on('hidden.bs.modal', function (e) {
                $("#edit_group_div").load("../modal/edit_groups.php", {
                  id: now_id,
                  type: now_type
                });
                $('#show_alert').html(data);
                // alert(data);
               
                
              });
            });
          }
        );


      }
    });
  </script>