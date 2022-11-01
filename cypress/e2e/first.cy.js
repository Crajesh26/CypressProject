describe('Smoke Test', () => {
  it('verify Title', () => {
    cy.visit("https://ineuron-courses.vercel.app")
    cy.title().should("contains","Courses")
  }); 

  it('verify exact Title', () => {
    cy.visit("https://ineuron-courses.vercel.app")
    cy.title().should("eq","iNeuron Courses")
  });

  it('verify partial url', () => {
    cy.visit("https://ineuron-courses.vercel.app")
    cy.url().should("contains","ineuron")
  })





})