import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import ArticleList164578Navigator from '../features/ArticleList164578/navigator';
import ArticleList164577Navigator from '../features/ArticleList164577/navigator';
import ArticleList164560Navigator from '../features/ArticleList164560/navigator';
import ArticleList164559Navigator from '../features/ArticleList164559/navigator';
import ArticleList164558Navigator from '../features/ArticleList164558/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
ArticleList164578: { screen: ArticleList164578Navigator },
ArticleList164577: { screen: ArticleList164577Navigator },
ArticleList164560: { screen: ArticleList164560Navigator },
ArticleList164559: { screen: ArticleList164559Navigator },
ArticleList164558: { screen: ArticleList164558Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
