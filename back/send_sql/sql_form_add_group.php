<?php 
require '../../server/server.php';

// print_r($_POST);
$form_id = $_POST['form'];
$step = (int)$_POST['step'];
$status =$_POST['status'];
if($status == 'add'){
    $group_id = $_POST['group_id'];
    $step =$step+1 ;
    $re_form = mysqli_query($con,"SELECT * FROM `form_way` WHERE `form_id` = '$form_id' AND `group_id` ='$group_id' " );
    if(mysqli_num_rows($re_form)==0){
        // ได้
        if(mysqli_query($con,"INSERT INTO `form_way`( `form_id`, `group_id`, `step`) VALUES ('$form_id','$group_id','$step')")){
            echo "<script>
            Swal({
                type: 'success',
                title: 'เพิ่มข้อมูลสำเร็จ',
                text: 'ข้อมูลเข้าสู่ระบบเรียบร้อย.',
                // footer: '<a href>Why do I have this issue?</a>'
            });                    
        </script>;";
        }else{
            echo "<script>
            Swal({
                type: 'error',
                title: 'เพิ่มข้อมูลไม่สำเร็จ',
                text: 'เกิดข้อผิดพลาดในการนำเข้าข้อมูล.',
                // footer: '<a href>Why do I have this issue?</a>'
            });                    
        </script>";
        }
    }else{
        echo "<script>
        Swal({
        type: 'error',
        title: 'เพิ่มข้อมูลไม่สำเร็จ',
        text: 'รายชื่อนี้ถูกเพิ่มไปแล้ว.',
        // footer: '<a href>Why do I have this issue?</a>'
    });                    
    </script>";
    }
}else{
    if(mysqli_query($con," DELETE FROM `form_way` WHERE `form_id` = '$form_id' ")){
        echo "<script>
        Swal({
            type: 'success',
            title: 'ลบข้อมูลสำเร็จ',
            text: 'ข้อมูลถูกลบออกจากระบบเรียบร้อย.',
            // footer: '<a href>Why do I have this issue?</a>'
        });                    
    </script>;";
    }else{
        echo "<script>
        Swal({
            type: 'error',
            title: 'ลบข้อมูลไม่สำเร็จ',
            text: 'เกิดข้อผิดพลาดในการลบข้อมูล.',
            // footer: '<a href>Why do I have this issue?</a>'
        });                   
    // </script>";
    }
}
?>