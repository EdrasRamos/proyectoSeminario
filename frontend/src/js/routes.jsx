import React from 'react';
import {
    Route,
    Switch,
    Redirect,
} from 'react-router-dom';
import { NotificationContainer } from 'react-notifications';

import {Login, Profile, Registro} from './common/components/LoginRegister';
import Demo from './common/components/Demo/Demo';
import ProtectedRoute from './ProtectedRoute';
import Examples from './common/components/Examples/Basic';
import NotFound from './common/components/layout/NotFound/NotFound';


import '../assets/fonts/fonts.css';

require('../../node_modules/font-awesome/css/font-awesome.css');
require('../../node_modules/bootstrap/dist/css/bootstrap.css');
import 'bootstrap/dist/css/bootstrap.min.css';
import Grids from "./common/components/Examples/Grids";
import Notificaciones from './common/components/Examples/Notificaciones';
import ExampleTabs from './common/components/Examples/Tabs/Tabs';
require('../style/index.css');

import EmpresaListContainer from './common/components/Empresa/EmpresaListContainer';
import EmpresaCrearContainer from './common/components/Empresa/EmpresaCrearContainer';
import DepartamentoListContainer from './common/components/Departamento/DepartamentoListContainer';
import DepartamentoCrearContainer from './common/components/Departamento/DepartamentoCrearContainer';
import MunicipioListContainer from './common/components/Municipio/MunicipioListContainer';
import MunicipioCrearContainer from './common/components/Municipio/MunicipioCrearContainer';
import QuejaListContainer from './common/components/Queja/QuejaListContainer';
import QuejaCrearContainer from './common/components/Queja/QuejaCrearContainer';
module.exports = (
    <div>
        <div className="container__content">
            <Switch>
                <Route exact path="/login" component={Login} />
                <Route exact path="/registro" component={Registro} />
                <ProtectedRoute exact path="/" component={Demo} />
                <ProtectedRoute exact path="/page2" component={Examples} />
                <ProtectedRoute exact path="/user-profile" component={Profile} />
                <ProtectedRoute exact path="/grids" component={Grids} />
                <ProtectedRoute exact path="/notifications" component={Notificaciones} />
                <ProtectedRoute exact path="/tabs" component={ExampleTabs} />
                <ProtectedRoute exact path="/empresa" component={EmpresaListContainer} />
                <ProtectedRoute exact path="/empresa/crear" component={EmpresaCrearContainer} />
                <ProtectedRoute exact path="/empresa/:id/editar" component={EmpresaCrearContainer} />
                <ProtectedRoute exact path="/empresa/:id" component={EmpresaCrearContainer} />
                <ProtectedRoute exact path="/departamento" component={DepartamentoListContainer} />
                <ProtectedRoute exact path="/departamento/crear" component={DepartamentoCrearContainer} />
                <ProtectedRoute exact path="/departamento/:id/editar" component={DepartamentoCrearContainer} />
                <ProtectedRoute exact path="/departamento/:id" component={DepartamentoCrearContainer} />
                <ProtectedRoute exact path="/municipio" component={MunicipioListContainer} />
                <ProtectedRoute exact path="/municipio/crear" component={MunicipioCrearContainer} />
                <ProtectedRoute exact path="/municipio/:id/editar" component={MunicipioCrearContainer} />
                <ProtectedRoute exact path="/municipio/:id" component={MunicipioCrearContainer} />
                <ProtectedRoute exact path="/queja" component={QuejaListContainer} />
                <ProtectedRoute exact path="/queja/crear" component={QuejaCrearContainer} />
                <ProtectedRoute exact path="/queja/:id/editar" component={QuejaCrearContainer} />
                <ProtectedRoute exact path="/queja/:id" component={QuejaCrearContainer} />
                <Route component={NotFound} />
            </Switch>
        </div>
        <NotificationContainer />
    </div>
);
