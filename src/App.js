import Nav from "./Components/Nav";
import Router from "./Components/Router";
import Footer from "./Components/Footer";

import "./App.scss";

// HOME COMPONENT
function App() {
  return (
    <div className='App'>
      <Nav />
      <Router />
      <Footer />
    </div>
  );
}

export default App;
