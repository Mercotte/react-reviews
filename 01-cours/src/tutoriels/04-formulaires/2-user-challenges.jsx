import { useState } from 'react';
import { data } from '../../data.js';

const UserChallenge = () => {
  const [name, setName] = useState('');
  const [person, setPerson] = useState(data);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form className='form' onSubmit={handleSubmit}>
      <h4>UserChallenge</h4>
      <div className='form-row'>
        <label htmlFor='name' className='form-label'>
          Nom
        </label>
        <input
          type='text'
          name='name'
          className='form-input'
          value={name}
          onChange={(e) => setName(e.currentTarget.value)}
        />
      </div>
      <button type='submit' className='btn btn-block'>
        Envoyer
      </button>
    </form>
  );
};
export default UserChallenge;
