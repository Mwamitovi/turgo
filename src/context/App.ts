import React from 'react';

type Dispatch<A> = (value: A) => void;
type SetStateAction<S> = S | ((prevState: S) => S);

export interface State {
  isList: boolean,
}

interface contextProps {
  isList: boolean,
  setState: Dispatch<SetStateAction<State>>,
}

export const AppContext = React.createContext({} as contextProps);
