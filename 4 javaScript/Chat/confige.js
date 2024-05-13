const API_URLE = 'https://api.openai.com/v1/chat/completions';
// const API_KEY = "org-Rf4ttC4X6pKTdf2wG89tE8hk";

// const API_KEY = 'sk-proj-sVoLD2hYyLwKIBhLpTE9T3BlbkFJ1lCJp9PmG118x7HD77FK';
// const API_KEY = 'sk-proj-PyfmbO8DmhGDNOJmGlEfT3BlbkFJe5ey3pMrjAWbUjaF37Q1';
const API_KEY = 'sk-proj-7DxmZi20YxsFpwvsvZEFT3BlbkFJmj4fKx8Hik0bJbFF2pyu';

console.log('hi how can i heple you');

async function getData() {
  const opetion = {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: 'Hello!' }],
      //   max_tokens: 100,
    }),
  };

  try {
    const response = await fetch(API_URLE, opetion);
    const data = await response.json();
    console.log(data, 'this a data');
    console.log('hi');
  } catch (error) {
    console.log(error, 'catch arror');
  }
}

getData();
