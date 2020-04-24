import React from 'react'

import styled from 'styled-components'

const CK_FORM_ID = '1338345'

const StyledForm = styled.div`
  border-radius: 4px;
  margin: 1rem;
  background-color: #dfdbe5;
  background-image: url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 20.5V18H0v-2h20v-2H0v-2h20v-2H0V8h20V6H0V4h20V2H0V0h22v20h2V0h2v20h2V0h2v20h2V0h2v20h2V0h2v20h2v2H20v-1.5zM0 20h2v20H0V20zm4 0h2v20H4V20zm4 0h2v20H8V20zm4 0h2v20h-2V20zm4 0h2v20h-2V20zm4 4h20v2H20v-2zm0 4h20v2H20v-2zm0 4h20v2H20v-2zm0 4h20v2H20v-2z' fill='%239C92AC' fill-opacity='0.2' fill-rule='evenodd'/%3E%3C/svg%3E");
  padding: 2rem;
  display: flex;
  justify-content: center;
  text-align: center;
  margin-top: 5rem;

  .form {
    margin: 0 0 1rem 0;
  }

  .headline {
    font-size: 1.6rem;
    margin: 0;
  }

  .info-row {
    display: flex;
  }

  .email {
    border: 1px solid #e3e3e3;
    border-radius: 4px;
    padding: 12px;
    font-size: 1rem;
    flex-grow: 1;
  }

  .submit {
    color: rgb(255, 255, 255);
    background-color: rgb(28, 107, 160);
    border-radius: 4px;
    padding: 12px;
    margin: 0 0.6rem;
  }
`

function Signup() {
  return (
    <StyledForm>
      <form
        className="form"
        action={`https://app.convertkit.com/forms/${CK_FORM_ID}/subscriptions`}
        method="post"
      >
        <h3 className="headline">
          Intersted in learning more about JavaScript?
        </h3>
        <p>Sign up for my weekly newsletter</p>
        <div className="info-row">
          <input
            className="email"
            name="email_address"
            aria-label="Your email address"
            placeholder="Your email address"
            type="email"
            required
          />
          <button className="submit" type="submit">
            Subscribe
          </button>
        </div>
      </form>
    </StyledForm>
  )
}

export default Signup
