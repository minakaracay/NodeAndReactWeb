import React from 'react'
import {Formik,Form,Field,ErrorMessage} from 'formik';
import axios from "axios"; 
import * as Yup from 'yup'
import {useNavigate } from 'react-router-dom';


function CreatePost() {
  
  let navigate = useNavigate()
    const initialValues = {
        title:"",
        username:"",
        postText:""
    };

    const validationSchema = Yup.object().shape({
        title: Yup.string().required("You must input the title!"),
        postText: Yup.string().required(),
        username:Yup.string().min(3).max(15).required()
    })

    const onSubmit = (data)=>{
        // console.log(data);
        axios.post("http://localhost:3001/posts",data).then((response)=>{
          navigate("/");
        });
    }


  return (
    <div className="createPostPage">
      <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
        <Form className="formContainer">
            <label>Title : </label>
            <ErrorMessage name="title" component="span"/>
            <Field id="inputCreatePost" name="title" placeholder="Ex. Title..." />
            <label>Username : </label>
            <ErrorMessage name="username" component="span"/>            
            <Field id="inputCreatePost" name="username" placeholder="Ex. mina.karacay..." />
            <label>Text : </label>
            <ErrorMessage name="postText" component="span"/>
            <Field id="inputCreatePost" name="postText" placeholder="Ex. Lorem ipsum dolor sit amet consectetur adipisicing ..." />  
            <button type='Submit'> Create Post</button>          
        </Form>
      </Formik>
    </div>
  )
}

export default CreatePost
