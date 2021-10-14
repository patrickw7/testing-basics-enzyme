describe('"Increase" Button E2E tests', () => {
  it('Screen value change from 0 to 1 after click', () => {
    cy.visit('http://localhost:3000/').get('.increaseBtn').click();

    cy.get('span').contains('1');
  });
});
