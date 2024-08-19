import React, { useEffect, useState, useCallback } from 'react';
import { useFormik } from 'formik';
import axios from 'axios';

const apiURL = 'https://66c333c9d057009ee9bf69ad.mockapi.io/books';

function App() {
  const [bookList, setBookList] = useState([]);
  const [editingBook, setEditingBook] = useState(null);

  const formik = useFormik({
    initialValues: {
      title: '',
      author: {
        name: '',
        birthdate: '',
        bio: '',
      },
      isbnNumber: '',
      publicationDate: '',
    },
    validate: (values) => {
      const errors = {};

      if (!values.title) {
        errors.title = 'Title is required';
      }
      if (!values.author.name) {
        errors.author = errors.author || {};
        errors.author.name = 'Author Name is required';
      }
      if (!values.author.birthdate) {
        errors.author = errors.author || {};
        errors.author.birthdate = 'Author Birthdate is required';
      }
      if (!values.author.bio) {
        errors.author = errors.author || {};
        errors.author.bio = 'Author Bio is required';
      }
      if (!values.isbnNumber) {
        errors.isbnNumber = 'ISBN Number is required';
      }
      if (!values.publicationDate) {
        errors.publicationDate = 'Publication Date is required';
      }
      return errors;
    },
    onSubmit: async (values, { resetForm }) => {
      try {
        if (editingBook) {
          await updateBook(editingBook.id, values);
        } else {
          await addBook(values);
        }
        resetForm();
        setEditingBook(null);
      } catch (error) {
        console.error('Error submitting form:', error);
      }
    },
  });

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    const response = await axios.get(apiURL);
    setBookList(response.data);
  };

  const addBook = async (newBook) => {
    const response = await axios.post(apiURL, newBook);
    setBookList((prevList) => [...prevList, response.data]);
  };

  const updateBook = async (id, updatedBook) => {
    const response = await axios.put(`${apiURL}/${id}`, updatedBook);
    setBookList((prevList) =>
      prevList.map((book) => (book.id === id ? response.data : book))
    );
  };

  const startEditingBook = useCallback(
    (book) => {
      setEditingBook(book);
      formik.setValues(book);
    },
    [formik]
  );

  const deleteBook = async (id) => {
    await axios.delete(`${apiURL}/${id}`);
    setBookList((prevList) => prevList.filter((book) => book.id !== id));
  };

  const handleNestedChange = (event) => {
    const { name, value } = event.target;
    const [parent, child] = name.split('.');
    formik.setFieldValue(`${parent}.${child}`, value);
  };

  return (
    <div className="app">
      <h1>Book Library</h1>

      <form onSubmit={formik.handleSubmit} className="form">
        <label>
          Title:
          <input
            type="text"
            placeholder="Title"
            name="title"
            value={formik.values.title}
            onChange={formik.handleChange}
          />
          {formik.errors.title ? <div className="error">{formik.errors.title}</div> : null}
        </label>

        <label>
          Author Name:
          <input
            type="text"
            placeholder="Author Name"
            name="author.name"
            value={formik.values.author.name}
            onChange={handleNestedChange}
          />
          {formik.errors.author?.name ? <div className="error">{formik.errors.author.name}</div> : null}
        </label>

        <label>
          Author Birthdate:
          <input
            type="date"
            placeholder="Author Birthdate"
            name="author.birthdate"
            value={formik.values.author.birthdate}
            onChange={handleNestedChange}
          />
          {formik.errors.author?.birthdate ? <div className="error">{formik.errors.author.birthdate}</div> : null}
        </label>

        <label>
          Author Bio:
          <input
            type="text"
            placeholder="Author Bio"
            name="author.bio"
            value={formik.values.author.bio}
            onChange={handleNestedChange}
          />
          {formik.errors.author?.bio ? <div className="error">{formik.errors.author.bio}</div> : null}
        </label>

        <label>
          ISBN Number:
          <input
            type="text"
            placeholder="ISBN No"
            name="isbnNumber"
            value={formik.values.isbnNumber}
            onChange={formik.handleChange}
          />
          {formik.errors.isbnNumber ? <div className="error">{formik.errors.isbnNumber}</div> : null}
        </label>

        <label>
          Publication Date:
          <input
            type="date"
            placeholder="Publication Date"
            name="publicationDate"
            value={formik.values.publicationDate}
            onChange={formik.handleChange}
          />
          {formik.errors.publicationDate? <div className="error">{formik.errors.publicationDate}</div> : null}
        </label>

        <button type="submit">
          {editingBook ? 'Update Book' : 'Add Book'}
        </button>
      </form>

      <div className="user-list">
        <h2>Book List</h2>
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Author Name</th>
              <th>Author Birthdate</th>
              <th>Author Bio</th>
              <th>ISBN Number</th>
              <th>Publication Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {bookList
              .sort((a, b) => b.id - a.id)
              .map((book) => (
                <tr key={book.id}>
                  <td>{book.title}</td>
                  <td>{book.author.name}</td>
                  <td>{book.author.birthdate}</td>
                  <td>{book.author.bio}</td>
                  <td>{book.isbnNumber}</td>
                  <td>{book.publicationDate}</td>
                  <td>
                    <button onClick={() => startEditingBook(book)}>Edit</button>
                    <button onClick={() => deleteBook(book.id)}>Delete</button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
