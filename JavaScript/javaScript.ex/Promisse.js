//1. Criação e Execução de uma Promise 
const promessa = new Promise((resolve, reject) => {
  const nome = "ZANDO";
  if (nome === "ZANDO") {
    resolve("Usuário ZANDO foi encontrado");
  } else {
    reject("Usuário ZANDO não foi encontrado");
  }
});

promessa.then((data) => {//executa se for resolve
  console.log(data);
}).catch((erro) => {//executa se for reject
  console.log(erro);
});


// 2. Encadeamento de `.then()`

const promessa2 = new Promise((resolve, reject) => {
  resolve("ZANDO");
});

promessa2
  .then((data) => {
    return data.toLowerCase();
  })
  .then((stringModificada) => {
    console.log(stringModificada);
  });


// 3. Tratamento de Erros com `.catch()` 

const promessa3 = new Promise((resolve, reject) => {
  const nome = "João";
  if (nome === "ZANDO") {
    resolve("Sucesso");
  } else {
    reject("Usuário não encontrado");
  }
});

promessa3
  .then((data) => console.log(data))
  .catch((erro) => console.log("Aconteceu um erro: " + erro));


// 4. Resolvendo várias Promises com `Promise.all` e `Promise.race` 

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("P1 ok"), 2000);
});
const p2 = new Promise((resolve, reject) => resolve("P2 ok"));
const p3 = new Promise((resolve, reject) => resolve("P3 ok"));

// Promise.all: espera todas serem resolvidas
Promise.all([p1, p2, p3]).then((data) => console.log(data));

// Promise.race: pega a primeira que resolver
Promise.race([p1, p2, p3]).then((data) => console.log(data));


// 5. Fetch API 

const userName = "matheusbattisti";

fetch(`https://api.github.com/users/${userName}`, {
  method: 'GET',
  headers: {
    Accept: 'application/vnd.github.v3+json',
  }
})
.then((response) => response.json())
.then((data) => {
  console.log(`O nome do usuário é: ${data.name}`);
})
.catch((err) => console.log("Erro: " + err));


//6. Await

async function getUser(id) {
const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
const data = await response.json();
return data;
}

async function showUserName(id) {
try {
const user = await getUser(id);
console.log(`O nome do usuário é: ${user.name}`);
} catch (error) {
console.log("Erro na requisição: ", error);
}
}

showUserName(1);
