import { el } from './elements'

const Header = {
    verifyLogo: () => {            
        cy.get(el.logo)
          .find('img')         
          .should('be.visible')
    },

    verifySearch: () => {            
        cy.get(el.search)
          .should('be.visible')
          .click()
          .type('teste')
    },

    verifyMenu: () => {
        cy.get(el.menuButton)
          .should('be.visible')
          .click()
    }

    
}

export default Header