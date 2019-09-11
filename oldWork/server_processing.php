<?php
//ชื่อตาราง
$table = <<<EOT
(
   SELECT student.std_id as std_std_id,student.name ,student_room.std_id,student_room.student_room_id as room ,student_room.room_detail_id as room_id,student_room.seat FROM student,student_room
) temp
EOT;
// $table = 'student';
//ชื่อคีย์หลัก
$primaryKey = 'std_std_id';
//ข้อมูลอะเรที่ส่งป datables
$columns = array(
  array( 'db' => 'std_std_id', 'dt' => 0 ),
  array( 'db' => 'name',  'dt' => 1 ),
  array( 'db' => 'room',  'dt' => 2 ),
  array( 'db' => 'seat',  'dt' => 3 ),
  array(
    'db'        => 'std_std_id',
    'dt'        => 4,
    'formatter' => function( $d, $row ) {
        return '<button onclick = \'alert("'.$d.'")\'>gogogo</button>';
    }
)
  );

  //เชื่อต่อฐานข้อมูล
  $sql_details = array(
    'user' => 'root',
    'pass' => '',
    'db'   => 'ge_exam',
    'host' => 'localhost'
  );
  // เรียกใช้ไฟล์ spp.class.php
  require( 'ssp.class.php' );

//ส่งข้อมูลกลับไปเป็น JSON โดยข้อมูลถูกดึงมาจากการเรียกใช้ class ssp
  echo json_encode(
      SSP::complex( $_GET, $sql_details, $table, $primaryKey, $columns, null, 'std_std_id = std_id AND room_id = \'RDFXSNZMHUZR\' '  )
  );
 
  ?>