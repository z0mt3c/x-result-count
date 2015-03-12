var parser = module.exports = {
    parse: function(value) {
        if (typeof value === 'string') {
            var indexOfMinus = value.indexOf('-');
            var indexOfSlash = value.indexOf('/', indexOfMinus);

            if (indexOfSlash !== -1 && indexOfMinus !== -1) {
                var skip = parseInt(value.substring(0, indexOfMinus), 10);
                var stop = parseInt(value.substring(indexOfMinus + 1, indexOfSlash), 10);
                var total = parseInt(value.substr(indexOfSlash + 1), 10);
                return {skip: skip, count: stop - skip, total: total};
            }
        }

        return null;
    },
    generate: function(data) {
        if (data && data.skip >= 0 && data.count >= 0 && data.total >= 0) {
            var from = data.skip;
            var to = from + data.count;
            return from + '-' + to + '/' + data.total;
        } else {
            return null;
        }
    }
};
