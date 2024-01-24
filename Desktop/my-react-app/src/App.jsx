import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar.jsx'
import Main from './Components/Main/Main.jsx'
import Astros from './Components/Astros/Astros.jsx'
import About from './Components/About/About.jsx';
import './App.css'

function App() {

    const linksData = [
        { id: 1, name: 'Home', href: '/'},
        { id: 2, name: 'About', href: '/about'},
        { id: 3, name: 'Astros', href: '/astros'},
    ]

    return (
        <>
            <Navbar header='Navbar' links={linksData} /> 
            <Routes>
                <Route
                    element={<Main />}
                    path='/'
                />
                <Route 
                    element={<About />}
                    path='/about'
                />
                <Route 
                    element={<Astros />}
                    path='/astros'
                />
            </Routes>
        </>
    )
}

export default App;
