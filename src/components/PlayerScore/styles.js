import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderColor: '#254b5d',
    borderWidth: 3,
    borderRadius: 8,
    paddingBottom: 10,
    paddingTop: 10,
    paddingRight: 5,
    paddingLeft: 5,
    margin: 5
  },
  upperContainer: {
      flex: 3,
      flexDirection: 'row'
  },
  headerScoreContainer: {
    flex: 8
  },
  scoreContainer: {
    flex: 2,
    flexDirection: 'row'
  },
  innerScoreContainer: {
    flex: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  btnContainer: {
    flex: 1,
    borderTopWidth: 2,
    borderTopColor: '#254b5d',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 5
  }
});

export default styles;
