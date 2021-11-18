import React from 'react';

// type Dispatch<A> = (value: A) => void;
// type SetStateAction<S> = S | ((prevState: S) => S);

interface contextProps {}

export const AppContext = React.createContext({} as contextProps);
