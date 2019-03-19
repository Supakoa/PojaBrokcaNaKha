<?php
    // connect database server
    require '../../server/server.php';
?>

<div class="container text-center" style="margin:20px;">
    <div class="container-fluid " style="margin:20px;padding:20px;">

        <div id="head">
            <h3>ตั้งค่า : รายชื่อวิชา</h3>
            <hr>
        </div><!-- head -->

        <div id="body" class="table-responsive-lg" style="margin:30px;">
            <table class="table table-bordered table-sm table-hover display nowrap responsive">

                <thead>
                    <tr>
                        <th>ลำดับ</th>
                        <th>รหัสวิชา</th>
                        <th>ชื่อวิชา</th>
                    </tr>
                </thead><!-- table head -->

                <tbody>
                    <?php
                        $sql_sub_all = "SELECT * FROM `subject` WHERE 1";
                        $result = mysqli_query($con,$sql_sub_all);
                        $i = 0;
                        while($row_sub_all = mysqli_fetch_array($result)){ ?>
                    <tr onclick="">
                        <td>
                            <?php echo (++$i).').' ; ?>
                        </td>
                        <td>
                            <?php echo $row_sub_all['sub_id']; ?>
                        </td>
                        <td>
                            <?php echo $row_sub_all['sub_name']; ?>
                        </td>
                    </tr>
                    <tr style="display:;">
                        <td></td>
                        <td><input class="form-control form-control-sm" type="text" style="text-align:center;"
                                placeholder="<?php echo $row_sub_all['sub_id']; ?>"></td>
                        <td>
                            <input class="form-control form-control-sm" type="text" style="text-align:center;"
                                placeholder="<?php echo $row_sub_all['sub_name']; ?>">
                            <div class="btn btn-sm btn-success">update</div>
                        </td>
                    </tr>
                    <?php } ?>
                </tbody>
            </table>
        </div><!-- body -->

    </div>
</div>