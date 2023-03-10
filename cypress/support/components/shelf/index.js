import { el } from './elements'

const Shelf = {

    verifyTitle() {
        cy.get(el.title)
          .should('be.visible')
    },
    
    verifyPrice() {
        cy.get(el.price)
          .should('be.visible')
    },

    verifyImg() {
        cy.get(el.img)
          .should('be.visible')
    },
    
    verifyBuyButton() {
        cy.get(el.buyButton)
          .should('be.visible')
    },

}

export default Shelf