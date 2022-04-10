import React, { createContext, useContext, useState } from "react";

interface ModalProps {
  isModalOpen: boolean;
  handleCloseModal: () => void;
  handleOpenModal: () => void;
}

const ModalContext = createContext({} as ModalProps);

const ModalProvider: React.FC = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleOpenModal() {
    setIsModalOpen(true);
  }

  function handleCloseModal() {
    setIsModalOpen(false);
  }

  return (
    <ModalContext.Provider
      value={{
        isModalOpen,
        handleCloseModal,
        handleOpenModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

function useModal() {
  const context = useContext(ModalContext);

  if (!context) {
    throw new Error(
      "Contexto não encontrado, lembre-se o contexto useModal deve ser usado juntamento com o ModalProvider"
    );
  }

  return context;
}

export { ModalProvider, ModalContext, useModal };
