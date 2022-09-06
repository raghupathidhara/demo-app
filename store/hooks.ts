import {useSelector, useDispatch, TypedUseSelectorHook} from 'react-redux'
import {RootState, ActionDispatch} from './store'

export const useAppDispatch: () => ActionDispatch= useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState>= useSelector