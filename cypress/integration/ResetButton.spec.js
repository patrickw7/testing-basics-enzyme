describe('"Reset" Button E2E tests', () => {
  it('Should reset value to 0 , after click "Increase" button one time', () => {
    cy.visit('http://localhost:3000/').get('.increaseBtn').click();

    cy.get('.resetBtn').click();

    cy.get('span').contains('0');
  });
});
