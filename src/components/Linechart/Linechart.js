import 'bootstrap/dist/css/bootstrap.min.css';
import { Line } from 'react-chartjs-2';
import './Linechart.css';

function Linechart() {

  var delayed

  return (
    <div>
      <Line className="bg-light"
        className="bg-light"
        data={{
          labels: ['May', 'June', 'July', 'August', 'Sept', 'October'],
          datasets: [
            {
              label: 'Data Used',
              data: [2, 3.4, 4, 5, 7.5, 6],
              borderColor: 'rgba(255, 99, 132, 0.5)',
              backgroundColor: 'rgba(255, 99, 132, 1)',
            },
            // {
            //   label: 'Dataset 2',
            //   data: [22, 4, 13, 15, 12, 13],
            //   borderColor: 'rgba(54, 162, 235, 0.5)',
            //   backgroundColor: 'rgba(54, 162, 235, 1)',
            // }
          ]
        }}
        height={300}
        options={{
          maintainAspectRatio: false,
          reaponsive: true,
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
          scales: {
            y: {
              beginAtZero: true,
            },
            x: {
              grid: {
                display: false
              }
            },

          }
        }}
      />
    </div>
  );
}

export default Linechart;
