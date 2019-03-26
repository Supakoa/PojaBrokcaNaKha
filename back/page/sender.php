<?php   
    require '../../server/server.php';

    $sql_form = "SELECT * FROM `form` ";
    $re_form = mysqli_query($con,$sql_form);


?>
<div class="container-fluid " >
    <div class="container-fluid ">
        <h3>ตั้งค่า : ขั้นตอนเอกสาร</h3>
        <hr>

        <!-- start table -->
        <div class="table-responsive-lg" >
            <table class="table table-bordered responsive display nowrap table-striped table_table">
                <thead>
                    <tr>
                        <th>Order</th>
                        <th>Name</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                   
                       <?php 
                       $i = 1 ;
                        while($row_form = mysqli_fetch_array($re_form)){
                        $btn = ' <button type="button" class="btn btn-outline-warning btn-sm" onclick="modal_edit(\'' . $row_form['form_id'].'\')">แก้ไข</button>';

                            echo '<tr><td>'.$i++.'</td><td>'.$row_form['name'].'</td><td>'.$btn.'</td></tr>';
                        }
                       ?>
                   
                </tbody>
            </table>
        </div>
        <!-- end table -->

    </div>

   
    <div id="edit_form_div"></div>
</div>
<script>
$(document).ready(function () {
            $('.table_table').DataTable();   
            
});
function modal_edit(form_id) {

$.post("../modal/edit_form.php", {
        id: form_id
    },
    function(data) {
        // alert("123");
        // alert(status);
        $("#edit_form_div").html(data);
        $("#edit_form_modal").modal('show');

    }
);

};
</script>