import React, { Component } from "react";
import { TableHeaderColumn } from "react-bootstrap-table";
import Grid from "../Utils/Grid/";
import { standardActions } from "../Utils/Grid/StandardActions";

class ListadoEmpresa extends Component {
    componentWillMount = () => {
        const { listar, match } = this.props;
        const id = match.params.id;
        listar(id);
    };
    render() {
        const { data, loader, eliminar } = this.props;

        return (
            <React.Fragment>
                <center><h3>Empresas Registradas</h3></center>
                <div className='d-flex flex-row justify-content-start mb-2'>
                <a href="/#/empresa/crear"
                    className="btn btn-primary"
                >
                    Crear Empresa
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
                        <TableHeaderColumn isKey dataField="nit" dataSort>
                            NIT
                        </TableHeaderColumn>
                        <TableHeaderColumn dataField="nombre" dataSort>
                            Nombre
                        </TableHeaderColumn>
                        <TableHeaderColumn dataField="sucursal" dataSort>
                            Sucursal
                        </TableHeaderColumn>
                        <TableHeaderColumn dataField="direccion" dataSort>
                            Dirección
                        </TableHeaderColumn>
                        <TableHeaderColumn dataField="telefono" dataSort>
                            telefono
                        </TableHeaderColumn>
                        <TableHeaderColumn dataField="email" dataSort>
                            email
                        </TableHeaderColumn>
                        <TableHeaderColumn
                            dataField="id"
                            dataAlign="center"
                            dataSort
                            dataFormat={standardActions({
                                editar: "empresa",
                                ver: "empresa",
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
export default ListadoEmpresa;
