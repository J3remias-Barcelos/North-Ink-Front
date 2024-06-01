import React from 'react';
import GoogleChart from 'react-google-charts';

const options = {
  title: 'Total de Cliques - Pórtifolio.',
  series: {
    0: { color: '#9326F6' }, 
  },
    titleTextStyle: {
    fontSize: 18, 
    color: '#3C3C3C'
  },
};

const data = [
  ['Mês', 'Cliques no seu Pórtifolio'],
  ['Jan', 2000,],
  ['Fev', 4000,],
  ['Mar', 6000,],
  ['Abr', 8000,],
  ['Mai', 9000, ],
  ['Jun', 10000,],
  ['Jul', 12000,],
  ['Ago', 13000,],
  ['Set',14000,],
  ['Out', 15000, ],
  ['Nov', 15500,],
  ['Dez', 20000,],
];

const LineChart = () => (
  <GoogleChart
    chartType="LineChart" // Altera o tipo de gráfico para Linha
    data={data}
    options={options}
    width="1100px"
    height="400px"
  />
);

export default LineChart;
