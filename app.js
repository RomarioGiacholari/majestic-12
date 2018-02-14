var data = [{
    values: [19, 26, 55,5,6,8,4,4],
    labels: ['Canada', 'USA', 'New Zealand', 'UK', 'Germany', 'France', 'India','China', 'Mozambique'],
    type: 'pie'
  }];
  
  var layout = {
    height: 400,
    width: 500
  };
  
  Plotly.newPlot('app', data, layout);