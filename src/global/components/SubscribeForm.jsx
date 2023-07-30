import React, { useState } from 'react';

export const SubscribeForm = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubscribe = (event) => {
    event.preventDefault();
    // Save the email to local storage
    localStorage.setItem('subscribedEmail', email);
    setSubscribed(true);
  };

  return (
    <div className="subscribe-form">
      <h2>ადევნეთ თვალყური</h2>
      {!subscribed ? (
        <p>
          გამომიწერეთ რათა და არ გამოტოვოთ რაიმე სიახლე ახალი პროდუქტების, აქციების ან თუნდაც კარიერული ღონისძიებების შესახებ.
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


