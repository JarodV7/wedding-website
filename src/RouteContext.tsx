import { createContext, useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

interface RouteContextProps {
  lastPath: string;
  setLastPath: (path: string) => void;
  fromRSVP: boolean;
  setFromRSVP: (value: boolean) => void;
}

const RouteContext = createContext<RouteContextProps>({
  lastPath: '',
  setLastPath: () => {},
  fromRSVP: false,
  setFromRSVP: () => {},
});

export const useRouteContext = () => useContext(RouteContext);

export function RouteProvider({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const [lastPath, setLastPath] = useState('');
  const [fromRSVP, setFromRSVP] = useState(false);

  useEffect(() => {
    setLastPath(location.pathname);
  }, [location.pathname]);

  return (
    <RouteContext.Provider value={{ lastPath, setLastPath, fromRSVP, setFromRSVP }}>
      {children}
    </RouteContext.Provider>
  );
}
