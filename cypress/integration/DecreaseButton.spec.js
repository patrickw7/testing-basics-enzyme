describe('"Decrease" Button E2E tests', () => [
  it('Should change screen value from 0 to -1', () => {
    cy.visit('http://localhost:3000/').get('.decreaseBtn').click();

    cy.get('span').contains('-1');
  }),
]);
