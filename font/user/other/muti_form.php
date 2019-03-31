<?php 
require '../../../server/server.php';
require 'check_login.php';
$id = $_SESSION['id'];
function getToken($length)
{
    $token = "";
    $codeAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    $codeAlphabet .= "0123456789";
    $max = strlen($codeAlphabet); // edited
    for ($i = 0; $i < $length; $i++) {
        $token .= $codeAlphabet[random_int(0, $max - 1)];
    }
    return $token;
}
function up_image()
{
    $ext = pathinfo(basename($_FILES["uplode_file"]["name"]), PATHINFO_EXTENSION);
    $new_taget_name = 'uplode_file' . uniqid() . "." . $ext;
    $target_path = "../../../uplode_file/";
    $upload_path = $target_path . $new_taget_name;
    $uploadOk = 1;

    $imageFileType = strtolower(pathinfo($new_taget_name, PATHINFO_EXTENSION));

    if ($_FILES["uplode_file"]["size"] > 60000000) {
        echo "Sorry, your file is too large.";
        $_SESSION['alert'] = 15;
        header("Location: ../main.php");
        exit();
        $uploadOk = 0;
    }

    // Allow certain file formats
    if ($imageFileType != "jpg" && $imageFileType != "png") {
        echo "Sorry, only JPG , PNG files are allowed.";
        $_SESSION['alert'] = 17;
        header("Location: ../main.php");
        exit();
        $uploadOk = 0;
    }

    // Check if $uploadOk is set to 0 by an error
    if ($uploadOk == 0) {
        echo "Sorry, your file was not uploaded.";
        $_SESSION['alert'] = 4;
        header("Location: ../main.php");
        exit();
    } else {
        if (move_uploaded_file($_FILES["uplode_file"]["tmp_name"], $upload_path)) {
            echo 'Move success.';
            // $_SESSION['alert'] = 3;
            return $new_taget_name;
        } else {
            echo 'Move fail';
            $_SESSION['alert'] = 4;
            exit;
        }
    }
}
$form = 0;
$sub_id = "temp";
$paper_id = getToken(10);
if (isset($_POST['form_1'])) {
    $form = 1;
    $sub_id= $_POST['sub'];
    $detail = $_POST['sub'] . "๛" . $_POST['group'];
    
} elseif (isset($_POST['form_2'])) {

    $form = 2;
    $sub_id= $_POST['sub'];
    $detail = $_POST['sub'] . "๛" . $_POST['group'] . "๛" . $_POST['type'] . "๛" . $_POST['note'] . "๛" . up_image();
    
} elseif (isset($_POST['form_3'])) {
    $form = 3;
    $sub_id= $_POST['sub'];
    $detail = $_POST['sub'] . "๛" . $_POST['group'] . "๛" . $_POST['year'] . "๛" . $_POST['note'] . "๛" . up_image();
    
} elseif (isset($_POST['form_4'])) {
    $form = 4;
    $sub_id= $_POST['sub'];
    $detail = $_POST['sub'] . "๛" . $_POST['group'] . "๛" . $_POST['type'] . "๛" . $_POST['note'] . "๛" . up_image();
   
} elseif (isset($_POST['form_5'])) {
    $form = 5;
    $sub_id= $_POST['sub'];
    $detail = $_POST['sub'] . "๛" . $_POST['group'] . "๛" . $_POST['type'] . "๛" . $_POST['note'] . "๛" . $_POST['sdate'] . "๛" . $_POST['edate'] . "๛" . up_image();
    
} elseif (isset($_POST['form_6'])) {
    $form = 6;
    $sub_id= $_POST['sub'];
    $detail = $_POST['sub'] . "๛" . $_POST['group'] . "๛" . $_POST['type'] . "๛" . $_POST['note'];
   
} elseif (isset($_POST['form_7'])) {
    $form = 7;
    $detail = $_POST['comment'] . "๛" . $_POST['group'];
   
} elseif (isset($_POST['form_8'])) {
    $form = 8;
    $detail = $_POST['topic'] . "๛" . $_POST['cont'];
   
}

if($form!=0){
    echo $form ;
    echo $sub_id;

    $sql_paper = "INSERT INTO `paper`( `paper_id`,`owner_id`, `form_id`, `paper_detail`, `step_now`, `status`) VALUES ('$paper_id', '$id','$form','$detail','1','3') ";
    if ($re_paper = mysqli_query($con, $sql_paper)) { //ถ้าเพิ่มเปเปอร์สำเร็จ
        echo " /2";
        $sql_form = "SELECT * FROM `form_way` WHERE `form_id` = '$form' AND `step` ='1' ";
        $re_form = mysqli_query($con, $sql_form);
        if($row_form = mysqli_fetch_array($re_form)){ //หา ฟรอมนั้น ๆ ในขั้นที่ 1
            echo " /3";
            $group_id = $row_form['group_id'];
            if( $sub_id!="temp"){ //ถ้าวิชาที่มีมาจากข้างต้น
                $row_group_user = mysqli_fetch_array(mysqli_query($con,"SELECT * FROM `groups` WHERE `group_id` ='$group_id' "));
                if( $row_group_user['type']=="1"){ //เช็คว่ากลุ่มในขั้นที่หนึ่งเป็นประเภทไหน 1 คือ แบบทั่วไป 2 คือ แบบเฉพาะวิชา
                    $sub_id="temp";
                    // echo $sub_id;
                }
            }
            $re_group_user_sub = mysqli_query($con,"SELECT * FROM `groups_user` WHERE `group_id` ='$group_id' AND `sub_id`='$sub_id' ");// หาผู้ใช้ในกลุ่มนั้น ๆ เพื่อกระจายเอกสารออกไป
            if($re_group_user_sub){ 
                $sum_q =' ';
                    $i = 0;
                    while ($row_form = mysqli_fetch_array($re_group_user_sub)) {
                        $group_id = $row_form['group_id'];
                        $user_id =$row_form['user_id'];
                        if($i == 0) $sum_q .= '(\'' . $paper_id . '\',\'' . $user_id . '\' )';//รอบแรกไม่มี , ข้างหน้า
                        else $sum_q .= ',(\'' . $paper_id . '\',\'' . $user_id . '\' )';//รวมคำเพื่อ Insert
                        $i++;
                    }
                    echo $sum_q;
                    $sql_user = "INSERT INTO `paper_user`( `paper_id`, `user_id`) VALUES " . $sum_q . " "; //Insert
                    if ($re_user = mysqli_query($con, $sql_user)) { //Insert สำเร็จ
                        $_SESSION['alert'] = 3;
                    } else { //Insert ไม่าำเร็จ
                        $_SESSION['alert'] = 4;
                    }
            }else{ // ไม่มีผู่ใช้ในวิชานั้น
                echo '<script> alert("ไม่มีคนในวิชานั้น ?") </script>';
                $_SESSION['alert'] = 4;
            }
        }
        else{//หา ฟรอมนั้น ๆ ในขั้นที่ 1 ไม่เจอ
           echo '<script> alert("หาไม่เจอ") </script>';
           $_SESSION['alert'] = 4;
        }
    if( $_SESSION['alert'] == 4){ //ถ้ามีปัญหาให้ลบเปเปอร์ที่เพิ่มมา
        mysqli_query($con,"DELETE FROM `paper` WHERE `paper_id` = '$paper_id' ");
        
    }    
        
    } else {//ถ้าเพิ่มเปเปอร์ไม่สำเร็จ
        $_SESSION['alert'] = 4;
    }
}

header("Location: ../main.php");
exit;
 