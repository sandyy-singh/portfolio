//  import { red } from '@mui/material/colors';
// import { useState } from 'react';
// import React , {useNavigate } from 'react-router-dom';
import { useFormik } from "formik";
import { signUpSchema } from "../schemas/index";


const ContactUs = () => {

  const initialValues = {
    name: "",
    email: "",
    massage: "",
  };

  const { values, errors, touched, handleChange, handleSubmit, handleBlur } =
    useFormik({
      initialValues: initialValues,
      validationSchema: signUpSchema,
      onSubmit: (values,action) => {
        console.log(values);
        action.resetForm( )
      }
      
    });
    console.log(errors)

  return (
    <div className="contact">
      <main>
        <h1>Contact Us</h1>

        <form onSubmit={handleSubmit}>
          <div>
            
            <input
              type="name"
              autoComplete="off"
              id="name"
              placeholder="name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.name && touched.name ? (<p>{errors.name}</p>):null}
          </div>

          <div>
           
            <input
              type="email"
              id="email"
              autoComplete="off"
              placeholder="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.email && touched.email ? (<p>{errors.email}</p>):null}
          </div>

          <div>
           
            <input
              type="massage"
              autoComplete="off"
              id="massage"
              placeholder="massage"
              value={values.massage}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.massage && touched.massage ? (<p>{errors.massage}</p>):null}
          </div>

          <button type="submit"> send</button>
        </form>
      </main>
    </div>
  );
};

export default ContactUs;
