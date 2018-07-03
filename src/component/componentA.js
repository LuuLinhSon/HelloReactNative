import React, { Component } from 'react';
import {
    AppRegistry,
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import { Navigation } from "react-native-navigation";
import moment from 'moment';
import "moment/locale/vi";
import _ from 'lodash';

export default class ComponentA extends Component {
    render() {
        moment.locale("vi");
        var currentTime = moment().format("LLLL");
        return (
            <View style={{ backgroundColor: 'aqua',flex:1,justifyContent:'center',alignItems:'center' }}>
                <Text> {_.capitalize(currentTime)} </Text>
                <TouchableOpacity 
                onPress={this._onPress.bind(this)} 
                style={{backgroundColor:'yellow',height:50,width:100,borderRadius:5}}>
                    <Text style={{textAlign:'center'}}>Next to Screen C</Text>
                </TouchableOpacity>
            </View>
        );
    }

    _onPress(){
        Navigation.push(this.props.componentId, {
            component: {
                name: 'screenC',
                passProps: {
                    text: 'Pushed screen'
                },
                options: {
                    topBar: {
                        title: {
                            text: 'Screen C'
                        }
                    }
                }
            }
        });
    }
}





