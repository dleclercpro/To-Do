import React from 'react'
import Footer from './Footer';
import TodoListContainer from '../containers/TodoListContainer';
import InputContainer from '../containers/InputContainer';

import './App.scss'

const App = () => (
    <div className='app'>
        <h1>To-Dos</h1>
        <InputContainer />
        <TodoListContainer />
        <Footer />
    </div>
)

export default App