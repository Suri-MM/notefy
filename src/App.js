import Header from './components/Header';
import Input from './components/Input';
import TaskList from './components/TaskList';
import React, { useState, useEffect } from 'react';

function App() {
  const [ listItems, setListItems ] = useState([]);
  const [ isMounted, setMounted ] = useState(false);
  const [ numItems, setNumItems ] = useState(0);
  const baseServerURI = "https://notefy-server.herokuapp.com"

  function handleAddItem(name, desc) {
    fetch(baseServerURI + '/tasks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=UTF-8'
      },
      body: JSON.stringify({
        name: name,
        description: desc,
        status: false
      })
    })
    .then(res => res.json())
    .then(data => {
      setListItems([ ...listItems, data.task ]);
    })
    .catch(err => console.log("Error", err)); 
  }

  function handleDeleteItem(itemIndex) {
    fetch(baseServerURI + '/tasks/' + itemIndex, {
      method: 'DELETE', 
      headers: {
        'Content-Type': 'application/json; charset=UTF-8'
      },
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      setListItems(listItems.filter((item) => {
        console.log(item);
        return item._id !== itemIndex;
      }))
    })
    .catch(err => console.log("Error:", err));
  }

  useEffect(() => {
    if(!isMounted) {
      fetch(baseServerURI + '/tasks')
    .then(res => res.json())
    .then(data => {
      const newListItems = data.tasks.map((task) => task);
      setListItems([ ...listItems, ...newListItems ]);
      setMounted(true);
      setNumItems(newListItems.length);
    })
    }
  }, []);

  return (
    <div className = 'App'>
      <Header />
      <Input addItem = { handleAddItem } /> 
      <TaskList tasks = { listItems } onDoubleClick = { handleDeleteItem }/>
    </div>
  );
}

export default App;
