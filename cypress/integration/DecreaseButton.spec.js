describe('"Decrease" Button E2E tests', () => {
  it('Should change screen value from 0 to -1', () => {
    cy.visit('http://localhost:3000/').get('.decreaseBtn').click();
    cy.get('span').should('have.text', '-1');
  });
  it('Should have screen value "-4", after click five times "Decrease" button, and one times "Increase" button', () => {
    cy.visit('http://localhost:3000/');
    for (let i = 0; i < 5; i++) {
      cy.get('.decreaseBtn').click();
    }
    cy.get('.increaseBtn').click();
    cy.get('span').should('have.text', '-4');
  });
});
