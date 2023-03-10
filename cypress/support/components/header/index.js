import { el } from './elements'

const Header = {
    verifyTopBar: () => {
        cy.get(el.topBar)
          .should('be.visible')
    },

    verifyLogo: () => {            
        cy.get(el.logo)
          .find('img')         
          .should('be.visible')
    },

    verifySearch: () => {            
        cy.get(el.search)
          .should('be.visible')
    },

    verifyMenu: () => {
        cy.get(el.menuButton)
          .should('be.visible')
          .click()
    },

    verifyRegionModal: () => {
        cy.contains(el.locationButton)
          .should('be.visible')
    },

    verifyMyOrders: () => {
        cy.contains(el.myOrders)
          .should('be.visible')
    },

    verifyLogin: () => {
        cy.get(el.loginButton)
          .should('be.visible')
  },

    verifyCart: () => {
        cy.get(el.cartButton)
          .should('be.visible')  
    },

    verifyElement: (element) => {

      cy.get(element).should('be.visible')

    }

    
}

export default Header