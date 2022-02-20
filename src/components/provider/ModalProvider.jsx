import { createContext, useState } from 'react';

export const ModalContext = createContext({});

// eslint-disable-next-line react/function-component-definition
export const ModalProvider = (props) => {
  const { children } = props;
  const [modal, setModal] = useState(false);

  // eslint-disable-next-line react/jsx-no-constructed-context-values
  return <ModalContext.Provider value={{ modal, setModal }}>{children}</ModalContext.Provider>;
};
