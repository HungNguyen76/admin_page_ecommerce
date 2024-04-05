
// Khởi tạo tài khoản Admin
var adminInfo = [{
    "username": "admin",
    "pass": "123456"
}];

// Hàm get set cho danh sách người dùng
function getListUser() {
    var listUserStorage = JSON.parse(window.localStorage.getItem('ListUser')) || []
    var listUser = [];
    for (var user of listUserStorage) {
        listUser.push(user);
    }
    return listUser;
}

function equalUser(user1, user2) {
	return (user1.username == user2.username && user1.pass == user2.pass);
}

function logIn(form) {
    var name = form.username.value;
    var pass = form.pass.value;
    var newUser = { "username": name, "pass": pass }

    // Lấy dữ liệu từ danh sách người dùng localstorage
    var listUser = getListUser();

    // Kiểm tra xem dữ liệu form có khớp với người dùng nào trong danh sách ko
    for (var u of listUser) {
        if (equalUser(newUser, u)) {
            setCurrentUser(u);
            // Reload lại trang -> sau khi reload sẽ cập nhật luôn giỏ hàng
            location.reload();
            return false;
        }
    }

    // Đăng nhập vào admin
    for (var ad of adminInfo) {
        if (equalUser(newUser, ad)) {
            alert('Welcome back Admin!');
            window.localStorage.setItem('admin', true);
            window.location.href = "../admin/admin.html"
            return false;
        }
    }

    // Trả về thông báo nếu không khớp
    alert('Enter wrong name or password !!!');
    form.username.focus();
    return false;
}
