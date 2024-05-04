          // setup 
          const data = {
            labels: ['Hospedagem', 'Divulgação', 'Modificações', 'Doações', 'Anúncios'],
            datasets: [{
              label: 'R$',
              data: [80, 31.50, 100, null, null],
              backgroundColor: [
                'rgba(255, 26, 104, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(75, 224, 224, 0.2)',
              ],
              borderColor: [
                'rgba(255, 26, 104, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(75, 224, 224, 1)',
              ],
              borderWidth: 3
            },
            {
              label: 'R$',
              data: [null, null, null, 40, null],
              backgroundColor: [
                null,
                null,
                null,
                'rgba(75, 192, 192, 0.2)',
                'rgba(75, 224, 224, 0.2)',
              ],
              borderColor: [
                null,
                null,
                null,
                'rgba(75, 192, 192, 1)',
                'rgba(75, 224, 224, 1)',
              ],
              borderWidth: 3
            }]
          };
      
          // config 
          const config = {
            type: 'doughnut',
            data,
            tooltips: {
                intersect: false
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        labels: {
                            color:"#ffffff"
                        },
                        position: "bottom",
                        color: '#ffffff'
                    }
                }
            }
          };
      
          // render init block
          const myChart = new Chart(
            document.getElementById('myChart'),
            config
          );