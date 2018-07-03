import React,{ Component } from 'react';
import {
  AppRegistry,
  View,
  Text,
  StyleSheet
} from 'react-native';

import { Navigation } from "react-native-navigation";
import ComponentA from './src/component/componentA';
import ComponentB from "./src/component/componentB";
import ComponentC from "./src/component/componentC";
import ComponentD from "./src/component/componentD";
// import { gestureHandlerRootHOC } from "react-native-gesture-handler";


// export default class App extends React.Component {
//     render() {
//         return (
//             <View style={{backgroundColor:'red'}}>
//               <Text>Hello</Text>
//             </View>
//         );
//     }
// }

export default ()=>{
    Navigation.registerComponent('screenA', () => ComponentA);
    Navigation.registerComponent('screenB', () => ComponentB);
    Navigation.registerComponent('screenC', () => ComponentC);
    Navigation.registerComponent('screenD', () => ComponentD);
}





