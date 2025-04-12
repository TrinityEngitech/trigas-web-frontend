// bootstrap
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";

import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from "./Admin/context/AuthContext.jsx";
// Pages
import Layout from "./Pages/Layout.jsx";


function App() {
  return (
   
       <AuthProvider>
       <Router>
       <Layout/>
      </Router>
      </AuthProvider>
   
  );
}

export default App;

