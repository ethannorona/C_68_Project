import * as React from 'react';
import { Text, View } from 'react-native';
import { Header } from 'react-native-elements';

export default class AppHeader extends React.Component{
  render(){
    return(
      <View>
        <Header
          backgroundColor={'#9c8210'}
          centerComponent={{
            text: 'Monkey Chunky',
            style: { color: '#fff', fontSize: 20 },
          }}
        />
      </View>
    );
  }
}