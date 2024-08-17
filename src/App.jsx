import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import axios from 'axios';

const apiURL = 'https://66c060e0ba6f27ca9a56715e.mockapi.io/users';

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
      isbnNo: '',
      publicationDate: '',
    },
    onSubmit: async (values, { resetForm }) => {
      if (editingBook) {
        await updateUser(editingBook.id, values); // Update existing book
      } else {
        await addUser(values); // Add new book
      }
      resetForm();
      setEditingBook(null);
    },
  });

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await axios.get(apiURL);
      setBookList(response.data);
    } catch (error) {
      console.error('Error fetching book data:', error);
    }
  };

  const addUser = async (newBook) => {
    try {
      const response = await axios.post(apiURL, newBook);
      setBookList((prevList) => [...prevList, response.data]);
    } catch (error) {
      console.error('Error adding new book:', error);
    }
  };

  const updateUser = async (id, updatedBook) => {
    try {
      const response = await axios.put(`${apiURL}/${id}`, updatedBook);
      setBookList((prevList) =>
        prevList.map((book) => (book.id === id ? response.data : book))
      );
    } catch (error) {
      console.error('Error updating book:', error);
    }
  };

  const startEditingBook = (book) => {
    setEditingBook(book);
    formik.setValues(book);
  };

  const deleteUser = async (id) => {
    try {
      await axios.delete(`${apiURL}/${id}`);
      setBookList((prevList) => prevList.filter((book) => book.id !== id));
    } catch (error) {
      console.error('Error deleting book:', error);
    }
  };

  return (
    <div>
      <h1>Book Library</h1>

      <form onSubmit={formik.handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            placeholder="Title"
            name="title"
            value={formik.values.title}
            onChange={formik.handleChange}
          />
        </label>

        <label>
          Author Name:
          <input
            type="text"
            placeholder="Author Name"
            name="author.name"
            value={formik.values.author.name}
            onChange={formik.handleChange}
          />
        </label>

        <label>
          Author Birthdate:
          <input
            type="text"
            placeholder="Author Birthdate"
            name="author.birthdate"
            value={formik.values.author.birthdate}
            onChange={formik.handleChange}
          />
        </label>

        <label>
          Author Bio:
          <input
            type="text"
            placeholder="Author Bio"
            name="author.bio"
            value={formik.values.author.bio}
            onChange={formik.handleChange}
          />
        </label>

        <label>
          ISBN Number:
          <input
            type="text"
            placeholder="ISBN No"
            name="isbnNo"
            value={formik.values.isbnNo}
            onChange={formik.handleChange}
          />
        </label>

        <label>
          Publication Date:
          <input
            type="text"
            placeholder="Publication Date"
            name="publicationDate"
            value={formik.values.publicationDate}
            onChange={formik.handleChange}
          />
        </label>

        <button type="submit">
          {editingBook ? 'Update Book' : 'Add Book'}
        </button>
      </form>

      <div>
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
            {bookList.map((book) => (
              <tr key={book.id}>
                <td>{book.title}</td>
                <td>{book.author.name}</td>
                <td>{book.author.birthdate}</td>
                <td>{book.author.bio}</td>
                <td>{book.isbnNo}</td>
                <td>{book.publicationDate}</td>
                <td>
                  <button onClick={() => startEditingBook(book)}>Edit</button>
                  <button onClick={() => deleteUser(book.id)}>Delete</button>
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
