<div class="card p-0 m-0">
    <div class="card-header text-center bg-header">
        <h4 class="text-light">ค้นหาสมาชิก</h4>
    </div>
    <div class="card-body">
        <div class="row justify-content-end">
            <div class="col-md-5">
                <div class="input-group mb-3 w-75 float-right">
                    <input type="text" class="form-control border-right-0 boder-greenBlue txt-greenblue"
                        placeholder="SEARCH" aria-label="SEARCH" aria-describedby="button-addon2">
                    <div class="input-group-append ">
                        <button class="btn btn-outline-info border-left-0" type="button" id="button-addon2"><i
                                class="fas fa-search"></i></button>
                    </div>
                </div>

                <div class="input-group mb-3 w-50 float-right">
                    <select class="custom-select boder-greenBlue txt-greenblue" id="inputGroupSelect02">
                        <option selected>กรองสถานะ</option>
                        <option value="1">รหัสผู้ใช้</option>
                        <option value="2">รหัสผ่าน</option>
                        <option value="3">ชื่อ - นามสกุล</option>
                        <option value="4">ตำแหน่ง</option>
                        <option value="5">อีเมล</option>
                        <option value="6">เบอร์โทร</option>
                        <option value="7">คณะ</option>
                        <option value="8">สาขา</option>
                    </select>
                </div>
            </div>
        </div>
 <div  name=“body” style="display:flex">
        <div name=“menuLeft” style="width:20%;">

            <a href ="www.google.co.th" > HTML HOME</a>
            <p name=“item2” > HTML Introduction</p>
            <p name=“item3” > HTML Editors</p>
            <p name=“item4” > HTML Basic</p>
            <p name=“item5” > HTML Elements</p>
            <p name=“item6” >HTML Attributes </p>

        </div>

        <div name=“content” style="width:80%;margin:auto">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTOaUknt27tmuFnQaGOd7w4YpNC1BrYKbKa2zRkor4YjgDiDm5n" />

            <h1> Web Browsers </h1>
            <p>The purpose of a web browser (Chrome, Edge, Firefox, Safari) is to read HTML documents and display them. </p>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSo6R1jlklE1Ae1FZ-59lTrW1uzvLmxTSRzMxxmG7dB2vn_j9_y" />
        </div>
        <div class="table-responsive">
            <table class="table txt-greenblue table-hover">
                <thead class="table-info">
                    <tr class="text-center">
                        <th>รหัสผู้ใช้</th>
                        <th>รหัสผ่าน</th>
                        <th>ชื่อ - นามสกุล</th>
                        <th>ตำแหน่ง</th>
                        <th>อีเมล</th>
                        <th>เบอร์โทร</th>
                        <th>คณะ</th>
                        <th>สาขา</th>
                        <th>
                            <button class="btn shadow btn-info rounded-circle" type="button" data-toggle="modal"
                                data-target="#exampleModalScrollable">
                                <i class="fas fa-plus    "></i>
                            </button>
                        </th>
                    </tr>
                </thead>
                <tbody class="nowrap">
                    <tr>
                        <td>59122519032</td>
                        <td>Somsainaja</td>
                        <td>นายสมชาย สุดกล้าหาญ</td>
                        <td>นักศึกษา</td>
                        <td>somsai@gmail.com</td>
                        <td>0922359402</td>
                        <td>เทคโนโลยีอุสาหกรรม</td>
                        <td>วิศวะกรรมคอมพิวเตอร์</td>
                        <td class="d-flex">
                            <button class="btn btn-outline-secondary m-1">
                                <i class="fas fa-pencil-alt"></i>
                            </button>

                            <button class="btn btn-outline-danger m-1">
                                <i class="fa fa-trash" aria-hidden="true"></i>
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</div>


{{--Modal Add --}}
<div class="modal fade" id="exampleModalScrollable" data-backdrop="static" tabindex="-1" role="dialog"
    aria-labelledby="exampleModalScrollableTitle" aria-hidden="true">
    <div class="modal-dialog modal-dialog-scrollable modal-lg" role="document">
        <div class="modal-content container">
            <div class="modal-header" style="border-bottom-color:#639CB4">
                <h5 class="modal-title txt-greenblue" id="exampleModalScrollableTitle">เพิ่มข้อมูล</h5>
                <button type="button" class="close txt-greenblue" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body txt-greenblue">
                <form action="{{url('/admin/users')}}" method="post" id ="regis">
                    @method('POST')
                    @csrf
                    @include('Incudes.registerFormInc')
                </form>
            </div>
            <div class="modal-footer" style="border-top-color:#639CB4">
                <button  type="submit" form="regis" class="btn btn-info m-auto">เพิ่ม</button>
            </div>
        </div>
    </div>
</div>

{{--Modal Edit --}}


