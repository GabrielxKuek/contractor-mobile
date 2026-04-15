import { createStaticNavigation, StaticParamList } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DrawerNavigator from './drawer-navigator';
import ContractorDetail from '../screens/contractor-detail';

const Stack = createStackNavigator({
  screens: {
    DrawerNavigator: {
      screen: DrawerNavigator,
      options: {
        headerShown: false,
      },
    },
    ContractorDetail: {
      screen: ContractorDetail,
      options: {
        title: 'Contractor',
        headerBackTitle: 'Back',
        headerTintColor: '#EF4444',
        headerTitleStyle: {
          color: '#111827',
          fontWeight: '600' as const,
        },
        headerStyle: {
          backgroundColor: '#FFFFFF',
        },
        headerShadowVisible: false,
      },
    },
  },
});

type RootNavigatorParamList = StaticParamList<typeof Stack>;

declare global {
  namespace ReactNavigation {
    // eslint-disable-next-line @typescript-eslint/no-empty-object-type
    interface RootParamList extends RootNavigatorParamList {}
  }
}

const Navigation = createStaticNavigation(Stack);
export default Navigation;
