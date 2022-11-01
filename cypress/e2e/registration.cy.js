describe('Registration from', () => {
    it('create a new user', () => {
      cy.visit("https://ineuron-courses.vercel.app/login");
      cy.viewport(1920,1000)
      cy.contains("New user? Signup").click()
      cy.contains("Sign up").should("be.disabled")
      cy.get("input[name ='name']").type("kapil Sanchan")
      cy.get("input[name ='email'").type("kapil123@gmail.com")
      cy.get("input[name ='password").type("kapil123")
      //it will throw error in cypress // in selenium will cick on first value
     // cy.get("input[type='checkbox']").click();
     //it wil click all the checkbox
     //cy.get("input[type='checkbox']").click({multiple:true});
     //cy.get("input[type='checkbox']").last().click()
     //cy.get("input[type='checkbox']").first().click()
     //it will click on based on index value
     cy.get("input[type = 'checkbox']").eq(2).click()
     cy.xpath("//label[text()='Testing']/preceding::input[1]").click()
     cy.get("input[type = 'radio']").first().click()
     cy.get("select[name = 'state']").select(3)
     cy.get("select[name = 'state']").select("Goa")
     cy.contains("Sign up").should("be.enabled")

      
    }); 
  
    
})