'use client';
import { useState } from 'react';
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import '#/styles/globals.css';

function ContactFormFormSpree() {
  const [state, handleSubmit] = useForm('mbjnyaaj');
  const [submitError, setSubmitError] = useState(null);

  const handleFormSubmit = async (event) => {
    setSubmitError(null);
    const submission = await handleSubmit(event);
    if (!submission.ok) {
      setSubmitError(submission.error);
    }
  };

  if (state.succeeded) {
    return (
      <p className="confirmation-msg">
        Thank you for joining the GG NYC mailing list!
      </p>
    );
  }

  return (
    <form
      onSubmit={handleFormSubmit}
      className="mx-auto w-full max-w-lg rounded-lg p-8 shadow-md"
    >
      <label htmlFor="firstName" className="label-sr">
        First Name
      </label>
      <input
        id="firstName"
        type="text"
        name="firstName"
        placeholder="First Name"
        className="gg-input w-full"
        required
      />
      <ValidationError
        prefix="First Name"
        field="firstName"
        errors={state.errors}
        className="text-sm text-red-500"
      />

      <label htmlFor="lastName" className="label-sr">
        Last Name
      </label>
      <input
        id="lastName"
        type="text"
        name="lastName"
        placeholder="Last Name"
        className="gg-input w-full"
        required
      />
      <ValidationError
        prefix="Last Name"
        field="lastName"
        errors={state.errors}
        className="error-msg text-sm text-red-500"
      />

      <label htmlFor="email" className="label-sr">
        Email Address
      </label>
      <input
        id="email"
        type="email"
        name="email"
        placeholder="Email"
        className="gg-input w-full"
        required
      />
      <ValidationError
        prefix="Email"
        field="email"
        errors={state.errors}
        className="text-sm text-red-500"
        required
      />

      {submitError && <p className="error-msg text-red-500">{submitError}</p>}

      <button type="submit" disabled={state.submitting} className="gg-btn">
        Submit
      </button>
    </form>
  );
}

function App() {
  return <ContactFormFormSpree />;
}

export default App;
