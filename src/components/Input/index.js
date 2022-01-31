import React, { useState } from 'react';

// components
import { SubmitButton } from './submitButton';

//packages
import { send } from 'emailjs-com';
import env from 'react-dotenv';

// stylesheet
import './index.css';

export const Input = (props) => {

    // here we are setting our state for our form to empty variables with empty strings
    const [toSend, setToSend] = useState({
        reply_to: '',
    });


    // on submit - this will send our form
    const onSubmit = (e) => {
        e.preventDefault();
        console.log(e)
        // this sends the email
        send(
            env.SERVICE_KEY,
            env.TEMPLATE_KEY,
            toSend,
            env.USER_KEY
        )
            .then((response) => {
                console.log('Success!', response.status, response.text, response);
            })
            .catch((err) => {
                console.log('FAILED...', err);
            });
    };

    //sets our form state on change
    const handleChange = (e) => {
        // sends our form values
        setToSend({ ...toSend, [e.target.name]: e.target.value })
    };

    return (
        <form id="contact-form" onSubmit={onSubmit}>
            <div className="form-word">
                <span >Enter Email</span>
                <input
                    type="email"
                    name="reply_to"
                    placeholder="Enter your Email"
                    value={toSend.reply_to}
                    onChange={handleChange}
                />
                <SubmitButton type='submit' className='submit-button button-one' name='Submit' />
            </div>
        </form>
    )
}