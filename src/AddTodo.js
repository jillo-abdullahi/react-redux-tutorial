import React, { Component } from 'react'

export default class AddTodo extends Component {

    state = {
        content: ''
    }

    handleChange = (e) => {
        this.setState({
            content: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state);
        this.setState({
            content: ''
        })
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Add new todo:</label>
                    <input type="text" onChange={this.handleChange} required value={this.state.content}/>
                    <button class="btn waves-effect waves-light" type="submit" name="action">Submit
                            
                    </button>
                </form>
            </div>
        )
    }
}
