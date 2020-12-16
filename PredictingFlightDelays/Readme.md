# Predicting Flight Delays

Flight delays create problems in scheduling for airlines and airports, leading to passenger inconvenience, and huge economic losses. 
As a result there is growing interest in predicting flight delays beforehand in order to optimize operations and improve customer satisfaction. 
In this project, we predict flight delay/no delay, where a delay is defined as 15-minute delay (or greater) with respect to the scheduled time of departure. 
This prediction is to be done two hours ahead of departure (thereby giving airlines and airports time to regroup and passengers a heads up on a delay). The data
set for this project come in the form of two tables:

* Flights table: This is a subset of the passenger flight's on-time performance data from 2015 to 2019, taken from the TranStats data collection available 
from the U.S. Department of Transportation (DOT)
* Weather table: A weather table  has been pre-downloaded from the National Oceanic and Atmospheric Administration repository  to S3 in the form of  parquet files

The project will be using Spark in Databricks.

The full html report of the project can be found in the attached html file. The ipynb file is the source for the report. Some of the graphs will show as tables as if viewed outside of databricks as they use the visualization embedded in databricks.
