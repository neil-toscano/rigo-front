import { createBrowserRouter } from 'react-router-dom';
import { NostrosPage } from '@/home/pages/NostrosPage';
import { Agtech } from '../pages/Agtech';
import AmplifyForm from '../pages/AmplifyForm';
import Control from '../pages/Control';
export const HomeRoutes = createBrowserRouter([
  {
    path: '/',
    children: [
      {
        path: '',
        element: <NostrosPage />,
      },
      {
        path: 'agtech',
        element: <Agtech />,
      },
      {
        path: 'control',
        element: <Control />,
      },
      {
        path: 'grafica',
        element: <AmplifyForm />,
      },
    ],
  },
]);
