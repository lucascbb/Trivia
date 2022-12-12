
# TRIVIA

Desenvolvi um jogo de perguntas e respostas baseado no jogo Trivia, parecido com show do milhão, utilizando React e Redux, tudo isso desenvolvido em um grupo de 5 participanters.

 <summary><strong>Nesse projeto é prossivel:</strong></summary><br />

    • Logar no jogo e, se o email tiver cadastro no site Gravatar, ter sua foto associada ao perfil da pessoa usuária.
    • Acessar a página do jogo, escolher uma resposta antes que os 30 segundos acabe, caso contrário a resposta será considerada errada.
    • Ser redirecionada, após 5 perguntas respondidas, para a tela de score, onde o texto mostrado depende do número de acertos.
    • Visualizar a página de ranking, se quiser, ao final de cada jogo.


<details>
  <summary><strong>🗓 Entrega</strong></summary><br />
  
  * Este projeto foi realizado em grupo;
  * Realizado em `4` dias de projeto;

</details>


## 🔗 Link Trivia
[![projeto_trivia](https://icons.iconarchive.com/icons/graphicloads/100-flat-2/256/switch-turn-off-icon.png)](https://lucascbb.github.io/trivia/)

## 🛠 Skills

<details>
  <summary><strong>:memo: Habilidades</strong></summary><br />
Nesse projeto, fui capaz de:

  - Criar um store Redux em aplicações React

  - Criar reducers no Redux em aplicações React

  - Criar actions no Redux em aplicações React

  - Criar dispatchers no Redux em aplicações React

  - Conectar Redux aos componentes React

  - Criar actions assíncronas na sua aplicação React que faz uso de Redux.

  - Escrever testes para garantir que sua aplicação possua uma boa cobertura de testes.
</details>


## Kanban
Uma forma que utilizamos para organizar as atividades e dividir as tarefas foi através de um modelo de kanban no Trello.


## API Reference

A API do Trivia é bem simples. Temos 2 endpoints que utilizamos para esse exercício.

• Pegar o token de sessão da pessoa que está jogando
• Pegar perguntas e respostas

Esse endpoint retorna o token que vai ser utilizado nas requisições seguintes.
O token expira em 6 horas e caso esteja expirado retorna ressponse_code: 3. 
Caso o token seja inválido ou expirado, retorna uma mensagem de erro.
https://opentdb.com/api_token.php?command=request

Para pegar as perguntas de multipla escolha de verdadeiro ou falso, utilizamos o seguinte endpoint:
https://opentdb.com/api.php?amount=${quantidade-de-perguntas-retornadas}&token=${seu-token-aqui}
