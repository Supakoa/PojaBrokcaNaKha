<div class="container text-center" style="margin:20px;">
    <div class="container-fluid " style="margin:20px;padding:20px;">

        <div id="head">
            <h3>ตั้งค่า : รายชื่อวิชา</h3>
            <hr>
        </div><!-- head -->

        <div id="body" class="table-responsive-lg" style="margin:30px;">
            <table class="table table-sm table-hover display nowrap responsive">
                <thead>
                    <tr>
                        <th>รหัสวิชา</th>
                        <th>ชื่อวิชา</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td></td>
                        <td>Mark</td>
                    </tr>
                    <?php
                        $sql_sub_all = "SELECT * FROM `subject` WHERE 1";
                        $result = mysqli_query($con,$sql_sub_all);
                        while($row_sub_all = mysqli_fetch_array($result)){ ?>
                            <tr>
                                <td><?php echo $row_sub_all['sub_id']; ?></td>
                                <td><?php echo $row_sub_all['sub_name']; ?></td>
                            </tr>
                    <?php } ?>
                </tbody>
            </table>
        </div>

    </div>
</div>