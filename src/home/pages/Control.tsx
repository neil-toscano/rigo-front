import { Button } from '@/components/ui/button';
import gotita from '../img/gotita.jpg';
import { Link } from 'react-router-dom';
import { withAuthenticator, AppProps } from '../interfaces';
import { useEffect, useState } from 'react';
// import * as subscriptions from '../../graphql/subscriptions.js';
import * as mutations from '@/hooks';

const Control: React.FC<AppProps> = ({ signOut, user }) => {
  const [motorState, setMotorState] = useState(false);
  const [versionUser, setVersionUser] = useState(0);
  const [motorId, setmotorId] = useState<string | null>(null);

  const updateStates = (id: string, version: number) => {
    setmotorId(id);
    setVersionUser(version);
  };

  const existsMotorUser = async () => {
    const userEmail = user?.signInDetails?.loginId;
    const listMotor = await mutations.getMotorByEmail(userEmail);
    if (!listMotor) {
      const { id, _version } = await mutations.createMotor(userEmail);
      updateStates(id, _version);
      return;
    }
    console.log(listMotor, 'lista');
    const { id, _version } = listMotor[0];
    updateStates(id, _version);
    return;
  };

  useEffect(() => {
    existsMotorUser();
  }, []);

  const handleClick = async (estado: number) => {
    setMotorState(() => !motorState);
    try {
      const { _version } = await mutations.updateStateMotorDynamoDB(
        estado,
        motorId,
        versionUser,
      );
      setVersionUser(_version);
      await mutations.updateStateMotorEsp32({
        microcontrollerId: '123',
        message: 'ok',
        isMotorRunning: estado,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="flex justify-end bg-cyan-400">
        {JSON.stringify(user)} {JSON.stringify(motorId)}
        {JSON.stringify(motorState)}
        {JSON.stringify(versionUser)}
        <Button onClick={signOut} className="bg-red-500 my-1.5 me-1.5">
          {' '}
          Sign out
        </Button>
      </div>
      <div className="flex justify-around items-center h-screen bg-cyan-400">
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
          <h1 className="mt-1 text-center text-3xl font-bold leading-9 tracking-tight text-gray-900">
            {' '}
            Empieza a controlar tu
          </h1>
          <h1 className="mt-1 text-center text-3xl font-bold leading-9 tracking-tight text-gray-900">
            {' '}
            RIGO
          </h1>
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
              className="mx-auto h-20 w-auto"
              src={gotita}
              alt="Your Company"
            />
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900"></h2>
          </div>
          <div className="">
            <div className="mb-12">
              <button
                disabled={motorState}
                onClick={() => handleClick(1)}
                type="submit"
                className={`flex w-80 justify-center
                  rounded-md px-3 py-1.5
                  text-sm font-semibold leading-6
                  text-white shadow-sm
                  ${motorState ? 'bg-indigo-300' : 'bg-indigo-600'}
                `}
              >
                Encender
              </button>
            </div>
            <div className="mb-12">
              <button
                disabled={!motorState}
                onClick={() => handleClick(0)}
                type="submit"
                className={`flex w-80 justify-center
                  rounded-md
                  px-3 py-1.5 text-sm font-semibold 
                  leading-6 text-white shadow-sm 
                  focus-visible:outline 
                  focus-visible:outline-2 focus-visible:outline-offset-2
                  focus-visible:outline-indigo-600
                  ${!motorState ? 'bg-indigo-300' : 'bg-indigo-600'}
                  `}
              >
                Apagar
              </button>
            </div>

            <p className="flex justify-center items-center">
              Estado de tu motor:
            </p>

            <div className="mb-12">
              <p className="text-gray-900 flex justify-center items-center text-3xl font-bold">
                APAGADO
              </p>
            </div>
            <div className="mb-12">
              <Link to="/grafica">
                <button
                  type="submit"
                  className="flex w-80 justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Ir Gráfica
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default withAuthenticator(Control);
