import React from 'react';

function Header({ name, description, setName, setDescription, addOrEditTodo, isEditing }) {
  return (
    <div>
      <div className="header">
        <h2>My Todo</h2>
      </div>

      <div className="row">
        <div className="col-md-2">
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="floatingInput"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label htmlFor="floatingInput">Todo Name</label>
          </div>
        </div>
        <div className="col-md-2">
          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              id="floatingPassword"
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <label htmlFor="floatingPassword">Todo Description</label>
          </div>
        </div>
        <div className="col-md-2">
          <button type="button" className="bt" onClick={addOrEditTodo}>
            {isEditing ? 'Save Changes' : 'Add Todo'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
