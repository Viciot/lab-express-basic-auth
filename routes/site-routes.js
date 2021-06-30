const express = require('express');
const siteRouter = express.Router()

//protected route, only can seen by a user logged

//MIDDLEWER
// set a function tha works in every request, will work before of any router respond
siteRouter.use((req, res, next)=>{
   console.log(req.session.currentUser)
    if(req.session.currentUser){ //(this is a falsy vallue) this comes from lie 32 in auth-router)
    // (next)it's a middlewere function, can pass the control to another route. They are helpers functions, don't complete the operations, just decide between go or no.
    next()
   }else{
       res.redirect('/auth/login')
   }
})

siteRouter.get('/protected', (req, res, next) => {
    res.render('site/protected-webpage');
  })
  
  siteRouter.get('/personal', (req, res, next) => {
    res.render('site/personal-webpage');
  })
  
  siteRouter.get('/profile', (req, res, next) => {
    res.render('site/profile-webpage');
  })
  
  siteRouter.get('/', (req, res, next) => {
    res.render('site/index');
  })

module.exports = siteRouter;