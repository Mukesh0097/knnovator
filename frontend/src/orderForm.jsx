import React from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required('First Name is required'),
  lastName: Yup.string().required('Last Name is required'),
  address: Yup.string().required('Address is required'),
});

const initialValues = {
  firstName: '',
  lastName: '',
  address: '',
};

function Orderform() {

    const navigation = useNavigate()
  const handleSubmit = async(values, { setSubmitting }) => {
    console.log(values)
    try{
        const response = await fetch("http://localhost:3000/api/placeOrder",{
            method:"POST",
            body:JSON.stringify(values),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
              },
        })
        const data = await response.json();
        alert(data.message)
        setSubmitting(false);
        navigation('/')
        
    }catch(error){
        console.log(error)
        alert(error)
    }

    
  };



  return (
    <div className='container row justify-content-center align-item-center border m-3'>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form >
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <Field type="text" name="firstName" className="form-control" />
              <ErrorMessage name="firstName" component="div" className="error text-danger" />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <Field type="text" name="lastName" className="form-control" />
              <ErrorMessage name="lastName" component="div" className="error text-danger" />
            </div>
            <div className="form-group">
              <label htmlFor="address">Address</label>
              <Field as="textarea" name="address" className="form-control" />
              <ErrorMessage name="address" component="div" className="error text-danger" />
            </div>
            <button type="submit" className="btn btn-primary my-2" disabled={isSubmitting}>
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default Orderform;
