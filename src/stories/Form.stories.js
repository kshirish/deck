import React from 'react';

import Form from '../components/Form';
import Button from '../components/Button';

export default {
  title: 'Form',
  component: Form,
  argTypes: {},
};

export const Basic = () => (
  <Form>
    <Form.Field>
      <label htmlFor="firstName">First Name</label>
      <input
        id="firstName"
        type="text"
        name="firstName"
        placeholder="First name"
        onChange={(e) => console.log(e.target.name, e.target.value)}
      />
    </Form.Field>
    <Form.Field>
      <label htmlFor="lastName">Last Name</label>
      <input
        id="lastName"
        type="text"
        name="lastName"
        placeholder="Last name"
        onChange={(e) => console.log(e.target.name, e.target.value)}
      />
    </Form.Field>
    <Form.Field>
      <label htmlFor="emailId">Email Address</label>
      <input
        id="emailId"
        type="email"
        name="emailId"
        onChange={(e) => console.log(e.target.name, e.target.value)}
      />
    </Form.Field>
    <Form.Field>
      <label htmlFor="password">Password</label>
      <input
        id="password"
        type="password"
        name="password"
        onChange={(e) => console.log(e.target.name, e.target.value)}
      />
    </Form.Field>
    <Form.Field>
      <label>Which languages do you know?</label>
      <input
        type="checkbox"
        name="languages"
        value="js"
        onChange={(e) => console.log(e.target.name, e.target.value)}
      />{' '}
      Javascript
      <input
        type="checkbox"
        name="languages"
        value="html"
        onChange={(e) => console.log(e.target.name, e.target.value)}
      />{' '}
      HTML
      <input
        type="checkbox"
        name="languages"
        value="css"
        onChange={(e) => console.log(e.target.name, e.target.value)}
      />{' '}
      CSS
    </Form.Field>
    <Form.Field>
      <label>Choose your gender</label>
      <input
        type="radio"
        name="gender"
        value="m"
        onChange={(e) => console.log(e.target.name, e.target.value)}
      />{' '}
      Male
      <input
        type="radio"
        name="gender"
        value="f"
        onChange={(e) => console.log(e.target.name, e.target.value)}
      />{' '}
      Female
      <input
        type="radio"
        name="gender"
        value="o"
        onChange={(e) => console.log(e.target.name, e.target.value)}
      />{' '}
      Others
    </Form.Field>
    <Form.Field>
      <label htmlFor="favCar">Choose your favorite car</label>
      <select
        name="favCar"
        id="favCar"
        onChange={(e) => console.log(e.target.name, e.target.value)}
      >
        <option value="maruti800">Maruti 800</option>
        <option value="alto">Alto</option>
        <option value="nano">Nano</option>
        <option value="swiftDesire">Swift Desire</option>
        <option value="santro">Santro</option>
      </select>
    </Form.Field>
    <Form.Field>
      <label htmlFor="cars">Choose as many cars you like</label>
      <select
        multiple
        name="cars"
        id="cars"
        onChange={(e) => console.log(e.target.name, e.target.value)}
      >
        <option value="maruti800">Maruti 800</option>
        <option value="alto">Alto</option>
        <option value="nano">Nano</option>
        <option value="swiftDesire">Swift Desire</option>
        <option value="santro">Santro</option>
      </select>
    </Form.Field>
    <Form.Field>
      <label htmlFor="bio">Tell us about yourself</label>
      <textarea
        name="bio"
        id="bio"
        rows="3"
        onChange={(e) => console.log(e.target.name, e.target.value)}
      ></textarea>
    </Form.Field>
    <Button>Submit</Button>
  </Form>
);
