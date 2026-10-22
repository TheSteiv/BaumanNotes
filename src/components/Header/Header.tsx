import './Header.css';
function Header() {
    return (
        <header className='main-header'>
            <div className="logo">
                <h2>Название проекта</h2>
            </div>
            <div className="headerButtons">
                <button className="settingsButton">На</button>
                <button className="accountLogo">Ав</button>
            </div>
        </header>
    )
}

export default Header