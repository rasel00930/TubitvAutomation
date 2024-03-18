/// <reference  types='cypress'/>

describe('Login Spec',function(){

  //wrong password correct Email
    it(' Passes',function(){

        cy.visit('https://tubitv.com/')
        cy.get('.__owH > :nth-child(2)').click()
        cy.get('.Ofxs1').click()
    
        cy.get('#text-input-email').click().type(this.data.email)
        cy.get('.UBd2z > .web-button').click()
        cy.get('.xU36f').click()
        cy.get('#text-input-password').click().type(this.data.password1)
       cy.get('.UBd2z > .web-button').click()
    
       
        
    })

    // Correct email wrong password
     it('Passes',function(){

        cy.visit('https://tubitv.com/')
        cy.get('.__owH > :nth-child(2)').click()
        cy.get('.Ofxs1').click()
    
        cy.get('#text-input-email').click().type(this.data.email1)
        cy.get('.UBd2z > .web-button').click()
        cy.get('.xU36f').click()
        cy.get('#text-input-password').click().type(this.data.password)
        cy.get('.UBd2z > .web-button').click()



     })

    // correct email and correct password
     
     it('Passes',function(){

        cy.visit('https://tubitv.com/')
        cy.get('.__owH > :nth-child(2)').click()
        cy.get('.Ofxs1').click()
    
        cy.get('#text-input-email').click().type(this.data.email)
        cy.get('.UBd2z > .web-button').click()
        cy.get('.xU36f').click()
        cy.get('#text-input-password').click().type(this.data.password)
        cy.get('.UBd2z > .web-button').click()



     })





})