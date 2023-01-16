import express from 'express';

const router = express.Router()

import userRoute from './user.route.js';


const Routes = [
    {
        path: '/users',
        route: userRoute
    }
]

Routes.forEach(route=>{
    router.use(route.path, route.route)
})

export default router