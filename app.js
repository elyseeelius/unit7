const closeButton = document.getElementById('closeButton')
const alert = document.getElementById('alert')

// event listener for the Notification
const icon = document.querySelector('.vertivalbar')
const notification = document.querySelector('.notification')
icon.addEventListener('click',function(){
    notification.style.display = 'block';
})
//  when click on close delete the notification message
// const close_btn = document.getElementsByClassName('close')
// for (let i = 0; i < close_btn.length; i++) {
//     const close = close_btn[i];
//     close.addEventListener('click', function(e){
//         if(e.className == 'close'){
//         console.log(e.target.parentNode.parentNode.parentNode);
//         }
//     })
    
// }




















closeButton.addEventListener('click', function(){
 console.log('you have it')
 alert.style.display = 'none'

})
 //Hourly Traffic data set
 var hourlyTrafficData = {
    labels: ['16-22','23-29','30-5','6-12','13-19','20-26','27-3','4-10','11-17','18-24','25-31'],
    datasets: [
        {
            data: [1500,1750,1250,1750,2000,1750,2250,750,1250,1000,1500,2000],
            backgroundColor: 'rgba(255,255,255,0.1)',
            lineTension: 0,
            borderColor:'#f60',
            pointRadius: 5,
            pointBorderWidth: 3,
            pointBackgroundColor: '#f60'
        }     
    ]
};

  //Daily Traffic data set
  var todayTrafficData = {
    labels: ['16-22','23-29','30-5','6-12','13-19','20-26','27-3','4-10','11-17','18-24','25-31'],
    datasets: [
        {
            data: [1750,1250,1500,1750,2250,750,1250,1500,2000,1000,1750,2000],
            backgroundColor: 'rgba(255,255,255,0.1)',
            lineTension: 0,
            borderColor:'#f60',
            pointRadius: 5,
            pointBorderWidth: 3,
            pointBackgroundColor: '#f60'
        }     
    ]
  };
var weeklyTrafficData = {
    labels: ['16-22','23-29','30-5','6-12','13-19','20-26','27-3','4-10','11-17','18-24','25-31'],
    datasets: [
        {
            data: [750,1250,500,1500,2010,1550,1750,1250,1750,2300,1750,2250],
            backgroundColor: 'rgba(255,255,255,0.1)',
            lineTension: 0,
            borderColor:'#f60',
            pointRadius: 5,
            pointBorderWidth: 3,
            pointBackgroundColor: '#f60'
        }     
    ]
};
  //Monthly Traffic data set
  var monthlyTrafficData = {
    labels: ['16-22','23-29','30-5','6-12','13-19','20-26','27-3','4-10','11-17','18-24','25-31'],
    datasets: [
        {
            data: [1750,1250,1750,1500,2000,1000,1750,2250,750,1500,1250,1000],
            backgroundColor: 'rgba(255,255,255,0.1)',
            lineTension: 0,
            borderColor:'#f60',
            pointRadius: 5,
            pointBorderWidth: 3,
            pointBackgroundColor: '#f60'
        }     
    ]
  };

var traffic = document.getElementById("myGraph").getContext("2d");
var trafficChart = new Chart(traffic, {
    type: 'line',
    data: weeklyTrafficData,
    animation: {
        animateScale: true
    },
    options: {
        legend: {
            display: false
        },
        scales: {
            yAxes: [{
                ticks: {
                    max: 2500,
                    min: 300,
                    stepSize: 100
                },
                gridLines: {
                    drawTicks: false,
                    color: '#cdcdcd'
                }
            }],
            xAxes: [{
                gridLines: {
                    drawTicks: false,
                    color: '#cdcdcd'
                }
            }]
        }
    }
});

     $("#button-hourly").click(function() {
         trafficChart.config.data = hourlyTrafficData;
         trafficChart.update();
     });
     
     $("#button-weekly").click(function() {
         trafficChart.config.data = weeklyTrafficData;
         trafficChart.update();
     });
     
     $("#button-daily").click(function() {
         trafficChart.config.data = todayTrafficData;
         trafficChart.update();
     });
     
     $("#button-monthly").click(function() {
         trafficChart.config.data = monthlyTrafficData;
         trafficChart.update();
     });
 

// =================================== BAR ======================================= 
var ctx = document.getElementById('bar').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['S', 'M', 'T', 'W', 'T', 'F','S'],
        datasets: [{
            label:'',
            data: [12, 19, 3, 5, 11, 17, 7],
            backgroundColor: [
                '#7170C6',
                '#7170C6',
                '#7170C6',
                '#7170C6',
                '#7170C6',
                '#7170C6',
                '#7170C6',
                
            ],
            borderWidth: 2,
            cornerRadius: 4,
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});
// =================================== DOUGNUT ======================================= 
var ctx = document.getElementById('doughnut').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['Phones', 'Tablets', 'Dekstop'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3],
            backgroundColor: [
                '#ff6600',
                '#7170C6',
                'green',
                
            ],
            borderColor: [
                // 'rgba(255, 99, 132, 1)',
               
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});
const send = document.querySelector('.send')
const userFilter =document.getElementById('userFilter');
const userMessage =document.getElementById('userMessage');

// validation for the form

send.addEventListener('click', (e) => {
    e.preventDefault();    
   //  ensure user and message fields are filled out
    if (userFilter.value === "" && userMessage.value === "") {
    window.alert("Please fill out user and message fields before sending");
    } else if (userFilter.value === "" ) {
    window.alert("Please fill out user field before sending");
    } else if (userMessage.value === "" ) {
    window.alert("Please fill out message field before sending");
    } else {
    window.alert(`Message successfully sent to: ${userFilter.value}`);
    }
    });
    