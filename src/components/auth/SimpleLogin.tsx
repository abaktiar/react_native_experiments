import * as React from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-paper';

export interface SimpleLoginProps {}

export interface SimpleLoginState {}

class SimpleLogin extends React.Component<SimpleLoginProps, SimpleLoginState> {
  constructor(props: SimpleLoginProps) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <React.Fragment>
        <View>
          <Text>Simple Login :)</Text>
        </View>
      </React.Fragment>
    );
  }
}

export default SimpleLogin;
