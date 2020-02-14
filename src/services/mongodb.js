const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://user:password@cluster0-xc7ik.mongodb.net/apirestful?retryWrites=true&w=majority', {
    useNewUrlParser: true,    
    useUnifiedTopology: true
})