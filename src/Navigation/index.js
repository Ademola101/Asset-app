import RootNavigator from './RootNavigator';
import AuthenticatedUserProvider from './AuthenticatedUserProvider';

export default function Routes() {

  return (
    <AuthenticatedUserProvider>
      <RootNavigator/>
    </AuthenticatedUserProvider>);
}