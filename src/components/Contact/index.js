import React, { useState } from 'react';

import { validateEmail } from '../../utils/helpers';

function ContactForm() {

    // we want the fields empty upon loading, so we set them equal to empty strings
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });

    const [errorMessage, setErrorMessage] = useState('');

    const { name, email, message } = formState;

    function handleChange(e) {

        // validate email before setting state
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);
            // isValid conditional statement
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
              } else {
                setErrorMessage('');
            };
        } else {
            if (!e.target.value.length) {
              setErrorMessage(`${e.target.name} is required.`);
            } else {
              setErrorMessage('');
            }
        }
          

        // NOTE: use the spread operator, ...formState, so we can retain the other key-value pairs in this object. Without the spread operator, the formState object would be overwritten to only contain the name: value key pair
        if (!errorMessage) {
            setFormState({...formState, [e.target.name]: e.target.value })
        };

    };

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    };
   
    //JSX
    return (
        <section>
          <div  id="my-applications" class="contact-style">
            <h4>Contact me!</h4>
            <br/>
            <form id="contact-form" onSubmit={handleSubmit}>
                <div>
                <label htmlFor="name">Name:</label>
                {/* NOTE: we can use the onBlur attribute instead of onChange. The onBlur attribute will fire the event once the user has changed focus from the input field, thus allowing the user to finish their entry before validating their input*/}
                <input type="text" defaultValue={name} onBlur={handleChange} name="name" />
                </div>
                <br/>
                <div>
                <label htmlFor="email">Email address:</label>
                <input type="email" defaultValue={email} onBlur={handleChange}  name="email" />
                </div>
                <br/>
                <div>
                <label htmlFor="message">Message:</label>
                <textarea name="message" defaultValue={message} onBlur={handleChange} rows="5" />
                </div>
                {/* NOTE: If errorMessage has a truthy value, the <div> block will render. If errorMessage doesn't have an error message, the following <div> block doesn't render. The && operator—known as the AND operator—is being used here as a short circuit. If the first value resolves to true, the second expression is evaluated  */}
                {errorMessage && (
                    <div>
                        <p classsName="error-text">{errorMessage}</p>
                    </div>
                )}
                <button type="submit">Submit</button>
            </form>
          </div>
        </section>
    );

};

export default ContactForm;