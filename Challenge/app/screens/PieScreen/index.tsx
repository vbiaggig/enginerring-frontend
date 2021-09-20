import React, { useState } from 'react';
import { ImageBackground, ScrollView, StyleSheet, View } from 'react-native';
import { HeaderBackground } from '../../assets/background';
import { Header } from '../../shared/components';
import { Balance, Watchlist, YourPies } from '../../components/pie';

const PieScreen: React.FC = (props: { navigation: any }) => {
    const { navigation } = props;

    return (
        <ScrollView style={{ flex: 1 }}>
            <ImageBackground source={HeaderBackground} resizeMode="stretch" resizeMethod="resize" style={styles.headerBackground}>
                <View style={styles.container}>
                    <Header />
                    <Balance />
                    <YourPies navigation={navigation} />
                    <Watchlist />
                </View>
            </ImageBackground>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: { flex: 1, paddingVertical: 32 },
    headerBackground: {
        flex: 1,
        width: "100%",
        height: "45%",
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    nameTagContainer: {
        alignSelf: "flex-start",
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

export default PieScreen;