import HomePage from '../support/pages/home'
import Header from '../support/components/header'


describe('TESTES DIRECIONADOS A HOME PAGE', () => {

  context('Para validar o header do site', function () {

    const headerElements = [
      'TopBar',
      'Logo',
      'Search',
      'Menu',
      'RegionModal',
      'MyOrders',
      'Login',
      'Cart'
    ]

    headerElements.forEach(function (element) {

      it('Deve verificar: ' + element , () => {

        HomePage.go()
        Header[`verify${element}`] ()
        
      })

    })

  })  

  context.only('Para validar a home do site', function () {
    
    const homeElements = [
      'SideScroll',
      'MainBanner', 
      'Shelfs',
    ]

    homeElements.forEach(function (element) {

      it('Deve verificar: ' + element , () => {
        
        HomePage.go ()
        HomePage[`verify${element}`] ()

      })

    })

  })

 

})