import React from 'react';
import { Heading } from '@aws-amplify/ui-react';

interface propsId {
  userId: string;
  existeSensorId: string;
  userEmail: string;
}

export const Bienvenida = ({ userId, existeSensorId, userEmail }: propsId) => {
  return (
    <div className="flex flex-col">
      <Heading level={1}>Hello {userEmail}</Heading>
      <ul>
        <li className="bg-green-300"> userId: {userId}</li>
        <li className="bg-sky-200"> existe: {existeSensorId}</li>
      </ul>
    </div>
  );
};
