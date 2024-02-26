import { combineReducers } from 'redux'
import { configureStore } from '@reduxjs/toolkit'

import { logActionMiddleware } from './logActionMiddleware'
import {
    contactsReducerPath,
    contactsMiddleware,
    contactsReducer,
    favoritesReducer,
} from './contacts'

const rootReducer = combineReducers({
    favorites: favoritesReducer,
    [contactsReducerPath]: contactsReducer,
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat([
            contactsMiddleware,
            logActionMiddleware,
        ]),
})

export type RootState = ReturnType<typeof rootReducer>
