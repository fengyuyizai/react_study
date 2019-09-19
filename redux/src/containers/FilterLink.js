import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions'
import Link from '../components/Link'

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.visibilityFilter
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  click: () => {
    const action = setVisibilityFilter(ownProps)
    console.log(action)
    dispatch(action)
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Link)
