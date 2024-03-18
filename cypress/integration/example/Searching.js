/// <reference  types='cypress'/>

describe('Search Spec',function(){

    before(function(){
  
        cy.fixture('example').then(function(data){
          this.data=data
        })
      
      
        })

    it(' Passes',function(){

        cy.visit('https://tubitv.com/')
        cy.get('.__owH > :nth-child(2)').click()
        cy.get('.Ofxs1').click()
    
        cy.get('#text-input-email').click().type(this.data.email)
        cy.get('.UBd2z > .web-button').click()
        cy.get('.xU36f').click()
        cy.get('#text-input-password').click().type(this.data.password)
        cy.get('.UBd2z > .web-button').click()
    
        cy.get('.W2l7v').click().type('Sa')
        

        cy.get(".e8Bgq").find('.web-col.web-col--4.web-col--lg-3.web-col--xl-1-5.web-col--xxl-2.lWXaj').each(($el, index, $list) => {
            const textMovie = $el.find('.web-content-tile__title').text();
            cy.log(`Text of the element: ${textMovie}`);
            if (textMovie.includes('Samson')) {
                cy.wrap($el).click()
            }
        });
    
    })

})