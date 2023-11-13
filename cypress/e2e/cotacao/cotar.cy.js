
///<reference types="cypress" />

//Escrever qual tipo de teste a ser realizado.
describe('E2e Tests - Feature Cotar', () => {

  
  beforeEach(()=>{
    // Acesso a página que irei testar
    cy.visit('https://webmani-test.manipulae.com.br/cotar');

    // Valido que estou na página correta de cotação.
    cy.title().should('eq','Drogasil Manipulação - Cotar');

    // Valido que a página carregou completamente.
    cy.get('button[type=submit]').should('be.visible');

  });
  it('Efetuar a cotação com uma receita', () => {
    //Arrange
    //Preparo os dados que irei preencher no formulario.
    let dados ={
      cep:'06020194',
      email:`email-${Date.now()}@provedor.com`,
      nome:'Nome de Exemplo',
      telefone:'11962271264',
      aceitaCompartilharDados: true,
      arquivoReceita:'cypress/fixtures/receita.png',
    };

    //Act
    //Faço o upload da receita
    let uploadFileMetadata = {
        contents: dados.arquivoReceita,
          fileName:`receita-${Date.now()}.png`,
    };
  cy.get('input[data-testid=file-uploader]').selectFile(uploadFileMetadata,{ force: true});
  

    //Obtenho os campos e preencho com os dados de entrada.
    cy.get('input[name=zip]').type(dados.cep);
    cy.get('input[name=email]').type(dados.email);
    cy.get('input[name=name]').type(dados.nome);
    cy.get('input[name=phone]').type(dados.telefone);

    //Se aceita compartilhar dados então faço o check no campo.
    if(dados.aceitaCompartilharDados){
    cy.get('input[name=aceitaCompartilharDados]').parent().click();
    }
    //Clico no botão para enviar a cotação.
    cy.get('button[type=submit]').click();

    //Asser
    //Validando se foi enviado com sucesso.
    cy.get('h2',{timeout:6000}).should('be.visible').and('contain.text','Receita enviadacom sucesso');

  });
});