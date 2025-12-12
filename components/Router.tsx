import React, { useState, useEffect, createContext, useContext, ReactNode, useCallback } from 'react';

interface RouterContextType {
  path: string;
  navigate: (path: string) => void;
}

const RouterContext = createContext<RouterContextType>({ 
  path: '/', 
  navigate: () => console.warn('Router provider not found') 
});

export const useRouter = () => useContext(RouterContext);

export const Router: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Helper to get the path from the hash (removes the starting '#')
  // e.g. "https://site.com/#/features" -> "/features"
  const getHashPath = () => {
    if (typeof window === 'undefined') return '/';
    return window.location.hash.slice(1) || '/';
  };

  const [path, setPath] = useState<string>(getHashPath);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const onHashChange = () => setPath(getHashPath());
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const navigate = useCallback((newPath: string) => {
    if (typeof window === 'undefined') return;
    // Update the hash, which triggers the hashchange event
    window.location.hash = newPath;
    window.scrollTo(0, 0);
  }, []);

  return <RouterContext.Provider value={{ path, navigate }}>{children}</RouterContext.Provider>;
};

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: ReactNode;
  className?: string;
}

export const Link: React.FC<LinkProps> = ({ href, children, className, onClick, ...props }) => {
  const { navigate } = useRouter();
  
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onClick) onClick(e);
    
    if (!e.defaultPrevented && !e.ctrlKey && !e.metaKey && !e.shiftKey && !e.altKey) {
      e.preventDefault();
      navigate(href);
    }
  };

  return (
    <a href={`#${href}`} onClick={handleClick} className={className} {...props}>
      {children}
    </a>
  );
};