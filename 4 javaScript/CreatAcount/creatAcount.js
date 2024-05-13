// 'use strict';

// Seclecter

const form = document.getElementById('input-form');

const inputName = document.getElementById('input-name');
const inputLastName = document.getElementById('input-last-name');
const inputPassword = document.getElementById('input-passord');
const inputEmail = document.getElementById('input-email');
const errorMassage = document.querySelector('.arror-massage');

// user array to store data of user
// export let allUser = []; //is not works
let allUser = [];
console.log(allUser);

// Events handler
// when the form submit
form.addEventListener('submit', e => {
  e.preventDefault();
  name();
  lastName();
  email();
  passowerd();
  if (name() && lastName() && email() && passowerd()) {
    addUser(inputName, inputLastName, inputEmail, inputPassword);
    store(allUser);
    getStorige();
    clearInput();
    displyNone();
  }
});

// Fuction for Validition

// 01) For name
const name = () => {
  // console.log(index0);
  if (inputName.value[0] === ' ') {
    inputName.style.border = '1px solid red';
    document.querySelector('.e-name').innerHTML = 'Frist leter be not spees';
    return false;
  }
  if (inputName.value === '') {
    inputName.style.border = '1px solid red';
    document.querySelector('.e-name').innerHTML = 'neme is empty';
    return false;
  }

  inputName.style.border = 'none';
  errorMassage.innerHTML = ``;
  return true;
  // checkmark;
};

// 01) For last name
const lastName = () => {
  if (inputLastName.value[0] === ' ') {
    inputLastName.style.border = '1px solid red';
    document.querySelector('.e-lastName').innerHTML =
      'Frist leter be not spees';
    return false;
  }
  if (inputLastName.value === '') {
    inputLastName.style.border = '1px solid red';
    document.querySelector('.e-lastName').innerHTML = 'last neme is empty';
    return false;
  }

  inputLastName.style.border = 'none';
  document.querySelector('.e-lastName').innerHTML = '';

  return true;
};

// 01) For Email
const email = () => {
  // console.log(index0);
  if (inputEmail.value[0] === ' ') {
    inputEmail.style.border = '1px solid red';
    document.querySelector('.e-email').innerHTML = 'Frist leter be not spees';
    return false;
  }
  if (inputEmail.value === '') {
    inputEmail.style.border = '1px solid red';
    document.querySelector('.e-email').innerHTML = 'neme is empty';
    return false;
  }
  inputEmail.style.border = 'none';
  document.querySelector('.e-email').innerHTML = '';
  return true;
};

// 01) For passowerd
const passowerd = () => {
  // console.log(index0);
  if (inputPassword.value[0] === ' ') {
    inputPassword.style.border = '1px solid red';
    document.querySelector('.e-password').innerHTML =
      'Frist leter be not spees';
    return false;
  }
  if (inputPassword.value === '') {
    inputPassword.style.border = '1px solid red';
    document.querySelector('.e-password').innerHTML = 'neme is empty';
    return false;
  }

  inputPassword.style.border = 'none';
  document.querySelector('.e-password').innerHTML = '';
  return true;
};

// Claer input filide
const clearInput = function () {
  inputName.value = '';
  inputLastName.value = '';
  inputEmail.value = '';
  inputPassword.value = '';
};

// Add user to Alluers

function addUser(Name, LastName, Email, Passowerd) {
  const newUser = {
    name: Name.value,
    lastName: LastName.value,
    email: Email.value,
    passowerd: Passowerd.value,
  };
  allUser = [...allUser, newUser];
}

// Store data in logaleStorige
function store(allUserData) {
  localStorage.setItem('myUser', JSON.stringify(allUserData));
}

// get data form logalsStorige
getStorige();
function getStorige() {
  const data = JSON.parse(localStorage.getItem('myUser'));
  if (!data) return;
  // console.log(data, 'this is data😎😎😎😎😎😎😎');
  allUser = data;
}
// console.log(allUser, '❣❣💔🤍');

// export default {}

// 02************************
function displyNone() {
  const popeSection = document.getElementsByClassName('popa-btn');
  const creatForm = document.getElementsByClassName('craete-form');
  //
  creatForm[0].style.display = 'none';
  popeSection[0].style.display = 'flex';
}
