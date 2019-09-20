import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions'
import Link from '../components/Link'

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.visibilityFilter
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  click: () => {
    console.log(ownProps)
    const action = setVisibilityFilter(ownProps)
    dispatch(action)
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Link)
