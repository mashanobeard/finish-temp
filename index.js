'use strict'

const users = [
    {
        email: "maryk01@gmail.com",
        password: '111223'
    },
    {
        email: "abd@gma",
        password: 'masha'
    },
    {
        email: "abc@gma",
        password: 'zxc'
    }
]
const inputEmail = document.getElementById('login-input')
const inputPass = document.getElementById('password-input')

const inputEmailReg = document.getElementById('login-input-reg')
const inputPassReg = document.getElementById('password-input-reg')
const inputCPass = document.getElementById('cp')

inputEmail.addEventListener('change', function () {
    if (!(inputEmail.value === '' || inputPass.value === '')) {
        buttLog.removeAttribute('disabled')

    } else {
        buttLog.setAttribute('disabled', true)
    }
})
inputPass.addEventListener('change', function () {
    if (!(inputEmail.value === '' || inputPass.value === '')) {
        buttLog.removeAttribute('disabled')
    } else {

        buttLog.setAttribute('disabled', true)
    }
})


inputEmailReg.addEventListener('change', function () {
    if (!(inputEmailReg.value === '' || inputPassReg.value === '' || inputCPass.value === '')) {
        buttReg.removeAttribute('disabled')

    } else {
        buttReg.setAttribute('disabled', true)
    }
})
inputPassReg.addEventListener('change', function () {
    if (!(inputEmailReg.value === '' || inputPassReg.value === '' || inputCPass.value === '')) {
        buttReg.removeAttribute('disabled')
    } else {

        buttReg.setAttribute('disabled', true)
    }
})
inputCPass.addEventListener('change', function () {
    if (!(inputEmailReg.value === '' || inputPassReg.value === '' || inputCPass.value === '')) {
        buttReg.removeAttribute('disabled')
    } else {

        buttReg.setAttribute('disabled', true)
    }
})


buttLog.onclick = function () {
    let login = document.getElementById('login-input').value
    let password = document.getElementById('password-input').value
    let validLogin = 0;
    let validPass = 0;
    let form = 0;
    for (let i = 0; i < users.length; i++) {
        if (login.indexOf('@') == -1) {
            alert('Неверная форма логина')
            form += 1
            break
        } else if (users[i].email !== login) {
            continue
        }
        if (users[i].password !== password) {
            validPass += 1
            alert('Неверный пароль')
            break
        } else {
            alert('Добро пожаловать')
            validLogin += 1
            const main = document.getElementsByClassName('menu')
            const main1 = document.getElementsByClassName('main')
            main[0].style.display = "flex"
            main1[0].style.display = "flex"
            let log = document.getElementsByClassName('login')
            log[0].style.display = 'none'
            m.style.color = 'pink'
            c.style.color = 'white'
            mp.style.color = 'black'
            q.style.color = 'white'
            break
        }

    }
    if (form == 0) {
        if (validPass !== 0) {
        } else if (validLogin == 0) {
            alert('Неверный логин')
        }
    }
}
function registration() {
    let log = document.getElementsByClassName('login')
    let reg = document.getElementsByClassName('registration')
    reg[0].style.display = 'flex'
    log[0].style.display = 'none'


}
let k = function login() {
    let log = document.getElementsByClassName('login')
    let reg = document.getElementsByClassName('registration')
    reg[0].style.display = 'none'
    log[0].style.display = 'flex'

}
buttReg.onclick = function () {
    let login = document.getElementById('login-input-reg').value
    let passw = document.getElementById('password-input-reg').value
    let cp = document.getElementById('cp').value
    console.log(login)
    console.log(passw)
    console.log(cp)
    let validLogin = 0
    for (let i = 0; i < users.length; i++) {
        if (login.indexOf('@') == -1) {
            alert('Неверная форма логина')
            validLogin += 1
            break
        }
        if (users[i].email == login) {
            validLogin += 1
            alert('Логин существует')
            break
        }
    }
    if (validLogin == 0) {
        if (passw == cp) {
            users.push({
                email: login,
                password: passw
            })
            alert('Вы зарегестрированы!')
            const main = document.getElementsByClassName('menu')
            const main1 = document.getElementsByClassName('main')
            main[0].style.display = "flex"
            main1[0].style.display = "flex"
            let reg = document.getElementsByClassName('registration')
            reg[0].style.display = 'none'
            m.style.color = 'black'
            c.style.color = 'white'
            mp.style.color = 'white'
            q.style.color = 'white'
        } else {
            alert('Пароли не совпадают')
        }


    }
}

function back() {
    const mune = document.getElementsByClassName('menu')
    mune[0].style.display = "none"
    let log = document.getElementsByClassName('login')
    log[0].style.display = 'flex'
    const contacts = document.getElementsByClassName('contacts')
    const main = document.getElementsByClassName('main')
    main[0].style.display = 'none'
    contacts[0].style.display = 'none'
    map.style.display = 'none'
}


const MyMap = document.getElementById('map')
const contacts = document.getElementsByClassName('contacts')
const main = document.getElementsByClassName('main')
let head = document.createElement('h1')
let mainTxt = document.createElement('p')
head.innerHTML = "Добро пожаловать"
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    mainTxt = "Вы используете мобильное устройство"
} else {
    mainTxt = "Вы используете компьютер"
}

main[0].append(head)
main[0].append(mainTxt)
main[0].style.display = 'none'
let m = document.getElementById('nav-main')
let c = document.getElementById('nav-cont')
let mp = document.getElementById('nav-map')
let q = document.getElementById('nav-logout')
function mainSection() {

    m.style.color = 'black'
    c.style.color = 'white'
    mp.style.color = 'white'
    q.style.color = 'white'
    main[0].style.display = 'flex'
    contacts[0].style.display = 'none'
    MyMap.style.display = 'none'
}




const cont = document.getElementsByClassName('contacts-table')
let n = 0;
async function getData() {
    n += 1
    main[0].style.display = 'none'
    contacts[0].style.display = 'block'
    cont[0].style.display = 'block'
    MyMap.style.display = 'none'

    m.style.color = 'white'
    c.style.color = 'black'
    mp.style.color = 'white'
    q.style.color = 'white'
    if (n == 1) {
        console.log(n)
        contacts[0].style.display = 'block'
        main[0].style.display = 'none'
        const result = await fetch('https://gist.githubusercontent.com/oDASCo/3f4014d24dc79e1e29b58bfa96afaa1b/raw/677516ee3bd278f7e3d805108596ca431d00b629/db.json ')
        const data = await result.json();
        let info = document.createElement('div');
        info.setAttribute('class', 'info');
        let numOfMen = 0;
        let numOfWomen = 0;

        let max = 0;
        let cur = 0;
        let NumberOfMax = 0;
        for (let i = 0; i < data.length; i++) {
            if (data[i].gender == 'female') {
                numOfWomen += 1
            } else if (data[i].gender == 'male') {
                numOfMen += 1
            }
            cur = data[i].balance
            cur = cur.replace(/,/g, '')
            cur = cur.replace('$', '');
            cur = Number(cur)
            if (cur > max) {
                max = cur;
                NumberOfMax = i;
            }
        }


        let mof = document.createElement('div');
        let now = document.createElement('div');
        let bl = document.createElement('div');
        mof.innerHTML = `Number of men:${numOfMen} `
        now.innerHTML = `Number of woman:${numOfWomen} `
        bl.innerHTML = `Max balance:${data[NumberOfMax].balance} `
        info.append(mof)
        info.append(now)
        info.append(bl)
        contacts[0].prepend(info)
        let table = document.createElement('table')

        let tr1 = document.createElement('tr')
        const name = document.createElement('td')
        name.innerHTML = `Name`
        const company = document.createElement('td')
        company.innerHTML = `Company`
        const email = document.createElement('td')
        email.innerHTML = `Email`
        const phone = document.createElement('td')
        phone.innerHTML = `Phone`
        const balance = document.createElement('td')
        balance.innerHTML = `Balance`
        const registered = document.createElement('td')
        registered.innerHTML = `Registered`
        const buttonTable = document.createElement('td')
        buttonTable.innerHTML = `Button`
        tr1.append(name)
        tr1.append(company)
        tr1.append(email)
        tr1.append(phone)
        tr1.append(balance)
        tr1.append(registered)
        tr1.append(buttonTable);
        table.append(tr1)
        tr1.style.border = '1px solid #000'
        name.style.border = '1px solid #000'
        company.style.border = '1px solid #000'
        email.style.border = '1px solid #000'
        phone.style.border = '1px solid #000'
        balance.style.border = '1px solid #000'
        registered.style.border = '1px solid #000'
        buttonTable.style.border = '1px solid #000'


        for (let i = 0; i < data.length; i++) {


            let tr = document.createElement('tr')
            table.append(tr);
            let td1 = document.createElement('td')
            td1.innerHTML = `${data[i].name}`
            tr.append(td1)
            let td2 = document.createElement('td')
            td2.innerHTML = `${data[i].company}`
            tr.append(td2)
            let td3 = document.createElement('td')
            td3.innerHTML = `${data[i].email}`
            tr.append(td3)
            let td4 = document.createElement('td')
            td4.innerHTML = `${data[i].phone}`
            tr.append(td4)
            let td5 = document.createElement('td')
            td5.innerHTML = `${data[i].balance}`
            tr.append(td5)
            let td6 = document.createElement('td')
            td6.innerHTML = `${data[i].registered}`
            tr.append(td6)
            let button = document.createElement('button')
            button.innerHTML = "Delete"
            button.onclick = function () {
                let del = confirm('Вы уверены что хотите удалить элемент?');
                console.log(del)
                if (del == true) {
                    tr.remove()
                }

            }
            tr.append(button)

            if (data[i].isActive == false) {
                tr.style.backgroundColor = 'lightpink'
            }
            tr.style.border = '1px solid #000'
            td1.style.border = '1px solid #000'
            td2.style.border = '1px solid #000'
            td3.style.border = '1px solid #000'
            td4.style.border = '1px solid #000'
            td5.style.border = '1px solid #000'
            td6.style.border = '1px solid #000'
        }

        cont[0].append(table)
        const buttonRefreshe = document.createElement('button')
        buttonRefreshe.innerHTML = 'Refresh'

        buttonRefreshe.onclick = function () {
            {
                table.remove()
                info.remove()
                buttonRefreshe.remove()
                n = 0
                getData()
            }

        }
        contacts[0].append(buttonRefreshe)
        table.setAttribute('class', 'table')
    }

}