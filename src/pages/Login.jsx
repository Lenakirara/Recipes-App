import React from 'react';

export default function Login() {
  return (
    <div>
      <form>
        <input
          type="email"
          data-testid="email-input"
        />
        <input
          type="passowrd"
          data-testid="password-input"
        />
        <button
          type="button"
          data-testid="login-submit-btn"
        >
          Entrar
        </button>
      </form>
    </div>
  );
}