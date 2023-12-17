const express = require('express');
const router = require('router');
//route
const authRoutes = ('./auth.route.js');
const articlesRoutes = ('./article.route.js');
const userRoutes = ('./user.route.js')

const routesIndex = [
    {
        path: '/auth',
        route: authRoutes,
    },
    {
        path: '/articles',
        route: articlesRoutes,
    },
    {
        path: '/users',
        route: userRoutes,
    }
]

routesIndex.forEach((route)=>{
    router.use(route.path, route.route)
})
module.exports = router;