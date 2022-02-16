import axios from 'axios';
import { useQuery, UseQueryResult } from 'react-query';
import { API_URL } from '../config';
import ServerResponseModel from '../types/interfaces/models/server-response-model';

async function getPopulations(): Promise<ServerResponseModel> {
  const res = await axios.get(`${API_URL}data?drilldowns=State&measures=Population&year=2019`)
  return res.data
};

export default function usePopulations(): UseQueryResult<ServerResponseModel> {
  return useQuery('populations', getPopulations)
};
