import 'core-js/stable';
import 'regenerator-runtime/runtime';

//* Em navegadores mais antigos como explorer 8 ou menor nem mesmo usando essas bibliotecas (core-js e regenerator-runtime) vai funcionar modules, async, await, promises...

import promessa from './modules/promises';

import './assets/css/style.css';

promessa();