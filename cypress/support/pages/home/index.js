import { el } from './elements'
import HeaderFunctions from '../../components/header/'

const HomePage = {

    go: () => {
        cy.clearCookies()

        cy.visit('/')
        cy.get('body[class=bg-base]').should('be.visible')
    },

    shouldNotHaveXScroll: () => {
        
        cy.scrollTo("topRight");
        cy.window().its("scrollX").should("equal", 0);

    },

}

export default HomePage