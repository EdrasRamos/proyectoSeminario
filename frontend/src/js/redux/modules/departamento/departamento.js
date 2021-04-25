import { handleActions } from "redux-actions";
import { push } from "react-router-redux";
import { initialize as initializeForm } from "redux-form";
import { NotificationManager } from "react-notifications";
import { api } from "api";

//listar las empresas guardados
const GUARDAR_LISTADO_DEPARTAMENTO = "GUARDAR_LISTADO_DEPARTAMENTO";
const GUARDAR_REGISTRO_DEPARTAMENTO = "GUARDAR_REGISTRO_DEPARTAMENTO";

export const listar = () => (dispatch) => {
    api.get("/departamento")
        .then((response) => {
            //console.log("response: ", response);
            dispatch({ type: GUARDAR_LISTADO_DEPARTAMENTO, data: response });
        })
        .catch((error) => {
            console.log("error: ", error);
            NotificationManager.error(
                "Ocurrio un error al listar los departamentos",
                "ERROR",
                0
            );
        });
}

//export para leer un registro de la base de datos
export const leer = (id) =>(dispatch) => {
    api.get(`departamento/${id}`).then((response)=>{
        console.log("Response: ", response);
        dispatch({type:GUARDAR_REGISTRO_DEPARTAMENTO, registro: Response});
        dispatch(initializeForm('departamento', response));
    }).catch((error) => {
        console.log("error: ", error);
        NotificationManager.error(
            "Ocurrio un error al consultar el registro",
            "ERROR",
            0
        );
    })
}

//Modificar Registro de la DB
export const actualizarDepartamento = () => (dispatch, getStore) => {
    const formData = getStore().form.departamento.values;
    const id = formData.id;
    api.put(`/departamento/${id}`, formData)
        .then((response) => {
            NotificationManager.success(
                "Registro actualizado correctamente",
                "Exito",
                3000
            );
            dispatch(push('/departamento'));
        })
        .catch((error) => {
            console.log("error: ", error);
            NotificationManager.error(
                "Ocurrió un error al actualizar el registro",
                "ERROR",
                0
            );
        })
}

//Eliminar Registros de la base de datos (No se eliminan unicamente cambian de estado)
export const eliminar = (id) => (dispatch) => {
    api.eliminar(`/departamento/${id}`).then((response) => {
        NotificationManager.success(
            "Registro eliminado correctamente",
            "Exito",
            3000
        );
        dispatch(listar());
    })
    .catch((error) => {
        console.log("error: ", error);
        NotificationManager.error(
            "Ocurrió un error al eliminar el registro",
            "ERROR",
            0
        );
    })
}

//Agregar Registro a la DB
export const registroDepartamento = () => (dispatch, getStore) => {
    const formData = getStore().form.departamento.values;
    api.post("/departamento", formData)
        .then((response) => {
            NotificationManager.success(
                "Departamento registrada correctamente",
                "Exito",
                3000
            );
            dispatch(push('/departamento'));
        })
        .catch((error) => {
            console.log("error: ", error);
            NotificationManager.error(
                "Ocurrió un error al guardar",
                "ERROR",
                0
            );
        })
}

export const actions = {
    registroDepartamento,
    actualizarDepartamento,
    eliminar,
    listar,
    leer,
};

export const reducers = {
    [GUARDAR_LISTADO_DEPARTAMENTO]: (state, { data }) => {
        return {
            ...state,
            data,
        };
    },

    [GUARDAR_REGISTRO_DEPARTAMENTO]: (state, { registro }) => {
        return {
            ...state,
            registro,
        };
    },
};

export const initialState = {
    loader: false,
    data: null,
    registro: null,
};

export default handleActions(reducers, initialState);
