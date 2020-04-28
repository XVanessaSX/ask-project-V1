// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import VerifyPage from 'src/components/VerifyPage';

// Action Creators
import {
  changeTokenValue,
} from 'src/actions/verifyPage';


const mapStateToProps = (state) => ({
  verifyPage: state.verifyPage.value,
});

const mapDispatchToProps = (dispatch) => ({
  changeTokenValue: (value) => {
    dispatch(changeTokenValue(value));
  },
});

// Export du retour de connect = le composant enrichi de props
export default connect(mapStateToProps, mapDispatchToProps)(VerifyPage);
