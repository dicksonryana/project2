#### Project Working Title: <br/>
## Guns, Germs, Netflix and Chill <br/>
### Group Members: <br/>
##### __Ryan Dickson__ <br/>
##### __Devin Milligan__ <br/>
##### __Philip Morlier__ <br/>
##### __Kelly Priest__ <br/>

## Our Objective
<br/>
        Our Objective for this project is to view the mindset of united states citizens before and <br/>
    during the rise of the Covid-19 Pandemic. To do this we have scraped google-trends and tweets <br/>
    to display relevant information. On our landing page will be a quick Overview of our project <br/>
    and an explanation of the statistical analysis we performed. There will be several buttons <br/>
    on page that will lead you to another page on our site. There will be three Tweet buttons <br/>
    that will lead you to a collection of the top tweets that have to do with the CDC, Guns, and <br/>
    Netflix. 
    <br/>
    <br/>
        We will have another three buttons named for categories of popular google search terms. <br/>
    When you press these buttons it will lead you to another page with plotly graphs. Depending <br/>
    on what you chose there will be a drop down with sub categories that will update our two <br/>
    graphs on page. The first graph will represent a three month period in 2019 and the second <br/>
    will represent the same three month period in 2020 during the peak of the Covid-19 pandemic <br/>
    The tweets will call from out API we made from an Sqlite database, while the google trends <br/>
    graph will be calling info from a Csv <br/>
    <br/>
    <br/>
        Our information is static but if you would like updated information you should follow <br/>
    our instructions listed below.<br/>
    <br/>

## Updated Information Instructions
1. Install dependencies via Requirements.txt file
2. run our google scraper in a python notebook (gunsgermscheel_v2.ipynb)
3. run our tweet scraper in the scraper folder with a python notebook (twitter_scraper.ipynb)
4. run the creatingDB.ipynb Python Notebook in the Database_stuff folder
5. run our Flask Api server by going to the Api directory in terminal by using "Flask_APP=app_mod.py flask run"
6. run a python server in the layoutit/src directory with "python -m http.server"
7. open our index.html in layoutit/src
8. you should have updated information