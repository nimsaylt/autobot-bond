

## 🔹 Navegação

cy.visit() -- Abre uma página 
cy.visit('https://site.com')

cy.url() -- Obtém a URL atual 
cy.url().should('include', 'home')

cy.location() -- Pega parte da URL 
cy.location('pathname').should('eq','/home')

cy.go() -- Volta ou avança no navegador 
cy.go('back')

cy.reload() -- Recarrega a página 
cy.reload()

------------------------------------------------------------------------

## 🔹 Buscar elementos

cy.get() -- Busca elemento por seletor (CSS) 
cy.get('#login')

cy.contains() -- Busca elemento pelo texto 
cy.contains('Entrar')

.find() -- Busca dentro de outro elemento 
cy.get('.form').find('input')

.children() -- Pega elementos filhos 
cy.get('.lista').children()

.parent() -- Pega elemento pai 
cy.get('input').parent()

.first() -- Primeiro elemento 
cy.get('li').first()

.last() -- Último elemento 
cy.get('li').last()

.eq() -- Pega elemento por índice cy.get('li').eq(2)

------------------------------------------------------------------------

## 🔹 Ações

.click() -- Clica no elemento 
cy.get('button').click()

.dblclick() -- Duplo clique 
cy.get('button').dblclick()

.type() -- Digita em input 
cy.get('input').type('teste')

.clear() -- Limpa campo 
cy.get('input').clear()

.check() -- Marca checkbox 
cy.get('#aceite').check()

.uncheck() -- Desmarca checkbox 
cy.get('#aceite').uncheck()

.select() -- Seleciona dropdown 
cy.get('select').select('Brasil')

.trigger() -- Dispara evento 
cy.get('.menu').trigger('mouseover')

------------------------------------------------------------------------

## 🔹 Validações

.should() -- Faz validação 
cy.get('button').should('be.visible')

.and() -- Continua validação
cy.get('button').should('be.visible').and('contain', 'Enviar')

expect() -- Validação com JS 
expect(2 + 2).to.equal(4)

------------------------------------------------------------------------

## 🔹 Esperas / API

cy.wait() -- Espera tempo ou request 
cy.wait(2000)

cy.intercept() -- Intercepta requisições 
cy.intercept('GET','/users').as('getUsers')

cy.wait('@getUsers') -- Espera requisição interceptada
cy.wait('@getUsers')

cy.request() -- Faz requisição HTTP direta 
cy.request('GET','/api/users')

------------------------------------------------------------------------

## 🔹 Arquivos

cy.fixture() -- Carrega dados mockados
cy.fixture('user.json').then((user) =\> {})

cy.readFile() -- Lê arquivo 
cy.readFile('cypress/fixtures/user.json')

cy.writeFile() -- Escreve arquivo 
cy.writeFile('cypress/teste.txt','oi')

------------------------------------------------------------------------

## 🔹 Browser

cy.window() -- Acessa o window do navegador 
cy.window().then((win) =\>{})

cy.document() -- Acessa o document 
cy.document().then((doc) =\> {})

cy.exec() -- Executa comando no sistema 
cy.exec('npm run build')

------------------------------------------------------------------------

## 🔹 Utilidades

cy.wrap() -- Envolve um valor no Cypress 
cy.wrap(10).should('eq', 10)

cy.then() -- Trabalha com resultado anterior 
cy.get('input').then((\$el)=\> {})

cy.log() -- Exibe log no teste 
cy.log('Teste iniciado')

cy.pause() -- Pausa execução (debug) 
cy.pause()

------------------------------------------------------------------------

## 🔹 Cookies / Sessão

cy.getCookie() -- Obtém cookie 
cy.getCookie('token')

cy.setCookie() -- Define cookie 
cy.setCookie('token', '123')

cy.clearCookies() -- Limpa cookies 
cy.clearCookies()

cy.session() -- Mantém sessão (ex: login) 
cy.session('login', () =\> {
cy.visit('/login') })

------------------------------------------------------------------------

##  Lembrete

Cypress funciona em cadeia (command chain):

cy.get('button') .click() .should('be.visible')
