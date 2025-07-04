import React, {useState} from "react";

export default function TodoApp()
{


    return(<div className="main-container">
                 <div className="title">Todo App </div>
                 <div className="input-section">
                    <input type="text" placeholder="Enter Your Task...." className="input-box"/>
                    <button className="add-button">Add</button>
                 </div>
                 <div className="all-tasks">
                           <div className="task-left">
                              <div className="task-description">
                                   Hi, i have a important meeting
                              </div>
                           </div>
                           <div className="task-right" >
                            <div className="btn">
                                <button className="del-button">Delete</button>
                            </div>
                            <div className="date">
                               Created at : 2025
                            </div>
                           </div>
                    </div>
                 </div>
                 )
} 