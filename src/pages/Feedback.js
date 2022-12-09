import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import './Feedback.css';

class Feedback extends React.Component {
  playAgain = () => {
    const { history } = this.props;
    history.push('/');
  };

  ranking = () => {
    const { history } = this.props;
    history.push('/ranking');
  };

  render() {
    const { asserts, points } = this.props;
    const MIN_ANSWERS = 3;
    return (
      <>
        <Header />
        <div className="paiFeed">
          <div className="certoEpontos">
            <h3
              data-testid="feedback-total-question"
              className="certosFeed"
            >
              {`Acertos:  ${asserts} `}
            </h3>
            <h3
              data-testid="feedback-total-score"
              className="pontosFeed"
            >
              { `Pontos: ${points}` }
            </h3>
          </div>
          { asserts < MIN_ANSWERS
            ? <p data-testid="feedback-text" className="msgFeed">Could be better...</p>
            : <p data-testid="feedback-text" className="msgFeed">Well Done!</p>}
          <div className="btnsFeed">
            <button
              type="button"
              data-testid="btn-ranking"
              className="btnRankingFeed"
              onClick={ this.ranking }
            >
              Ver Ranking
            </button>
            <button
              type="button"
              data-testid="btn-play-again"
              className="btnAgainFeed"
              onClick={ this.playAgain }
            >
              Play Again
            </button>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  asserts: state.player.assertions,
  points: state.player.score,
});

Feedback.propTypes = {
  asserts: PropTypes.number,
  points: PropTypes.number,
}.isRequired;

export default connect(mapStateToProps)(Feedback);
