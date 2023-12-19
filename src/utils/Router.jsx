import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Routes
import Home from '@pages/Home/Home';
import Nano from '@pages/NanoStore/Nano';
import Zustand from '@pages/Zustand/Zustand';
import RTK from '@pages/RTK/RTK';
import Jotai from '@pages/Jotai/Jotai';
import MobX from '@pages/MobX/MobX';
import ReactContext from '@pages/ReactContext/Context';
import Constate from '@pages/Constate/Constate';
import Rematch from '@pages/Rematch/Rematch';
import Valtio from '@pages/Valtio/Valtio';
import Recoil from '@pages/Recoil/Recoil';
import Hookstate from '@pages/Hookstate/Hookstate';
import EasyPeasy from '@pages/EasyPeasy/EasyPeasy';
import Pinia from '@pages/Pinia/Pinia';
import Svelte from '@pages/Svelte/Svelte';

// Other
import ErrorPage from '@pages/Error/ErrorPage';
import NotFound from '@pages/Error/NotFound';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/nano',
    element: <Nano />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/zustand',
    element: <Zustand />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/rtk',
    element: <RTK />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/jotai',
    element: <Jotai />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/mobx',
    element: <MobX />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/context',
    element: <ReactContext />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/constate',
    element: <Constate />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/rematch',
    element: <Rematch />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/valtio',
    element: <Valtio />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/recoil',
    element: <Recoil />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/hookstate',
    element: <Hookstate />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/easy-peasy',
    element: <EasyPeasy />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/pinia',
    element: <Pinia />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/react-use-svelte-store',
    element: <Svelte />,
    errorElement: <ErrorPage />,
  },
  { path: '*', element: <NotFound /> },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}

// eslint-disable-next-line react-refresh/only-export-components
export { router };
