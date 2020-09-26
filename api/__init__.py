from flask import *



app = Flask(__name__)


@app.route("/")
def method():
	return {"status":200}

if __name__ == "__main__":
	app.run(debug=True)
