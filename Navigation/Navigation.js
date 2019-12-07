import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Search from '../Components/Search'
import Meteo from '../Components/Meteo'

const SearchStackNavigator = createStackNavigator({
  Search: {
    screen: Search,
    navigationOptions: {
        header: null
    },
    headerStyle: {
        backgroundColor: '#f4511e',
      }
  },
  Meteo: {
      screen: Meteo,
      
  }
})

export default createAppContainer(SearchStackNavigator)