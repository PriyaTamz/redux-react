import React from 'react';

function Body({ setFilter }) {

    return (
        <div>
            <div className="sub-header">
                <h4>My Todos :</h4>
                <div className="filter">
                    <h4>Status Filter: </h4>
                    <div className="dropdown">
                        <button className="dropbtn">
                            <div><i className="fa-solid fa-caret-down"></i></div>
                        </button>
                        <div className="dropdown-content">
                            <a href="#" onClick={() => setFilter('all')}>All</a>
                            <a href="#" onClick={() => setFilter('completed')}>Completed</a>
                            <a href="#" onClick={() => setFilter('not_completed')}>Not Completed</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Body;
