import { siteConfig } from "./data/site";
import RestaurantTemplate from "./components/RestaurantTemplate";
import ServiceTemplate from "./components/ServiceTemplate";

function App() {
  return siteConfig.type === "restaurant"
    ? <RestaurantTemplate />
    : <ServiceTemplate />;
}

export default App;