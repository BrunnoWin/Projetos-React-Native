import {React, Component} from 'react';
import {Text, View} from 'react-native';
export default class StateExample extends Component{
  state= {
    msg: 'Mensagem inicial, se clicar ela mudará.'
  }
  onPress = () => {
    this.setState({msg: 'Olá mundo!!!'})
  }
  render(){
  const {msg}= this.state
  return (
          <view>
                <Text > onPress={this.onPress}>{msg}></Text>
          </view>
    );
  }
}