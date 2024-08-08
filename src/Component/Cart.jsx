import React from 'react';

function Cart({ todos, deleteTodo, startEditing, updateStatus }) {
    return (
        <div className="main">
            <div className="row">
                {todos.map((todo, index) => (
                    <div className="col-md-3" key={index}>
                        <div className="card" style={{ width: '18rem' }}>
                            <div className="card-body">
                                <p>Name: {todo.name}</p>
                                <p>Description: {todo.description}</p>
                                <div>
                                    <label for="status">Status: </label>
                                    <div>
                                        <select
                                            className="statusdd"
                                            id="status"
                                            name="status"
                                            value={todo.status}
                                            onChange={(e) => updateStatus(index, e.target.value)}
                                        >
                                            <option value="not_completed">Not Completed</option>
                                            <option value="completed">Completed</option>
                                        </select>
                                    </div>
                                </div>
                                <div className='edit-delete'>
                                    <div className='edit'>
                                        <button
                                            type="button"
                                            className="btn btn-success"
                                            onClick={() => startEditing(index)}
                                        >
                                            Edit
                                        </button>
                                    </div>
                                    <div>
                                        <button
                                            type="button"
                                            className="btn btn-danger"
                                            onClick={() => deleteTodo(index)}
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Cart;
