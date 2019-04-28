<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>bootstrap4</title>
    <script src="https://code.jquery.com/jquery-3.4.0.min.js"></script>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/summernote/0.8.11/summernote-lite.css" rel="stylesheet">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/summernote/0.8.11/summernote-lite.js"></script>
</head>

<body>
    <div id="summernote"></div>
    <p id="show">test</p>
    <script>
        //   $('#summernote').summernote({
        //     placeholder: 'Hello bootstrap 4',
        //     tabsize: 2,
        //     height: 100
        //   });

          // summernote.keyup
            $('#summernote').on('summernote.change', function(we, e) {
                var markupStr = $('#summernote').summernote('code');
            $('#show').text(markupStr);
            // console.log('Key is released:', e.keyCode);
            });

        $('#summernote').summernote({
            height: 200,
            callbacks: {
                onImageUpload: function (files, editor, welEditable) {
                    sendFile(files[0], editor, welEditable);
                }
            }
        });

        function sendFile(file, editor, welEditable) {
            data2 = new FormData();
            data2.append("file", file);
            $.ajax({
                data: data2,
                type: 'post',
                url: 'test_up_img.php',
                cache: false,
                contentType: false,
                processData: false,
                success: function (url) {
                    $('#summernote').summernote('insertImage', url);
                    // editor.insertImage(welEditable, url);
                }
            });
        }
    </script>
</body>

</html>