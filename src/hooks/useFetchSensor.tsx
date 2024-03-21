import { useState } from 'react';
import { getDatoSensores } from '../graphql/queries.js';
import { generateClient } from 'aws-amplify/api';

const client = generateClient();

interface getListTodo {
  createdAt: string;
  updatedAt: string;
  id: string;
  valor: string;
}
interface setListTodo {
  createdAt: string;
  updatedAt: string;
  id: string;
  valor: number;
}

export const useFetchSensor = (id: string) => {
  const [listDatoSensor, setListDatoSensor] = useState<setListTodo[]>([]);

  const fetchData = async () => {
    try {
      const responseSensor = await client.graphql({
        query: getDatoSensores,
        variables: {
          id: id,
        },
      });
      const datosSensor = responseSensor.data.getDatoSensores.content.items;
      const listRechart = datosSensor.map((element: getListTodo) => {
        return {
          createdAt: element.createdAt,
          updatedAt: element.updatedAt,
          id: element.id,
          valor: parseInt(element.valor),
        };
      });
      setListDatoSensor(listRechart);
    } catch (error) {
      console.log(error, 'error-useFetchSensor');
    }
  };

  const onChangeData = (newDataSensor: setListTodo) => {
    setListDatoSensor((prevState) => [...prevState, newDataSensor]);
  };

  return {
    fetchData,
    listDatoSensor,
    onChangeData,
  };
};
