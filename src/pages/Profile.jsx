import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Loading from '../components/Loading';
import { getUser } from '../services/userAPI';

class Profile extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      image: '',
      description: '',
      loading: true,
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

  render() {
    const { loading, name, email, image, description } = this.state;

    return (
      <div>
        <Header />
        {loading ? <Loading />
          : (
            <div>
              <div>
                <img src={image} alt="foto perfil" />
                <Link to="/profile/edit">
                  <h3>Editar Perfil</h3>
                </Link>
              </div>
              <div>
                <h3>Nome</h3>
                <p>{name}</p>
                <h3>E-mail</h3>
                <p>{email}</p>
                <h3>Descrição</h3>
                <p>{description}</p>
              </div>
            </div>
          )}
      </div>
    );
  }
}

export default Profile;
