const User = require('../models/User')

exports.getLoginPage = (req,res)=>{
    return res.render('login')
}

exports.getSignupPage = (req,res)=>{
    return res.render('signup')
}
exports.getProfilePage = (req,res)=>{
    return res.render('profile')
}


exports.signup = async(req,res)=>{
    let id = Date.now()
    const {name,email,phone,password}=req.body
    await User.create({
        id,name,email,phone,password
    })
    return res.redirect('/login')
}


exports.login= async(req,res)=>{
    let {phone,password}=req.body
    let user = await User.findOne({phone:phone}).select('+password')
    if(!user){
        return res.send('invalid username or password')
    }
    if(user.password != password){
        return res.send('invalid username or password')

    }

    return res.send(`welcome ${user.name}`)
}
exports.getUploadProfile=(req,res)=>{
        return res.render('fileupload')
}