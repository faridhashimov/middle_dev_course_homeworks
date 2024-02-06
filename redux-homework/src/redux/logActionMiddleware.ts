import { Middleware } from 'redux'
import { logAction } from '../metrics/logAction'
import { RootState } from './store'
import { ProjectsActions } from './actions'

export const logActionMiddleware: Middleware<{}, RootState> = (storeAPI) => {
    return function wrapDispatch(next) {
        return function handleAction(action: ProjectsActions) {
            logAction(action)
            next(action)
        }
    }
}
