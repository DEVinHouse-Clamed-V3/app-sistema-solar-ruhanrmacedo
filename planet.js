import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Modal, Button } from 'react-native';

export default function Planet({ nome, img, descricaoBreve, descricao, velocidadeOrbitalMediaKmS, quantidadeSatelites, areaSuperficieKm2, periodoRotacaoDias }) {
    const [modalVisible, setModalVisible] = useState(false);

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

            <TouchableOpacity onPress={() => setModalVisible(true)}>
                <Text style={styles.viewMore}>Ver mais detalhes</Text>
            </TouchableOpacity>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalView}>
                    <Text style={styles.modalTitle}>Detalhes de {nome}</Text>
                    <Image source={{ uri: img }} style={styles.modalImage} />
                    <View style={styles.modalDetailsContainer}>
                        <Text style={styles.modalText}>{descricaoBreve}</Text>
                        <Text style={styles.modalDescription}>{descricao}</Text>
                        <Text style={styles.modalDetails}>Velocidade Orbital: {velocidadeOrbitalMediaKmS} km/s</Text>
                        <Text style={styles.modalDetails}>Satélites: {quantidadeSatelites}</Text>
                        <Text style={styles.modalDetails}>Área de Superfície: {areaSuperficieKm2} km²</Text>
                        <Text style={styles.modalDetails}>Período de Rotação: {periodoRotacaoDias} dias</Text>
                    </View>
                    <Button title="Fechar" onPress={() => setModalVisible(false)} color="#3498db" />
                </View>
            </Modal>
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
        borderRadius: 75,
        marginBottom: 20,
    },
    planetDetails: {
        alignItems: 'flex-start',
        width: '100%',
        paddingHorizontal: 10,
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
        marginBottom: 5,
    },
    planetInfo: {
        fontWeight: 'bold',
        color: '#fff',
    },
    viewMore: {
        color: '#3498db',
        marginTop: 10,
        fontSize: 16,
    },
    modalView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.9)',
        padding: 20,
    },
    modalTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 20,
    },
    modalImage: {
        width: 200,
        height: 200,
        borderRadius: 100,
        marginBottom: 20,
    },
    modalDetailsContainer: {
        alignItems: 'center',
        marginBottom: 20,
    },
    modalText: {
        fontSize: 18,
        color: '#9faab5',
        textAlign: 'center',
        marginBottom: 10,
    },
    modalDescription: {
        fontSize: 16,
        color: '#ccc',
        textAlign: 'center',
        marginBottom: 20,
    },
    modalDetails: {
        fontSize: 16,
        color: '#fff',
        marginBottom: 5,
    },
});
