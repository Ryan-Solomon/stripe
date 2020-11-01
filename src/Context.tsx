import React, { FC, useState } from 'react';
import App from './App';

type AppContextType = {
  isSidebarOpen: boolean;
  isModalOpen: boolean;
  openSidebar: () => void;
  closeSidebar: () => void;
  openModal: () => void;
  closeModal: () => void;
};

type Props = {
  children: React.ReactNode;
};

const AppContext = React.createContext<AppContextType | null>(null);

const AppProvider: FC<Props> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(true);

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <AppContext.Provider
      value={{
        isSidebarOpen,
        isModalOpen,
        openSidebar,
        closeSidebar,
        openModal,
        closeModal,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  React.useContext(AppContext);
};
