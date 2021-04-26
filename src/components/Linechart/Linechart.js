import 'bootstrap/dist/css/bootstrap.min.css';
import { Line } from 'react-chartjs-2';
import './Linechart.css';

function Linechart() {
  return (
    <div>
      <Line
        data={{
          labels: ['Red', 'Blue','Yellow', 'Green', 'Voilet', 'Orange'],
          datasets: [
            {
              label: 'Dataset 1',
              data: [12, 9, 3, 18, 12, 23],
              borderColor: 'rgba(255, 99, 132, 0.5)',
              backgroundColor: 'rgba(255, 99, 132, 1)',
            },
            {
              label: 'Dataset 2',
              data: [22, 4, 13, 15, 12, 13],
              borderColor: 'rgba(54, 162, 235, 0.5)',
              backgroundColor: 'rgba(54, 162, 235, 1)',
            }
          ]
        }}
        height={300}
      />
    </div>
  );
}

export default Linechart;
