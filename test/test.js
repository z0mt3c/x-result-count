var Code = require('code');
var Lab = require('lab');
var lab = exports.lab = Lab.script();
var xResultCount = require('../');

lab.test('breakthrough', function (done) {
    var source = {skip: 100, count: 50, total: 999};
    var generated = xResultCount.generate(source);
    Code.expect(generated).to.equal('100-150/999');
    var parsed = xResultCount.parse(generated);
    Code.expect(parsed).to.deep.equal(source);
    done();
});

lab.test('parse', function (done) {
    Code.expect(xResultCount.parse('100-150/999')).to.exist();
    Code.expect(xResultCount.parse('100-150999')).to.not.exist();
    Code.expect(xResultCount.parse('100150/999')).to.not.exist();
    Code.expect(xResultCount.parse(null)).to.not.exist();
    Code.expect(xResultCount.parse('')).to.not.exist();
    Code.expect(xResultCount.parse()).to.not.exist();
    done();
});

lab.test('generate', function (done) {
    Code.expect(xResultCount.generate({skip: 100, count: 50, total: 999})).to.exist();
    Code.expect(xResultCount.generate({count: 50, total: 999})).to.not.exist();
    Code.expect(xResultCount.generate({skip: 100, total: 999})).to.not.exist();
    Code.expect(xResultCount.generate({skip: 100, count: 50 })).to.not.exist();
    Code.expect(xResultCount.generate(null)).to.not.exist();
    Code.expect(xResultCount.generate({})).to.not.exist();
    Code.expect(xResultCount.generate()).to.not.exist();
    done();
});