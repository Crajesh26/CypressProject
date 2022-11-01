describe('Fixture Demo', function()  {

 this.beforeEach(function(){

    cy.fixture("cypressdata").then(function(jsondata){

    })

})
    it('Fixture Demo for Json file', function()  {
      
            cy.log(this.jsondata.name)
    }); 
  
  })