describe('Pagina de Cadastro', () => {
    beforeEach(()=> {

        cy.visit('https://adopet-frontend-cypress.vercel.app/');
        cy.get('[data-test="register-button"]').click();
    })

    it('Preencher os campos do formulario incorretamente e exibir mensagem ao usuario', () => {
        cy.cadastro('Matheus Lemos', 'matheuslemosmachado92@gmai.com', 'Senha12');
        cy.get('form > :nth-child(5)').should('be.visible');
        cy.get('form > :nth-child(8)').should('be.visible');
        cy.get('form > :nth-child(11)').should('be.visible');
        cy.get('[data-test="submit-button"]').click();


    })
})