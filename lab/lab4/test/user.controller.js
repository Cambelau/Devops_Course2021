const { expect } = require('chai')
const userController = require('../src/controllers/user')

describe('User', () => {


  describe('Create', () => {

    it('create a new user', (done) => {
      const user = {
        username: 'sergkudinov',
        firstname: 'Sergei',
        lastname: 'Kudinov'
      }
      userController.create(user, (err, result) => {
        expect(err).to.be.equal(null)
        expect(result).to.be.equal('OK')
        done()
      })
    })

    it('passing wrong user parameters', (done) => {
      const user = {
        firstname: 'Sergei',
        lastname: 'Kudinov'
      }
      userController.create(user, (err, result) => {
        expect(err).to.not.be.equal(null)
        expect(result).to.be.equal(null)
        done()
      })
    })
    //
  })

  describe('Get', ()=> {
   // TODO Create test for the get method
    it('get a user by username', (done) => {
       // 1. First, create a user to make this unit test independent from the others
       const user = {
         username: 'marciceron',
         firstname: 'Marcus',
         lastname: 'Ciceron'
       }
       userController.create(user, (err, result) => {
        
      })
       // 2. Then, check if the result of the get method is correct
       userController.get(user.username, (err, result) => {
        expect(err).to.be.equal(null)
        expect(result).to.be.equal('Marcus')
        done()
       })
    })
  
     // TODO Create test for the get method
    it('cannot get a user when it does not exist', (done) => {
     // 1. First, create a user to make this unit test independent from the others
     const user = {
       username: 'master'
     }
     // 2. Then, check if the result of the get method is correct
     userController.get(user.username, (err, result) => {
       expect(err).to.not.be.equal(null)
       expect(result).to.be.equal(null)
       done()
     })
    })

  })

})
