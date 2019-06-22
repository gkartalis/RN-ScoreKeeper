import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import PlayerScore from '../../components/PlayerScore/';
import ScoreHeader from '../../components/ScoreHeader';
import { appLayout, scoreChanged} from '../../actions/actionCreators';

class ScoreKeeperScreen extends React.Component {
  
  _onLayout = event => this.props.appLayout(event.nativeEvent.layout);
  
  render() {
    const { score, settings, scoreChanged, isPortrait } = this.props;
    return (
      <View onLayout={this._onLayout} style={{ flex: 1, backgroundColor: '#000000'}}>
        <ScoreHeader round={0}/>
        <View style={isPortrait ? {flex: 2} : {flex: 2, flexDirection: 'row'}}>
          <PlayerScore
            isRed={true}
            score={score.p1}
            playerName={settings.p1name}
            scoreChanged={scoreChanged}
            playerKey={'p1'}
            settings={settings}
          />
          <PlayerScore
            isRed={false}
            score={score.p2}
            playerName={settings.p2name}
            scoreChanged={scoreChanged}
            playerKey={'p2'}
            settings={settings}
          />
        </View>
        {isPortrait && <View style={{flex: 0.1}}/>}
      </View>
    )
  }
}

const mapStateToProps = state => ({
  isPortrait: state.ui.isPortrait,
  score: state.score,
  settings: state.settings
});

export default connect(mapStateToProps, {appLayout, scoreChanged})(ScoreKeeperScreen);
