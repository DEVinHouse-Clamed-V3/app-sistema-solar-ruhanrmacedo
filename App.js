import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import planetas from './planetas';
import Planet from './planet';

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
          <Planet
            key={index}
            nome={planeta.nome}
            img={planeta.img}
            descricaoBreve={planeta.descricaoBreve}  
            descricao={planeta.descricao}            
            velocidadeOrbitalMediaKmS={planeta.velocidadeOrbitalMediaKmS}
            quantidadeSatelites={planeta.quantidadeSatelites}
            areaSuperficieKm2={planeta.areaSuperficieKm2}
            periodoRotacaoDias={planeta.periodoRotacaoDias}
          />
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
});
