<div class="card ">
    <div class="card-header border-bottom-greenblue" id="headingThree">
        <h2 class="mb-0">
            <button class="btn txt-greenblue collapsed" type="button" data-toggle="collapse" data-target="#paperThree"
                aria-expanded="false" aria-controls="paperThree">
                <span><img src="{{url('images/Untitled_Artwork.png')}}" width="20" height="20" alt=""></span>
                แบบคำร้องข้อแก้ไขผลการเรียน
            </button>
        </h2>
    </div>
    <div id="paperThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
        <div class="card-body">
            <form action="" class="w-100">
                <div class="row">
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="subject3" class="txt-greenblue">วิชา</label>
                            <select class="form-control boder-greenBlue txt-greenblue" id="subject3">
                                <option selected disabled>เลือกิวชา</option>
                                <option>GEH0101</option>
                                <option>GEH0102</option>
                                <option>GEL0101</option>
                                <option>GEL0102</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="forms-group">
                            <label for="studyGroup3" class="txt-greenblue">กลุ่มเรียน</label>
                            <input type="text" class="form-control boder-greenBlue txt-greenblue" id="studyGroup3"
                                placeholder="กลุ่มเรียน">
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="year3" class="txt-greenblue">ปีการศึกษา</label>
                            <select class="form-control boder-greenBlue txt-greenblue" id="year3">
                                <option selected disabled>เลือกปีการศึกษา</option>
                                <option>1/2562</option>
                                <option>2/2562</option>
                                <option>1/2561</option>
                                <option>2/2561</option>
                                <option>1/2560</option>
                                <option>2/2560</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="forms-group">
                            <label for="comment3" class="txt-greenblue">หมายเหตุ</label>
                            <input type="text" class="form-control boder-greenBlue txt-greenblue" id="comment3"
                                placeholder="สาเหตุการลา">
                        </div>
                    </div>
                    <div class="col-md-6">
                        <label for="inputfile3" class="txt-greenblue">หลักฐานสาเหตุ</label>
                        <div class="input-group">
                            <div class="custom-file">
                                <input type="file" class="custom-file-input boder-greenBlue" id="inputfile3"
                                    aria-describedby="inputGroupFile">
                                <label class="custom-file-label txt-greenblue" for="inputfile3">Choose
                                    file</label>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
            <button class="btn btn-info p-1 m-3 float-right btn-sm">
                ส่งแบบคำร้อง
            </button>
        </div>
    </div>
</div>
