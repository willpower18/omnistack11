import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Incidents from './pages/incidents';
import Detail from './pages/details';

const AppStack = createStackNavigator();

export default function Routes(){
    return(
        <NavigationContainer>
            <AppStack.navigator>
                <AppStack.Screen component={Incidents}/>
                <AppStack.Screen component={Detail}/>
            </AppStack.navigator>
        </NavigationContainer>
    );
}