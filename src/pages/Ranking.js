import React from 'react';
import PropTypes from 'prop-types';
import md5 from 'crypto-js/md5';
import { connect } from 'react-redux';
import { actionCreator, CLEAR_SCORE } from '../redux/actions';
import './Ranking.css';

class Ranking extends React.Component {
  state = {
    players: [],
  };

  componentDidMount() {
    const players = JSON.parse(localStorage.getItem('players'));
    const order = (players !== null) ? players.sort((a, b) => b.score - a.score) : [];
    this.setState({ players: order });
  }

  handleBtn = () => {
    const { dispatch, history: { push } } = this.props;
    dispatch(actionCreator(CLEAR_SCORE));
    push('/');
  };

  render() {
    const { players } = this.state;
    return (
      <div className="paiRanking">
        <h1 data-testid="ranking-title" className="titleRanking">Ranking</h1>
        <div className="btnsFeed">
          <button
            type="button"
            data-testid="btn-go-home"
            className="btnRankingFeed"
            onClick={ this.handleBtn }
          >
            Homepage
          </button>
          <button
            type="button"
            data-testid="btn-play-again"
            className="btnAgainFeed"
            onClick={ this.handleBtn }
          >
            Play Again
          </button>
        </div>
        { players.length > 0 ? players.map((info, index) => (
          <div key={ index } className="rankings">
            <div className="playerEponto">
              <p data-testid={ `player-name-${index}` } className="plye">{ info.name }</p>
              <p data-testid={ `player-score-${index}` }>{ info.score }</p>
            </div>
            <img
              className="imgRanking"
              alt="Imagem do jogador"
              src={ `https://www.gravatar.com/avatar/${md5(info.gravatarEmail).toString()}` }
            />
          </div>)) : <p>Carregando Jogadores...</p>}
      </div>
    );
  }
}

Ranking.propTypes = {
  push: PropTypes.func,
}.isRequired;

export default connect(null)(Ranking);
