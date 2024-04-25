import { Suspense, lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Loader from '../../components/atoms/Loader/Loader';

const HomePage = lazy(() => import('../../pages/HomePage/HomePage'));
const WorksPage = lazy(() => import('../../pages/WorksPage/WorksPage'));

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Suspense fallback={<Loader />}>
        <HomePage />
      </Suspense>
    ),
  },
  {
    path: '/works',
    element: (
      <Suspense fallback={<Loader />}>
        <WorksPage />
      </Suspense>
    ),
  },
]);

export default router;
