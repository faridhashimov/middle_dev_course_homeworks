import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { UnknownAction } from 'redux'
import { RootState } from './store'
import { ThunkDispatch } from '@reduxjs/toolkit'

export const useAppDispatch = useDispatch<
    ThunkDispatch<RootState, void, UnknownAction>
>
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
