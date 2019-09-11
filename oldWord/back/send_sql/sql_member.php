<?php
require '../../server/server.php';
// print_r($_POST);
if(isset($_POST['register'])){
    parse_str($_POST['register'], $data);
    // print_r($data);
    $alert = 0;
    $user_id =  mysqli_real_escape_string($con, $data['user_name']);
    if(mysqli_num_rows(mysqli_query($con,"SELECT * FROM `user` WHERE user_id = '$user_id' "))==0){
        if($data['role']==1){
            if(mysqli_query($con,'INSERT INTO `user`(`user_id`, `password`, `title`, `name`, `tel`, `email`, `role`, `major_id`) VALUES (\''.$data['user_name'].'\' , \''.$data['pass'].'\',\''.$data['title'].'\',\''.$data['name'].'\',\''.$data['tel'].'\',\''.$data['email'].'\',\''.$data['role'].'\',\''.$data['mar'].'\')')){
                $alert = 1;
            }else{
                $alert = 2;
            }
        }else{
            if(mysqli_query($con,'INSERT INTO `user`(`user_id`, `password`, `title`, `name`, `tel`, `email`, `role`,`status`) VALUES (\''.$data['user_name'].'\' , \''.$data['pass'].'\',\''.$data['title'].'\',\''.$data['name'].'\',\''.$data['tel'].'\',\''.$data['email'].'\',\''.$data['role'].'\',\''.$data['rank'].'\')')){
                $alert = 1;
            }else{
                $alert = 2;
            }
        }
    }else{
        $alert = 3;
    }
    
}else if(isset($_POST['edit'])){
    parse_str($_POST['edit'], $data);
    // print_r($data);
    $alert = 0;
    $new_id = 0 ;
    $user_id =  mysqli_real_escape_string($con, $data['user_name']);
    $odd_id =$_POST['odd_id'];
    if($user_id!=$odd_id){
        $new_id = 1;
        // echo $odd_id." ". $new_id." ".$user_id;
    }
    
    if((mysqli_num_rows(mysqli_query($con,"SELECT * FROM `user` WHERE user_id = '$user_id' "))==0 && $new_id == 1) || $new_id == 0 ){
        if(isset($data['mar'])){
            if(mysqli_query($con,'UPDATE `user` SET `user_id`= \''.$data['user_name'].'\' ,`password`=\''.$data['pass'].'\',`title`=\''.$data['title'].'\',`name`=\''.$data['name'].'\',`tel`=\''.$data['tel'].'\',`email`=\''.$data['email'].'\',`major_id`=\''.$data['mar'].'\' WHERE user_id = \''.$_POST['odd_id'].'\'')){
                $alert = 4;
            }else{
                $alert = 5;
            }
        }else{
            if(mysqli_query($con,'UPDATE `user` SET `user_id`= \''.$data['user_name'].'\' ,`password`=\''.$data['pass'].'\',`title`=\''.$data['title'].'\',`name`=\''.$data['name'].'\',`tel`=\''.$data['tel'].'\',`email`=\''.$data['email'].'\',`status`=\''.$data['rank'].'\' WHERE user_id = \''.$_POST['odd_id'].'\'')){
                $alert = 4;
            }else{
                $alert = 5;
            }
        }
    }else{
      
        $alert = 3;
    }
    
}else if(isset($_POST['del'])){
    if(mysqli_query($con,'DELETE FROM `user` WHERE `user_id` = \''.$_POST['del'].'\' ')){
        $alert =6;
    }else{
        $alert =7;
    }
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
</script>";
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
        case 4:
      echo "<script>
    Swal({
        type: 'success',
        title: 'แก้ไขข้อมูลสำเร็จ',
        text: 'ข้อมูลเข้าสู่ระบบเรียบร้อย.',
        // footer: '<a href>Why do I have this issue?</a>'
    });                    
</script>";
            break;   
            case 5:
            echo "<script>
    Swal({
        type: 'error',
        title: 'แก้ไขข้อมูลไม่สำเร็จ',
        text: 'เกิดข้อผิดพลาดในการนำเข้าข้อมูล.',
        // footer: '<a href>Why do I have this issue?</a>'
    });                    
</script>";
                break;    case 6:
                echo "<script>
        Swal({
            type: 'success',
            title: 'ลบข้อมูลสำเร็จ',
            text: 'ลบข้อมูลในระบบเรียบร้อย.',
            // footer: '<a href>Why do I have this issue?</a>'
        });                    
    </script>";
                    break;  case 7:
                    echo "<script>
            Swal({
                type: 'error',
                title: 'ลบข้อมูลไม่สำเร็จ',
                text: 'เกิดข้อผิดพลาดในการลบข้อมูล.',
                // footer: '<a href>Why do I have this issue?</a>'
            });                    
        </script>";
                        break;  
    default:
        
        break;
}
?>