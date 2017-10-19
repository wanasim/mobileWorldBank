import React, { Component } from 'react'; 
import { WebView,AppRegistry } from 'react-native'; 

export default class DoghnutChart extends Component { 


  render() { 

   let htmlTest = `
             

<html >

<body>
  <div class="container">

  <div>
    <canvas id="myChart" ></canvas>
  </div>
</div>
  <script src='https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.2.2/Chart.min.js'></script>

    <script type="text/javascript">
      
          var ctx = document.getElementById("myChart").getContext('2d');
          Chart.defaults.global.legend.display = false;
var myChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: [2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016],
    datasets: [{
      backgroundColor: [
        "#2ecc71",
        "#3498db",
        "#95a5a6",
        "#9b59b6",
        "#f1c40f",'#2f7ed8', '#0d233a', '#8bbc21', '#910000', '#1aadce', 
    '#492970', '#f28f43', '#77a1e5', '#c42525', '#a6c96a'

      ],
     data:  [${this.props.data}]

    }]
  }
});

var dynamicColors = function() {
    var r = Math.floor(Math.random() * 255);
    var g = Math.floor(Math.random() * 255);
    var b = Math.floor(Math.random() * 255);
    return "rgb(" + r + "," + g + "," + b + ")";
}

    </script>

</body>
</html>

  `
 console.log(htmlTest);
    return ( 
      <WebView 
      source={{html: htmlTest}} 
      style={{marginTop: 40, height:220, backgroundColor:'transparent'}} /> ); 
  } 
}



