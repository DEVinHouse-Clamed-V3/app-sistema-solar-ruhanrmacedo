import { View, Text, Image, StyleSheet } from "react-native";

export default function Planet({ nome, img, velocidadeOrbitalMediaKmS, quantidadeSatelites, areaSuperficieKm2, periodoRotacaoDias }) {
    return (
      <View style={styles.planetContainer}>
        <Text style={styles.planetName}>{nome}</Text>
        <Image source={{ uri: img }} style={styles.planetImage} />
        <View style={styles.planetDetails}>
          <View style={styles.planetRow}>
            <Text style={styles.planetDescription}>Average Orbital Speed:</Text>
            <Text style={styles.planetInfo}>{velocidadeOrbitalMediaKmS} km/s</Text>
          </View>
          <View style={styles.planetRow}>
            <Text style={styles.planetDescription}>Satellites:</Text>
            <Text style={styles.planetInfo}>{quantidadeSatelites}</Text>
          </View>
          <View style={styles.planetRow}>
            <Text style={styles.planetDescription}>Surface Area:</Text>
            <Text style={styles.planetInfo}>{areaSuperficieKm2} km²</Text>
          </View>
          <View style={styles.planetRow}>
            <Text style={styles.planetDescription}>Rotation Period:</Text>
            <Text style={styles.planetInfo}>{periodoRotacaoDias} d</Text>
          </View>
        </View>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
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