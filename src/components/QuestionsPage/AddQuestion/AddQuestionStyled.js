// == Import locaux
import styled from 'styled-components';

// == Composant
// ici on a la fonction qui décrit le style du composant Settings
const AddQuestionStyled = styled.div`
  font-size: 1rem;
  color: black;
  position: relative;

  .btn {
    padding: 0 1rem;
  }

  @media (max-width: 400px) {
    .btn {
      display: flex;
      margin: 0 .2rem;
      padding: .2rem;
    }
  }
  
  .btn:hover {
    color: darkblue;
  }
`;

// == Export
export default AddQuestionStyled;
