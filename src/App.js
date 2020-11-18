
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AuthenticationManger } from './components/Authentication/Authentication';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import MyProfile from './views/MyProfile/MyProfile';
import NotFound from './views/NotFound/NotFound';
import Login from './views/Login/Login';
import { APP_USER_ROLES } from './constants/applicationConstants';


function App() {
  return (
    <div className="App">
      <Router>
        <AuthenticationManger>
        <Switch>
            <PrivateRoute exact permissions={[APP_USER_ROLES.INDIVIDUAL]}  path="/"  component={MyProfile} />
            <Route exact path="/login"  component={Login} />
            <Route path="*"  component={NotFound} />
          </Switch>
        </AuthenticationManger>
      </Router>
    </div>
   );
  }

export default App;
