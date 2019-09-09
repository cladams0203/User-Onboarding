import React from 'react';
import { withFormik, Form, Field } from 'formik';


function Input({values, errors, touched}) {

    return (
        <Form>
            <Field type='text' name='name' placeholder='User Name' />
            <Field type='email' name='email' placeholder='User Email' />
            <Field type='password' name='password' placeholder='Password' />
            <label>
                <Field type='checkbox' name='terms' checked={values.terms} />
                I Accept The Terms of Service.
            </label>
            <button>Submit</button>
        </Form>
    )
}

const UserForm = withFormik({
    mapPropsToValues({name, email, password, terms}) {
        return {
            name: name || '',
            email: email || '',
            password: password || '',
            terms: terms || false
        }
    }
})(Input);

export default UserForm;