let users = [];
getStorige();
function getStorige() {
  const data = JSON.parse(localStorage.getItem('myUser'));
  if (!data) return;
  users = data;
}

// selector of login form
const userName = document.getElementById('name');
const userPassword = document.getElementById('password');
const loingBtn = document.getElementById('login');

loingBtn.addEventListener('click', e => {
  e.preventDefault();
  login();
});

function login() {
  let currentAcount = users.find(
    user => user.name.toUpperCase() === userName.value.toUpperCase()
  );
  if (currentAcount?.passowerd === userPassword.value) {
    document.getElementsByClassName('login')[0].style.display = 'none';
    document.getElementsByClassName('chat')[0].style.display = 'block';
  } else {
    document.getElementById('error-login').textContent =
      'name or passoward not match, try agin 🤔';
  }
}

//
