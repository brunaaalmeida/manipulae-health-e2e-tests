## MANIPULAE HEALTH E2E TESTS 

Projeto para avaliação técnica para testes automatizados e testes manuais.

Este projeto contem a automação de testes utilizando a ferramenta Cypress.
Ele também contém cenários de testes manuais, com relatórios e evidência.

### COMO PROJETO FUNCIONA

Linguagem e a versão da linguagem utilizada:

```
node : 20.9.0
cypress: ^13.5.0
```

O projeto segue a estrutura padrão do cypress , tendo os testes E2E 
na pasta cypress/e2e separados pelo nome da feature.

#### COMO EXECUTAR O PROJETO LOCAL VIA CLI

Executar a instalação dos pacotes node:

```
npm i 
```

Executar o cypress via cli

```
npm run test:e2e
```

#### COMO DESENVOLVER LOCALMENTE / EXECUTAR VIA LAUNCHPAD

Executar a instalação dos pacotes node:

```
npm i 
```


Executar o cypress  launchpad

```
npm run cypress:open
```

#### UTILIZANDO A PIPELINE DO GITHUB ACTIONS

Para executar a pipeline basta enviar as alterações para o repositório remoto.

### TESTES MANUAIS

Foi realizado testes manuais com o fluxo completo e os arquivos de regra de negócio 
se encontra na pasta Teste_Manual.