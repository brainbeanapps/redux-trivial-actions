/* eslint-env mocha */

import { describe, it } from 'mocha'
import chai from 'chai'
import createTrivialAction from './createTrivialAction'

chai
  .should()

describe('createTrivialAction()', () => {
  it('should return an expected object', () => {
    const action = createTrivialAction('TEST')
    action.PERFORM.should.be.a.string('TEST/PERFORM')
    action.should.respondTo('perform')
    action.toString().should.be.a.string('TEST/PERFORM')
  })
})
