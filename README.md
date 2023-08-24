

React Router Stock App
========== DONE: Spin a new react up using create-react-app

========== DONE: Look over the working Solution and examine the app in React Dev Tools to see if you can elicit the structure so that you have a starting point for you app.

This version of the application should use hard-coded stocks data, which you can find in create a data.json file with the data below to use. however if you want to leverage pulling data from an API you can sign up for an API key and use https://financialmodelingprep.com/

Below contains sample data that you will place into a data.jsfile within your srcfolder. Copy and paste the code below as is.

Here is your routing table. So when your app is complete it should have all the routes below.

Route	Renders	Component
/	"This is the Homepage page"	Home
/about	"This is theAabout page"	About
/stocks/:symbol	A single stock	Stock
/stocks	All stocks	Dashboard
Your stock tracking app should have the following features...

Navigation
No matter what route the user is visiting, they should always see a navigation bar at the top of the window. It should contain links to "Home" and "About" pages.

Dashboard (/stocks)
If a user visits /stocksor clicks "Home" in the navigation bar, they should be directed to a dashboard page. This page should list all of the stocks that the user is tracking, specifically their nameand symbol. These stocks should be pulled from stock-data.js.

Bonus: Try rendering the stocks as per the image below.

Stock (/stocks/:symbol)
If a user clicks on one of the stocks listed in the Dashboard view, they should be directed to an individual stock show view. This view should display all of a stock's attributes.

The resources listed at the bottom of the readme might come in handy when building this out.

About (/about)
If a user clicks on "About" in the navigation bar, they should be directed to an about page. This is just a static page that displays a description of your app.