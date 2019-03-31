<?php 
    // connect database
    require '../../server/server.php';
      //POST
      $name = $_POST['name'];
      $type = $_POST['type'];
      
      $sql = "INSERT INTO `groups`(`name`, `type`) VALUES ('$name','$type') ";
     if( $re_add = mysqli_query($con,$sql)){
      echo "
      <script>
          Swal({
              type: 'success',
              title: 'เพิ่มข้อมูลสำเร็จ',
              text: 'ข้อมูลเข้าสู่ระบบเรียบร้อย.',
              // footer: '<a href>Why do I have this issue?</a>'
          });                    
      </script>";
     }
     else{
      echo "
      <script>
          Swal({
              type: 'error',
              title: 'เพิ่มข้อมูลไม่สำเร็จ',
              text: 'เกิดข้อผิดพลาดในการนำเข้าข้อมูล.',
              // footer: '<a href>Why do I have this issue?</a>'
          });                    
      </script>";
     }
    //  print_r($_POST);
    //   echo($name.' : '.$type);

?>
<input type="hidden" id="alert" value = "">

<script>
a = <?php echo $alert; ?> ;
    $("#alert").val(a);
   
</script>