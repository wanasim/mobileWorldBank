import React, { Component } from 'react'; 
import { WebView,AppRegistry } from 'react-native'; 

export default class BarChart extends Component { 

  constructor(props){
    super(props);
    this.state=({
      data: [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]
    })
  }

  render() { 

   let htmlTest = `
             

<html >

<body>

    <canvas id="myChart"></canvas>
  </div>
</div>
  <script src='https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.2.2/Chart.min.js'></script>

    <script  type="text/javascript">
      
var ctx = document.getElementById('myChart').getContext('2d');
 Chart.defaults.global.legend.display = false;
var myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: [2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016],
    datasets: [{

    data:  [${this.props.data}],
      backgroundColor: "#FB5260"
    }]
  },

});

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



