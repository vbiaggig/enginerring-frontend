import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { HeaderBackground } from '../assets/background';

const PieScreen: React.FC = () => {
    return (
        <View style={{ flex: 1 }}>
            <ImageBackground source={HeaderBackground} resizeMode="stretch" resizeMethod="resize" style={styles.headerBackground}>
                <Text>@ethansmith</Text>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    headerBackground: {
      flex: 1,
      width: "100%",
      height: "40%",
      borderBottomLeftRadius: 20,
      borderBottomRightRadius: 20,
    },
  });

export default PieScreen;