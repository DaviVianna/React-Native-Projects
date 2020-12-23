//import { disableExpoCliLogging } from 'expo/build/logs/Logs';
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableHighlight } from 'react-native'; 

function PeopleList({people, outraTela}) {  //Renderizando a lista de nomes


    if(people.length != 0) { //Se as propiedades de People for diferente de 0, entao:

        const textElements = people.map( ({login, picture, name}) => { //Percorrendo cada propiedade de pessoa dentro do people
    
            return( //Exibindo as imagens e o nome de cada pessoa
                <TouchableHighlight onPress={() => {

                    outraTela.navigate("Person");
                    
                }} key={login.uuid} >
                    
                    <View style= {styles.container}>

                        <Image source={{ uri: picture.thumbnail}} style= {styles.photo}/>
                        <Text style={styles.text}>{`${name.first} ${name.last}`}</Text> 

                    </View>
                </TouchableHighlight>

            );//Retornando o nome de cada pessoa 
              
        }); 
    
        return(

            <View>

                {textElements}

            </View>

        );

    } //Fim do IF


    return(

        <Text style={styles.loading} >Carregando os dados...</Text>
    );




}



//Estilização 

const styles = StyleSheet.create({

    photo: {

        aspectRatio: 1,
        borderRadius: 10,
        flex: 1,


    },

    container: {
        backgroundColor: ('#F5FFFA'),
        height: 80,
        borderBottomColor: ('#000'),
        borderBottomWidth: 1,
        flexDirection: "row",
        alignItems: "center", //Alinha vertical
        justifyContent: "flex-start",
        margin: 15,
   

    
      
    },

    text: {
        textAlign: "center",
        fontSize: 20,
        padding: '10%',
        flex: 3,
      
        

    },


    loading: {

        fontSize: 20,
        color: ('#f00'),
    }



});

export default PeopleList;
