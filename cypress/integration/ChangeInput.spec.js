describe('"Change Input" E2E tests', () => {
  it('Should change screen value from "0" to "100" after type "100"', () => {
    cy.visit('http://localhost:3000/').get('input').type('100');
    cy.get('span').should('have.text', '100');
  });
  it('Should change screen value from "0" to "-21" after type "-21"', () => {
    cy.visit('http://localhost:3000/').get('input').type('-21');
    cy.get('span').should('have.text', '-21');
  });
  it('Should not change screen value from "0" when type "test"', () => {
    cy.visit('http://localhost:3000/').get('input').type('test');
    cy.get('span').contains('0');
  });
});
