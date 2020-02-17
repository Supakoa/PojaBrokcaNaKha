<script src="{{ asset('node_modules/jquery/dist/jquery.min.js')}}"></script>
    <script src="{{ url('https://getbootstrap.com/docs/4.1/assets/js/vendor/popper.min.js')}}"></script>
    <script src="{{ asset('node_modules/bootstrap/dist/js/bootstrap.min.js')}}"></script>
    <script src="{{ asset('node_modules/sweetalert2/dist/sweetalert2.min.js')}}"></script>
    <script src="{{ url('//cdn.datatables.net/1.10.20/js/jquery.dataTables.min.js')}}"></script>



    <script>
        var coute = 0;
        $('#lang').on('click', function (e) {
            if (coute == 0) {
                $('#eng').addClass('m-1 p-1 text-light bg-dark rounded');
                $('#th').removeClass('m-1 p-1 text-light bg-dark rounded');
                coute++;
            } else {
                --coute;
                $('#eng').removeClass('m-1 p-1 text-light bg-dark rounded');
                $('#th').addClass('m-1 p-1 text-light bg-dark rounded');
            }
        });

    </script>
