<?php 
require '../../server/server.php';

$sql_group = "SELECT * FROM `groups`";
$re_group = mysqli_query($con,$sql_group);

// subject

$all_group = '<label for="all_group">กลุ่มผู้มีสิทธิ์ลงนาม</label>
        <select name="all_group" id = "group" class="form-control select2" required>
        <option hidden="" selected="" value="">เลือกกลุ่มผู้มีสิทธิ์ลงนาม</option>';
while ($row_group = mysqli_fetch_array($re_group)) {
    $all_group .= '<option value="' . $row_group['group_id'] . '"> ' .$row_group['name']. '</option>';
}
$all_group .= '</select>';

$form_id = $_POST['id'];
$row_form = mysqli_fetch_array(mysqli_query($con,"SELECT * FROM `form` WHERE form_id = '$form_id' "));
?>
<div class="modal fade" id="edit_form_modal" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h3>ตั้งค่าเส้นทางเอกสาร</h3>
            </div>
            <div class="modal-body">

                <!-- info -->
                <div class="card-body text-left">

                    <div class="row">
                        <div class="col-lg-1"></div>
                        <div class="col-lg-5 ">
                            <p>ชื่อฟอร์มเอกสาร </p>
                        </div>
                        <div class="col-lg-6">
                            <label>: <?php echo $row_form['name'] ?></label>
                        </div>
                    </div>
                </div>
                <hr>
                <!-- info -->

                <!-- work step -->
                <div class="card-body">
                    <div class="row text-right">
                        <div class="col">
                            <button type="button" class="btn btn-outline-danger btn-lg btn-hover"
                                style="font-size: 14px;" onclick="del_user_sub()">ลบทั้งหมด</button>
                        </div>
                    </div>
                    <div class="row text-center">
                        <div class="col">
                            <p>เส้นทางเอกสาร</p>
                        </div>
                    </div>

                    <?php
                        $re_form_way = mysqli_query($con,"SELECT * FROM `form_way` WHERE form_id = '$form_id' ");
                        while($row_form_way = mysqli_fetch_array($re_form_way)){ ?>
                    <div class="row text-center">
                        <div class="col">
                            <?php 
                                echo '<button type="button" class="btn btn-outline-info btn-sm btn-singha" style = "font-size: 14px;" 
                                onclick = "del_user_sub()" >'.$row_form_way['group_id'].'</button>';
                            ?>
                        </div>
                    </div>
                    <!-- line -->
                    <div class="row text-center">
                        <div class="col">
                            <br>
                            <p><i class="fas fa-arrow-circle-down"></i></p>
                        </div>
                    </div>
                    <?php } ?>
                    <!-- line -->

                    <!-- add row -->
                    <div class="row">
                        <div class="col-lg-4"></div>
                        <div class="col-lg-4">
                            <button class="btn btn-light btn-sm" data-toggle="modal" data-target="#add_form_group"><i
                                    class="fas fa-plus"></i></button>
                        </div>
                    </div>
                    <!-- add row -->
                </div>
                <!-- work step -->

            </div>
        </div>
    </div>
</div>

<div style="margin-top:100px" class="modal fade" id="add_form_group" tabindex="-1" role="dialog"
    aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">เลือกกลุ่มผู้ใช้งาน</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">

                <?php 
            echo $all_group ;
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
        group_id = null;
        now_id = '<?php echo $form_id ; ?>';
        step_now = '<?php  echo $row_form['step_all'] ; ?> ';
        $('#group').change(function (e) {
            e.preventDefault();
            group_id = $('#group').val();

        });
        $('#save').click(function (e) {
            e.preventDefault();
            if (group_id == null) {
                Swal({
                    type: 'warning',
                    title: 'กรุณาเลือกกลุ่มผู้มีสิทธิ์ลงนาม',
                });
            } else {
                status_now = 'add';
                $.post("../send_sql/sql_form_add_group.php", {
                        form: now_id,
                        step: step_now,
                        group_id: group_id,
                        status: status_now
                    },
                    function (data) {


                        $('#add_form_group').modal('hide');
                        $('#add_form_group').on('hidden.bs.modal', function (e) {
                            $('#edit_form_modal').modal('hide');
                            $('#edit_form_modal').on('hidden.bs.modal', function (e) {
                                $("#edit_form_div").load("../modal/edit_form.php", {
                                        id: now_id
                                    },
                                    function (data2) {
                                        $("#edit_form_div").html(data2);
                                        $("#edit_form_modal").modal('show');

                                    });
                            });
                        });

                        $('#show_alert').html(data);
                        // alert(data);
                    }
                );


            }
        });

        function del_user_sub(group_id, sub, user_id, user_name) {

            if (sub == 'temp') {
                sum = user_name;
            } else {
                sum = user_name + " ที่วิชา " + sub;
            }
            Swal.fire({
                title: 'ท่านต้องการลบทั้งหมด ?',
                text: 'ข้อมูลทั้งหมดจะถูกลบและคุณต้องเพิ่มข้อมูลใหม่มาแทน.',
                type: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#28A745',
                cancelButtonColor: '#d33',
                confirmButtonText: 'ใช่!',
                cancelButtonText: 'ไม่'
            }).then((result) => {
                if (result.value) {
                    status_now = 'del';
                    $.post("../send_sql/sql_form_add_group.php", {
                            form: now_id,
                            step: step_now,
                            group_id: group_id,
                            status: status_now
                        },
                        function (data) {

                            $('#edit_form_modal').modal('hide');
                            $('#edit_form_modal').on('hidden.bs.modal', function (e) {
                                $("#edit_form_div").load("../modal/edit_form.php", {
                                        id: now_id
                                    },
                                    function (data2) {
                                        $("#edit_form_div").html(data2);
                                        $("#edit_form_modal").modal('show');

                                    });
                            });
                            $('#show_alert').html(data);
                        }
                    );
                    // alert("eiei");
                    // Swal.fire(
                    //     'Deleted!',
                    //     'Your file has been deleted.',
                    //     'success'
                    // )

                }
            })
        }
    </script>