describe('"Change Input" E2E tests', () => {
  it('Should change screen value from "0" to "100" after type "100"', () => {
    cy.visit('http://localhost:3000/').get('input').type('100');

    cy.get('span').contains('100');
  });
});
