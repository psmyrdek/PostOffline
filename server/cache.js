module.exports = function (init) {
    const cache = init || {};
    return {
        get: function (key) { return cache[key]; },
        set: function (key, val) { cache[key] = val; }
    }
}