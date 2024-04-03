import {configureStore} from '@reduxjs/toolkit'

import UserReducer from './reducers/users'
import SiteReducer from './reducers/site'
import NotificationsReducer from './reducers/notifications'
import ArticlesReducer from './reducers/articles'


export const store = configureStore({
    reducer:{
        users: UserReducer,
        site: SiteReducer, 
        aritcles: ArticlesReducer,
        notiications: NotificationsReducer
    }
})