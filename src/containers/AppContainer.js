import { connect } from 'react-redux';
import App from '../components/App/App';

const mapStateToProps = state => {
  const { smallReducer } = state;
  return smallReducer;
};

export default connect(mapStateToProps, null)(App);
