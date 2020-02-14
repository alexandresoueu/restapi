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
    },
    {
        method: 'GET',
        path: '/api/v1/products/{id}',
        handler: product.getProductById
    },
    {
        method: 'POST',
        path: '/api/v1/products',
        handler: product.save
    },
    {
        method: 'DELETE',
        path: '/api/v1/products/{id}',
        handler: product.remove
    }
]