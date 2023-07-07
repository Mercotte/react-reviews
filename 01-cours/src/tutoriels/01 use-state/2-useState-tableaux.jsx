import { data } from '../../../data (1)';
import { useState } from 'react';

const UseStateArray = () => {
  const [people, setPeople] = useState(data);

  const removePerson = (id) => {
    const newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };
  return (
    <>
      {people.map((person) => {
        const { id, name } = person;

        return (
          <div key={id} className='item'>
            <h4>{name}</h4>
            <button onClick={() => removePerson(id)}>Supprimer</button>
          </div>
        );
      })}
      <button className='btn' onClick={() => setPeople([])}>
        Efface la liste
      </button>
    </>
  );
};
export default UseStateArray;
