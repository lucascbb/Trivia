import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import fetchToken from '../services/api';
import { actionCreator, LOGIN_INICIAL } from '../redux/actions';
import SettingsBTN from '../components/SettingsBTN';
import './Login.css';
import trivialogo from '../imagens/pngwing.com.png';

class Login extends Component {
  state = {
    name: '',
    email: '',
  };

  handleChange = ({ target }) => {
    this.setState({
      [target.name]: target.value,
    });
  };

  btnChange = async () => {
    const { history, dispatch } = this.props;
    const tokenApi = await fetchToken();
    const { token } = tokenApi;
    localStorage.setItem('token', token);
    dispatch(actionCreator(LOGIN_INICIAL, this.state));
    history.push('/game');
  };

  render() {
    const { name, email } = this.state;
    return (
      <section className="paiLogin">
        <div className="imagemmLoginPai">
          <img src={ trivialogo } alt="" className="imagemLogin" />
        </div>
        <form className="formLogin">
          <input
            name="name"
            type="text"
            className="nameLogin"
            placeholder="Qual é o seu nome?"
            data-testid="input-player-name"
            onChange={ this.handleChange }
            value={ name }
          />
          <input
            name="email"
            type="email"
            className="emailLogin"
            placeholder="Qual é o seu e-mail do gravatar?"
            data-testid="input-gravatar-email"
            onChange={ this.handleChange }
          />
          <button
            type="button"
            className="btnLogin"
            data-testid="btn-play"
            disabled={ !(name && email) }
            onClick={ this.btnChange }
          >
            Play
          </button>
        </form>
        {/* <Link to="/settings">
          <SettingsBTN />
        </Link> */}
      </section>
    );
  }
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
  dispatch: PropTypes.func,
}.isRequired;

export default connect(null)(Login);
