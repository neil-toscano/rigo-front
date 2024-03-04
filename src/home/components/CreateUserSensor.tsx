import React, { useEffect, useState } from 'react';

import { generateClient } from "aws-amplify/api";
import { createDatoSensores } from "../../graphql/mutations.js";
import { Button } from '@/components/ui/button.js';


const client = generateClient();
interface userEmailProp {
    userEmail: string;
    updateSensorId: (sensorId: string) => void;
}
export const CreateUserSensor = ({userEmail, updateSensorId}: userEmailProp) => {
    const [sensorId, setSensorId] = useState<string | null>(null);
     
    async function create() {
        console.log('creamos');
        
        if(userEmail !== null) {
            const result = await client.graphql({
                query: createDatoSensores,
                variables: {
                  input: { userEmail: userEmail}
                }
            });
            const { id } = result.data.createDatoSensores;
            setSensorId(id);
            updateSensorId(id);  
        }
    }
  return (
    <div>
        <Button className='bg-purple my-1.5' onClick={() => create()}> Crear-Sensor </Button>
        <ul>
            <li> SensorId: { sensorId }</li>
        </ul>
    </div>
  )
}
