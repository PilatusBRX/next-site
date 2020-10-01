import React from "react";
import { Form, Input, Button } from "./style";

const ContactForm = () => {
  return (
    <Form>
      <Input type='text' placeholder='Your name...' />
      <Input type='email' placeholder='Your email...' />
      <Input type='text' placeholder='Subject...' />
      <Button type='submit'>Submit</Button>
    </Form>
  );
};

export default ContactForm;
