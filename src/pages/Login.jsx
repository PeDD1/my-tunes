import React, { Component } from 'react';
import Loading from '../components/Loading';
import { createUser } from '../services/userAPI';

const MIN_USER_NAME_LENGTH = 3;

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
    this.setState({ name: event.target.value });
  }

  handleClick = () => {
    const { history } = this.props;
    const { name } = this.state;
    const user = { name };
    this.setState({ loading: true }, async () => {
      await createUser(user);
      history.push('search');
    })
  }

  render() {
    const { handleChange, handleClick } = this;
    const { name, loading } = this.state;
    if (loading) return <Loading />;

    return (
      <form>
        <input
          type="text"
          onChange={handleChange}
          placeholder="Nome do Usuário"
        />
        <input
          type="password"
          onChange={handleChange}
          placeholder="Senha"
        />
        <button
          type="button"
          onClick={handleClick}
          disabled={name.length < MIN_USER_NAME_LENGTH}
        >
          Entrar
        </button>
      </form>
    )
  }
}

export default Login;
