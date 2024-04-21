import React, { useState, useEffect } from "react";
import { db } from "./firebase";
import { Timestamp } from "firebase/firestore";
import { child, get, ref, set, update } from "firebase/database";

function TodoList({ props }) {
  const userId = props.sub;
  const [todos, setTodos] = useState([]);
  const [todoId, setTodoId] = useState("");
  const [todoText, setTodoText] = useState("");

  const getTodos = async () => {
    const dbRef = ref(db);
    const todos = [];
    get(child(dbRef, `ToDo/${userId}`)).then((snapshot) => {
      if (snapshot.exists) {
        const data = snapshot.forEach((snap) => {
          todos.push(snap.val().data);
        });
        todos.sort((a, b) => a.complete - b.complete);
        setTodos(todos);
      }
    });
  };

  useEffect(() => {
    getTodos();
  }, []);

  const handleFetch = async (id) => {
    const dbRef = ref(db);
    const todos = [];
    get(child(dbRef, `ToDo/${userId}/${id}`)).then((snapshot) => {
      if (snapshot.exists) {
        const data = snapshot.forEach((snap) => {
          console.log(snap.val());
          setTodoId(snap.val().id);
          setTodoText(snap.val().text);
        });
      }
    });
  };

  const handleUpdate = async () => {
    let data = {
      id: todoId,
      text: todoText,
      datetime: Timestamp.now(),
      complete: false,
    };

    update(ref(db, `ToDo/${userId}/${todoId}`), { data })
      .then(() => {
        console.log("Update successfully!");
        getTodos();
        setTodoText("");
        setTodoId("");
      })
      .catch((e) => {
        console.log("Unable to update. Error:", e);
      });
  };

  const handleComplete = async (id, text) => {
    const data = {
      id: id,
      text: text,
      datetime: Timestamp.now(),
      complete: true,
    };

    update(ref(db, `ToDo/${userId}/${id}`), { data })
      .then(() => {
        console.log("Update successfully!");
        getTodos();
        setTodoText("");
      })
      .catch((e) => {
        console.log("Unable to update. Error:", e);
      });
  };

  const generateUniqueId = () => {
    return Math.random().toString(36).substr(2, 9);
  };

  const handleAdd = async () => {
    const id = generateUniqueId();
    const data = {
      id: id,
      text: todoText,
      datetime: Timestamp.now(),
      complete: false,
    };
    set(ref(db, `ToDo/${userId}/${id}`), { data })
      .then(() => {
        console.log("Saved successfully");
        getTodos();
        setTodoText("");
      })
      .catch((e) => {
        console.log("Unable to save. Error:", e);
      });
  };

  const handleInputChange = (event) => {
    setTodoText(event.target.value);
  };

  const handleClear = () => {
    setTodoId("");
    setTodoText("");
  };

  return (
    <div className="container">
      <div className="row m-0 p-4 px-0 d-flex justify-content-center">
        <div
          className="card rounded-4 pt-5 pb-4 px-md-5 main-color d-flex"
          style={{ maxWidth: "700px" }}
        >
          <div className="bg-white rounded-4 p-2 mb-3">
            <input
              type="text"
              className="todo-input"
              placeholder="What is your next task?"
              value={todoText}
              onChange={handleInputChange}
            />
            <button
              className="btn float-end"
              type="button"
              onClick={todoId ? handleUpdate : handleAdd}
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title="Save"
            >
              <i className="bi bi-save2 secondary-color fs-5"></i>
            </button>
            {todoId ? (
              <button
                className="btn float-end"
                type="button"
                onClick={handleClear}
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title="Clear"
              >
                <i class="bi bi-x-lg secondary-color fs-5"></i>
              </button>
            ) : (
              ""
            )}
          </div>
          <div
            className="col px-sm-5 overflow-auto"
            style={{ maxHeight: "calc(100vh - 250px)" }}
          >
            <ul className="list-group rounded-0 ">
              {todos.map((todo) => (
                <li
                  className={`rounded-4 fs-6 ps-3 pe-1 mt-3 list-group-item ${
                    todo.id == todoId ? "selected-todo" : "bg-white"
                  }`}
                  key={todo.id}
                  style={todo.complete ? {} : { cursor: "pointer" }}
                >
                  <div className="d-flex justify-content-between">
                    <span
                      className="d-inline-block p-1"
                      style={{ width: "95%" }}
                      onClick={
                        todo.complete ? undefined : () => handleFetch(todo.id)
                      }
                    >
                      {todo.text}
                    </span>
                    <label className="complete-check">
                      <input
                        type="radio"
                        className=""
                        defaultChecked={todo.complete}
                        onChange={
                          todo.complete
                            ? undefined
                            : () => handleComplete(todo.id, todo.text)
                        }
                      />
                    </label>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TodoList;
