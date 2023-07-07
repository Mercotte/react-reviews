import { data } from './data';
import { useState } from 'react';

const App = () => {
  const [people, setPeople] = useState(data);

  return (
    <main>
      <section className='container'>
        <h3>{people.length} Anniversaires aujourd&apos;hui</h3>
        {people.map((person) => {
          const { id, name, age, image } = person;

          return (
            <article key={id} className='person'>
              <img src={image} alt={name} className='img' />
              <div>
                <h4>{name}</h4>
                <p>{age}</p>
              </div>
            </article>
          );
        })}
        <button className='btn' onClick={() => setPeople([])}>
          Tout supprimer
        </button>
      </section>
    </main>
  );
};

export default App;
