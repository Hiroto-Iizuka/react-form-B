import { connect } from 'react-redux';
import * as actions from '../actions/basicActions';
import Basic from '../Basic';

const mapStateToProps = state => {
  return {
    gender: state.gender,
    year: state.year,
    month: state.month,
    day: state.day
  }
}

const mapDispatchToProps = dispatch => {
  return {
    basic: (answer) => dispatch(actions.basic(answer))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Basic)