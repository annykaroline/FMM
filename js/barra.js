let chart = new frappe.Chart( "#chart", { // or DOM element
    data: {
      labels: ["Alimentação", "Médico", "Infraestrutura", "Pagamentos",
      "Luz", "Água", "Energia"],

      datasets: [
        {
          name: "Valores", chartType: 'pie',
          values: [10,20,5,15,25,15,10]
        }
      ],

      yMarkers: [{ label: "Marker", value: 70,
        options: { labelPos: 'left' }}],
      yRegions: [{ label: "Region", start: -10, end: 50,
        options: { labelPos: 'right' }}]

    

    },

    type: 'pie', // or 'bar', 'line', 'pie', 'percentage'
    height: 500,
    colors: ['purple', '#ffa3ef', 'light-blue',"black", "orange", "red", "green"],

    tooltipOptions: {
      formatTooltipX: d => (d + '').toUpperCase(),
      formatTooltipY: d => d + ' pts',
    }
  });