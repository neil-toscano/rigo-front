import { generateClient } from 'aws-amplify/api';
import { listMotorusers } from '../graphql/queries.js';
import { createMotoruser, updateMotoruser } from '../graphql/mutations.js';
import axios from 'axios';

const client = generateClient();

export const getMotorByEmail = async (userEmail: string) => {
  console.log(userEmail, 'llega vacio el email');
  const { data } = await client.graphql({
    query: listMotorusers,
    variables: {
      filter: {
        userEmail: { eq: userEmail },
      },
    },
  });
  const listMotor = data.listMotorusers.items;
  if (listMotor.length === 0) return;
  return listMotor;
};

export const createMotor = async (userEmail: string) => {
  const { data } = await client.graphql({
    query: createMotoruser,
    variables: {
      input: {
        userEmail: userEmail,
        estado: 0,
      },
    },
  });

  const { id, _version } = data.createMotoruser;
  return {
    id,
    _version,
  };
};

interface MotorEsp32Props {
  microcontrollerId: string;
  message: string;
  isMotorRunning: number;
}

export const updateStateMotorEsp32 = async ({
  microcontrollerId,
  message,
  isMotorRunning,
}: MotorEsp32Props) => {
  const data = await axios.post('http://localhost:3000/esp32', {
    microcontrollerId,
    message,
    isMotorRunning,
  });

  console.log(data);
};

export const updateStateMotorDynamoDB = async (
  estado: number,
  motorId: string,
  versionUser: number,
) => {
  try {
    const result = await client.graphql({
      query: updateMotoruser,
      variables: {
        input: {
          id: motorId,
          _version: versionUser,
          estado: estado,
        },
      },
    });
    const { _version } = result.data.updateMotoruser;
    console.log(result, 'resultado-update');
    return {
      _version,
    };
  } catch (error) {
    console.log(error, 'error-upd');
    return {
      _version: 0,
    };
  }
};
