<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    
<script src="push.js"></script>
<script src="font/node_modules/jquery/dist/jquery.min.js"></script>
</head>
<body>
    
    <button id = "new">กดหน่อยจ่ะ</button>
    <button id = "clear">ขอล้างหน่อยนะคะ</button>
    <button id = "check">ขอเช็คหน่อยค่ะ</button>
    <p id ="show">เป็นไงน้าาา</p>
</body>
<script>
 $("#new").click(function(){
    Push.create('สวัสดีค่ะ')
 });
 $("#clear").click(function(){
    Push.clear();
 });
 $("#check").click(function(){
    $("#show").text(Push.Permission.get());
    
 });
 Push.Permission.has();
</script>
</html>