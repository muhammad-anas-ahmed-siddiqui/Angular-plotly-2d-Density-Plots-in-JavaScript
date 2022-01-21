import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-density-graph',
  templateUrl: './density-graph.component.html',
  styleUrls: ['./density-graph.component.css']
})
export class DensityGraphComponent implements OnInit {

  data: any = [];
  layout = {};

  constructor() { }

  ngOnInit(): void {
    function normal() {
      let x = 0,
      y = 0,
      rds, c;
      do {
        x = Math.random() * 2 - 1;
        y = Math.random() * 2 - 1;
        rds = x * x + y * y;
      } while (rds == 0 || rds > 1);
      c = Math.sqrt(-2 * Math.log(rds) / rds); // Box-Muller transform
      return x * c; // throw away extra sample y * c
    }

    const N = 2000,
    a = -1,
    b = 1.2;

    const step = (b - a) / (N - 1);
    const t = new Array(N), x = new Array(N), y = new Array(N);

    for(let i = 0; i < N; i++){
      t[i] = a + step * i;
      x[i] = (Math.pow(t[i], 3)) + (0.3 * normal() );
      y[i] = (Math.pow(t[i], 6)) + (0.3 * normal() );
    }


    const trace1 = {
      x: x,
      y: y,
      mode: 'markers',
      name: 'points',
      marker: {
        color: 'gray',
        size: 5,
        opacity: 0.4
      },
      type: 'bubble'
    };

    const trace2 = {
      x: x,
      y: y,
      name: 'density',
      ncontours: 20,
      colorscale: 'Hot',
      reversescale: true,
      showscale: true,
      type: 'histogram2dcontour'
    };

    const trace3 = {
      x: x,
      name: 'x density',
      marker: {color: 'gray'},
      yaxis: 'y2',
      type: 'histogram'
    };

    const trace4 = {
      y: y,
      name: 'y density',
      marker: {color: 'gray'},
      xaxis: 'x2',
      type: 'histogram'
    };

    this.data = [trace1, trace2, trace3, trace4];
    this.layout = {
      showlegend: false,
      autosize: false,
      width: 1500,
      height: 750,
      margin: {t: 50},
      hovermode: 'closest',
      bargap: 0,
      xaxis: {
        domain: [0, 0.85],
        showgrid: false,
        zeroline: false
      },
      yaxis: {
        domain: [0, 0.85],
        showgrid: false,
        zeroline: false
      },
      xaxis2: {
        domain: [0.85, 1],
        showgrid: false,
        zeroline: false
      },
      yaxis2: {
        domain: [0.85, 1],
        showgrid: false,
        zeroline: false
      }
    };
  }
}
