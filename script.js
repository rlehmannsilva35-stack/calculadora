// Configuração Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDP-iEqBZ1bbP4Ddn1J6m0zQfvIojmbejI",
  authDomain: "calculadora-santander.firebaseapp.com",
  databaseURL: "https://calculadora-santander-default-rtdb.firebaseio.com",
  projectId: "calculadora-santander",
  storageBucket: "calculadora-santander.firebasestorage.app",
  messagingSenderId: "655558552205",
  appId: "1:655558552205:web:fea46ff155dca3b39a50c4",
  measurementId: "G-508Q9SBF4L"
};

// Inicializar Firebase apenas uma vez
let database = null;
try {
  if (typeof firebase === 'undefined') {
    throw new Error('Firebase SDK não carregado');
  }

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
  database = firebase.database();
  console.log('Firebase inicializado');
} catch (e) {
  console.warn('Firebase indisponível:', e.message);
}

// Esperar o DOM estar carregado
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', inicializarCalculadora);
} else {
  inicializarCalculadora();
}

function inicializarCalculadora() {
  console.log('Inicializando calculadora...');
  
  const nomeInput = document.getElementById('nome');
  const idadeInput = document.getElementById('idade');
  const numero1Input = document.getElementById('numero1');
  const numero2Input = document.getElementById('numero2');
  const calcularButton = document.getElementById('calcularButton');
  const mensagem = document.getElementById('mensagem');
  const resultadosContainer = document.getElementById('resultados');
  const clientesContainer = document.getElementById('clientes');

  if (!calcularButton) {
    console.error('Botão não encontrado');
    return;
  }
  if (!clientesContainer) {
    console.error('Container de clientes não encontrado');
    return;
  }

  console.log('Elementos encontrados:', {
    nome: !!nomeInput,
    idade: !!idadeInput,
    numero1: !!numero1Input,
    numero2: !!numero2Input,
    botao: !!calcularButton,
    mensagem: !!mensagem,
    resultados: !!resultadosContainer
  });

  calcularButton.onclick = function() {
    console.log('Clique no botão detectado');
    
    const nome = nomeInput.value.trim();
    const idade = idadeInput.value.trim();
    const num1 = numero1Input.value.trim();
    const num2 = numero2Input.value.trim();

    console.log('Valores:', { nome, idade, num1, num2 });

    // Validar
    if (!nome) {
      mensagem.textContent = '❌ Digite seu nome';
      mensagem.style.color = '#ff6b6b';
      return;
    }

    if (!idade || isNaN(idade) || idade <= 0) {
      mensagem.textContent = '❌ Idade inválida';
      mensagem.style.color = '#ff6b6b';
      return;
    }

    if (!num1 || isNaN(num1)) {
      mensagem.textContent = '❌ Primeiro número inválido';
      mensagem.style.color = '#ff6b6b';
      return;
    }

    if (!num2 || isNaN(num2)) {
      mensagem.textContent = '❌ Segundo número inválido';
      mensagem.style.color = '#ff6b6b';
      return;
    }

    // Converter para números
    const a = parseFloat(num1);
    const b = parseFloat(num2);

    // Calcular
    const soma = a + b;
    const subtracao = a - b;
    const multiplicacao = a * b;
    const divisao = b !== 0 ? (a / b).toFixed(4) : 'Impossível';
    const exponenciacao = a ** b;

    // Exibir resultados
    resultadosContainer.innerHTML = `
      <p><strong>Olá, ${nome}! Você tem ${idade} anos.</strong></p>
      <p>Soma: ${soma}</p>
      <p>Subtração: ${subtracao}</p>
      <p>Multiplicação: ${multiplicacao}</p>
      <p>Divisão: ${divisao}</p>
      <p>Exponenciação: ${exponenciacao}</p>
    `;

    mensagem.textContent = '✅ Cálculo realizado!';
    mensagem.style.color = '#90ee90';

    // Salvar no Firebase se disponível
    if (database) {
      const cliente = {
        nome,
        idade: parseInt(idade),
        timestamp: new Date().toLocaleString('pt-BR')
      };

      database.ref('clientes').push(cliente)
        .then(() => {
          console.log('Cliente salvo no Firebase');
          carregarClientes();
        })
        .catch(err => console.error('Erro Firebase:', err));
    }
  };

  function carregarClientes() {
    database.ref('clientes').once('value')
      .then(snapshot => {
        const clientes = snapshot.val();
        if (!clientes) {
          clientesContainer.innerHTML = '<p>Nenhum cliente salvo ainda.</p>';
          return;
        }

        const lista = Object.keys(clientes).map(key => {
          const cliente = clientes[key];
          return `
            <div class="cliente-item">
              <strong>${cliente.nome}</strong>
              <span>Idade: ${cliente.idade}</span>
            </div>
          `;
        }).join('');

        clientesContainer.innerHTML = lista;
      })
      .catch(err => {
        console.error('Erro ao carregar clientes:', err);
        clientesContainer.innerHTML = '<p>Erro ao carregar clientes.</p>';
      });
  }

  if (database) {
    carregarClientes();
  }

  console.log('Calculadora pronta!');
}
