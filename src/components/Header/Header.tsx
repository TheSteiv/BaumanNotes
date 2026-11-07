import { Button } from '../ui/button';
import './Header.css';
function Header() {
    return (
        <header className='main-header'>
            <div className="logo">
                <h2>Название проекта</h2>
            </div>
            <div className="headerButtons">
                <Button variant="outline" size="icon" className="settings_button">На</Button>
                <Button variant="destructive" size="icon" className="profile_button">Ав</Button>
            </div>
        </header>
    )
}

export default Header