
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AuthenticationManger } from './components/Authentication/Authentication';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import MyProfile from './views/MyProfile/MyProfile';
import NotFound from './views/NotFound/NotFound';
import Login from './views/Login/Login';
import { APP_USER_ROLES } from './constants/applicationConstants';

import AppBar from './components/AppBar/AppBar'


function App() {
  return (
    <AuthenticationManger>
      <Router>
      <AppBar />
       <div className="App">
        <Switch>
            <PrivateRoute exact permissions={[APP_USER_ROLES.INDIVIDUAL]}  path="/"  component={MyProfile} />
            <Route exact path="/login"  component={Login} />
            <Route path="*"  component={NotFound} />
          </Switch>
        
  
      </div>
      </Router>
      </AuthenticationManger>
   );
  }

export default App;
