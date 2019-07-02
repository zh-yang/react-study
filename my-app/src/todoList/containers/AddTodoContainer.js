import { connect } from 'react-redux'
import { addTodo, addTodoAsync } from '../actions'
import AddTodo from '../components/AddTodo'

const mapStateToProps = (state) => {
    return {
        state: state
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        addTodo: addTodo,
        addTodoAsync: addTodo
    }
}

const AddTodoContainer = connect(
    mapStateToProps,
    {addTodo, addTodoAsync}
)(AddTodo)

export default AddTodoContainer