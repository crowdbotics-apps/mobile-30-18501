import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings72785Navigator from '../features/Settings72785/navigator';
import NotificationList72784Navigator from '../features/NotificationList72784/navigator';
import Maps72783Navigator from '../features/Maps72783/navigator';
import ArticleList72766Navigator from '../features/ArticleList72766/navigator';
import ArticleList72765Navigator from '../features/ArticleList72765/navigator';
import ArticleList72764Navigator from '../features/ArticleList72764/navigator';
import MessengerNavigator from '../features/Messenger/navigator';
import TutorialNavigator from '../features/Tutorial/navigator';
import MapsNavigator from '../features/Maps/navigator';
import CalendarNavigator from '../features/Calendar/navigator';
import CameraNavigator from '../features/Camera/navigator';
import EmailAuthNavigator from '../features/EmailAuth/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
    SplashScreen: {
      screen: SplashScreen
    },
    //@BlueprintNavigationInsertion
Settings72785: { screen: Settings72785Navigator },
NotificationList72784: { screen: NotificationList72784Navigator },
Maps72783: { screen: Maps72783Navigator },
ArticleList72766: { screen: ArticleList72766Navigator },
ArticleList72765: { screen: ArticleList72765Navigator },
ArticleList72764: { screen: ArticleList72764Navigator },
Messenger: { screen: MessengerNavigator },
Tutorial: { screen: TutorialNavigator },
Maps: { screen: MapsNavigator },
Calendar: { screen: CalendarNavigator },
Camera: { screen: CameraNavigator },
EmailAuth: { screen: EmailAuthNavigator },

    /** new navigators can be added here */
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu,
    initialRouteName: 'SplashScreen',
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
