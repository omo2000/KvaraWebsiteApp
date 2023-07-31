import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { routes } from './global/configs/routes';
import { LanguageProvider } from './global/contexts/LanguageContext';

function App() {
  return (
    <BrowserRouter>
      <LanguageProvider >
       
            
            <Routes>
              {routes.map((route, index) => (
                <Route
                  key={`routes-path-${index}`}
                  path={route.path}
                  element={route.element}
                />
              ))}
            </Routes>
      </LanguageProvider>
    </BrowserRouter>
  )
}

export default App;