const express = require('express');
const router = express.Router();
//route
const authRoutes = require('./auth.route.js')
const articlesRoutes = require('./articles.route.js');
const userRoutes = require('./user.route.js')

const routesIndex = [
    {
        path: '/auth',
        route: authRoutes 
    },{
        path: '/articles',
        route: articlesRoutes
    },
    {
        path:'/user',
        route: userRoutes
    }
]

routesIndex.forEach((route)=>{
    router.use(route.path, route.route)
})

module.exports = router 

//index for the routse