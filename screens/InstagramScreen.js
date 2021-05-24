import * as React from 'react';
import { Text, View } from 'react-native';
import { Header } from 'react-native-elements';

export default class InstagramScreen extends React.Component{
  render(){
    return(
      <View style = {{flex: 1, justifyContent: 'center'}}>
        <Header
            backgroundColor={'pink'}
            centerComponent={{
              text: 'Buzz App',
              style: { color: '#000', fontSize: 20, fontWeight: 'bold' },
            }}
        />
        <View style = {{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text style = {{color: 'blue', fontFamily: 'ComicSans', fontWeight: 'bold', fontSize: 20}}>
            Instagram
          </Text>
        </View>
      </View>
    );
  }
}