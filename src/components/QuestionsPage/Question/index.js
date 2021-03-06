// == Import : npm
import React from 'react';
import Moment from 'react-moment';
import PropTypes from 'prop-types';

import { Icon, Button } from 'semantic-ui-react';

// on import la route de navigation
import { NavLink } from 'react-router-dom';
// == Import : local
import Counter from 'src/containers/QuestionsPage/Question/Counter';

// import du composant styled du question
import QuestionStyled from './QuestionStyled';

// == Composant
// ici on a la fonction qui renvoi le formulaire de structure de question
const Question = ({
  score,
  content,
  author,
  tag,
  created_at: createdAt,
  answers,
  id,
  upvoted,
  downvoted,
  saveQuestionId,
  deleteQuestion,
  fetchDeleteQuestion,
  userId,
}) => (
  <QuestionStyled>
    <div className="question-container">
      <Counter score={score} questionId={id} upvoted={upvoted} downvoted={downvoted} />
      <div className="text">
        <div className="tag-container">
          <p className="tag">{tag.name}</p>
        </div>
        <NavLink
          exact
          to={`/Answer/${id}`}
          onClick={() => {
            saveQuestionId(id);
          }}
        >
          <p className="question">{content}</p>
        </NavLink>
        <div className="separator" />
        <p className="author">posté par {author.name}, le <Moment locale="fr" format="DD-MM-YYYY">{createdAt}</Moment> à <Moment locale="fr" format="HH:mm">{createdAt}</Moment>
        </p>
        {author.id === userId && (
          <div className="modify-icons" key={author.id}>
            <Button
              onClick={() => {
                deleteQuestion(id);
                fetchDeleteQuestion();
              }}
              size="mini"
              circular
            >
              <Icon name="trash alternate outline" />
            </Button>
          </div>
        )}
        <div className="answer-container">
          <NavLink
            exact
            to={`/Answer/${id}`}
            onClick={() => {
              saveQuestionId(id);
            }}
          >
            <div className="answer-number">{answers.length < 2 ? <p><Icon name="comments outline" />{answers.length} réponse</p> : <p><Icon name="comments" />{answers.length} réponses</p> }</div>
          </NavLink>
        </div>
      </div>
    </div>
  </QuestionStyled>
);

Question.propTypes = {
  userId: PropTypes.number,
  questions: PropTypes.array.isRequired,
  deleteQuestion: PropTypes.func.isRequired,
  score: PropTypes.number.isRequired,
  content: PropTypes.string.isRequired,
  author: PropTypes.object.isRequired,
  tag: PropTypes.object.isRequired,
  created_at: PropTypes.string.isRequired,
  answers: PropTypes.array.isRequired,
  id: PropTypes.number.isRequired,
  upvoted: PropTypes.array.isRequired,
  downvoted: PropTypes.array.isRequired,
  saveQuestionId: PropTypes.func.isRequired,
};

Question.defaultProps = {
  userId: '',
};

// == Export
export default Question;
