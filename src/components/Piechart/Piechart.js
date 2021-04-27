import 'bootstrap/dist/css/bootstrap.min.css';
import { Pie } from 'react-chartjs-2';
import './Piechart.css';

function Piechart() {

  var delayed

  return (
    <div>
      <Pie
        className="bg-light"
        data={{
          labels: ['Red', 'Blue', 'Yellow', 'Green', 'Voilet', 'Orange'],
          datasets: [
            {
              label: 'Dataset 1',
              data: [12, 19, 3, 5, 2, 3],
              backgroundColor: [
                'rgba(255, 99, 132, 0.4)',
                'rgba(54, 162, 235, 0.4)',
                'rgba(255, 206, 86, 0.4)',
                'rgba(75, 192, 192, 0.4)',
                'rgba(153, 102, 255, 0.4)',
                'rgba(255, 159, 64, 0.4)'
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 0.3
            }
          ]
        }}
        height={250}
        width={250}
        options={{
          animation: {
            onComplete: () => {
              delayed = true;
            },
            delay: (context) => {
              let delay = 0;
              if (context.type === 'data' && context.mode === 'default' && !delayed) {
                delay = context.dataIndex * 500 + context.datasetIndex * 500;
              }
              return delay;
            },
          },
        }}
      />
    </div>
  );
}

export default Piechart;
