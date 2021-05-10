import { useRouter } from 'next/router';
import React, { useState } from 'react';
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
  const [modalIsActive, setModalIsActive] = useState(false);

  const handleExitButtonClick = (e) => {
    e.preventDefault();
    router.push('/contacts');
  };

  const handelCloseModal = (e) => {
    e.preventDefault();
    setModalIsActive(false);
  };

  const handelOpenModal = (e) => {
    e.preventDefault();
    setModalIsActive(true);
  };

  const handleSaveButtonClick = async (e) => {
    e.preventDefault();
    try {
      const data = {
        contact: {
          name: name.value.trim(),
          last_name: lastName.value.trim(),
          email: email.value.trim(),
          company: company.value.trim(),
        },
      };

      if (phoneNumber.value) data.contact.phone_number = phoneNumber.value.trim();

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
      <div className={modalIsActive ? 'modal is-active' : 'modal'}>
        <div className="modal-background" />
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">Delete contact</p>
            <button className="delete" aria-label="close" onClick={handelCloseModal} />
          </header>
          <section className="modal-card-body">
            Are you sure you want to delete this contact?
          </section>
          <footer className="modal-card-foot">
            <button className="button is-danger" onClick={handleDeleteButtonClick}>Delete</button>
            <button className="button" onClick={handelCloseModal}>Cancel</button>
          </footer>
        </div>
      </div>
      <Layout title={name.value || 'New Contact'}>
        <div className="columns is-centered">
          <div className="column is-four-fifths">
            <h1 className="title is-3">
              {name.value}
              {' '}
              {lastName.value}
            </h1>
          </div>
        </div>
        <div className="columns is-centered">

          <form action="" className="box column is-four-fifths">
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
            <div className="column" style={{ paddingTop: '0', paddingBottom: '20px' }}>
              <p>elements with * are required</p>
            </div>
            <div className="columns is-centered">
              <ExitButton onClick={handleExitButtonClick} big="true" margin="true">
                Exit
              </ExitButton>
              <SaveButton big="true" onClick={handleSaveButtonClick} />
            </div>
            {deleteButton ? (
              <>
                <div className="columns is-centered" style={{ paddingBottom: '15px' }}>
                  <DeleteButton onClick={handelOpenModal} />
                </div>
              </>
            ) : ''}
          </form>
        </div>
      </Layout>
    </>
  );
};

export default ContactDetail;
