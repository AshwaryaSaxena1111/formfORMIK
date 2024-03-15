import React, {useState, useEffect} from "react";
import * as Yup from "yup";
import {Formik, Form, ErrorMessage, Field} from "formik";
import listValue from "../instance/instance";

const validationSchema = Yup.object().shape({
    name: Yup.string().required("Invalid format of name"),
    email:Yup.string().email("Invalid email address format").required("Invalid format of email"),
    age:Yup.number().positive().integer().required("Invalid format of age")
})

const ListForm=()=>{
    const [users, setUsers]=useState([]);
    const [data ,setData]=useState("null");
    useEffect(()=>{
        fetchUsers()
    },[])
    const fetchUsers=async()=>{
        try{
            const response = await listValue.get("todos")
            
            console.log("response>>>",response);
        }catch(error){
            console.error("Error fetching data")
        }
    }
    const deleteUsers = async(userId)=>{
        try{
            const deleteValue = await(listValue.delete("todos"))
        }catch(error){
            console.error("Error deleting Data")
        }
    }
    const handleSubmit =(values, actions)=>{
        console.log(values,actions);
    }
    return(
        <div>
            <h1>User Management</h1>
            <Formik
                initialValues={{ name: "", email: "", age: "" }}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
            {({ isSubmitting }) => (
            <Form>
              <div>
                <label htmlFor="name">Name</label>
                <Field type="text" name="name" />
                <ErrorMessage name="name" component="div" />
              </div>
                <div>
                <label htmlFor="age">Age</label>
                <Field type="number" name="age" />
                <ErrorMessage name="age" component="div" />
              </div>
              <div>
                <label htmlFor="email">Email</label>
                <Field type="email" name="email" />
                <ErrorMessage name="email" component="div" />
                </div>
                  <button type="submit">Add
                  </button>
                </Form>

            )}
            </Formik>
        <h2>Users</h2>
        <ul>
          {/* {response.map((todos) => (
            <li key={todos.id}>
              {todos.name} - {todos.email} - {todos.age} 
              <button onClick={() => deleteUsers(todos.id)}>Delete</button>
            </li>
          ))} */}
        </ul>
        </div>
    );
}

export default ListForm;