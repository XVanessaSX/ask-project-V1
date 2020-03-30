// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';
// import du frameworks
<<<<<<< HEAD
import { Button, Input, Icon } from 'semantic-ui-react';
=======
import { Icon } from 'semantic-ui-react';
>>>>>>> killwindows98

import SortButtons from 'src/containers/Nav/SortButtons';

// Import des datas en dur Question avec les tags et l'auteur associé

// == Import : local
// import du composant styled du questionpage
import QuestionsPageStyled from './QuestionsPageStyled.js';

import Question from './Question';

// == Composant
// ici on a la fonction qui renvoi le formulaire de structure de questionpage
const QuestionsPage = ({
  questions,
  isLogged,
  tags,
  value,
  changeInputValue,
  fetchPostQuestion,
}) => (
    <QuestionsPageStyled>
      <div className="question-form-container">
        <form
          onSubmit={(event) => {
            event.preventDefault();
            fetchPostQuestion();
          }}
          className="question-form"
        >
          <h3>Poster une question :</h3>
          <input
            name="content"
            type="text"
            placeholder="Ajouter votre question..."
            value={value}
            onChange={(event) => {
              changeInputValue(event.target.value, event.target.name);
            }}
          />
          <select
            onChange={(event) => {
              changeInputValue(event.target.value, event.target.name);
            }}
            compact="true"
            name="tagId"
          >
            <option value="default">Catégories</option>
            {tags.map((tag) => (
              <option key={tag.id} value={tag.id}>{tag.name}</option>
            ))}
          </select>
          {isLogged && (
            <button type="submit"><Icon name="paper plane outline" />Publier</button>
          )}
          {!isLogged && (
            <button
              type="button"
              onClick={() => {
                swal('Vous devez vous connecter pour poster des questions !', '', 'warning');
              }}
            >
              <Icon name="paper plane outline" />
              Publier
            </button>
          )}
        </form>
      </div>
      <div className="container-list-question">
        <SortButtons />
        {questions.map((question) => (
          <Question key={question.id} {...question} />
        ))}
      </div>
    </QuestionsPageStyled>
);

QuestionsPage.propTypes = {
  questions: PropTypes.array.isRequired,
  isLogged: PropTypes.bool.isRequired,
  tags: PropTypes.array.isRequired,
  value: PropTypes.string.isRequired,
  changeInputValue: PropTypes.func.isRequired,
  fetchPostQuestion: PropTypes.func.isRequired,
};

// == Export
export default QuestionsPage;
