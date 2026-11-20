import './LoginPage.css';
import { useState } from 'react';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Вход:', username, password);
  };

  return (
    <div className="page-wrapper">

      <form className="AuthBlock" onSubmit={handleSubmit}>

        <label className="AuthBlock-label" htmlFor="username">
          Имя пользователя
        </label>
        <input
          id="username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <label className="AuthBlock-label" htmlFor="password">
          Пароль
        </label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit" className="login-btn">
          Войти
        </button>
      </form>

      <button type="button" className="register-btn">
        Зарегистрироваться
      </button>
    </div>
  );
}

export default LoginPage;
