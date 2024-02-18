const name = document.querySelector('#name');
const surName = document.querySelector('#surName')
const age = document.querySelector('#age');
const phoneNumber = document.querySelector('#phoneNumber')
const email = document.querySelector('#email');
const nat = document.getElementById('nationality');
const desc = document.getElementById('desc');
const password = document.getElementById('password');
const form = document.getElementById('form');
const button = document.querySelector('#button');
const wrapper = document.getElementById('wrapper');
const Delite = document.getElementById('Delite');
const Remove = document.querySelector('#Remove__btn');

function validate(name, age, email, nat, desc, password, surName, phoneNumber) {
    if (!name.value) {
        alert('Name kiritish shart');
        name.focus();
        name.style.outlineColor = 'red';
        return false;
    } else {
        name.style.outlineColor = 'black'
    };

    if (name.value.trim().length < 3) {
        alert('Name kamida 3ta belgidan iborat bolishi shart');
        name.focus();
        name.style.outlineColor = 'red';
        return false;

    } else {
        name.style.outlineColor = 'black'
    };

    if (Number(name.value[0])) {
        alert('Name raqamdan boshlanmaydi');
        name.focus();
        name.style.outlineColor = 'red';
        return false
    } else {
        name.style.outlineColor = 'black'
    };


    if (!surName.value) {
        alert('surname kiritish shart');
        surName.focus();
        surName.style.outlineColor = 'red';
        return false;
    } else {
        surName.style.outlineColor = 'black'
    };

    if (surName.value.trim().length < 5) {
        alert('surname kamida 3ta belgidan iborat bolishi shart');
        surName.focus();
        surName.style.outlineColor = 'red';
        return false;

    } else {
        surName.style.outlineColor = 'black'
    };

    if (Number(surName.value[0])) {
        alert('Surname raqamdan boshlanmaydi');
        surName.focus();
        surName.style.outlineColor = 'red';
        return false
    } else {
        surName.style.outlineColor = 'black'
    }


    if (!age.value) {
        alert('Age kiritish shart');
        surName.focus();
        surName.style.outlineColor = 'red';
        return false;
    } else {
        surName.style.outlineColor = 'black'
    };

    if (age.value == 0 || age.value > 200) {
        alert('Age bunday bolmaydi');
        age.facus();
        age.style.outlineColor = 'red';

        return false;
    } else {
        age.style.outlineColor = 'black'
    }


    if (!email.value) {
        alert('email kiritish shart');
        email.focus();
        email.style.outlineColor = 'red';
        return false;
    } else {
        email.style.outlineColor = 'black'
    };

    if (email.email == /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) {
        alert('email ni boshqalatdan kiriting');
        email.focus();
        email.style.outlineColor = 'red';
    } else {
        email.style.outlineColor = 'black'
    };

    if (Number(email.value[0])) {
        alert('Surname raqamdan boshlanmaydi');
        email.focus();
        email.style.outlineColor = 'red';
        return false
    } else {
        email.style.outlineColor = 'black'
    };


    if (phoneNumber.value.trim().length != 12) {
        alert("belgilar soni notogri");
        phoneNumber.focus();
        phoneNumber.style.outlineColor = "red";
        return false;
      } else {
        phoneNumber.style.outlineColor = "black";
      }
    
      if (phoneNumber.value.substring(0, 3) != "998") {
        alert("Telefon raqam formati notogri");
        phoneNumber.focus();
        phoneNumber.style.outlineColor = "red";
        return false;
      } else {
        phoneNumber.style.outlineColor = "black";
      }
    
      if (!Number(phoneNumber.value.substring(1))) {
        alert("Telefon raqam notogri kiritildi");
        phoneNumber.focus();
        phoneNumber.style.outlineColor = "red";
        return false;
      } else {
        phoneNumber.style.outlineColor = "black";
      }

    if (password.value.length != 8) {
        alert('password 8 ta belgidan tashkil topgan bolishi kerak');
        password.focus();
        password.style.outlineColor = 'red';
        return false
    } else {
        password.style.outlineColor = 'black'
    };

    if (!password.value) {
        alert('Password kiritish shart');
        password.focus();
        password.style.outlineColor = 'red';
        return false;
    } else {
        password.style.outlineColor = 'black'
    };

    return true;
}

function getData() {
    let users = [];
    if (localStorage.getItem('users')) {
        users = JSON.parse(localStorage.getItem('users'))
    }
    return users;
}

button && button.addEventListener('click', function (e) {
    e.preventDefault();


    if (validate(name, age, email, nat, desc, password, surName, phoneNumber)) {
        const user = {
            name: name.value,
            surName: surName.value,
            age: age.value,
            phoneNumber: phoneNumber.value,
            email: email.value,
            nat: nat.value,
            desc: desc.value,
            password: password.value,
        }


        let u = getData();
        u.push(user)
        localStorage.setItem('users', JSON.stringify(u));



        form.reset();

        let card = createCard(user);
        wrapper.innerHTML += card;

    } else {
        console.log('validatsiyadan otmadi');
    }
})

Delite.style.display = 'none'
function createCard(user) {
    return `
    <div class="card">
            <h3>${user.name}</h3>
            <h3>${user.surName}</h3>
            <h3>${user.age}</h3>
            <h3>${user.phoneNumber}</h3>
            <h3>${user.email}</h3>
            <h3>${user.nat}</h3>
            <h3>${user.desc}</h3>
            <h3>${user.password}</h3>
            <button id="Delite">Delite</button>
    </div>
    `;
}

document.addEventListener('DOMContentLoaded', function () {
    let users = getData();
    users.forEach(user => {
        let card = createCard(user);
        wrapper.innerHTML += card;
    });
    
})


Remove && Remove.addEventListener('click', function () {
    localStorage.clear();
    wrapper.remove();
})


