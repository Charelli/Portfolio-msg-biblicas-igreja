describe('Adicionar Mensagem', () => {
  it(' Adicionar mensagem com todos os campos preenchidos', () => {
    cy.visit('http://localhost:3000')
    cy.get('#titulo').click().type('Jesus')
    cy.get('#data').click().type('2025-08-22')
    cy.get('#pregador').click().type('Pr.Gilberto')
    cy.get('#referencia').click().type('João 3:16')
    cy.get('#btnSalvar').click()
    cy.get('.popup-content').click()
    cy.get('#btnConfirmar').click()

  
  })
})