import React, {Component} from 'react';
import {Text,View} from 'react-native';

export default class HoemScreen extends React.Component {
    render(){
        return(
            <View style={{flex: 1,justifyContent:'center',alignItems: 'center' }}>
                <Text>Home Screen</Text>
            </View>
        )
    }
}