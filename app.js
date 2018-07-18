module.exports = {
    sayHello: function() {
        return 'Hello';
    },
    getDate: function() {
        return new Date().toString();
    },
    addNumbers: function(value1, value2) {
        return value1 + value2;
    }
};