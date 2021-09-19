import styled from 'styled-components';
import { Line } from 'react-chartjs-2';
import { useEffect, useState } from 'react';
import { getScans } from '../../../api';
import Loading from '../../shared/Loading';

const Statistics = (props) => {
  const [loading, setLoading] = useState(true);
  const [values, setValues] = useState([]);
  const days = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ];

  var today = new Date();
  var daysSorted = [];

  for (var i = 7; i >= 0; i--) {
    var newDate = new Date(today.setDate(today.getDate() - 1));
    daysSorted.push(days[newDate.getDay()]);
  }

  const data = {
    labels: daysSorted,
    datasets: [
      {
        label: '# of scans (last 7 days)',
        data: values,
        fill: false,
        backgroundColor: 'rgb(108, 150, 204)',
        borderColor: 'rgba(108, 150, 204, 0.2)',
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  useEffect(() => {
    getScans(setLoading, setValues);
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <StatisticsWrapper>
          <h2>Statistics</h2>
          <br />
          <Line data={data} options={options} />
        </StatisticsWrapper>
      )}
    </>
  );
};

const StatisticsWrapper = styled.div`
  padding: 15vh 10vw;
`;

export default Statistics;
