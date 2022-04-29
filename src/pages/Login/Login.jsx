import React, { Component } from 'react';
import Loading from '../../components/Loading';
import logo from '../../images/logo.png';
import { createUser } from '../../services/userAPI';
import './Login.css';

const MIN_USER_NAME_LENGTH = 3;
const MIN_PASSWORD_LENGTH = 8;

class Login extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      password: '',
      loading: false,
    };
  }

  handleChange = (event) => {
    if (event.target.id === "user-input") {
      this.setState({ name: event.target.value });
    } else {
      this.setState({ password: event.target.value });
    }
  }

  handleClick = () => {
    const { name } = this.state;
    const user = { name };
    this.setState({ loading: true }, async () => {
      await createUser(user);
      window.history.replaceState({}, undefined, '/search');
      window.location.reload();
    });
  }

  render() {
    const { handleChange, handleClick } = this;
    const { name, password, loading } = this.state;
    if (loading) return <Loading />;

    return (
      <div className="login-background">
        <img alt="My Tunes logo" src={logo} className="logo" />
        <form className="login-form">
          <input
            type="text"
            onChange={handleChange}
            placeholder="Nome do Usuário"
            id="user-input"
            className="login-input"
          />
          <input
            type="password"
            onChange={handleChange}
            placeholder="Senha"
            className="login-input"
          />
          <button
            type="submit"
            onClick={handleClick}
            disabled={name.length < MIN_USER_NAME_LENGTH
              || password.length < MIN_PASSWORD_LENGTH}
            className="login-button"
          >
            Entrar
          </button>
        </form>
      </div>
    )
  }
}

export default Login;
