import React, { useState, useEffect } from 'react';
import { View, ScrollView } from 'react-native';
//Components
import PeopleList from '../Components/PeopleList';
import Header from '../Components/Header';
//dados API 
import axios from 'axios';



export default function peoplePage(props) {


  const {navigation} = props; //contem a ação do click do usuario

  const [people, setPeople] = useState([]);

  useEffect( () => { //Executa algo assim que a function App for carregada


    //Pegando dados API do axios
    axios
      .get('https://randomuser.me/api/?results=30&nat=br')
      .then(response => { //A busca deu certo

        setPeople(response.data.results) 

      }).catch(error => { //Falha ao buscar a API

        console.log('ocorrreu um erro - ' + error);

      })



  }, []); //Array de depedencia => ser executado assim que a function App for montada



    return ( //Return da function App

      <ScrollView>

        <View>
          <PeopleList people={people} outraTela ={navigation} />
        </View>

      </ScrollView>
 

    );
  
}




