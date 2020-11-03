import React, { useEffect, useState } from 'react';
import { Button, FormControl, InputLabel, Input } from '@material-ui/core';
import Todo from './Todo';
import db from './firebase';
import './App.css';
import firebase from 'firebase';


function App() {
  //if you want to make any change just npm run build and firebase deploy thats it
  //Two fundamentals of REACT 
  //STATE(Where the magic happens) => short time memory, also it gets cleared after refreshed and props, aswell its component specific
  //Run dynamic javascript with JSX
  //JSX = HTML + JavaScript
  //React Hooks => small snippets of code 
  //Node js => javaScript BackEnd

  //lets add a state for the App component
  // this is going to set that short memory for us
  // get the target which is input and get the value which is actually in that input text, so whatever you type in input is going to be/}
  //stored in the variable input and whatever you type in the textbox is going to be stored there
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  //When the app loads, we need to listen the database and fetch  new todos as the get added/removed
  useEffect(() => {
    //This code here..... fires when the app.js loads
    db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      setTodos(snapshot.docs.map(doc => ({ id: doc.id, todo: doc.data().todo })))
    })
  }, []);

  const addTodo = (event) => {
    //This is going to be fired whenever we click the button
    event.preventDefault();//Will stop the refresh
    db.collection('todos').add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setTodos([...todos, input])
    //...the spread operator what it does is it keeps in the short time memory the previous array which is the todos previous set,
    // and then it pushes the new array which the user input
    setInput('');//What it does it set the input text box empty again once you type something
  }
  return (
    <div className="App">
      <h1>Hello World! 🚀 </h1>

      <form>

        <FormControl>
          <InputLabel> ✅ Write a todo</InputLabel>
          <Input value={input} onChange={event => setInput(event.target.value)} />
        </FormControl>

        <Button disabled={!input} variant="contained" color="primary" type="submit" onClick={addTodo}>
          Add Todo
       </Button>

      </form>
      <ul>
        {todos.map(todo => (
          <Todo todo={todo} />
          //this function goes through the 'todos' array it gets each element of the array and the it pops in the li element
        ))}
      </ul>

    </div>
  );
}

export default App;
