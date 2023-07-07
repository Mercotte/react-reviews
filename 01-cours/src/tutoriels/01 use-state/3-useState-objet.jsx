import { useState } from 'react';

const UserStateObject = () => {
  const [person, setPerson] = useState({
    name: 'Peter',
    age: 24,
    message: 'Message au pif',
  });

  const changeMessage = () => {
    setPerson({ ...person, Message: 'Hello world' });
  };

  console.log(person);

  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>{person.message}</h3>
      <button className='btn' onClick={changeMessage}>
        Changer le message
      </button>
    </>
  );
};
export default UserStateObject;
