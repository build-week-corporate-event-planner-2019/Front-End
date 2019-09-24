import React from 'react';
// import { directive } from '@babel/types'


function EventMainSection() {

    return (
        <div className="todo-styles">
            <div class="header">
                <div class="container">
                    <h1 class="header__title">Event todos</h1>
                    <h2 class="header__subtitle">What do you need to do?</h2>
                </div>
            </div>

            <div class="actions">
                <div class="actions__container">
                    <input id="search-text" class="input" type="text" placeholder="Filter Todos" />
                    <label class="checkbox">
                        <input id="hide-completed" type="checkbox" /> Hide Completed
            </label>
                </div>
            </div>

            <div class="container">
                <div id="todos"></div>
                <form id="new-todo">
                    <input id="todo-text" class="input" type="text" name="text" placeholder="Add a Todo" />
                    <button id="add-todo" class="button">Add Todo</button>
                </form>
            </div>
        </div>
    )
}

export default EventMainSection;