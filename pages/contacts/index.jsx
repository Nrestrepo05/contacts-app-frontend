/* eslint-disable radix */
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import ContactInfo from '../../components/ContactInfo';
import ExitButton from '../../components/ExitButton';
import Layout from '../../components/Layout';
import PrevNextButtons from '../../components/PrevNextButtons';
import PrimaryButton from '../../components/PrimaryButton';
import SearchBar from '../../components/SearchBar';
import SearchButton from '../../components/SearchButton';
import NotFound from '../../components/NotFound';

const Home = ({
  contacts, pages, page, searchQuery,
}) => {
  const [buttonsHidden, setButtonsHidden] = useState(false);
  const [nextButtonActive, setNextButtonActive] = useState(false);
  const [prevButtonActive, setPrevButtonActive] = useState(false);

  const router = useRouter();

  useEffect(() => {
    if (page < pages) { setNextButtonActive(true); }
    if (page >= pages) { setNextButtonActive(false); }
    if (page > 1) { setPrevButtonActive(true); }
    if (page <= 1) { setPrevButtonActive(false); }
  });

  const handleSearchButtonClick = () => {
    setButtonsHidden(true);
  };

  const handleExitButtonClick = () => {
    setButtonsHidden(false);
    router.push('/contacts');
  };

  const handleNextButtonClick = (e) => {
    e.preventDefault();
    let url;
    if (searchQuery) {
      url = `/contacts/?page=${page + 1}&search=${searchQuery}`;
    } else {
      url = `/contacts/?page=${page + 1}`;
    }

    router.push(url);
  };

  const handlePrevButtonClick = (e) => {
    e.preventDefault();
    let url;
    if (searchQuery) {
      url = `/contacts/?page=${page - 1}&search=${searchQuery}`;
    } else {
      url = `/contacts/?page=${page - 1}`;
    }

    router.push(url);
  };

  return (
    <>
      <Layout>
        <div className="column is-full">
          <div className="columns is-centered">
            <PrimaryButton hidden={buttonsHidden}>+ New Contact</PrimaryButton>
            <SearchButton onClick={handleSearchButtonClick} hidden={buttonsHidden} />
            <SearchBar hidden={!buttonsHidden} />
            <ExitButton onClick={handleExitButtonClick} small="true" hidden={!buttonsHidden} />
          </div>
        </div>
        {contacts.length < 1
          ? (<NotFound title="There's Nothing Yet" subtitle="Create the first!" />)
          : ''}
        {contacts.map((contact) => (
          <div className="columns is-centered">
            <ContactInfo
              name={contact.name}
              lastName={contact.last_name}
              email={contact.email}
              id={contact._id}
              key={contact._id}
            />
          </div>
        ))}
        <div className="columns is-centered">
          <PrevNextButtons
            prev={prevButtonActive}
            next={nextButtonActive}
            prevOnClick={handlePrevButtonClick}
            nextOnClick={handleNextButtonClick}
          />
        </div>
      </Layout>
    </>
  );
};

export async function getServerSideProps({ query }) {
  let page = 1;
  let searchQuery = null;
  const baseUrl = process.env.BACKEND_HOST;
  let url;

  if (query.page) { page = query.page; }

  if (query.search) {
    searchQuery = query.search;
    url = `${baseUrl}/contacts?page=${page}&search=${searchQuery}`;
  } else {
    url = `${baseUrl}/contacts?page=${page}`;
  }

  const response = await fetch(url);

  const data = await response.json();

  const { contacts } = data.body;
  let { pages } = data.body;

  pages = parseInt(pages);
  page = parseInt(page);

  return {
    props: {
      contacts, pages, page, searchQuery,
    },
  };
}

export default Home;
