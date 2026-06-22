# Configuração Firebase

## Passo 1: Criar Projeto Firebase
1. Acesse [firebase.google.com](https://firebase.google.com)
2. Clique em "Ir para console"
3. Clique em "Criar Projeto"
4. Nome: `calculadora-santander` (ou outro)
5. Clique em "Continuar"

## Passo 2: Ativar Realtime Database
1. No console Firebase, clique em "Realtime Database"
2. Clique em "Criar banco de dados"
3. Localização: escolha a mais próxima (ex: Brasil)
4. Modo: selecione "Começar no modo de teste"
5. Clique em "Ativar"

## Passo 3: Obter Configuração
1. Clique em "Configuração do projeto" (engrenagem)
2. Abra a aba "Geral"
3. Role para "Seus aplicativos" e clique em "Web" (ícone de `</>`))
4. Copie a configuração JSON

## Passo 4: Substituir no script.js
Abra `script.js` e substitua:
```javascript
const firebaseConfig = {
  apiKey: "SUA_API_KEY",
  authDomain: "seu-projeto.firebaseapp.com",
  databaseURL: "https://seu-projeto.firebaseio.com",
  projectId: "seu-projeto",
  storageBucket: "seu-projeto.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abc123def456"
};
```

Com os dados reais do seu projeto.

## Pronto! 
Agora todas as informações serão salvas em nuvem automaticamente.
