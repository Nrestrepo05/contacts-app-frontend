/* eslint-disable radix */
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import ContactInfo from '../../components/ContactInfo';
import ExitButton from '../../components/ExitButton';
import Layout from '../../components/Layout';
import PrimaryButton from '../../components/PrimaryButton';
import SearchBar from '../../components/SearchBar';
import SearchButton from '../../components/SearchButton';
import NotFound from '../../components/NotFound';

const Home = ({
  contacts, pages, page, searchQuery,
}) => {
  const [buttonsHidden, setButtonsHidden] = useState(false);

  const router = useRouter();

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
    if (page < pages) {
      if (searchQuery) {
        url = `/contacts/?page=${page + 1}&search=${searchQuery}`;
      } else {
        url = `/contacts/?page=${page + 1}`;
      }

      return router.push(url);
    }
    return null;
  };

  const handlePrevButtonClick = (e) => {
    e.preventDefault();
    let url;
    if (page > 1) {
      if (searchQuery) {
        url = `/contacts/?page=${page - 1}&search=${searchQuery}`;
      } else {
        url = `/contacts/?page=${page - 1}`;
      }

      return router.push(url);
    }
    return null;
  };

  return (
    <>
      <Layout title="Home">
        <div className="column is-full">
          <div className="columns is-centered">
            <PrimaryButton hidden={buttonsHidden}>+ New Contact</PrimaryButton>
            <SearchButton onClick={handleSearchButtonClick} hidden={buttonsHidden} />
            <SearchBar hidden={!buttonsHidden} />
            <ExitButton onClick={handleExitButtonClick} small="true" hidden={!buttonsHidden}>X</ExitButton>
          </div>
        </div>
        {contacts.length < 1
          ? (<NotFound title="There's Nothing Yet" subtitle="Create the first!" />)
          : ''}
        {contacts.map((contact) => (
          <div className="columns is-centered" key={contact._id}>
            <ContactInfo
              name={contact.name}
              lastName={contact.last_name}
              email={contact.email}
              id={contact._id}
            />
          </div>
        ))}
        <div className="columns is-centered">
          <nav className="pagination" role="navigation" aria-label="pagination">
            {
            page > 1
              ? <button className="pagination-previous" onClick={handlePrevButtonClick}>Previous</button>
              : <button className="pagination-previous" onClick={handlePrevButtonClick} disabled>Previous</button>
              }
            {
            page < pages
              ? <button className="pagination-next" onClick={handleNextButtonClick}>Next page</button>
              : <button className="pagination-next" onClick={handleNextButtonClick} disabled>Next page</button>
            }
            <ul className="pagination-list">
              <li>
                <Link href="/contacts?page=1">
                  <a className="pagination-link is-current" aria-label="Actual page">{page}</a>
                </Link>
              </li>
              <li>
                <span className="pagination-ellipsis ">&hellip;</span>
              </li>
              <li>
                <a className="pagination-link is-primary is-outlined" aria-label="Last Page">{pages}</a>
              </li>
            </ul>
          </nav>
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
