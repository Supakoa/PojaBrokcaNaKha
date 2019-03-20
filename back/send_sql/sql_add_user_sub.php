<?php
// connect database
require '../../server/server.php';
$user_id =$_POST['id'];
$sub = $_POST['sub_id'];
$group_id = $_POST['group_id'];
$sql_user = "INSERT INTO `groups_user`( `group_id`, `user_id`, `sub_id`) VALUES ('$group_id','$user_id','$sub')";
if($re_user = mysqli_query($con,$sql_user)){
    echo "<script>
    Swal({
        type: 'success',
        title: 'เพิ่มข้อมูลสำเร็จ',
        text: 'ข้อมูลเข้าสู่ระบบเรียบร้อย.',
        // footer: '<a href>Why do I have this issue?</a>'
    });                    
</script>;";
// echo "1";
}else{
    echo "<script>
    Swal({
        type: 'error',
        title: 'เพิ่มข้อมูลไม่สำเร็จ',
        text: 'เกิดข้อผิดพลาดในการนำเข้าข้อมูล.',
        // footer: '<a href>Why do I have this issue?</a>'
    });                    
</script>";
// echo "2";
}
?>