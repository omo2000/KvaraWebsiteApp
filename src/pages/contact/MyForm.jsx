// MyForm.js
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const MyForm = () => {
  const initialValues = {
    username: '',
    email: '',
    title: '',
    message: '',
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string().required('მომხმარებლის სახელი აუცილებელია'),
    email: Yup.string().email('Invalid email address').required('ელ.ფოსტა აუცილებელია'),
    title: Yup.string().required('სათაური აუცილებელია'),
    message: Yup.string().required('შეტყობინების ტექსტი აუცილებელია'),
  });

  const onSubmit = (values) => {
    // Handle form submission here
    console.log(values);
    // Save the data to local storage
    localStorage.setItem('formData', JSON.stringify(values));
    alert('შეტყობინება წარმატებით გაიგზავნა');
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <form onSubmit={formik.handleSubmit} className="contact-form">
      <div className="form-group">
        <input
          type="text"
          name="username"
          placeholder="შეიყვანეთ თქვენი სახელი"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.username}
          className={`form-input ${formik.touched.username && formik.errors.username ? 'error' : ''}`}
        />
        {formik.touched.username && formik.errors.username ? (
          <div className="error-tooltip">{formik.errors.username}</div>
        ) : null}
      </div>

      <div className="form-group">
        <input
          type="email"
          name="email"
          placeholder="შეიყვანეთ თქვენი ელ.ფოსტა"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          className={`form-input ${formik.touched.email && formik.errors.email ? 'error' : ''}`}
        />
        {formik.touched.email && formik.errors.email ? (
          <div className="error-tooltip">{formik.errors.email}</div>
        ) : null}
      </div>

      <div className="form-group">
        <input
          type="text"
          name="title"
          placeholder="სათაური"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.title}
          className={`form-input ${formik.touched.title && formik.errors.title ? 'error' : ''}`}
        />
        {formik.touched.title && formik.errors.title ? (
          <div className="error-tooltip">{formik.errors.title}</div>
        ) : null}
      </div>

      <div className="form-group">
        <textarea
          name="message"
          placeholder="შეიყვანეთ სასურველი ტექსტი"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.message}
          className={`form-textarea ${formik.touched.message && formik.errors.message ? 'error' : ''}`}
        />
        {formik.touched.message && formik.errors.message ? (
          <div className="error-tooltip">{formik.errors.message}</div>
        ) : null}
      </div>

      <div className="form-group">
        <button type="submit" className="submit-button">გაგზავნა</button>
      </div>
    </form>
  );
};

export default MyForm;
