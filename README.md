# Calculadora Santander

Uma calculadora web interativa desenvolvida com HTML, CSS e JavaScript, integrada com Firebase para armazenar dados de clientes.

## 🎯 Funcionalidades

- ✅ **Operações Básicas**: Soma, Subtração, Multiplicação, Divisão e Exponenciação
- ✅ **Validação de Dados**: Verifica nome, idade e números válidos
- ✅ **Armazenamento em Firebase**: Salva automaticamente os dados dos clientes
- ✅ **Lista de Clientes**: Exibe todos os clientes cadastrados
- ✅ **Interface Responsiva**: Design moderno e intuitivo

## 🚀 Como Usar

### Localmente

1. Clone o repositório:
```bash
git clone https://github.com/rlehmannsilva35-stack/calculadora.git
cd calculadora
```

2. Abra o arquivo `calculadora.html` no navegador:
   - Duplo clique em `calculadora.html`
   - Ou abra com um servidor local (recomendado para Firebase)

### Passo a Passo

1. **Preencha os campos:**
   - Nome
   - Idade
   - Primeiro número (a)
   - Segundo número (b)

2. **Clique em "Calcular"**

3. **Veja os resultados:**
   - Soma: a + b
   - Subtração: a - b
   - Multiplicação: a × b
   - Divisão: a ÷ b
   - Exponenciação: a ^ b

4. **Dados salvos**: O cliente é automaticamente armazenado no Firebase

## 📁 Estrutura do Projeto

```
calculadora/
├── calculadora.html      # Interface principal
├── script.js            # Lógica da calculadora e Firebase
├── styles.css           # Estilos CSS
├── README.md            # Documentação
└── outros arquivos...
```

## 🔧 Tecnologias Utilizadas

- **HTML5** - Estrutura
- **CSS3** - Estilos e responsividade
- **JavaScript (Vanilla)** - Lógica
- **Firebase** - Banco de dados em tempo real
- **Git/GitHub** - Versionamento

## 🔑 Configuração Firebase

O projeto já possui configuração Firebase integrada em `script.js`:

```javascript
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
```

## 🌐 Deploy

Para disponibilizar online:

### GitHub Pages
```bash
git push origin master
```
Acesse: https://github.com/rlehmannsilva35-stack/calculadora

### Netlify/Vercel
1. Conecte seu repositório
2. Deploy automático

## 📝 Autor

**Rodrigo dos Santos da Silva**  
Email: rlehmannsilva35@gmail.com

## 📄 Licença

Este projeto é de código aberto e está disponível para uso livre.

---

**Desenvolvido para o Curso Santander** 🎓
