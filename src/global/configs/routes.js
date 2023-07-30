import { 
  Home, 
  Video, 
  Biography,
  Contact
} from '../../pages';
export const routes = [
  {
    path: '/', 
    element: <Home />
  },
  {
    path: '/home', 
    element: <Home />
  },
  {
    path: '/biography',
    element: <Biography />
  },
  {
    path: '/video',
    element: <Video />
  },
  
 
  {
    path: '/Contact',
    element: <Contact />
  }
  
]