import * as ReactRedux from 'react-redux'
import * as Redux from 'redux'
import * as actions from '../actions'
import Filter from '../components/Filter'

const mapStateToProps = (state, props) => ({
    active: props.filter === state.visibilityFilter
})

const mapDispatchToProps = (dispatch) => ({
    actions: Redux.bindActionCreators(actions, dispatch),
});

const FilterContainer = ReactRedux.connect(
    mapStateToProps,
    mapDispatchToProps,
)(Filter)

export default FilterContainer