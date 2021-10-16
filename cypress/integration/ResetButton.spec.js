describe('"Reset" Button E2E tests', () => {
  it('Should reset screen value to 0 , after click "Increase" button one time', () => {
    cy.visit('http://localhost:3000/').get('.increaseBtn').click();
    cy.get('.resetBtn').click();
    cy.get('span').should('have.text', '0');
  });
  it('Should reset screen value to 0, after click "Decrease" button one time', () => {
    cy.visit('http://localhost:3000/').get('.decreaseBtn').click();
    cy.get('.resetBtn').click();
    cy.get('span').should('have.text', '0');
  });
  it('Should reset screen value to 0, after type "100" on "change input"', () => {
    cy.visit('http://localhost:3000/').get('input').type('100');
    cy.get('.resetBtn').click();
    cy.get('span').should('have.text', '0');
  });
});
