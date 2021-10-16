describe('"Increase" Button E2E tests', () => {
  it('Should screen value change from 0 to 1 after click', () => {
    cy.visit('http://localhost:3000/').get('.increaseBtn').click();
    cy.get('span').should('have.text', '1');
  });
  it('Should screen value change to "4" after click five times "Increase button" and one time "Decrease" button', () => {
    cy.visit('http://localhost:3000/');
    for (let i = 0; i < 5; i++) {
      cy.get('.increaseBtn').click();
    }
    cy.get('.decreaseBtn').click();
    cy.get('span').should('have.text', '4');
  });
});
