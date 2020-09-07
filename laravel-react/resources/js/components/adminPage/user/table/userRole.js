export const userRole = _role => {
    switch (Number(_role)) {
        case 1:
            return "ผู้ดูแลระบบ";
        case 2:
            return "อาจารย์ ผู้ตรวจ";
        case 3:
            return "นักศึกษา";
        default:
            return "ไม่มีตำแหน่งกำหนด";
    }
};
