<template>
 <body>

    <div class="header-2">
        <div id="menu-bar" class="fas fa-bars"></div>
        <nav class="navbar">
            <a href="/">Return Back to Homepage</a>
        </nav>
    </div>
    <div class="ty">
        <h1>Seller Information (User: Admin)</h1>
        <h5>Recent Order</h5>


        <table border="1">
            <tbody>
                <tr>
                    <td> 21,233 out of 23,468 sales completed </td>
                </tr>
                <tr>
                    <td>$1,525,420.00 total revenue</td>
                </tr>
            </tbody>
        </table>
    </div>


    <div id="msg">
        <pre></pre>
    </div>


    <div class="graphy">
        <svg width="1500" height="750"></svg>
        

    </div>

    <div class="hey">
        <h3 style="text-align: center;">Units Sold</h3>
        <table>
            <tr>
                <th> Year #</th>
                <th>Shirts Sold </th>
                <th>Sweaters Sold</th>
                <th> Pants Sold</th>
            </tr>
            <tr>
                <th>Year 1</th>
                <td>75.0</td>
                <td>80.0</td>
                <td>45.0</td>

            </tr>
            <tr>
                <th>Year 2 </th>
                <td>160.0</td>
                <td>40.0</td>
                <td>250.0</td>

            </tr>
            <tr>
                <th>Year 3</th>
                <td>342.0</td>
                <td>72.0</td>
                <td>136.0</td>

            </tr>
            <tr>
                <th>Year 4</th>
                <td>224.0</td>
                <td>456.0</td>
                <td>220.0</td>

            </tr>
            <tr>
                <th>Year 5</th>
                <td>648.0</td>
                <td>1517.0</td>
                <td>135.0</td>

            </tr>
            <tr>
                <th>Year 6 </th>
                <td>1303.0</td>
                <td>347.0</td>
                <td>1350.0</td>

            </tr>
            <tr>
                <th>Year 7 </th>
                <td>1078.0</td>
                <td>642.0</td>
                <td>780.0</td>

            </tr>
            <tr>
                <th>Year 8</th>
                <td>1690.0</td>
                <td>1253.0</td>
                <td>390.0</td>

            </tr>
            <tr>
                <th>Year 9</th>
                <td>536.0</td>
                <td>1659.0</td>
                <td>1305.0</td>
            </tr>

            <tr>
                <th>Year 10</th>
                <td>2312.0</td>
                <td>1354.0</td>
                <td>834.0</td>

            </tr>
        </table>

    </div>





</body>


  

  
</template>
<script>
import * as d3 from "d3";


export default {
  name: 'AdminPageView',
  components:{
 
    
  },
  mounted(){
    
        var rev = [
            [0, 0], [1, 200], [2, 450], [3, 550], [4, 900], [5, 2300], [6, 3000], [7, 2500], [8, 3333], [9, 3500], [10, 4500]
        ];

        var svg = d3.select("svg"),
            margin = 200,
            width = svg.attr("width") - margin,
            height = svg.attr("height") - margin


        var xAxis = d3.scaleLinear().domain([0, 10]).range([0, width]),
            yAxis = d3.scaleLinear().domain([0, 5000]).range([height, 0]);



        var g = svg.append("g")
            .attr("transform", "translate(" + 100 + "," + 100 + ")");


        svg.append('text')
            .attr('x', width / 2 + 100)
            .attr('y', 80)
            .text('Sales from 2011-2021')
            .style('font-family', 'Franklin Gothic Medium')
            .style('font-size', 15)
            .attr('text-anchor', 'middle');

        svg.append('text')
            .attr('x', width / 2 + 100)
            .attr('y', height - 15 + 170)
            .text('Years')
            .style('font-family', 'Franklin Gothic Medium')
            .style('font-size', 14)
            .attr('text-anchor', 'middle');

        svg.append('text')
            .attr('text-anchor', 'middle')
            .attr('transform', 'translate(60,' + (height - 40) + ') rotate(-90)')
            .attr("y", -30)
            .text('Units Sold')
            .style('font-family', 'Franklin Gothic Medium')
            .style('font-size', 14);



        g.append("g")
            .attr("transform", "translate(0," + height + ")")
            .call(d3.axisBottom(xAxis));

        g.append("g")
            .call(d3.axisLeft(yAxis));


        var l = d3.line()
            .x(function (d) { return xAxis(d[0]); })
            .y(function (d) { return yAxis(d[1]); })
            .curve(d3.curveMonotoneX)

        svg.append("path")
            .datum(rev)
            .attr("class", "line")
            .attr("transform", "translate(" + 100 + "," + 100 + ")")
            .attr("d", l)
            .style("fill", "none")
            .style("stroke", "#000000")
            .style("stroke-width", "2");




   

  }
}
 </script>



<style scoped src="../assets/styles/checkout.css" >

</style>
