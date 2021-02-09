import 'core-js/stable';
import 'regenerator-runtime/runtime';

import Login from './modules/Login';
import Contato from './modules/Contato';

const login = new Login('.form-login');

/*
    //* fazer validação quando tiver tempo!
const cadastro = new Login('.form-cadastro');
const contato = new Contato('.form-contato');
contato.init(); */

login.init();
cadastro.init();

// import './assets/css/style.css';