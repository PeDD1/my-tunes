import React, { Component } from 'react';
import Loading from '../components/Loading';
import { createUser } from '../services/userAPI';

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
      <form>
        <input
          type="text"
          onChange={handleChange}
          placeholder="Nome do Usuário"
          id="user-input"
        />
        <input
          type="password"
          onChange={handleChange}
          placeholder="Senha"
        />
        <button
          type="button"
          onClick={handleClick}
          disabled={name.length < MIN_USER_NAME_LENGTH
            || password.length < MIN_PASSWORD_LENGTH}
        >
          Entrar
        </button>
      </form>
    )
  }
}

export default Login;
