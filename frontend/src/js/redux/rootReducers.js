import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form'
import login from './modules/cuenta/login';
import register from './modules/cuenta/register';
import profile from './modules/cuenta/profile';
import usuarios from './modules/usuarios/usuarios';
import notificaciones from './modules/notificaciones/notificaciones';
import empresa from './modules/empresa/empresa';
import municipio from './modules/municipio/municipio';
import departamento from './modules/departamento/departamento';
import queja from './modules/queja/queja';

export default combineReducers({
    form: formReducer,
    login,
    register,
    profile,
    usuarios,
    routing,
    notificaciones,
    empresa,
    departamento,
    municipio,
    queja,
});
