import 'core-js/stable';
import 'regenerator-runtime/runtime';

import "./assets/css/style.css";

import Login from './modules/Login';
import Signup from './modules/Signup';

const login = new Login('.form-login');
const signup = new Signup('.form-signup');
login.init();
signup.init();
