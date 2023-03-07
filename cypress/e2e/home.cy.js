import HomePage from '../support/pages/home'
import Header from '../support/components/header'


describe('TESTES DIRECIONADOS A HOME PAGE', () => {

  context('Quando entrar na home do site', function () {

    it('Não deve haver scroll lateral', () => {

      HomePage.go()
      HomePage.shouldNotHaveXScroll()

    })

  })

  context.only('Para validar o header do site', function () {

    const headerElements = [

      'Logo',
      'Search',
      'Menu',

    ]

    headerElements.forEach(function (element) {

      it('Deve verificar: ' + element , () => {

        HomePage.go()
        Header[`verify${element}`]()
        
      })

    })

  })

})