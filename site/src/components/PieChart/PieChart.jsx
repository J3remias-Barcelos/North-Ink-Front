import React from 'react';
import GoogleChart from 'react-google-charts';

const options = {
  title: 'Tendências de Estilos na North Ink.',
  slices: [
    { color: '#3D0867', label: 'Mangá', value: 30 },
    { color: '#BC77FE', label: 'Anime', value: 80 },
    { color: '#9326F6', label: 'Realismo', value: 20 },
  ],
  titleTextStyle: {
    fontSize: 18, 
    color: '#3C3C3C'
  },
};

const PieChart = () => (
  <GoogleChart
    chartType="PieChart"
    data={[['Rótulo', 'Valor'], ...options.slices.map(slice => [slice.label, slice.value])]}
    options={options}
    width="500px"
    height="300px"
  />
);

export default PieChart;
