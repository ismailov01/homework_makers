import React, { useState } from 'react';
import Header from './components/Header';
import Section from './components/Section';
import Footer from './components/Footer';
import Input from './components/Input';
import View from './components/View';

function App() {
  const [todos, setTodos] = useState([]);
  function addTask(task) {
    let obj = {
      title: task,
      id: Date.now(),
    }
    let todosArr = [...todos, obj]
    setTodos(todosArr)
  }
  console.log(todos);
  return (
    <>
    <Header/>
    <Input addTask={addTask}/>
    <View todos={todos}/>
    <Section/>
    <Footer/>
    </>
  );
}

export default App;
