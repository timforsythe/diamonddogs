// useAuthentication.js
import { useEffect, useState } from 'react';
import { getUserFromLocalStorage } from '../Helpers/localStorageHelper';
import { useNavigate } from 'react-router-dom';

const useAuthentication = () => {
  const [user, setUser] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const user = getUserFromLocalStorage();

    if (!user) {
      console.log('User not logged in');
      navigate('/login');
      return;
    } else if (user.providerData && user.providerData.length > 0) {
      // console.log(user);
      // setUser(user.providerData[0]);
      setUser(user);
    } else {
      console.log('User data not available');
      // Handle the case where user.providerData is undefined or empty
    }
  }, [navigate]);

  return user;
};

export default useAuthentication;