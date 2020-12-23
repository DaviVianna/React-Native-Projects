import React from 'react';
import {View, Text, StyleSheet} from 'react-native'; //Destruring

//Estilização

const style = StyleSheet.create({

    container: {

    backgroundColor: '#4682B4',
    height: 90,
    alignItems: 'center',
    justifyContent: 'center', 
    marginTop: 20,
    
  
  },


  title: {

  fontSize: 30,
  color: '#fff',  
  padding: 10,


  }



});


function Header({title}) {

    return(

     <View style={style.container} >

    <Text style ={style.title}>{title}</Text>

      </View>


    );
        
      


    
   
}

export default Header;