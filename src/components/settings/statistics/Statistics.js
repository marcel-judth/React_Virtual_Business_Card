import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { getScans } from '../../../api';
import Loading from '../../shared/Loading';
import Chart from 'react-google-charts';

const Statistics = (props) => {
  const [loading, setLoading] = useState(true);
  const [values, setValues] = useState([]);
  const days = ['Mo', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  var daysSorted = [];

  for (var i = 7; i >= 0; i--) {
    var newDate = new Date(new Date().setDate(new Date().getDate() - i));
    daysSorted.push(days[newDate.getDay()]);
  }

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
          <Chart
            width={'90vw'}
            height={'50vh'}
            chartType='AreaChart'
            loader={<div>Loading Chart</div>}
            data={[
              ['x', 'scans'],
              [daysSorted[0], values[0]],
              [daysSorted[1], values[1]],
              [daysSorted[2], values[2]],
              [daysSorted[3], values[3]],
              [daysSorted[4], values[4]],
              [daysSorted[5], values[5]],
              [daysSorted[6], values[6]],
            ]}
            options={{
              hAxis: {
                title: 'Days',
              },
              vAxis: {
                title: 'Scans',
                minValue: 0,
                format: '0',
              },
            }}
            rootProps={{ 'data-testid': '1' }}
          />
        </StatisticsWrapper>
      )}
    </>
  );
};

const StatisticsWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default Statistics;
