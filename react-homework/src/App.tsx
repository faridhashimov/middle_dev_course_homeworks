import { BrowserRouter, Route, Routes } from 'react-router-dom'
import {
    HomePage,
    LoginPage,
    NewNote,
    Note,
    RegisterPage,
    EditNote,
    Offline,
} from './pages'
import './App.css'
import { AuthProvider } from './context/AuthContext'
import PrivateRoute from './components/PrivateRoute/PrivateRoute'
import { ThemeProvider } from '@mui/material/styles'
import { theme } from './theme'
import { NoteProvider } from './context/NoteContext'
import NotFoundPage from './pages/NotFoundPage/NotFoundPage'

function App() {
    return (
        <AuthProvider>
            <NoteProvider>
                <ThemeProvider theme={theme}>
                    <BrowserRouter>
                        <Routes>
                            <Route
                                path="/"
                                element={
                                    <PrivateRoute>
                                        <HomePage />
                                    </PrivateRoute>
                                }
                            >
                                <Route path="/">
                                    <Route index element={<Note />} />
                                    <Route
                                        path=":noteId"
                                        element={<EditNote />}
                                    />
                                    <Route path="new" element={<NewNote />} />
                                </Route>
                            </Route>
                            <Route path="/login" element={<LoginPage />} />
                            <Route
                                path="/register"
                                element={<RegisterPage />}
                            />
                            <Route path="*" element={<NotFoundPage />} />
                            <Route path="/offline" element={<Offline />} />
                        </Routes>
                    </BrowserRouter>
                </ThemeProvider>
            </NoteProvider>
        </AuthProvider>
    )
}

export default App
