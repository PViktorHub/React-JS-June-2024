"use client";

import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import './styles.css';

interface SignupFormValues {
  email: string;
  password: string;
  confirmPassword: string;
}

export default function SignupForm() {

  const schema = Yup.object({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string().min(6).required("Required")
  });

  return (
    <Formik
      initialValues={{ email: "", password: "", confirmPassword: ""}}
      validationSchema={schema}
      onSubmit={(values:SignupFormValues) => {
        console.log(values);
      }}
    >
      <Form className="signup-card">
        <div className="mb-3">
          <label>Email</label>
          <Field name="email" className="form-control" />
          <ErrorMessage name="email" className="text-danger" component="div" />
        </div>

        <div className="mb-3">
          <label>Password</label>
          <Field name="password" type="password" className="form-control" />
          <ErrorMessage name="password" className="text-danger" component="div" />
        </div>

        <button className="btn btn-primary" type="submit">Submit</button>
      </Form>
    </Formik>
  );
}