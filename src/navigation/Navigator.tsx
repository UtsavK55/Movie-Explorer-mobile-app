import Loader from '@components/loader';
import { useUserLoginContext } from '@contexts/LoginContext';
import DrawerNavigator from '@navigation/DrawerNavigator';
import AuthNavigator from '@navigation/AuthNavigator';

const Navigator = () => {
  const { loginId, isLoading } = useUserLoginContext();

  if (isLoading) {
    return <Loader />;
  }
  console.log(loginId);
  return <>{loginId ? <DrawerNavigator /> : <AuthNavigator />}</>;
};

export default Navigator;
