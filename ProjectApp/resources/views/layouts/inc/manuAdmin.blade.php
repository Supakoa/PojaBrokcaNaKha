<div id="mySidenav" class="sidenav">
    <div class="w-100 text-center">
        <img src="{{url('images/logo.png')}}" width="50" height="50" class="m-auto d-inline-block border-left-0 border-right-0 border-bottom border-info p-0" alt="">
    </div>
    {{-- <span window.location.href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</span> --}}
    <a href="{{url('/admin/index')}}"><i class="fa fa-home" aria-hidden="true"></i> หน้าแรก</a>
    <a href="{{url('/admin/mail')}}"><i class="fas fa-envelope-open"></i> ข้อความ</a>
    <a href="{{url('/admin/document')}}"><i class="fas fa-folder"></i> เอกสาร</a>
    <a href="{{url('/admin/users')}}"><i class="fa fa-users" aria-hidden="true"></i> สมาชิก</a>
    <a href="{{url('/admin/news')}}"><i class="fas fa-newspaper"></i> หน้าข่าว</a>
    <a href="{{url('/admin/steps')}}"><i class="fas fa-stream"></i> ขั้นตอนเอกสาร</a>
</div>
