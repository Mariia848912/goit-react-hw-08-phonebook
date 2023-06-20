import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { AppBar } from 'components/AppBar/AppBar';
import { LinearProgress } from '@mui/material';

export const SharedLayout = () => {
  return (
    <>
   
     <AppBar />
      <Suspense fallback={<LinearProgress />}>
        <main>
          <Outlet />
        </main>
      </Suspense>
  
      </>
  );
};
