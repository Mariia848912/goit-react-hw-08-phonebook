import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from './SharedLayout';
import { lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { refreshUser } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { LinearProgress } from '@mui/material';
// import { Progress } from '@chakra-ui/react'

const HomePage = lazy(() => import('../pages/Home'));
const RegisterPage = lazy(() => import('../pages/Register'))
const LoginPage = lazy(() => import('../pages/Login'));
const ContactPage = lazy(() => import('../pages/Contacts'))
const NotFoundPage = lazy(()=> import('../pages/NotFound'))

export function App() {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser())
  }, [dispatch]);

  return (
    <>
{     isRefreshing ? <LinearProgress /> : (<Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/login" element={<RestrictedRoute component={<LoginPage/> } redirectTo='/contacts' />} />
        <Route path="/register" element={<RestrictedRoute component={<RegisterPage/> } redirectTo='/contacts' />}/>
        <Route path="/contacts" element={<PrivateRoute component={<ContactPage />} redirectTo='/login' />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>)}
          <ToastContainer autoClose={3000} />
    </>

  );
}
// style={{ marginRight: 'auto',  marginLeft: 'auto',}}