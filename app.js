var data = [{
    values: [4.6, 1.725, 1.725, 1.15, 1.15, 0.46, 0.345, 0.23, 0.115 ],
    labels: ['Canada', 'USA', 'New Zealand', 'UK', 'Germany', 'France', 'India','China', 'Mozambique'],
    type: 'pie'
  }];
  
  var layout = {
    height: 400,
    width: 500
  };
  
  Plotly.newPlot('app', data, layout);