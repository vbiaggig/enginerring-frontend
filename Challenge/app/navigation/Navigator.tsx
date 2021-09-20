import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import BottomTabNavigator from './BottomTabNavigator';
import PieInfoScreen from '../screens/PieScreen/PieInfoScreen';

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
            <Screen
                name="PieInfo"
                component={PieInfoScreen}
                options={(props: { route: any }) => ({ title: props.route.params.pieInfo.title })}
            />
        </Navigator>
    )
}

export default MainNavigator;
