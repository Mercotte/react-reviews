// on ne peut pas utiliser de conditions ou de boucles
// ce n'est pas permis par react car il n'y pas de retour
// c'est pourquoi on va utiliser les circuit-courts

import { useState } from 'react';
//* L'opérateur || (OU logique) retourne le premier operande si il est "truthy", ou le second opérande si le premier est "falsy"
// const user = null || 'Peter';
// console.log(user);

//* L'opérateur && (ET logique) retourne le premier operande si il est "falsy", ou le second opérande si le premier est "truthy"
// console.log('peter' && 'John');

const ShortCircuitOverview = () => {
  // falsy
  const [text, setText] = useState('');
  // truthy
  const [name, setName] = useState('John');
  return (
    <div>
      {/* falsy */}
      <h4>{text || 'hello world'}</h4>
      <h4>{text && 'hello world'}</h4>
      {/* truthy */}
      <h4>{name || 'hello world'}</h4>
      <h4>{name && 'hello world'}</h4>
    </div>
  );
};

export default ShortCircuitOverview;
