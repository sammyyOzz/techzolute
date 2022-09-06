describe('navbar', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  })

  context('desktop view', () => {
    beforeEach(() => {
      cy.viewport(1025, 900);
    });

    it('should render Navbar', () => {
      cy.get('[data-testid=navbar]').contains('Navbar').should('exist')
    })
  })
})