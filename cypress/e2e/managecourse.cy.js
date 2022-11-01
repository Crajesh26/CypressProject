
describe('Validate ManageCourse', () => {
  beforeEach(function(){
  cy.fixture("cypressdata").then(function (jsondata){

    this.jsondata = jsondata

  })
    it('enroll', () => {
      cy.visit("https://ineuron-courses.vercel.app");
      cy.viewport(1920,1000)
      cy.xpath("//button[text() = 'Log in ']").click()
      cy.get('[name="email1"]').type(this.jsondata.username)
      cy.get('[name="password1"]').type(this.jsondata.password)
      cy.get('.submit-btn').click()
      cy.wait(5000)
      cy.contains("Manage",{timeout:10000}).realHover()
      cy.wait(2000)
      cy.contains("Manage Courses").click() 
          cy.xpath("//td[text() = 'AutomationTesting']").then(($ele,index,list)=>{
              cy.xpath("//td[text() = 'AutomationTesting']//preceding-sibling::td//child::input[@type = 'checkbox']",{timeout:10000}).click({multiple:true})
              cy.xpath("//td[text() = 'AutomationTesting']//following-sibling::td//child::button[@class = 'action-btn delete-btn']").click({multiple:true})
          })
        
    //  cy.xpath("//table[contains[@class,'courses')]//tbody//tr")s
      cy.contains("Course Name",{timeout:10000})
      cy.contains("Add New Course").click({force:true})
      cy.get("#thumbnail").attachFile("cloud.jpg")
      cy.get('[name = "name"]').type("AutomationTesting")
      cy.get('[id= "description"]').type("AutomationTestingCourse")
      cy.get('[id= "instructorNameId"]').type("Mukesh")
      let today = new Date();
     let courseStratDate = (today.getMonth()+1)+'/'+today.getDate()+'/'+today.getFullYear();
     let courseEndDate = (today.getMonth()+2)+'/'+today.getDate()+'/'+today.getFullYear();
     cy.get("[name = 'startDate']").clear().type(courseStratDate)
     cy.get("[name = 'endDate']").clear().type(courseEndDate)
     cy.contains("Select Category").click()
     cy.xpath("//button[text() = 'Testing']").click({force:true})
     cy.xpath("//button[text() = 'Save']").click()
   //  cy.xpath("//td[text() = 'AutomationTesting']//preceding-sibling::td//child::input[@type = 'checkbox']",{timeout:10000}).click()
    // cy.xpath("//td[text() = 'AutomationTesting']//following-sibling::td//child::button[@class = 'action-btn delete-btn']").click()

     


      




      





     

    })

    })

  })
