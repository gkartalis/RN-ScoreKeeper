import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row'
  },
  innerContainer: {
    flex: 8,
    flexDirection: 'row'
  },
  playerColorRed: {
    backgroundColor: 'red',
    height: 50,
    width: 50,
    borderRadius: 8
  },
  playerColorBlue: {
    backgroundColor: 'blue',
    height: 50,
    width: 50,
    borderRadius: 8
  },
  headerContainer: {
    height: 50,
    justifyContent: 'center',
    paddingLeft: 40
  },
  headerText: {
    color: '#ffffff',
    fontSize: 38,
    fontWeight: 'bold'
  }
});

export default styles;
