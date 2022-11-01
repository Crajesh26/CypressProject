

describe('Validate HomePage', () => {
    it('enroll', () => {
      cy.visit("https://ineuron-courses.vercel.app");
      cy.viewport(1920,1000)
      cy.xpath("//button[text() = 'Log in ']").click()
      cy.get('[name="email1"]').type("kapil123@gmail.com")
      cy.get('[name="password1"]').type("kapil123")
      cy.get('.submit-btn').click()
     let enrollBtn = Cypress.$("//button[text() = 'Enroll']")
      if(enrollBtn.length){
          cy.xpath("//button[text() = 'Enroll']").each(($ele,index,list)=>{
          $ele.click()
          cy.xpath("(//button[text() = 'ENROLLED'])["+index+"]",{timeout:10000}).should('be.visible')
          index++
          }
        
          )
         }
        // let enrolledLength = cy.xpath("//button[text() = 'ENROLLED']")
        // cy.log(enrolledLength.its('length'))   
    })

    })
