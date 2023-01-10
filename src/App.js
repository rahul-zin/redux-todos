import React from 'react';
import logo from './logo.svg';
import { Counter } from './layouts/counter/Counter';
import './App.css';
import {TodoLayout} from './apps/todo';

function App() {
  return (
    <div className="App">
        <TodoLayout></TodoLayout>
    </div>
  );
}

export default App;
