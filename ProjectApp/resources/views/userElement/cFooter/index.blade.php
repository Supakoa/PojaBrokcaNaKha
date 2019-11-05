<div class="mt-3">
    <div class="card">
        <div class="card-herader bg-greenblue p-2">
            <h4 class="text-light text-center">ติดต่อเจ้าหน้าที่</h4>
        </div>
        <div class="card-body bg-info">
            <div class="p-3 bg-light rounded">
                <div class="row">
                    <div class="col-md-4">
                        <button class="btn btn-info text-light" type="button" data-toggle="modal"
                            data-target="#modalCreate">
                            ส่งข้อความ <i class="fas fa-comment-dots"></i>
                        </button>
                    </div>
                    <div class="col-md-8">
                        <div class="row justify-content-end ">
                            <div class="col-md-12">
                                <div class="input-group mb-3 w-50 float-right">
                                    <input type="text"
                                        class="form-control border-right-0  boder-greenBlue txt-greenblue"
                                        placeholder="SEARCH" aria-label="SEARCH" aria-describedby="button-addon2">
                                    <div class="input-group-append ">
                                        <button class="btn btn-outline-info border-left-0" type="button"
                                            id="button-addon2"><i class="fas fa-search"></i></button>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-12">
                                <div class="input-group mb-3 float-right" style="width:20%">
                                    <select class="custom-select boder-greenBlue txt-greenblue" id="inputGroupSelect02">
                                        <option value="1">10</option>
                                        <option value="2">25</option>
                                        <option value="3">50</option>
                                        <option value="4">75</option>
                                        <option value="5">100</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="table-responsive">
                    <table class="table table-hover txt-greenblue">
                        <thead>
                            <tr class="text-center">
                                <th>
                                    สถานะ
                                </th>
                                <th>
                                    เวลาส่ง
                                </th>
                                <th>
                                    เรื่อง
                                </th>
                                <th>
                                    ข้อความ
                                </th>
                                <th>
                                    ส่งถึง
                                </th>
                            </tr>
                        </thead>
                        <tbody class=" txt-greenblue text-center">
                            <tr>
                                <td>
                                    <span class="badge badge-pill unRead">
                                        ยังไม่ได้อ่าน
                                    </span>
                                </td>
                                <td>
                                    2019-01-18 14 : 20 :47
                                </td>
                                <td>
                                    เลือกแบบคำร้องไม่ถูกครับ
                                </td>
                                <td>
                                    <button class="btn btn-info" type="button" data-toggle="modal"
                                    data-target="#modalRead">
                                        เจ้าหน้าที่
                                    </button>
                                </td>
                                <td>
                                    เจ้าหน้าที่
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <span class="badge badge-pill read">
                                        อ่านแล้ว
                                    </span>
                                </td>
                                <td>
                                    2019-01-17 18 : 33 : 24
                                </td>
                                <td>
                                    แนบเอกสารลากิจ
                                </td>
                                <td>
                                    <button class="btn btn-info" type="button" data-toggle="modal">
                                        เจ้าหน้าที่
                                    </button>
                                </td>
                                <td>
                                    เจ้าหน้าที่
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <hr class="boder-greenBlue">
                    <div class="row">
                        <div class="col-md-4">
                            <span class="txt-greenblue">SHOWING 1 TO 2 OF 2 ENTRIES</span>
                        </div>
                        <div class="col-md-8 ">
                            <ul class="pagination float-right ">
                                <li class="page-item disabled">
                                    <a class="page-link bg-info text-light" href="#" tabindex="-1"
                                        aria-disabled="true">Previous</a>
                                </li>
                                <li class="page-item"><a class="page-link txt-greenblue" href="#">1</a></li>
                                <li class="page-item" aria-current="page">
                                    <a class="page-link txt-greenblue" href="#">2 <span
                                            class="sr-only">(current)</span></a>
                                </li>
                                <li class="page-item"><a class="page-link txt-greenblue" href="#">3</a></li>
                                <li class="page-item">
                                    <a class="page-link bg-info text-light" href="#">Next</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>


{{-- Modal --}}
{{-- Modal create message --}}
<div class="modal fade" id="modalCreate" tabindex="-1" role="dialog" aria-labelledby="modalCreateTitle"
    aria-hidden="true">
    <div class="modal-dialog modal-dialog-scrollable" role="document">
        <div class="modal-content container">
            <div class="modal-header">
                <h5 class="modal-title txt-greenblue" id="modalCreateTitle">ติดต่อเจ้าหน้าที่</h5>
                <button type="button" class="close txt-greenblue" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <form action="">
                    <div class="form-group">
                        <label for="exampleFormControlInput1">Email address</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1"
                            placeholder="name@example.com">
                    </div>
                    <div class="form-group">
                        <label for="exampleFormControlTextarea1">Example textarea</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                </form>
            </div>
            <div class="modal-footer border-0">
                <button type="button" class="btn btn-info btn-sm text-light">
                    ส่งข้อความ <i class="fas fa-comment-dots"></i>
                </button>
            </div>
        </div>
    </div>
</div>

{{-- Modal Read --}}
<div class="modal fade" id="modalRead" tabindex="-1" role="dialog" aria-labelledby="modalReadTitle"
    aria-hidden="true">
    <div class="modal-dialog modal-dialog-scrollable" role="document">
        <div class="modal-content container">
            <div class="modal-header">
                <h5 class="modal-title txt-greenblue" id="modalReadTitle">เจ้าหน้าที่</h5>
                <button type="button" class="close txt-greenblue" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">

            </div>
        </div>
    </div>
</div>

