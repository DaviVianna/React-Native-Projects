import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import peoplePage from './src/Pages/peoplePage';
import Person from './src/Pages/Person';


function App() {

  const Stack = createStackNavigator();

  return(

    <NavigationContainer>

        <Stack.Navigator> 
            <Stack.Screen name="Contatos" component={peoplePage} options={styles}/>
            <Stack.Screen name="Person" component={Person} options={styles} />
        </Stack.Navigator>


    </NavigationContainer>

  );

}

const styles = {

  headerStyle: {

    backgroundColor: '#4169E1',
  
    
  },

  headerTitleStyle: {

    color: "#fff",
    fontSize: 30,
    textAlign: "center",
  }


}
export default App;