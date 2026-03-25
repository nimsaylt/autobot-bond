describe('Login bondinho', () => {
  it('passes', () => {
    cy.visit('https://bondinho-website-app-stg.azurewebsites.net/pt/login');

    // preenche login
    cy.get('input[name="email"]:visible').first().type('yasautoaccept2@teste.com');
    cy.get('input[name="password"]:visible').type('Teste123!');
    cy.contains('button', 'Entrar').click();

    //Pág ingressos
    cy.url().should('not.include', '/login');

    cy.get('header button')
      .filter(':visible')
      .first()
      .click();

    cy.contains('Ingressos')
      .should('be.visible')
      .click();
    
    //escolha de ingresso
    cy.contains('Bilhete Bondinho')
      .closest('[class*="grid"]')
      .find('[class*="card_btn_have_this_one"]')
      .first()
      .scrollIntoView()
      .click();
    
    //seleciona faixa
    cy.contains('Selecione os seus ingressos', { timeout: 10000 }).should('be.visible');

    cy.contains('Bilhete Bondinho Promo Brasil')
      .closest('[class*="stepTour_ticketCard"]')
      .find('[class*="stepTour_button__YnyH"]')
      .last()
      .click();

      cy.contains('Bilhete Bondinho Criança')
      .closest('[class*="stepTour_ticketCard"]')
      .find('[class*="stepTour_button__YnyH"]')
      .last()
      .click();

    cy.contains('button', 'Continuar').click();

  //seleciona data e horário

  
  })
})