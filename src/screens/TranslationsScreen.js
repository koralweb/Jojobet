import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import Wrapper from '../components/Wrapper';
import translations from '../data/translations';
import colors from '../data/colors';

const TranslationsScreen = ({navigation}) => {
  const renderMatches = () => {
    return translations
      .filter(el => el.date >= new Date().getDate())
      .map(game => (
        <View style={styles.game} key={Math.random()}>
          <Text style={styles.topLine}>{game.liga}</Text>
          <Text style={styles.topLine}>
            0{game.date}.08.2023 - {game.time}
          </Text>
          <View style={styles.teams}>
            <Text style={styles.team}>{game.team1}</Text>
            <View style={styles.line} />
            <Text style={styles.team}>{game.team2}</Text>
          </View>
        </View>
      ));
  };

  return (
    <Wrapper navigation={navigation}>
      <View style={styles.cont}>
        <Text style={styles.title}>Спортивні трансляції</Text>
        <ScrollView>{renderMatches()}</ScrollView>
      </View>
    </Wrapper>
  );
};

const styles = StyleSheet.create({
  cont: {
    flex: 1,
  },
  title: {
    fontSize: 22,
    marginTop: 20,
    textAlign: 'center',
    fontWeight: '700',
    marginBottom: 20,
  },
  game: {
    width: '90%',
    marginRight: 'auto',
    marginLeft: 'auto',
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginBottom: 15,
  },
  topLine: {
    backgroundColor: '#ededed',
    textAlign: 'center',
    color: colors.orange,
  },
  teams: {
    padding: 20,
  },
  team: {
    fontSize: 18,
  },
  line: {
    width: '100%',
    height: 1,
    backgroundColor: 'grey',
    marginVertical: 10,
  },
});

export default TranslationsScreen;
