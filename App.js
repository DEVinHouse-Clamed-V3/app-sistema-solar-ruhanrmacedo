import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

import planetas from './planetas';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Vamos explorar</Text>
        <Image
          source={require('./assets/imageTitulo.png')}
          style={styles.image}
        />
      </View>

      <ScrollView>
        {planetas.map((planeta, index) => (
          <View key={index} style={styles.planetContainer}>
            <Text style={styles.planetName}>{planeta.nome}</Text>
            <Image source={{ uri: planeta.img }} style={styles.planetImage} />
            <View style={styles.planetDetails}>
              <View style={styles.planetRow}>
                <Text style={styles.planetDescription}>Average Orbital Speed:</Text>
                <Text style={styles.planetInfo}>{planeta.velocidadeOrbitalMediaKmS} km/s</Text>
              </View>
              <View style={styles.planetRow}>
                <Text style={styles.planetDescription}>Satellites:</Text>
                <Text style={styles.planetInfo}>{planeta.quantidadeSatelites}</Text>
              </View>
              <View style={styles.planetRow}>
                <Text style={styles.planetDescription}>Surface Area:</Text>
                <Text style={styles.planetInfo}>{planeta.areaSuperficieKm2} km²</Text>
              </View>
              <View style={styles.planetRow}>
                <Text style={styles.planetDescription}>Rotation Period:</Text>
                <Text style={styles.planetInfo}>{planeta.periodoRotacaoDias} d</Text>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2c3e50',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 50,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  headerText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    marginRight: 20,
  },
  image: {
    width: 80,
    height: 80,
  },
  planetContainer: {
    backgroundColor: '#000',
    padding: 20,  
    marginVertical: 10,
    borderRadius: 25,
    alignItems: 'center',
    width: '95%',
    alignSelf: 'center',
  },
  planetName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  planetImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  planetDetails: {
    alignItems: 'flex-start',
  },
  planetRow: {
    flexDirection: 'row',  
    justifyContent: 'space-between',
    width: '100%',  
    marginBottom: 5,
  },
  planetDescription: {
    color: '#9faab5',
    fontSize: 16,
    flex: 1,  
  },
  planetInfo: {
    fontWeight: 'bold',
    color: '#fff',
    flex: 1,  
    textAlign: 'right',  
  },
});
