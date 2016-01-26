'use strict'

const Code = require('code')
const Lab = require('lab')
let lab = exports.lab = Lab.script()
const xResultCount = require('../')

lab.test('breakthrough', done => {
  const source = {skip: 100, count: 50, total: 999}
  const generated = xResultCount.generate(source)
  Code.expect(generated).to.equal('100-150/999')
  const parsed = xResultCount.parse(generated)
  Code.expect(parsed).to.deep.equal(source)
  done()
})

lab.test('parse', done => {
  Code.expect(xResultCount.parse('100-150/999')).to.exist()
  Code.expect(xResultCount.parse('100-150999')).to.not.exist()
  Code.expect(xResultCount.parse('100150/999')).to.not.exist()
  Code.expect(xResultCount.parse(null)).to.not.exist()
  Code.expect(xResultCount.parse('')).to.not.exist()
  Code.expect(xResultCount.parse()).to.not.exist()
  done()
})

lab.test('generate', done => {
  Code.expect(xResultCount.generate({skip: 100, count: 50, total: 999})).to.exist()
  Code.expect(xResultCount.generate({count: 50, total: 999})).to.not.exist()
  Code.expect(xResultCount.generate({skip: 100, total: 999})).to.not.exist()
  Code.expect(xResultCount.generate({skip: 100, count: 50})).to.not.exist()
  Code.expect(xResultCount.generate(null)).to.not.exist()
  Code.expect(xResultCount.generate({})).to.not.exist()
  Code.expect(xResultCount.generate()).to.not.exist()
  done()
})
