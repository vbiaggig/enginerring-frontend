import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { CapIcon, PersonWhiteIcon } from '../../assets/icons';

const Header: React.FC = () => {
    return (
        <View style={styles.header}>
            <View style={styles.nameTagContainer}><Image source={PersonWhiteIcon} /><Text style={styles.nameTag}>@ethansmith</Text></View>
            <View style={styles.capIconContainer}><Image source={CapIcon} /></View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 24
    },
    nameTagContainer: {
        alignSelf: 'flex-start',
        paddingVertical: 8,
        paddingHorizontal: 16,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: "rgba(255, 255, 255, 0.2)",
        borderRadius: 50,
    },
    nameTag: {
        color: "#fff",
        fontWeight: "600",
        fontSize: 16,
    },
    capIconContainer: {
        alignSelf: 'flex-start',
        backgroundColor: "#E9E7FE",
        padding: 7,
        borderRadius: 12,
    }
});

export default Header;