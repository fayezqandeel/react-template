import PopulationModel from '../../types/interfaces/models/population-model';

const StateCard = ({ State, Population, Year }: PopulationModel): JSX.Element => {

  // convert number to short numbers with abbreviations
  const numberFormat = (num: number) => {
    let index = 0;
    for (index; num >= 1000; index++) {
      num /= 1000;
    }
    return num.toFixed(2) + ['', ' k', ' M', ' B'][index];
  }

  return (
    <div className="state-card px-20px py-25px p-4 bg-white shadow-lg rounded-lg">
      <div className="state pb-8px border-b border-black font-bold">
        {State}
      </div>
      <div className="population py-16px border-b border-black font-bold text-custom-200">
        Population: {numberFormat(Population)}
      </div>
      <div className="year pt-8px font-bold text-custom-200">
        Jahr: {Year}
      </div>
    </div>
  );
}

export default StateCard;