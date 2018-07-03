// import { AppRegistry } from 'react-native';
// import App from './app';
import registerApp from './app';
import { Navigation } from "react-native-navigation";
// AppRegistry.registerComponent("HelloReactNative", ()=> registerApp());
registerApp();
Navigation.events().registerAppLaunchedListener(() => {
Navigation.setRoot({
  root: {
    statusBar: {
      visible: true,
      style: "light" | "dark"
    },
    bottomTabs: {
      animate: true,
      children: [
        {
          stack: {
            children: [
              {
                component: {
                  name: "screenA",
                  passProps: {
                    text: "This is tab 1"
                  }
                }
              }
            ],
            options: {
              bottomTab: {
                title: "Tab 1",
                icon: require("./src/image/baseline_business_black_18dp.png"),
                testID: "FIRST_TAB_BAR_BUTTON"
              },
              topBar: {
                title: {
                  text: "Screen A"
                },
                animate: true
              }
            }
          }
        },
        {
          stack: {
            children: [
              {
                component: {
                  name: "screenB",
                  passProps: {
                    text: "This is tab 2"
                  }
                }
              }
            ],
            options: {
              bottomTab: {
                title: "Tab 1",
                icon: require("./src/image/baseline_call_black_18dp.png"),
                testID: "TWO_TAB_BAR_BUTTON"
              },
              topBar: {
                title: {
                  text: "Screen B"
                },
                animate: true
              }
            }
          }
        }
      ]
    }
  }
});});

