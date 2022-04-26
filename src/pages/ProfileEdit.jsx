import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Header from '../components/Header';
import Loading from '../components/Loading';
import { getUser, updateUser } from '../services/userAPI';

class ProfileEdit extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      image: '',
      description: '',
      loading: true,
      redirect: false,
    };
  }

  componentDidMount() {
    this.getUser();
  }

  getUser = () => {
    this.setState({ loading: true }, async () => {
      const user = await getUser();
      const { name, email, image, description } = user;
      this.setState({
        loading: false, name, email, image, description,
      });
    });
  }

  buttonEnable = () => {
    const { name, image, description, email } = this.state;
    return (name.length > 0)
      && (image.length > 0)
      && (description.length > 0)
      && (email.length > 0);
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  }

  handleClick = (event) => {
    const { name, email, image, description } = this.state;
    event.preventDefault();
    this.setState({ loading: true }, async () => {
      await updateUser({ name, email, image, description });
      this.setState({ redirect: true });
    });
  }

  render() {
    const { name, email, image, description, loading, redirect } = this.state;

    if (redirect) {
      return <Redirect to="/profile" />;
    }
    return (
      <div data-testid="page-profile-edit">
        <Header />
        {
          loading ? <Loading />
            : (
              <form>
                <label htmlFor="input-name">
                  Nome
                  <input
                    name="name"
                    value={name}
                    id="input-name"
                    type="text"
                    required
                    onChange={this.handleChange}
                  />
                </label>

                <label htmlFor="input-email">
                  E-mail
                  <input
                    name="email"
                    value={email}
                    id="input-email"
                    type="text"
                    placeholder="usuario@usuario.com.br"
                    required
                    onChange={this.handleChange}
                  />
                </label>

                <label htmlFor="input-description">
                  Descrição
                  <input
                    name="description"
                    value={description}
                    id="input-description"
                    type="text"
                    required
                    onChange={this.handleChange}
                  />
                </label>

                <label htmlFor="input-image">
                  Imagem
                  <input
                    name="image"
                    value={image}
                    id="input-image"
                    required
                    onChange={this.handleChange}
                  />
                </label>
                <button
                  type="submit"
                  disabled={!this.buttonEnable()}
                  onClick={this.handleClick}
                >
                  Salvar
                </button>
              </form>
            )
        }
      </div>
    );
  }
}

export default ProfileEdit;
