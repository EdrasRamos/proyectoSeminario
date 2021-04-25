import { connect } from 'react-redux';
import { actions } from '../../../redux/modules/municipio/municipio';
import MunicipioList from './MunicipioList';


//estado
const ms2p = (state) => {
  return {
    ...state.municipio,
  };
};

//funciones o acciones variables que pueden servir(banderas arreglos a recibir del bakend)
const md2p = { ...actions };

export default connect(ms2p, md2p)(MunicipioList);
