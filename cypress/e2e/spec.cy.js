
describe('Login app E2E tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })
  
  it('Shows input fields are visible', () => {
    cy.get('[data-cy="username"]').should('be.visible')
    cy.get('[data-cy="email"]').should('be.visible')
    cy.get('[data-cy="password"]').should('be.visible')
    cy.get('[data-cy="confirm-password"]').should('be.visible')
  })

  it('Doesnt show any validation errors by default', () => {
    cy.get('[data-cy="username"] > p').should('not.exist')
    cy.get('[data-cy="email"] > p').should('not.exist')
    cy.get('[data-cy="password"] > p').should('not.exist')
    cy.get('[data-cy="confirm-password"] > p').should('not.exist')
  })

  it('Shows failed validations after clicking Submit', () => {
    cy.get('[data-cy="username"] > input').type('whatever')
    cy.get('[data-cy="password"] > input').type('whatever')
    cy.get('[data-cy="confirm-password"] > input').type('whatever')
    cy.get('[data-cy="email"] > input').type('whatever@email.cz')
    cy.get('[data-cy="submit-button"]').click()
    cy.get('[data-cy="message-success"]').should('be.visible').should('have.text','Signed in successfully')
  })

  it('Shows failed validations after clicking Submit', () => {
    cy.get('[data-cy="submit-button"]').click()
    cy.get('[data-cy="username"] + p').should('be.visible').should('have.text','Username is required!')
    cy.get('[data-cy="email"] + p').should('be.visible').should('have.text','Email is required!')
    cy.get('[data-cy="password"] + p').should('be.visible').should('have.text','Password is required')
  })
  it('Shows validation error message when invalid email format is used', () => {
    cy.get('[data-cy="username"] > input').type('whatever')
    cy.get('[data-cy="password"] > input').type('whatever')
    cy.get('[data-cy="confirm-password"] > input').type('whatever')
    cy.get('[data-cy="email"] > input').type('whatever')
    cy.get('[data-cy="submit-button"]').click()
    cy.get('[data-cy="username"] > p').should('not.exist')
    cy.get('[data-cy="password"] > p').should('not.exist')
    cy.get('[data-cy="confirm-password"] > p').should('not.exist')
    cy.get('[data-cy="email"] + p').should('be.visible').should('have.text','This is not a valid email format!')
  })
  
  it('Shows validation error message when password is less then 4 chars', () => {})
  it('Shows validation error message when password is more than 10 chars', () => {})
  it('Shows validation error message when passwords dont match', () => {})
})
