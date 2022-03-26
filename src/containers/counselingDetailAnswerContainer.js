import { connect } from 'react-redux';
import * as actions from '../actions/basicActions';
import CounselingDetail from '../CounselingDetail';

const mapStateToProps = state => {
  return {
    counseling_detail: state
  }
}

const mapDispatchToProps = dispatch => {
  return {
    counseling_detail: (answer) => dispatch(actions.counseling_detail(answer))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CounselingDetail)