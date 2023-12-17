import { Suspense, lazy, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import {
    // CategoryPage,
    // ElementPage,
    HomePage,
    // NotFound
} from './pages'
import CategoryLayout from './layout/CategoryLayout'
import { SignIn } from './components'
import { PrivateRoute } from './components/PrivateRoute/PrivateRoute'
import { AuthProvider } from './context/AuthContext'
import { ErrorBoundary } from './components/ErrorBoundary/ErrorBoundary'
import './App.css'

function App() {
    const [pageNum, setPageNum] = useState(1)

    // const HomePage = lazy(() => import('./pages'))
    const CategoryPage = lazy(() => import('./pages/CategoryPage/CategoryPage'))
    const ElementPage = lazy(() => import('./pages/ElementPage/ElementPage'))
    const NotFound = lazy(() => import('./pages/NotFound/NotFound'))
    return (
        <AuthProvider>
            <Routes>
                <Route
                    path="/"
                    element={
                        <CategoryLayout
                            pageNum={pageNum}
                            setPageNum={setPageNum}
                        />
                    }
                >
                    <Route index element={<HomePage />} />
                    <Route
                        path="/category/:categoryId"
                        element={
                            <PrivateRoute>
                                <ErrorBoundary>
                                    <CategoryPage
                                        pageNum={pageNum}
                                        setPageNum={setPageNum}
                                    />
                                </ErrorBoundary>
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path="/category/:categoryId/:elementId?"
                        element={
                            <PrivateRoute>
                                <ErrorBoundary>
                                    <ElementPage />
                                </ErrorBoundary>
                            </PrivateRoute>
                        }
                    />
                    <Route path="/login" element={<SignIn />} />
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </AuthProvider>
    )
}

export default App
