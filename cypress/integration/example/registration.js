/// <reference  types='cypress'/>


describe ('First Test Suite',function(){


it('Resgistration 1st test case',function(){
cy.pause()
cy.visit('https://tubitv.com/')

cy.get('.__owH > :nth-child(2)').click()

cy.get('.Es0hd').click()

cy.get('#text-input-firstName').click().type('Rasel Ahmed')
cy.get('#text-input-email').click().type('radidarefin21@gmail.com')
cy.get('#text-input-password').click().type('Ra123ui@#')
cy.get('.web-text-input__toggle-password-button').click()
cy.get('#text-input-birthMonth').click().type(12)
cy.get('#text-input-birthDay').click().type(10)
cy.get('#text-input-birthYear').click().type(1999)

cy.get('.web-dropdown--input').click()
cy.get('.web-dropdown--options').within(() => {
    cy.contains( 'Male').click(); 
  });
  cy.get('.VjidR > .web-button').click({force: true})

})



})