<?php
    // connect database server
    require '../../server/server.php';
?>

<div class="container mx-auto" >
    <div class="container-fluid " >

        <div id="head">
            <h3>ตั้งค่า : รายชื่อวิชา</h3>
            <hr>
        </div><!-- head -->

        <div id="body" class="table-responsive-lg" >
            <table class="table table-bordered table-sm table-hover display text-center nowrap responsive">

                <thead>
                    <tr>
                        <th>ลำดับ</th>
                        <th>รหัสวิชา</th>
                        <th>ชื่อวิชา</th>
                        <th>ลบ</th>
                    </tr>
                </thead><!-- table head -->

                <tbody>
                    <?php
                        $sql_sub_all = "SELECT * FROM `subject` WHERE 1";
                        $result = mysqli_query($con,$sql_sub_all);
                        $i = 0;
                        while($row_sub_all = mysqli_fetch_array($result)){ ?>
                    <tr>
                        <td>
                            <?php echo (++$i).').' ;$id = $row_sub_all[0];$name = $row_sub_all[1]; ?>
                            <!-- <div class="collapse" id="containt_<?php //echo $i; ?>">
                                <hr>
                                <div id="update_<?php //echo $i; ?>" onclick="update_sub(<?php //echo $i; ?>);" class="btn btn-sm btn-success"><i class="far fa-check-circle" style="color:white;"></i></div>
                            </div> --><!-- collapse -->
                        </td>
                        <td>
                            <?php echo $row_sub_all['sub_id']; ?>
                            <!-- <div class="collapse" id="containt_<?php //echo $i; ?>">
                                <hr><input id="input_id_<?php //echo $i; ?>" onchange="inputChange(<?php //echo $i; ?>)" class="form-control form-control-sm" type="text" style="text-align:center;"
                                    placeholder="<?php //echo $row_sub_all['sub_id']; ?>">
                            </div> --><!-- collapse -->
                        </td>
                        <td>
                            <?php echo $row_sub_all['sub_name']; ?>

                            <!-- <div class="collapse" id="containt_<?php //echo $i; ?>">
                                <hr><input id="input_name_<?php //echo $i; ?>" onchange="inputChange(<?php //echo $i; ?>)" class="form-control form-control-sm" type="text" style="text-align:center;"
                                    placeholder="<?php //echo $row_sub_all['sub_name']; ?>">
                            </div> --><!-- collapse -->
                        </td>
                        <td>
                            <!-- <button type="button" onclick="changeIcon(<?php //echo $i; ?>);" class="btn btn-sm btn-outline-dark" data-toggle="collapse" aria-expanded="false"
                                aria-controls="collapseExample" data-target="#containt_<?php //echo $i; ?>"><i id="icon_<?php //echo $i; ?>" class="fas fa-angle-double-down"></i></button> -->

                            <button id="<?php echo $row_sub_all['sub_id']; ?>" class="btn btn-sm btn-outline-dark" onclick="delete_sub(this);" ><i class="far fa-trash-alt"></i></button>
                        </td>

                    </tr>

                    <?php } ?>
                </tbody>
            </table>
            <button class="btn btn-block btn-success shadow" onclick="insert_sub();"><i class="fas fa-plus-circle" style="color:white;"></i></button>
        </div><!-- body -->

    </div>
</div>

<script>
    // function changeIcon(i){
    //     if($("#icon_"+i).attr('class') == 'fas fa-angle-double-down'){
    //         $("#icon_"+i).removeClass("fas fa-angle-double-down");
    //         $("#icon_"+i).addClass("fas fa-angle-double-up");
    //     }
    //     else if($("#icon_"+i).attr('class') == 'fas fa-angle-double-up'){
    //         $("#icon_"+i).removeClass("fas fa-angle-double-up");
    //         $("#icon_"+i).addClass("fas fa-angle-double-down");
    //     }
    // } // change icon *ไม่ใช้แล้ว

    // function inputChange(i){
    //     // alert($("#input_name_"+i).val()+" : "+$("#input_id_"+i).val());
    //     if($("#input_name_"+i).val() === "" && $("#input_id_"+i).val() === ""){
    //         // alert('a');
    //         $("#update_"+i).removeClass("btn btn-sm btn-warning");
    //         $("#update_"+i).addClass("btn btn-sm btn-success");
    //     }else if($("#input_name_"+i).val() !== "" || $("#input_id_"+i).val() !== ""){
    //         // alert('b');
    //         $("#update_"+i).removeClass("btn btn-sm btn-success");
    //         $("#update_"+i).addClass("btn btn-sm btn-warning");
    //     }
    // }//  *ไม่ใช้แล้ว

    // function update_sub(i){
    //     if($("#input_name_"+i).val() !== "" || $("#input_id_"+i).val() !== ""){
    //         let id = $("#input_id_"+i).val();
    //         let name = $("#input_name_"+i).val(); 
    //         if($("#input_name_"+i).val() === ""){
    //             // $("#input_name_"+i).val() = $("#input_name_"+i).attr('placeholder');
    //             name = $("#input_name_"+i).attr('placeholder');
    //         }
    //         if($("#input_id_"+i).val() === ""){
    //             // $("#input_id_"+i).val() = $("#input_id_"+i).attr('placeholder');
    //             id = $("#input_id_"+i).attr('placeholder');
    //         }
    //         alert(id+" : "+name);
    //         $.post("../send_sql/subject_sql_update.php",
    //             {i:i,name:name,id:id},
    //             function (data, textStatus, jqXHR) {
    //                 // alert(data);
    //             }
    //         );
    //     }else{
    //         alert("blank");
    //     }
    // }//  *ไม่ใช้แล้ว

    function delete_sub(elem){

        // get element id name to read and send to ajax
        let id = $(elem).attr('id');

        //calling ajax 
        $.ajax({
            type: "POST",
            url: "../send_sql/subject_del_sql.php",
            data: {id:id},
            success: function (data) {
                // return result of sql
                if(data == 'true'){
                    Swal.fire({
                        toast: true,
                        position: 'top-end',
                        showConfirmButton:false,
                        timer:3000,
                        type: 'success',
                        titleText: 'ลบสำเร็จ',
                    });
                }else{
                    Swal.fire({
                        toast: true,
                        position: 'top-end',
                        showConfirmButton:false,
                        timer:3000,
                        type: 'warning',
                        titleText: 'เกิดข้อผลิดพลาด',
                    });
                }
            }
        });
        
        // refresh page in index.php by jquery
        $("#in_body").load("../page/subject.php");

    }

    function insert_sub(){
        Swal.mixin({
            input: 'text',
            confirmButtonText: 'Next &rarr;',
            progressSteps: ['1', '2']
        }).queue([
            {
                title: 'รหัสวิชา',
                text: 'Subject ID.'
            },
            {
                title:'ชื่อวิชา',
                text:'Subject Name.'
            }
        ]).then((result) => {
            if( result.value[0] == "" || result.value[1] == "" ){
                Swal.fire({
                    type: 'error',
                    title:'ผิดพลาด',
                    text: 'กรุณากรอกข้อมูลให้ครบตามที่กำหนด'
                });
            }else{
                Swal.fire({
                    title: 'ตรวจสอบก่อนส่ง',
                    html:
                        'Your subject answers: <br><br><p>' +
                            '(รหัสวิชา/ID): ' + result.value[0] + '<br>' +
                            '(ชื่อวิชา/name): ' + result.value[1] + '<br>' +
                        '</p>',
                    confirmButtonText: 'ยืนยัน'
                });
            }
        })
    }

</script>