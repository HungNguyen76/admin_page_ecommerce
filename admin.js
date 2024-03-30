const adminInfo = {
    "username": "admin",
    "pass": "123456"
}

localStorage.setItem("admin", JSON.stringify(adminInfo))

window.onload = function () {
    addEventChangeTab();

    if (localStorage.getItem('admin')) {
        addTableKhachHang()
        openTab('HomePage')
    } else {
        document.body.innerHTML = `<h1 style="color:red; with:100%; text-align:center; margin: 50px;"> Access is denied.. </h1>`;
    }
}

const listUserLogin = [
    {
        donhang: [],
        email: "hung@gmail.com",
        ho: "Nguyen",
        off: false,
        pass: "123456",
        products: [],
        ten: "MinhHung",
        username: "Minhu"
    }
]
localStorage.setItem("ListUsers", JSON.stringify(listUserLogin))

function getListUser() {
    const data = JSON.parse(localStorage.getItem('ListUsers')) || []
    const listUsers = []
    for (const user of data) {
        listUsers.push(user)
    }
    return listUsers
}

function addEventChangeTab() {
    var sidebar = document.getElementsByClassName("sidebar")[0]
    var list_a = sidebar.getElementsByTagName('a')
    for (var a of list_a) {
        console.log(a)
        if (!a.onclick) {
            a.addEventListener('click', function () {
                turnOff_Active()
                this.classList.add('active')
                var tab = this.childNodes[0].data.trim()
                // console.log("tab", tab)
                openTab(tab)
            })
        }
    }
    // console.log(list_a)
}
function turnOff_Active() {
    var sidebar = document.getElementsByClassName('sidebar')[0];
    var list_a = sidebar.getElementsByTagName('a');
    for (var a of list_a) {
        a.classList.remove('active');
    }
}

function openTab(nameTab) {
    var main = document.getElementsByClassName('main')[0].children
    for (var el of main) {
        el.style.display = 'none'
    }
    switch (nameTab) {
        case 'Users': document.getElementsByClassName('khachang')[0].style.display = 'block';
            break;
        case 'Products': document.getElementsByClassName('donhang')[0].style.display = 'block';
            break;
    }
}

function addTableKhachHang() {
    var tc = document.getElementsByClassName('khachang')[0].getElementsByClassName('table-content')[0]
    console.log("tableContent", tc)

    var s = `<table class="table-outline hideImg">`
    var listUser = getListUser()
    console.log("listUser", listUser)
    for (var i = 0; i < listUser.length; i++) {
        var u = listUser[i]
        s += `
        <tr>
            <td style="width: 5%">` + (i + 1) + `</td>
            <td style="width: 15%">` + u.ho + ' ' + u.ten + `</td>
            <td style="width: 20%">` + u.email + `</td>
            <td style="width: 20%">` + u.username + `</td>
            <td style="width: 10%">` + u.pass + `</td>
            <td style="width: 10%">
                <div class="tooltip">
                    <button onclick="deleteUser('`+ u.username + `')">Delete</i>
                </div>
            </td>
        </tr>`
    }
    s += `</table>`
    tc.innerHTML = s
}

function setListUser(l) {
    window.localStorage.setItem('ListUsers', JSON.stringify(l));
}

function deleteUser(account) {
    if (window.confirm('Confirm delete all "' + account + '" Account ?')) {
        var listUser = getListUser()
        for (var i = 0; i < listUser.length; i++) {
            console.log("listUser[i].username", listUser[i].username)
            console.log("account", account)
            if (listUser[i].username == account) {
                listUser.splice(i, 1)
                setListUser(listUser)
                addTableKhachHang()
                return
            }
        }
    }
}
