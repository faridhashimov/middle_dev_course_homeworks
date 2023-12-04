import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Category, Element, Home, NotFound } from './pages'
import CategoryLayout from './pages/layout/CategoryLayout'

function App() {
    return (
        <Routes>
            <Route path="/" element={<CategoryLayout />}>
                <Route index element={<Home />} />
                <Route path="/category/:categoryId" element={<Category />} />
                <Route
                    path="/category/:categoryId/:elementId?"
                    element={<Element />}
                />
                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
    )
}

export default App
