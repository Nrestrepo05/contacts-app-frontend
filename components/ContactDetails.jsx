import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import DeleteButton from './DeleteButton';
import ExitButton from './ExitButton';
import Input from './Input';
import Layout from './Layout';
import SaveButton from './SaveButton';

const ContactDetail = ({
  name, lastName, email, phoneNumber, company, method, id, deleteButton, baseUrl,
}) => {
  const router = useRouter();

  const [nameError, setNameError] = useState('');
  const [lastNameError, setLastNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [phoneNumberError, setPhoneNumberError] = useState('');
  const [companyError, setCompanyError] = useState('');

  const handleExitButtonClick = (e) => {
    e.preventDefault();
    router.push('/contacts');
  };

  useEffect(() => {
  });

  const handleSaveButtonClick = async (e) => {
    e.preventDefault();
    try {
      const data = {
        contact: {
          name: name.value.trim(),
          last_name: lastName.value.trim(),
          email: email.value.trim(),
          phone_number: phoneNumber.value.trim(),
          company: company.value.trim(),
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

      const resContent = await res.json();
      if (resContent.error) {
        if (resContent.error.name) {
          setNameError(resContent.error.name);
        } else {
          setNameError('');
        }
        if (resContent.error.last_name) {
          setLastNameError(resContent.error.last_name);
        } else {
          setLastNameError('');
        }
        if (resContent.error.email) {
          setEmailError(resContent.error.email);
        } else {
          setEmailError('');
        }
        if (resContent.error.phone_number) {
          setPhoneNumberError(resContent.error.phone_number);
        } else {
          setPhoneNumberError('');
        }
        if (resContent.error.company) {
          setCompanyError(resContent.error.company);
        } else {
          setCompanyError('');
        }
      }
      if (res.status === 200 || res.status === 201) { router.push('/contacts'); }
      return res;
    } catch (error) {
      return console.error(error.message);
    }
  };

  const handleDeleteButtonClick = async (e) => {
    e.preventDefault();
    try {
      await fetch(`${baseUrl}/contacts/${id}`, {
        method: 'DELETE',
      });
      return router.push('/contacts');
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
        </section>
        <section className="main">
          <Input
            property="name *"
            value={name.value}
            onChange={name.onChange}
            error={nameError}
          />
          <Input
            property="last name *"
            id="last_name"
            value={lastName.value}
            onChange={lastName.onChange}
            error={lastNameError}
          />
          <Input
            property="email *"
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
          <p>elements with * are required</p>
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
          p {
            color: #375D81;
          }
        `}
      </style>
    </>
  );
};

export default ContactDetail;
