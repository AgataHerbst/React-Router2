
import { useEffect, useState } from 'react';

function Tbody() {
  const [users, setUsers] = useState([]);
 
 
 try {
    const getUsers = async () => {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      const FinalData = await response.json();
      setUsers(FinalData)
    }

   useEffect(() => {
      getUsers();
    }, [])

  } catch (err) {
    console.log('Поймали ошибку.')
  }


  return <>
  <table>
   <thead>
      <tr>
        <th>
          <span>
            Name</span></th>
        <th><span>
          Email</span></th>
        <th><span>
          Address.city</span></th>
        <th><span>
          Phone</span></th>
        <th><span>
          Website</span></th>
        <th><span>
          Company.Name</span></th>
      </tr>
    </thead>
   
   <tbody>
        {users.map((userElem) => {
        return <tr key={userElem.id}>
          <td><button onClick={() => {setUsers("")}}>{userElem.name}</button></td>
          <td>{userElem.email}</td>
          <td>{userElem.address.city}</td>
          <td>{userElem.phone}</td>
          <td>{userElem.website}</td>
          <td>{userElem.company.name}</td>
        </tr>
      })
      }
    </tbody>
    </table>
 </>
}

export default Tbody;
