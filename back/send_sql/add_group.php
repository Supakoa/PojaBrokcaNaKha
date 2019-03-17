<?php 
    // connect database
    require '../../server/server.php';
      //POST
      $name = $_POST['name'];
      $type = $_POST['type'];
      
      $sql = "INSERT INTO `groups`(`name`, `type`) VALUES ('$name','$type') ";
     if( $re_add = mysqli_query($con,$sql)){
        $alert = 3;
     }
     else{
        $alert = 4;
     }
    //  print_r($_POST);
    //   echo($name.' : '.$type);

?>
<input type="hidden" id="alert" value = "">

<script>
a = <?php echo $alert; ?> ;
    $("#alert").val(a);
   
</script>