import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Dimensions, ScrollView} from 'react-native';

export default function App() {
  return (
    <ScrollView>
    <View style={estilo.container}>
      <Text style={estilo.titulo} > PC hackiado por pedrinhostoramoça</Text>
      <StatusBar style="auto" />
      <Text style={estilo.jogo} >(imagem minha 8 anos de idade)</Text>
      <Image style={estilo.img} source={require("./assets/eudenovo.jpg")} />
      <Text style={estilo.jogo} >(imagem minha recém divorciado 40 anos)</Text>
      <Image style={estilo.img} source={require("./assets/euapenaseu.jpeg")} />
      <Text style={estilo.jogo} >(imagem de meu filho recém nacisdo)</Text>
      <Image style={estilo.img} source={require("./assets/eu.jpg")} />   
    </View>
    </ScrollView>
  
  );
}

const estilo = StyleSheet.create({
  container: {
  
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    backgroundColor:"#000000",
    justifyContent: 'center'
  },
  titulo:{
    fontSize:40,
    marginTop:20,
    color:"#08DC16"
  },

  img:{
    width:300,
    height:300,
    borderRadius: 13

  },

  jogo:{
    marginTop:20,
    fontSize:20,
    color:"#08DC16",
    marginBottom:15

  }
});
