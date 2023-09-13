import { createContext, useState } from 'react';

const AnimalContext = createContext({
  state: { animals: ['사자', '기린', '호랑이'] },
  action: { setAnimals: () => {} },
});

const AnimalProvider = ({ children }) => {
  const [animals, setAnimals] = useState(['사자', '기린', '호랑이']);
  const insertAnimal = (animal) => {
    setAnimals([...animals, animal]);
  };

  const deleteAnimal = (animal) => {
    setAnimals(animals.filter((prevAnimal) => prevAnimal !== animal));
  };

  const value = {
    state: { animals },
    action: { setAnimals, insertAnimal, deleteAnimal },
  };

  return <AnimalContext.Provider value={value}>{children}</AnimalContext.Provider>;
};

const AnimalConsumer = AnimalContext.Consumer;

export { AnimalProvider, AnimalConsumer };
