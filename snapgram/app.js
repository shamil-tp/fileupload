
const express=require('express')
let app=express()

app.set('view engine','ejs')
app.set('views','views')
app.use(express.static('contents'))
app.use(express.urlencoded())

let {connectDb} = require('./config/database')
connectDb()

const {getLoginPage,getSignupPage, signup, login, getProfilePage,getUploadProfile} = require('./controllers/user')

app.get('/login', getLoginPage)
app.post('/login',login)
app.get('/signup',getSignupPage)
app.post('/signup',signup)
app.get('/profile',getProfilePage)
app.get('/uploadprofile',getUploadProfile)


app.listen(8000,()=>{
    console.log("app started")
})