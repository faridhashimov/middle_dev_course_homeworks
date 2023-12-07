import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Category, Element, Home, NotFound } from './pages'
import CategoryLayout from './layout/CategoryLayout'
import { SignIn } from './components'
import { PrivateRoute } from './components/PrivateRoute/PrivateRoute'
import { AuthProvider } from './context/AuthContext'

function App() {
    return (
        <AuthProvider>
            <Routes>
                <Route path="/" element={<CategoryLayout />}>
                    <Route index element={<Home />} />
                    <Route
                        path="/category/:categoryId"
                        element={
                            <PrivateRoute>
                                <Category />
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path="/category/:categoryId/:elementId?"
                        element={
                            <PrivateRoute>
                                <Element />
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
