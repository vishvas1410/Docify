const mongoose = require('mongoose')

const DBConnect = ()=>{
    mongoose.connect("mongodb+srv://vishvaspatel1410:vVld3dW107vkQAtM@cluster0.q9ab6.mongodb.net/docify")
    .then((res)=>{
        console.log("database connection establish successfully")
    })
    .catch((error)=>{
        throw new Error(error.message)
    })

}

module.exports = {
    DBConnect
}