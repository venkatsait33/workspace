import { Route, Routes } from 'react-router-dom'
import App from '../App'
import About from '../pages/About/About'

const routes = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<App />} />
                <Route path='/about' element={<About />} />
            </Routes>
        </div>
    )
}

export default routes