import React from 'react';
// import { directive } from '@babel/types'


function EventMainSection() {

    return (
        <div className="todo-styles">
            <div className="header">
                <div className="container">
                    <h1 className="header__title">Event todos</h1>
                    <h2 className="header__subtitle">What do you need to do?</h2>
                </div>
            </div>

            <div className="actions">
                <div className="actions__container">
                    <input id="search-text" className="input" type="text" placeholder="Filter Todos" />
                    <label className="checkbox">
                        <input id="hide-completed" type="checkbox" /> Hide Completed
            </label>
                </div>
            </div>

            <div className="container">
                <div id="todos"></div>
                <form id="new-todo">
                    <input id="todo-text" className="input" type="text" name="text" placeholder="Add a Todo" />
                    <button id="add-todo" className="button">Add Todo</button>
                </form>
            </div>
        </div>
    )
}

export default EventMainSection;