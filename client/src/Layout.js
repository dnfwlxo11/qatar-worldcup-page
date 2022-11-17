import { Outlet } from 'react-router-dom';
import Navbar from './components/navbar';
import Footerbar from './components/footerbar';
import './Layout.scss'

function Layout() {
    return (
        <div>
            <header>
                <Navbar />
            </header>
            <main className='main'>
                <Outlet />
            </main>
            <footer>
                <Footerbar />
            </footer>
        </div>
    )
}

export default Layout;