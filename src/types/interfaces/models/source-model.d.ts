import AnnotationsModel from './annotations-model';

export default interface SourceModel {
  measures: string[]
  annotations: AnnotationsModel
  name: string
  substitutions: any[]
}
