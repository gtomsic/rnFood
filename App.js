import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import FoodDetailScreen from "./src/screens/FoodDetailScreen";
import SearchScreen from "./src/screens/SearchScreen";

const navigator = createStackNavigator(
  {
    Search: SearchScreen,
    Details: FoodDetailScreen,
  },
  {
    initialRouteName: "Search",
    defaultNavigationOptions: {
      title: "Yelp Search",
    },
  }
);

export default createAppContainer(navigator);
