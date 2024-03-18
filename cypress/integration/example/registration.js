/// <reference  types='cypress'/>


describe ('Registration Spec',function(){

  before(function(){
  
  cy.fixture('example').then(function(data){
    this.data=data
  })


  })


it('Passes',function(){
cy.visit('https://tubitv.com/')

cy.get('.__owH > :nth-child(2)').click()

cy.get('.Es0hd').click()

cy.get('#text-input-firstName').click().type(this.data.name)
cy.get('#text-input-email').click().type(this.data.email)
cy.get('#text-input-password').click().type(this.data.password)
cy.get('.web-text-input__toggle-password-button').click()
cy.get('#text-input-birthMonth').click().type(this.data.month)
cy.get('#text-input-birthDay').click().type(this.data.date)
cy.get('#text-input-birthYear').click().type(this.data.year)

cy.get('.web-dropdown--input').click()
cy.get('.web-dropdown--options').within(() => {
    cy.contains( this.data.Gender).click(); 
  });
  cy.get('.VjidR > .web-button').click({force: true})

})



})