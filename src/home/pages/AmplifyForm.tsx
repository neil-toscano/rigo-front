import React, { useEffect, useState } from 'react';

import { withAuthenticator, UseAuthenticator } from '@aws-amplify/ui-react';
import { AuthUser } from 'aws-amplify/auth';
import { generateClient } from 'aws-amplify/api';

import '@aws-amplify/ui-react/styles.css';
import { SensoresModify } from '../components/SensoresModify.js';
import { getCurrentUser } from 'aws-amplify/auth';
import { CreateUserSensor } from '../components/CreateUserSensor.js';
import { listDatoSensores } from '../../graphql/queries.js';
import { Button } from '@/components/ui/button.js';
import { Bienvenida } from '../components/Bienvenida.js';
const client = generateClient();
type AppProps = {
  signOut?: UseAuthenticator['signOut']; //() => void;
  user?: AuthUser;
};

const AmplifyForm: React.FC<AppProps> = ({ signOut, user }) => {
  const [userId, setUserId] = useState<string | null>(null);
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [sensorId, setSensorId] = useState<string | null>(null);

  useEffect(() => {
    currentAuthenticatedUser();
  }, []);

  function updateSensorId(sensorId: string) {
    setSensorId(sensorId);
  }
  async function isSensorId(email: string) {
    if (email === null) {
      console.log('nulo-email');
      return;
    }
    const result = await client.graphql({
      query: listDatoSensores,
      variables: {
        filter: {
          userEmail: {
            eq: email,
          },
        },
      },
    });
    console.log(result, 'sensor Id');
    const listgetDato: [] = result.data.listDatoSensores.items;
    if (listgetDato.length === 0) {
      return;
    }
    const { id } = result.data.listDatoSensores.items[0];
    setSensorId(id);
  }

  async function currentAuthenticatedUser() {
    try {
      const currentUser = await getCurrentUser();
      setUserId(currentUser.userId);
      setUserEmail(currentUser.signInDetails?.loginId ?? null);
      isSensorId(currentUser.signInDetails?.loginId ?? null); // ver si hay usuario
    } catch (err) {
      console.log(err, 'error current User');
    }
  }

  return (
    <div className="flex flex-col justify-center mx-4 mt-2">
      <div className="flex justify-between">
        <Bienvenida
          userId={userId}
          userEmail={userEmail}
          existeSensorId={sensorId}
        />
        <Button className="bg-red-500" onClick={signOut}>
          Sign out
        </Button>
      </div>

      <CreateUserSensor userEmail={userEmail} updateSensorId={updateSensorId} />

      <div className="flex flex-col">
        <div className="flex justify-center">
          <SensoresModify id={sensorId} />
        </div>
      </div>
    </div>
  );
};

export default withAuthenticator(AmplifyForm);
