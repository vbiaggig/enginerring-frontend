import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { BellFocusedIcon, BellIcon, CoinFocusedIcon, CoinIcon, MagnifierFocusedIcon, MagnifierIcon, PersonFocusedIcon, PersonIcon, PieFocusedIcon, PieIcon } from '../assets/icons';

import PieScreen from '../screens/PieScreen';
import CoinScreen from '../screens/CoinScreen';
import MagnifierScreen from '../screens/MagnifierScreen';
import PersonScreen from '../screens/PersonScreen';
import BellScreen from '../screens/BellScreen';

const Tab = createBottomTabNavigator();

const BottomTabNavigator: React.FC = () => {
    const { Navigator, Screen } = Tab;

    const getTabBarOptions = (props: { icon: any, focusedIcon:any }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarIcon: (iconProps: { color: any, focused:boolean }) => <TabBarIcon source={iconProps.focused ? props.focusedIcon : props.icon} color={iconProps.color} />,
    });

    return (
        <Navigator>
            <Screen
                name="Pie"
                component={PieScreen}
                options={getTabBarOptions({icon: PieIcon, focusedIcon: PieFocusedIcon})}
            />
            <Screen
                name="Coin"
                component={CoinScreen}
                options={getTabBarOptions({icon: CoinIcon, focusedIcon: CoinFocusedIcon})}
            />
            <Screen
                name="Magnifier"
                component={MagnifierScreen}
                options={getTabBarOptions({icon: MagnifierIcon, focusedIcon: MagnifierFocusedIcon})}
            />
            <Screen
                name="Bell"
                component={BellScreen}
                options={getTabBarOptions({icon: BellIcon, focusedIcon: BellFocusedIcon})}
            />
            <Screen
                name="Person"
                component={PersonScreen}
                options={getTabBarOptions({icon: PersonIcon, focusedIcon: PersonFocusedIcon})}
            />
        </Navigator>
    )
}

function TabBarIcon(props: { color: string, source: any }) {
    return <Image style={{ marginBottom: -3 }} {...props} />;
}

export default BottomTabNavigator;