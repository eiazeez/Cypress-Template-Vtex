import { el } from './elements'
import Shelf from '../../components/shelf'

const HomePage = {

    go: () => {
        cy.clearCookies()

        cy.visit('/')
        cy.get('body[class=bg-base]').should('be.visible')
    },

    verifySideScroll: () => { 
        cy.scrollTo("topRight");
        cy.window().its("scrollX").should("equal", 0);

    },

    verifyMainBanner: () => {
        cy.get(el.sectionMainBanner)
          .should('be.visible')  
    },

    verifyShelfs: ()=> {

        const shelfElements = [
            'Title',
            'Price',
            'Img',
            'BuyButton'
        ]

        shelfElements.forEach(function (element) {
            Shelf[`verify${element}`] ()
        })

    },

}

export default HomePage