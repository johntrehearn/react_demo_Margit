import { useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Root from './routes/Root';
import Home from './routes/Home';
import Persons from './routes/Persons';
import ErrorPage from './routes/ErrorPage';

function App() {
  const [persons, setPersons] = useState([
    { id: 1, name: 'Margit', title: 'CEO', age: 29 },
    { id: 2, name: 'Kati', title: 'developer', age: 25 },
    { id: 3, name: 'Karin', title: 'designer', age: 45 },
  ]);
  const [search, setSearch] = useState('');

  const removeHandler = (id) => {
    const updatedArray = persons.filter((person) => person.id !== id);
    setPersons(updatedArray);
  };

  const searchHandler = (e) => {
    setSearch(e.target.value);
  };

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        { path: '/', element: <Home /> },
        {
          path: '/persons',
          element: (
            <Persons
              search={search}
              persons={persons}
              removeHandler={removeHandler}
              searchHandler={searchHandler}
            />
          ),
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
