import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import BottomTabNavigator from './BottomTabNavigator';

const MainStack = createNativeStackNavigator();

const MainNavigator: React.FC = () => {
    const { Navigator, Screen } = MainStack;
    return (
        <Navigator>
            <Screen
                name="Root"
                component={BottomTabNavigator}
                options={{ headerShown: false }}
            />
        </Navigator>
    )
}

export default MainNavigator;
