import mongoose from 'mongoose'

mongoose.connect("mongodb://localhost/companydb",{
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify:true,
    useCreateIndex:true
})
    .then(db=>console.log('db conected'))
    .catch(error=>console.log(error))