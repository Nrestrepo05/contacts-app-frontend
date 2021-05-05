import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import DeleteButton from './DeleteButton';
import ExitButton from './ExitButton';
import Input from './Input';
import Layout from './Layout';
import SaveButton from './SaveButton';

const ContactDetail = ({
  name, lastName, email, phoneNumber, company, method, id, deleteButton,
}) => {
  const router = useRouter();

  const [nameError, setNameError] = useState('');
  const [lastNameError, setLastNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [phoneNumberError, setPhoneNumberError] = useState('');
  const [companyError, setCompanyError] = useState('');

  const handleExitButtonClick = (e) => {
    e.preventDefault();
    router.push('/');
  };

  useEffect(() => {

  }, [nameError, lastNameError]);

  const handleErrors = (
    nameInput, lastNameInput, emailInput, phoneNumberInput, companyInput,
  ) => {
    const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}/;
    const phoneNumberRegex = /[+]*[\d]{0,4}[\d]{3,4}[0-9]{7,9}/;

    let error = null;

    if (!nameInput) {
      error = 'name is required';
      setNameError(error);
    } else if (nameInput.length < 2) {
      error = 'name must have at least two characters';
      setNameError(error);
    } else if (nameInput.length > 70) {
      setNameError('name is too long');
    } else {
      setNameError('');
    }

    if (!lastNameInput) {
      setLastNameError('last name is required');
    } else if (lastNameInput.length < 2) {
      setLastNameError('last name must have at least two characters');
    } else if (lastNameInput.length > 70) {
      setLastNameError('last name is too long');
    } else {
      setLastNameError('');
    }

    if (!emailInput) {
      setEmailError('email is required');
    } else if (!emailInput.match(emailRegex)) {
      setEmailError('email must be valid');
    } else if (emailInput.length > 70) {
      setCompanyError('email is too long');
    } else {
      setEmailError('');
    }

    if (phoneNumberInput) {
      if (!phoneNumberInput.match(phoneNumberRegex)) {
        setPhoneNumberError('phone number must be valid');
      } else {
        setPhoneNumberError('');
      }
    }

    if (company) {
      if (companyInput.length < 2) {
        setCompanyError('comapany name must have at least two characters');
      } else if (companyInput.length > 70) {
        setCompanyError('company name is too long');
      } else {
        setCompanyError('');
      }
    }

    return null;
  };

  const handleSaveButtonClick = async (e) => {
    e.preventDefault();
    try {
      const baseUrl = process.env.BACKEND_HOST || 'http://localhost:5050';

      handleErrors(name.value, lastName.value, email.value, phoneNumber.value, company.value);
      const data = {
        contact: {
          name: name.value,
          last_name: lastName.value,
          email: email.value,
          phone_number: phoneNumber.value,
          company: company.value,
        },
      };

      const res = await fetch(
        id ? `${baseUrl}/contacts/${id}` : `${baseUrl}/contacts/`, {
          method,
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        },
      );
      return res;
    } catch (error) {
      return console.error(error.message);
    }
  };

  const handleDeleteButtonClick = async (e) => {
    e.preventDefault();
    try {
      const baseUrl = process.env.BACKEND_HOST || 'http://localhost:5050';

      await fetch(`${baseUrl}/contacts/${id}`, {
        method: 'DELETE',
      });
      return router.push('/');
    } catch (error) {
      return console.error(error.message);
    }
  };

  return (
    <>
      <Layout title="Contact Detail">
        <section className="header">
          <h1>
            {name.value}
            {' '}
            {lastName.value}
          </h1>
          <div className="buttons">
            <SaveButton small="true" onClick={handleSaveButtonClick} />
            <ExitButton onClick={handleExitButtonClick} small="true" />
          </div>
        </section>
        <section className="main">
          <Input
            property="name"
            value={name.value}
            onChange={name.onChange}
            error={nameError}
          />
          <Input
            property="last name"
            id="last_name"
            value={lastName.value}
            onChange={lastName.onChange}
            error={lastNameError}
          />
          <Input
            property="email"
            id="email"
            value={email.value}
            onChange={email.onChange}
            error={emailError}
          />
          <Input
            property="phone number"
            id="phone_number"
            value={phoneNumber.value}
            onChange={phoneNumber.onChange}
            error={phoneNumberError}
          />
          <Input
            property="company"
            id="company"
            value={company.value}
            onChange={company.onChange}
            error={companyError}
          />
        </section>
        <section className="buttons-footer">
          <ExitButton onClick={handleExitButtonClick} big="true" margin="true" />
          <SaveButton big="true" onClick={handleSaveButtonClick} />
        </section>
        {deleteButton ? (
          <>
            <section className="delete-button">
              <DeleteButton onClick={handleDeleteButtonClick} />
            </section>
          </>
        ) : ''}
      </Layout>
      <style jsx>
        {`
          section {
            min-width: 100%;
            max-width: 100%;
          }
          section.header {
            display: flex;
            justify-content: space-between;
            margin-bottom: 10px;
          }
          section.buttons-footer {
            display: flex;
            justify-content: center;
            margin-top: 30px;
          }
          section.delete-button {
            display: flex;
            justify-content: center;
            margin-top: 10px;
          }
          div.buttons {
            min-width: 90px;
            max-width: 90px;
            display: flex;
            justify-content: space-around;
            align-items: center;
          }
          h1 {
            font-size: 24px;
            color: #183152;
          }
        `}
      </style>
    </>
  );
};

export default ContactDetail;
