import React, { useState, useEffect } from 'react'
import axios from 'axios'

const App = () => {

  const [userData, setUserData] = useState({
    name: '',
    username: '',
    email: '',
    street: '',
    suite: '',
    city: '',
    zipcode: '',
    lat: '',
    lng: '',
    phone: '',
    website: '',
    companyName: '',
    catchPhrase: '',
    bs: ''
  });

  const fetchTodo = async () => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/users');
    const data = res.data[0];
    setUserData({
      name: data?.name || '',
      username: data?.username || '',
      email: data?.email || '',
      street: data?.address.street || '',
      suite: data?.address.suite || '',
      city: data?.address.city || '',
      zipcode: data?.address.zipcode || '',
      lat: data?.address.geo.lat || '',
      lng: data?.address.geo.lng || '',
      phone: data?.phone || '',
      website: data?.website || '',
      companyName: data?.company.name || '',
      catchPhrase: data?.company.catchPhrase || '',
      bs: data?.company.bs || ''
    });
  }

  const handleChange = (e) => {
    console.log(`Changing ${e.target.name} to ${e.target.value}`);
    setUserData({
      ...userData,
      [e.target.name]: e.target.value
    });
  }

  useEffect(() => {
    fetchTodo();
  }, []);

  return (
    <div>
      <form>
        <div>
          <input type='text' name='name' placeholder='Name' value={userData.name} onChange={handleChange} />
        </div>
        <div>
          <input type='text' name='username' placeholder='Username' value={userData.username} onChange={handleChange} />
        </div>
        <div>
          <input type='text' name='email' placeholder='Email' value={userData.email} onChange={handleChange} />
        </div>
        Address
        <div>
          <input type='text' name='street' placeholder='Street' value={userData.street} onChange={handleChange} />
          <input type='text' name='suite' placeholder='Suite' value={userData.suite} onChange={handleChange} />
          <input type='text' name='city' placeholder='City' value={userData.city} onChange={handleChange} />
          <input type='text' name='zipcode' placeholder='Zipcode' value={userData.zipcode} onChange={handleChange} />
        </div>
        Geo
        <div>
          <input type='text' name='lat' placeholder='Latitude' value={userData.lat} onChange={handleChange} />
          <input type='text' name='lng' placeholder='Longitude' value={userData.lng} onChange={handleChange} />
        </div>
        <div>
          <input type='text' name='phone' placeholder='Phone' value={userData.phone} onChange={handleChange} />
        </div>
        <div>
          <input type='text' name='website' placeholder='Website' value={userData.website} onChange={handleChange} />
        </div>
        Company
        <div>
          <input type='text' name='companyName' placeholder='Company Name' value={userData.companyName} onChange={handleChange} />
          <input type='text' name='catchPhrase' placeholder='Catch Phrase' value={userData.catchPhrase} onChange={handleChange} />
          <input type='text' name='bs' placeholder='BS' value={userData.bs} onChange={handleChange} />
        </div>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default App
