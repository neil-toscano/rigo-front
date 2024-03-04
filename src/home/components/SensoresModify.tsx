import { useEffect, useState } from 'react'
import { generateClient } from "aws-amplify/api";
import { getDatoSensores } from "../../graphql/queries.js";
import * as subscriptions from '../../graphql/subscriptions.js';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import { useFetchSensor } from '@/hooks/useFetchSensor.js';

const client = generateClient();
interface idProp {
    id: string;
}



export const SensoresModify = ({ id }: idProp) => {

    const { listDatoSensor, fetchData, onChangeData } = useFetchSensor(id);

    useEffect(() => {
      if(id !== null) {
          fetchData();
          const createSub = client
          .graphql({ query: subscriptions.onCreateContent,
            variables: {
              filter: {
                datoSensoresID: { eq: id }
              }
            }
          })
          .subscribe({
            next: ({ data }) => {
              const { id, createdAt, updatedAt, valor } = data.onCreateContent;
              const newDataSensor = {
                id,
                createdAt,
                updatedAt,
                valor: parseInt(valor)
              }
              onChangeData(newDataSensor);
              console.log(data,'data-actualizado-realtime')
            },
            error: (error) => console.warn(error,'ocurrio error')
          });
        }
        
    }, [id]);

  return (
    <>
      <div className="flex justify-center">
        <h4>Chart Rigo2.0</h4>
      </div>
      <LineChart width={600} height={300} data={listDatoSensor} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
        <Line type="monotone" dataKey="valor" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey="createdAt" />
        <YAxis />
        <Tooltip />
      </LineChart>
    </>
  )
}
