import { Button } from '../ui/button';
import './Header.css';
import { Link } from "react-router"

function Header() {
    return (
        <header className='main-header'>
            <Link to={'/'}>
                <div className="logo">
                    <h2>Название проекта</h2>
                </div>
            </Link>
            <div className="headerButtons">
                <Link to={'/settings'}>
                    <Button variant="outline" size="icon" className="settings_button">На</Button>
                </Link>
                <Link to={'/login'}>
                    <Button variant="destructive" size="icon" className="profile_button">Ав</Button>
                </Link>
            </div>
        </header>
    )
}

export default Header