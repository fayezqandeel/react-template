import PopulationModel from './population-model';
import SourceModel from './source-model';

export default interface ServerResponseModel {
  data: PopulationModel[]
  source: SourceModel[]
}
