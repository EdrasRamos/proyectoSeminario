import React, { Component } from "react";
import { TableHeaderColumn } from "react-bootstrap-table";
import Grid from "../Utils/Grid/";
import { standardActions } from "../Utils/Grid/StandardActions";

class ListadoQueja extends Component {
    componentWillMount = () => {
        const { listar, match } = this.props;
        const id = match.params.id;
        listar(id);
    };
    render() {
        const { data, loader, eliminar } = this.props;

        return (
            <React.Fragment>
                <center><h3>Quejas registradas</h3></center>
                <div className='d-flex flex-row justify-content-start mb-2'>
                <a href="/#/queja/crear"
                    className="btn btn-primary"
                >
                    Añadir Queja
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
                        <TableHeaderColumn
                            dataField="codigo"
                            dataSort>
                            Código
                        </TableHeaderColumn>
                        <TableHeaderColumn
                            dataField="fecha_emision"
                            dataSort>
                            Fecha Emisión
                        </TableHeaderColumn>
                        <TableHeaderColumn
                            dataField="idDepartamento"
                            dataSort
                            dataFormat={
                                (cell, row)=>{
                                    return cell.nombre;
                                }}
                        >
                            Departamento
                        </TableHeaderColumn>
                        <TableHeaderColumn
                            dataField="idMunicipio"
                            dataSort
                            dataFormat={
                                (cell, row)=>{
                                    return cell.nombre;
                                }}
                        >
                            Municipio
                        </TableHeaderColumn>
                        <TableHeaderColumn
                            dataField="idEmpresa"
                            dataSort
                            dataFormat={
                                (cell, row)=>{
                                    return cell.nombre;
                                }}
                        >
                            Empresa
                        </TableHeaderColumn>
                        <TableHeaderColumn
                            dataField="queja"
                            dataSort>
                            Detalle Queja
                        </TableHeaderColumn>
                        <TableHeaderColumn
                            isKey
                            dataField="id"
                            dataAlign="center"
                            dataSort
                            dataFormat={standardActions({
                                editar: "queja",
                                ver: "queja",
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
export default ListadoQueja;
