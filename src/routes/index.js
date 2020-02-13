const product = require('../handlers/product')

module.exports = [
    {
        method: 'GET',
        path: '/',
        handler: function (req, res) {
            return 'Server up'
        }
    }, 
    {
        method: 'GET',
        path: '/api/v1/products',
        handler: product.getAll
    }
]