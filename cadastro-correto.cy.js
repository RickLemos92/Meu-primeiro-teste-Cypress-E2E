describe('Pagina de Cadastro', () => {
   beforeEach(()=> {
      cy.visit('https://adopet-frontend-cypress.vercel.app/');
       cy.get('[data-test="register-button"]').click();
   })
   it('Deve preencher os campos do formulario corretamente para cadastrar um novo usuario', () => {
    cy.cadastro('Matheus Lemos', 'matheuslemosmachado92@gmail.com', 'Senha123');
     
    })
})
 