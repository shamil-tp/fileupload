const mongoose = require('mongoose')
const uri ='mongodb+srv://shamiltp073:WXv3MeUtTOhR2Pco@mysnapgram.zq2yd.mongodb.net/?retryWrites=true&w=majority&appName=MYsnapgram/snpgrm'

exports.connectDb = function(){
    mongoose.connect(uri).then(()=>{
        console.log('database connected')
    }).catch((e)=>{
        console.log('an error occured during connecting to the database')
        console.log(e)
    })
}
