# Toronto Crime Analysis 

<html lang="en">

<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
</head>

<body class="">

  <div class="wrapper">
 
<h2>Predicting Trends</h2>
<img id="reportimg" width="900" height="515" src="images/fig1_predictions_chart.png" alt="Predicting Reported Crimes Trend">    
<HR WIDTH="100%">   
<p id="reporttext" style="font-size:160%;">The purpose of this project is to analyze the reported crime trends in Toronto.  The dataset is extracted from the Toronto Police Services website; from 2014 to 2020.
We look at daily reported crimes to see if there are any trends in the number of reported crimes.  We decided to use Facebook Prophet to see if we can predict what these trends could be.
            
First we extracted the dataset as a csv than used PySpark to cleanse the data.  Data cleansing include converting the dates column to datatime format; dropping duplicate records; than grouping and counting
the daily reported crimes to create a unique record to get columns "ds" and "y" to run Facebook Prophet. Next, we converted the PySpark data to a Pandas Dataframe and checked for missing values.  
The data is than model and the following table is generated showing the future values that will be charted.
</p>
</div>

<HR WIDTH="100%">

<div id="reportcontainer">       
<img id="reportimg" width="900" height="515" src="images/prediction_values_table.png" alt="Predictions Values Table">
<HR WIDTH="100%">          
<p id="reporttext" style="font-size:160%;"> From fig1. Predictions of Reported Crimes, the light blue depicted by (yhat_lower and yhat_upper) show the uncertainty range of the data while the dark blue (yhat) is the prediction range.  
    With a few expected outliers and its lower and upper bounds we see the predicted data is close to the actual data with an upward trend.  This suggest the model should be relatively 
    accuarte pushing the predictions out to future years (2021 and 2022).  
</p>
</div>

<HR WIDTH="100%">

<div id="reportcontainer"> 
<div class="header"> 
<h2>Seasonality Components</h2>
</div>     
<img id="reportimg" width="900" height="515" src="images/fig2_components_charts.png" alt="Seasonality Components Charts">
<HR WIDTH="100%"> 
<p id="reporttext" style="font-size:160%;"> Fig2. show the different seasonality components to the daily reported crimes. The first plot further prove the upward trend of the prediction.  Here we see a change in the data in 2017
from relatively flat to an increasing trend.  The next plot show daily reported crimes throughout the week.  Interestingly, the plot show there are more reported crimes on Mondays and Fridays;
and less on weekends and relatively flat during mid week. The last plot show the seasonality during the year.  Here we see an increasing trend from January to around October with a few valleys
around February, September, and October; but peak around November.  Interestingly, there are less reported crimes in the winter months compared to summer months.
</p>           
</div>

<HR WIDTH="100%">



<div id="reportcontainer">  
<div class="header"> 
<h2>Data Changepoints</h2>
</div>  

<img id="reportimg" width="900" height="515" src="images/fig3_changepoints_chart.png" alt="Changepoint Chart">
<HR WIDTH="100%">
<p id="reporttext" style="font-size:160%;"> Data changepoints is a function in Prophet that is used to indicate where the actual data changes direction from a flatter to an increasing/decreasing range.  
In fig3. the dotted verticle lines show wheere the flat range of reported crimes from 2014 to 2017 begin to increase at around mid 2017; and the solid red line show a flat to upward trend.
</p>             
</div>

<HR WIDTH="100%">



<div id="reportcontainer"> 
<div class="header"> 
<h2>Comparing Trends</h2>
</div>     
<img id="reportimg" width="900" height="515" src="images/fig4_actual_vs_predictions_chart.png" alt="Actual vs Predictions">
<HR WIDTH="100%"> 
<p id="reporttext" style="font-size:160%;"> Lastly, we want to visualize the actual vs the predicted data and see if the model is a good fit.  Fig4. show the comparison between the yearly actuals to yearly predictions.  
The chart shows the predictions orange lines are within the actual blue lines and is in an upward trend after 2017.  This model appear to be a good fit of the data.
</p>            
</div>

</div>



</div>



</body>

</html>
