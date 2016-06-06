from flask import Flask , render_template , request

app = Flask(__name__)
@app.route("/") ##for rendering html  ##decorators, used to create or modify function 
def main():
    return render_template("index.html")#,author=author, name= name#) ##pass parmeters that will be used   

@app.route("/liveFeed")
def sumbit():
    return render_template("liveFeed.html")
   
@app.route("/map")
def gotomap():
    return render_template("map.html")

   
@app.route("/about")
def gotoabout():
    return render_template("about.html")

if __name__=="__main__":
    app.run()





    ##can send email using messages using mandril api
    ### from to 
    