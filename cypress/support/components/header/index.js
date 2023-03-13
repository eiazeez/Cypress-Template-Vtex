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
        cy.get(el.locationButton)
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

    openLocationModal: () => {
      cy.scrollTo('top')
      cy.wait(2000) 
      cy.get(el.locationButton)
        .contains('button', 'Localização')
        .click( {force: true} )   

    },

    formLocation: (cep) => {
      cy.get(el.cepInputModal)
        .clear()
        .type(cep)
    },

    errorShouldHaveText: (text) => {
      cy.get(el.cepInfoError)
        .should('have.text', text)
    },

    addressShouldBe: (text) => {
      cy.get(el.address)
        .should('have.text', text)
    },

    confirmAddress: () => {
      cy.get(el.confirmAddress)
        .click()
    }
    
}

export default Header