describe('Login Test With Cypress', () => {
    it('login with valid credentails', () => {
      cy.visit("https://ineuron-courses.vercel.app");
      cy.get("input[name ='email']").type("ineuron");
    }); 
  
    
})
  