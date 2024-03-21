import { UseAuthenticator, withAuthenticator } from '@aws-amplify/ui-react';
import { AuthUser } from 'aws-amplify/auth';
export type AppProps = {
  signOut?: UseAuthenticator['signOut']; //() => void;
  user?: AuthUser;
};

export { withAuthenticator };
