import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ScoreKeeperScreen from './ScoreKeeperScreen';
import { appLayout, scoreChanged} from '../../actions/actionCreators';


const mapStateToProps = state => ({
  isPortrait: state.ui.isPortrait,
  score: state.score,
  settings: state.settings
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      appLayout,
      scoreChanged
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ScoreKeeperScreen);
