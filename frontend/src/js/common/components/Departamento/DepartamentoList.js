import React, { Component } from "react";
import { TableHeaderColumn } from "react-bootstrap-table";
import Grid from "../Utils/Grid";
import { standardActions } from "../Utils/Grid/StandardActions";

class ListadoDepartamento extends Component {
    componentWillMount = () => {
        const { listar, match } = this.props;
        const id = match.params.id;
        listar(id);
    };
    render() {
        const { data, loader, eliminar } = this.props;

        return (
            <React.Fragment>
                <center><h3>Departamentos Registrados</h3></center>
                <div className='d-flex flex-row justify-content-start mb-2'>
                <a href="/#/departamento/crear"
                    className="btn btn-primary"
                >
                    Crear Departamento
                </a>
                </div>
                {data && (
                    <Grid
                        hover
                        striped
                        data={data}
                        loading={loader}
                        //onPageChange={onPageChange}
                        //onSortChange={onSortChange}
                    >
                        <TableHeaderColumn isKey dataField="codigo" dataSort>
                            Código
                        </TableHeaderColumn>
                        <TableHeaderColumn dataField="nombre" dataSort>
                            Nombre
                        </TableHeaderColumn>
                        <TableHeaderColumn dataField="region" dataSort>
                            Región
                        </TableHeaderColumn>
                        <TableHeaderColumn
                            dataField="id"
                            dataAlign="center"
                            dataSort
                            dataFormat={standardActions({
                                editar: "departamento",
                                ver: "departamento",
                                eliminar: eliminar,
                            })}
                        >
                            Acciones
                        </TableHeaderColumn>
                    </Grid>
                )}
            </React.Fragment>
        );
    }
}
export default ListadoDepartamento;
