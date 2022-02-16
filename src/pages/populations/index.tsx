import { UseQueryResult } from 'react-query';
import ServerResponseModel from '../../types/interfaces/models/server-response-model';
import StateCard from '../../components/state-card';
import usePopulations from '../../hooks/usePopulations';

const Populations = (): JSX.Element => {
  const { data, isFetching }: UseQueryResult<ServerResponseModel> = usePopulations();

  const renderStateCards = (): JSX.Element | JSX.Element[] | undefined => {
    if (!isFetching){
      return data?.data.map(item => <StateCard {...item} />)
    }
    return <div>Loading....</div>
  };

  return (
    <div id="populations-page" className="flex flex-col min-h-screen py-40px px-47px">
      <h1 className="text-title font-bold text-title-size">Population der Staaten</h1>
      <div id="populations-list" className="grow mt-94px">
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-5 gap-40px">
          {renderStateCards()}
        </div>
      </div>
    </div>
  );
}

export default Populations;