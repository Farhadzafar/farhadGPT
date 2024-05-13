// ((()(*)(*)))
document.querySelector('.user-massages');
document.querySelector('.GPT-massages');
// )()*)(&*(&(*&(**))&)(*&()))
const massages = document.querySelector('.massage-area');

const welcomePage = document.querySelector('.welecome');
const chatMassegeArea = document.querySelector('.massage-area');
const chatForm = document.querySelector('.chat-input');
const massageInput = document.querySelector('#massage-input');
const innerCridet = document.querySelector('.cridate-count');

// varible
let cridatecount = 10;

chatForm.addEventListener('submit', e => {
  e.preventDefault();
  if (!massageInput.value) return false;
  cridatecount--;
  if (cridatecount < 0) return alert('no cride');
  const textInfot = massageInput.value;
  console.log(textInfot);
  hidenArea();
  massage(textInfot);

  innerCridet.textContent = cridatecount;
  massageInput.value = '';
});

function hidenArea() {
  welcomePage.classList.add('hidden');
  chatMassegeArea.classList.remove('hidden');
}

// add massages
function massage(text) {
  massages.innerHTML += `
  <div class="massames user-massages">
  <small class="user">FA</small>
  <p class="user-text">
    ${text}
  </p>
</div>
    `;

  massages.innerHTML += `
    
  <div class="massames GPT-massages">
  <img
    src="../1 image/chat/Group 1.png"
    alt="FarhadGPT"
    class="AI-image"
  />
  <p class="AI-text">
    Hi, how can a helpe youHi.
  </p>
</div>

    `;
}
