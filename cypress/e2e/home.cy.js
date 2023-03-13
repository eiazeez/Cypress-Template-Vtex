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

  context('Para validar a home do site', function () {
    
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

  context('Para validar a funcionalidade de Localização', function () {
  
    const cepsRuins = [
      '52315471',
      '333333331',
      '123412356'
    ]

    cepsRuins.forEach(function(ceps) {

      it('O sistema não deve aceitar ceps inválidos como: ' + ceps, function () {
      
        HomePage.go()
        Header.openLocationModal()
        Header.formLocation(ceps)
        Header.errorShouldHaveText('CEP inválido')

      })

    })

    const address = {
      cep: '01414000',
      road: 'Rua Haddock Lobo - São Paulo - SP'
    }
    

    it('O sistema deve aceitar cep válido como: ' + address.cep, function () {
      
      HomePage.go()
      Header.openLocationModal()
      Header.formLocation(address.cep)
      Header.addressShouldBe(address.road)
      Header.confirmAddress()
      Header.openLocationModal()
      Header.addressShouldBe(address.road)

    })
    
  })

})