import { render } from "solid-js/web";

import "./index.css";
import Portfolio from "./portfolio/LandingPage";

const App = () => (
   <div class="container">
      <Portfolio />
   </div>
);
render(App, document.getElementById("app"));
