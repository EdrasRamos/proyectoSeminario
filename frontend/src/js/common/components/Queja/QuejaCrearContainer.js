import { connect } from 'react-redux';
import { actions } from '../../../redux/modules/queja/queja';
import QuejaCrear from './QuejaCrear';


//estado
const ms2p = (state) => {
  return {
    ...state.queja,
  };
};

//funciones o acciones variables que pueden servir(banderas arreglos a recibir del bakend)
const md2p = { ...actions };

export default connect(ms2p, md2p)(QuejaCrear);
