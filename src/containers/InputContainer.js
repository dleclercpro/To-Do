import * as Redux from 'redux'
import * as ReactRedux from 'react-redux'
import * as actions from '../actions'
import Input from '../components/Input'

const mapDispatchToProps = (dispatch) => ({
    actions: Redux.bindActionCreators(actions, dispatch),
});

const InputContainer = ReactRedux.connect(
    null,
    mapDispatchToProps,
)(Input)

export default InputContainer