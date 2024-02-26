import { contactsApi } from './contactsApi'
import { favoriteContactsSlice } from './favoriteContactsSlice'

export const favoritesReducer = favoriteContactsSlice.reducer
export const contactsReducer = contactsApi.reducer
export const contactsReducerPath = contactsApi.reducerPath
export const contactsMiddleware = contactsApi.middleware

export const { addToFavorites, removeFromFavorites } =
    favoriteContactsSlice.actions
export const { useGetContactsQuery, useGetGroupsQuery } = contactsApi
