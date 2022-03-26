import { connect } from 'react-redux';
import * as actions from '../actions/questionActions';
import Question from '../Question';

const mapStateToProps = state => {
  return {
    question1: state.question1,
    question2: state.question2,
    question3: state.question3
  }
}

const mapDispatchToProps = dispatch => {
  return {
    question: (answer) => dispatch(actions.question(answer))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Question)