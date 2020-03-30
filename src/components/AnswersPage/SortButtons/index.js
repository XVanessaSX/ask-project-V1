// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// import du composant styled du sortbuttons
import SortButtonsStyled from './SortButtonsStyled';

const SortButtons = ({ changeSorted, sorted, fetchQuestions }) => (
// == Composant
// ici on a la fonction qui renvoi le formulaire de structure de sortbuttons
  <SortButtonsStyled>
    <button
      type="button"
      className={sorted === 'created_at' ? 'active-btn' : ''}
      onClick={() => {
        changeSorted('created_at');
        fetchQuestions();
      }}
    >
      New
    </button>
    <button
      type="button"
      className={sorted === 'score' ? 'active-btn' : ''}
      onClick={() => {
        changeSorted('score');
        fetchQuestions();
      }}
    >
      Best
    </button>
  </SortButtonsStyled>
);

SortButtons.propTypes = {
  sorted: PropTypes.string.isRequired,
  changeSorted: PropTypes.func.isRequired,
  fetchQuestions: PropTypes.func.isRequired,
};

export default SortButtons;