// Khởi tạo tài khoản Admin
var adminInfo = [{
    "username": "admin",
    "pass": "123456"
}];

// Hàm get set cho danh sách người dùng
function getListUser() {
    var data = JSON.parse(window.localStorage.getItem('ListUser')) || []
    var l = [];
    for (var d of data) {
        l.push(d);
    }
    return l;
}

function equalUser(u1, u2) {
	return (u1.username == u2.username && u1.pass == u2.pass);
}

function logIn(form) {
    console.log('vafo');
    // form.preventDefault();
    // Lấy dữ liệu từ form
    var name = form.username.value;
    var pass = form.pass.value;
    console.log("pass")
    var newUser = new User(name, pass);

    // Lấy dữ liệu từ danh sách người dùng localstorage
    var listUser = getListUser();
    console.log("listUser", listUser)
    // Kiểm tra xem dữ liệu form có khớp với người dùng nào trong danh sách ko
    // for (var u of listUser) {
    //     if (equalUser(newUser, u)) {
    //         if(u.off) {
    //             alert('This account is locked by Admin. Can not login!!');
    //             return false;
    //         }

    //         setCurrentUser(u);

    //         // Reload lại trang -> sau khi reload sẽ cập nhật luôn giỏ hàng
    //         location.reload();
    //         return false;
    //     }
    // }

    // Đăng nhập vào admin
    // for (var ad of adminInfo) {
    //     if (equalUser(newUser, ad)) {
    //         alert('Welcome back Admin!');
    //         window.localStorage.setItem('admin', true);
    //         window.location.href = "../admin/admin.html"
    //         return false;
    //     }
    // }

    // Trả về thông báo nếu không khớp
    alert('Enter wrong name or password !!!');
    form.username.focus();
    // return false;
}