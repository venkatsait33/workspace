import { Route, Routes } from 'react-router-dom'
import App from '../App'

const routes = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<App />} />
            </Routes>
        </div>
    )
}

export default routes