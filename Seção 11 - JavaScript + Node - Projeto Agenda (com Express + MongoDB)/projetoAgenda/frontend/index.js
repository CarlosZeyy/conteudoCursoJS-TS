import 'core-js/stable';
import 'regenerator-runtime/runtime';

import Login from './modules/Login';
import Signup from './modules/Signup';

import "./assets/css/style.css";

const login = new Login('.form-login');
const signup = new Signup('.form-signup');

signup.init();
login.init();

