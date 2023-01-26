import React from 'react'
import './add.scss'
import { Formik, Form, Field } from 'formik';
 import * as Yup from 'yup';

import axios from 'axios';
function Index() {
    const SignupSchema = Yup.object().shape({
        name: Yup.string()
          .min(2, 'Too Short!')
          .max(50, 'Too Long!')
          .required('Required'),
        description: Yup.string()
          .min(2, 'Too Short!')
          .max(50, 'Too Long!')
          .required('Required'),
        author: Yup.string()
          .min(2, 'Too Short!')
          .max(50, 'Too Long!')
          .required('Required'),
        price: Yup.number()
          
          .required('Required'),
          img: Yup.string()
          .required('Required'),
      });
  return (
    <div className='formmm'>
    <div className='formContainer'>
    <div className='line'></div>
     <h1>Add Course</h1>
     <Formik
       initialValues={{
         name: '',
         description: '',
         author: '',
         price:'',
         img:''
       }}
       validationSchema={SignupSchema}
       onSubmit={(values, {resetForm}) => {
         axios.post('http://localhost:8080/api/student', values).then((res)=>console.log(res.data))
         resetForm();
         console.log(values);
       }}
     >
       {({ errors, touched }) => (
         <Form>
            <div className='form' >

            <Field name="name" placeholder='Name' className='input'/>
           {errors.name && touched.name ? (
             <div>{errors.name}</div>
           ) : null}
           <Field name="description" placeholder='description'className='input' />
           {errors.description && touched.description ? (
             <div>{errors.description}</div>
           ) : null}


           <Field name="author"   placeholder='Author' className='input'/>
           {errors.author && touched.author ? <div>{errors.author}</div> : null}



           <Field name="price" placeholder='Price' type='number' className='input' />
           {errors.price && touched.price ? <div>{errors.price}</div> : null}



           <Field name="img" placeholder='Src for IMG' className='input' />
           {errors.img && touched.img ? <div>{errors.img}</div> : null}



           <button className='addBtn' type="submit">Submit</button>
            </div>
           
         </Form>
       )}
     </Formik>
   </div>

    </div>
  )
}

export default Index