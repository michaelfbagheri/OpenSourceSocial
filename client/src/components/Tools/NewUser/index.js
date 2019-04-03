// User Login input /newuser

// Name, Address, Username, Password, Income, Date of Birth, Race, Ethnicity

import React from 'react';

import './style.css';

// Rewrite as Class with State passing using ID and Handler with calls /api/needs/ POST request

function NewUser(props) {
  return (
    <div className='conatiner'>
      <div className='row'>
        <input
          className='input-signup'
          placeholder='First Name'
          name='firstName'
          label='First Name'
          onChange={props.handleInputChange}
          required
        />
        <input
          className='input-signup'
          placeholder='Last Name'
          name='lastName'
          label='Last Name'
          onChange={props.handleInputChange}
          required
        />
      </div>
      <div className='row'>
        <input
          className='input-signup'
          placeholder='email'
          name='email'
          type='email'
          label='Email'
          onChange={props.handleInputChange}
        />
        <input
          className='input-signup'
          placeholder='Username'
          name='userName'
          type='text'
          label='Username'
          onChange={props.handleInputChange}
        />
      </div>
      <div className='row'>
        <input
          className='input-signup'
          placeholder='password'
          name='password'
          type='password'
          label='Password'
          onChange={props.handleInputChange}
        />
        <input
          className='input-signup'
          placeholder='Confirm Password'
          name='passwordConfirmed'
          type='password'
          label='Confirm Password'
          onChange={props.handleInputChange}
        />
        <input
          className='input-signup'
          placeholder='JPG, PNG, or GIFs only'
          onChange={props.uploadHandler}
          name='imageurl'
          type='file'
          label='Add Photo'
        />
      </div>
    </div>
  );
}

export default NewUser;
