import React, { useState } from 'react';

import home from '../../global/langs/home.json'

export const SubscribeForm = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubscribe = (event) => {
    event.preventDefault();
    localStorage.setItem('subscribedEmail', email);
    setSubscribed(true);
  };

  return (
    <div className="subscribe-form">
      <h2>{home.subscribe_form_title}</h2>
      {!subscribed ? (
        <p>
          {home.subscribe_form_text}
        </p>
      ) : (
        <p className="thanks">მადლობა გამოწერისთვის</p>
      )}
      {!subscribed && (
        <form onSubmit={handleSubscribe}>
          <label>
            <input
              type="email"
              placeholder="შეიყვანეთ ელფოსტა"
              value={email}
              onChange={handleEmailChange}
            />
          </label>
          
          
          <button type="submit">გამოწერა</button>
        </form>
      )}
    </div>
  );
};


