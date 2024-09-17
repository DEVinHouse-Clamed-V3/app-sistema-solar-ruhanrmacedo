import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import planetas from './planetas';
import Planet from './planet';
import { useState } from 'react';


export default function App() {
  const [indicePlanetaAtual, setIndicePlanetaAtual] = useState(0);

  const proximoPlaneta = () => {
    if (indicePlanetaAtual < planetas.length - 1) {
      setIndicePlanetaAtual(indicePlanetaAtual + 1);
    }
  };

  const planetaAnterior = () => {
    if (indicePlanetaAtual > 0) {
      setIndicePlanetaAtual(indicePlanetaAtual - 1);
    }
  };

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

      <Planet
        nome={planetas[indicePlanetaAtual].nome}
        img={planetas[indicePlanetaAtual].img}
        descricaoBreve={planetas[indicePlanetaAtual].descricaoBreve}
        descricao={planetas[indicePlanetaAtual].descricao}
        velocidadeOrbitalMediaKmS={planetas[indicePlanetaAtual].velocidadeOrbitalMediaKmS}
        quantidadeSatelites={planetas[indicePlanetaAtual].quantidadeSatelites}
        areaSuperficieKm2={planetas[indicePlanetaAtual].areaSuperficieKm2}
        periodoRotacaoDias={planetas[indicePlanetaAtual].periodoRotacaoDias}
      />

      <View style={styles.buttonContainer}>
        <Button
          title="Anterior"
          onPress={planetaAnterior}
          disabled={indicePlanetaAtual === 0}
        />
        <Button
          title="Próximo"
          onPress={proximoPlaneta}
          disabled={indicePlanetaAtual === planetas.length - 1}
        />
      </View>

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
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
    marginTop: 20,
  },
});
