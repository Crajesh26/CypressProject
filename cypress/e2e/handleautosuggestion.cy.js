describe('Handle Google Search', () =>{

    it('Slect values from google search', () =>{
cy.visit("https://www.google.com/");
cy.get("input[name = 'q']").type("Mukesh Motwani",{delay:1000})
cy.get("//div[@role='option']/div[1]//span").each($e1,index,list)
{
    cy.log(ele.text())

    if(ele.text().includes("cypress")){
        cy.wrap.click($e1)
    }
}

    
    })

    it.only('Login Test', () =>{

        cy.visit("https://ineuron-courses.vercel.app/login")
        cy.login("ineuron@ineuron.ai","ineuron.ai")
    });

})