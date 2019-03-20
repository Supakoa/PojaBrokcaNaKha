<?php
// connect database
require '../../server/server.php';
// print_r($_POST);
$user_id =$_POST['id'];
$sub = $_POST['sub_id'];
$group_id = $_POST['group_id'];
$status =$_POST['status'];
if($status == 'add'){
    $sql_check="select * FROM `groups_user` WHERE `group_id` = '$group_id' AND `user_id` = '$user_id' AND `sub_id` = '$sub'";
    $re_check =  mysqli_query($con,$sql_check);

    if(mysqli_num_rows($re_check)==0){
        $sql_user = "insert into `groups_user`( `group_id`, `user_id`, `sub_id`)
        Select '$group_id','$user_id','$sub' Where not exists(select * FROM `groups_user` WHERE `group_id` = '$group_id' AND `user_id` = '$user_id' AND `sub_id` = '$sub')";
        if($re_user = mysqli_query($con,$sql_user)){
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
    // echo "Nooo";
    $sql_user = "DELETE FROM `groups_user` WHERE `group_id` = '$group_id' AND `user_id` = '$user_id' AND `sub_id` = '$sub' ";
    if($re_user = mysqli_query($con,$sql_user)){
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