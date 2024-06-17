describe('Pagina de Login', () => {
    beforeEach(()=> {
        cy.visit('https://adopet-frontend-cypress.vercel.app/');
        cy.get('[data-test="login-button"]').click();


    })
    it('Deve preencher os campos de login corretamente e autenticar o usuario na pagina', () => {
        cy.login('matheuslemosmachado92@gmail.com','Senha123');
        
     })
    })