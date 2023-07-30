import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { routes } from './global/configs/routes';
import { LanguageProvider } from './global/contexts/LanguageContext';
import { CartProvider } from './global/contexts/CartContext';
import { FavProvider } from './global/contexts/FavContext';

function App() {
  return (
    <BrowserRouter>
      <LanguageProvider >
        <CartProvider>
          <FavProvider>
            
            <Routes>
              {routes.map((route, index) => (
                <Route
                  key={`routes-path-${index}`}
                  path={route.path}
                  element={route.element}
                />
              ))}
            </Routes>
          </FavProvider>
        </CartProvider>
      </LanguageProvider>
    </BrowserRouter>
  )
}

export default App;