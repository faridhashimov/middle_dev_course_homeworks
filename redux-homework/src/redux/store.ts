import {  applyMiddleware, combineReducers, createStore } from 'redux'
import { contactsReducer } from './contactsReducer'
import { favoritesReducer } from './favoritesReducer'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { groupContactsReducer } from './groupContactsReducer'
import { composeWithDevTools } from '@redux-devtools/extension'
import { logActionMiddleware } from './logActionMiddleware'

const rootReducer = persistReducer(
    { key: 'root', storage: storage },
    combineReducers({
        contacts: contactsReducer,
        groups: groupContactsReducer,
        favorites: favoritesReducer,
    })
)

export const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(logActionMiddleware))
)
export const persistor = persistStore(store)

export type RootState = ReturnType<typeof rootReducer>
