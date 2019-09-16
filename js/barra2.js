new Chart(document.getElementById("bar-chart"), {
    type: 'pie',
    data: {
      labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
      datasets: [
        {
          label: "Population (millions)",
          backgroundColor: ["purple", "red","#ffa3ef","green","orange"],
          data: [10,20,5,40,25]
        }
      ]
    },
    options: {
      legend: {display: true,
      position: 'left',
		fullWidth: true, 
		reverse: false,},
      title: {
        display: true,
        text: 'Predicted world population (millions) in 2050'
      },
    tooltip:{
    	pointFormat:'{point.percentage: .1f}%'
    }

    }
});