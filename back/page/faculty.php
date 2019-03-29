<?php 
    // connect database server
    require '../../server/server.php';
?>

<div class="container-fluid mx-auto">

    <div id="head">
        <h3>ตั้งค่า : รายชื่อคณะ/สาขา</h3>
        <hr>
    </div>

    <div class="container text-center">
        <button type="button" onclick="facAddModal();" class="btn btn-info"><i class="fas fa-plus"
                style="color:white;"> เพิ่มคณะ</i></button>
    </div><br>

    <!-- modal tempolary -->
    <div id="tmp_fac_modal"></div>

    <div class="container">

        <div class="table-responsive-lg">
            <table class="table table-bordered table-sm table-hover display text-center nowrap responsive">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">คณะ</th>
                        <th>ดู</th>
                        <th>แก้ไข</th>
                        <th>ลบ</th>
                    </tr>
                </thead>
                <?php 
                    $i = 0;
                    $sql = "SELECT * FROM fac WHERE 1";
                    $result = mysqli_query($con,$sql);
                    while ($row = mysqli_fetch_array($result)) {
                ?>
                <tbody>
                    <?php $i = 1;
                    while ($row_fac = mysqli_fetch_array($re_fac)) { ?>
                    <tr>
                        <td><?php echo ++$i; ?></td>
                        <td><?php echo $row['name']; ?></td>
                        <td><button class="btn btn-success"><i class="fas fa-search-plus"
                                    style="color:white;"></i></button></td>
                        <td><button class="btn btn-warning"><i class="far fa-edit" style="color:white;"></i></button>
                        </td>
                        <td><button class="btn btn-danger"><i class="far fa-trash-alt"
                                    style="color:white;"></i></i></button></td>
                    </tr>
                    <?php 
                }
                 ?>
                </tbody>
                <?php } ?>
            </table>
        </div>
    </div>

</div>

<script>
    function facAddModal() {
        $.post("../modal/faculty_add_modal.php",
            function (data, textStatus, jqXHR) {
                $('#tmp_fac_modal').html(data);
                $('#new_fac').modal('show');
            }
        )
    }
</script>