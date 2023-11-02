import React, { useState } from 'react';

function Todolist() {
  const [activity, setActivity] = useState("");
  const [listData, setListData] = useState([]);
  const [searchText, setSearchText] = useState("");

  const addActivity = () => {
    if (activity) {
      setListData((prevListData) => [...prevListData, activity]);
      setActivity("");
    }
  };

  const deleteActivity = (index) => {
    const updatedList = listData.filter((_, i) => i !== index);
    setListData(updatedList);
  };

  const filteredList = listData.filter((item) =>
    item.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className="container" style={styles.container}>
      <h1 style={styles.heading}>Todo List</h1>
      <input
        type="text"
        name="search"
        placeholder="Search tasks"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        style={styles.searchInput}
      />
      <ul style={styles.ul}>
        {filteredList.map((item, index) => (
          <li key={index} style={styles.li}>
            {item}
            <div style={styles.buttondesign}>
              <button onClick={() => deleteActivity(index)} >
                Delete
              </button>
              <button style={styles.editButton}>
                Edit
              </button>
            </div>
          </li>
        ))}
      </ul>
      <div style={styles.addTaskContainer}>
        <input
          type="text"
          name="todo"
          placeholder="Add a task"
          value={activity}
          onChange={(e) => setActivity(e.target.value)}
          style={styles.input}
        />
        <button onClick={addActivity} style={styles.addButton}>
          Add
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: 'black',
    color: 'white',
    padding: '20px',
    borderRadius: '10px',
    textAlign: 'center',
  },
  heading: {
    fontSize: '24px',
    marginBottom: '10px',
  },
  input: {
    backgroundColor: 'white',
    color: 'black',
    width: '70%',
    padding: '10px',
    marginBottom: '10px',
    borderRadius: '5px',
    border: 'none',
  },
  addButton: {
    backgroundColor: 'green',
    marginLeft: '250px',
    color: 'white',
    width: '20%',
    padding: '10px',
    borderRadius: '5px',
    border: 'none',
    cursor: 'pointer',
  },
  searchInput: {
    backgroundColor: 'white',
    color: 'black',
    width: '100%',
    padding: '10px',
    marginBottom: '10px',
    borderRadius: '5px',
    border: 'none',
  },
  ul: {
    listStyle: 'none',
    padding: 0,
  },
  li: {
    backgroundColor: 'white',
    color: 'black',
    padding: '10px',
    marginBottom: '10px',
    borderRadius: '5px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '50%'
  },

  buttondesign: {
    backgroundColor: 'red'
  },

  addTaskContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
};

export default Todolist;
