describe('My first Test', function () {
    it('Gets, types and asserts', function() {
        cy.visit('https://example.cypress.io')

        cy.wait(2000)

        cy.contains('type').click()

        cy.url()
            .should('include', '/commands/actions')

        cy.wait(2000)

        cy.get('.action-email')
            .type('guedrioussemamath@gmail.com')
            .should('have.value', 'guedrioussemamath@gmail.com')

        cy.wait(2000)

        cy.get('.action-focus').focus()
            .should('have.class', 'focus')
            .prev().should('have.attr', 'style', 'color: orange;')

        cy.wait(2000)

        cy.get('.action-blur').type('About to blur').blur()
            .should('have.class', 'error')
            .prev().should('have.attr', 'style', 'color: red;')

    })
})