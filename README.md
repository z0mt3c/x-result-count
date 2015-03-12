x-result-count
==============
Parses my "default" paging header

[![Build Status](https://travis-ci.org/z0mt3c/x-result-count.png)](https://travis-ci.org/z0mt3c/x-result-count)
[![Dependency Status](https://gemnasium.com/z0mt3c/x-result-count.png)](https://gemnasium.com/z0mt3c/x-result-count)


```js
var source = {skip: 100, count: 50, total: 999};
var generated = xResultCount.generate(source);
Code.expect(generated).to.equal('100-150/999');
var parsed = xResultCount.parse(generated);
Code.expect(parsed).to.deep.equal(source);
```