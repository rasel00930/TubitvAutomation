/// <reference  types='cypress'/>

describe('My Login Test suite',function(){


    it('Login Pass',function(){

        cy.visit('https://tubitv.com/')
        cy.get('.__owH > :nth-child(2)').click()
        cy.get('.Ofxs1').click()
    
        cy.get('#text-input-email').click().type('radidarefin21@gmail.com')
        cy.get('.UBd2z > .web-button').click()
        cy.get('.xU36f').click()
        cy.get('#text-input-password').click().type('Ra123ui@#')
        cy.get('.UBd2z > .web-button').click()
    
        cy.get('.W2l7v').click().type('Sa')
        

        cy.get(".e8Bgq").find('.web-col.web-col--4.web-col--lg-3.web-col--xl-1-5.web-col--xxl-2.lWXaj').each(($el, index, $list) => {
            const textVeg = $el.find('.web-content-tile__title').text();
            cy.log(`Text of the element: ${textVeg}`);
            if (textVeg.includes('Samson')) {
                cy.wrap($el).click()
            }
        });
    
    })
})