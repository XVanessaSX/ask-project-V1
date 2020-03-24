
// == Imports NPM
import { connect } from 'react-redux';

// == Imports locaux
// composant + actions creator
import LoginForm from 'src/components/Nav/Settings/LoginForm';
import { loginAction, changeValueLogin } from 'src/actions/login';

// == Branchements
// lecture
const mapStateToProps = (state) => ({
  login: state.login,
});

// modification
const mapDispatchToProps = (dispatch) => ({
  loginAction: () => {
    dispatch(loginAction());
  },
  changeValue: (value, name) => {
    dispatch(changeValueLogin(value, name));
  },
});

// Export du retour de connect = le composant enrichi de props
export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);