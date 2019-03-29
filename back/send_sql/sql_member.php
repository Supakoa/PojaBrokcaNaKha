<?php
require '../../server/server.php';
if(isset($_POST['data'])){
    parse_str($_POST['data'], $data);
    print_r($data);
    $alert = 0;
    $user_id =  mysqli_real_escape_string($con, $data['user_name']);
    if(mysqli_num_rows(mysqli_query($con,"SELECT * FROM `user` WHERE user_id = '$user_id' "))==0){
        if($data['role']==1){
            if(mysqli_query($con,'INSERT INTO `user`(`user_id`, `password`, `title`, `name`, `tel`, `email`, `role`, `major_id`) VALUES (\' '.$data['user_name'].' \' , \''.$data['pass'].'\',\''.$data['title'].'\',\''.$data['name'].'\',\''.$data['tel'].'\',\''.$data['email'].'\',\''.$data['role'].'\',\''.$data['mar'].'\')')){
                $alert = 1;
            }else{
                $alert = 2;
            }
        }else{
            if(mysqli_query($con,'INSERT INTO `user`(`user_id`, `password`, `title`, `name`, `tel`, `email`, `role`,`status`) VALUES (\' '.$data['user_name'].' \' , \''.$data['pass'].'\',\''.$data['title'].'\',\''.$data['name'].'\',\''.$data['tel'].'\',\''.$data['email'].'\',\''.$data['role'].'\',\''.$data['rank'].'\')')){
                $alert = 1;
            }else{
                $alert = 2;
            }
        }
    }else{
        $alert = 3;
    }
    switch ($alert) {
        case 1:
        echo "<script>
        Swal({
            type: 'success',
            title: 'เพิ่มข้อมูลสำเร็จ',
            text: 'ข้อมูลเข้าสู่ระบบเรียบร้อย.',
            // footer: '<a href>Why do I have this issue?</a>'
        });                    
    </script>;";
            break;
        case 2:
        echo "<script>
        Swal({
            type: 'error',
            title: 'เพิ่มข้อมูลไม่สำเร็จ',
            text: 'เกิดข้อผิดพลาดในการนำเข้าข้อมูล.',
            // footer: '<a href>Why do I have this issue?</a>'
        });                    
    </script>";
            break;
        case 3:
        echo "<script>
        Swal({
        type: 'error',
        title: 'เพิ่มข้อมูลไม่สำเร็จ',
        text: 'รายชื่อนี้ถูกเพิ่มไปแล้ว.',
        // footer: '<a href>Why do I have this issue?</a>'
    });                    
    </script>";
            break;    
        default:
            
            break;
    }
}
?>