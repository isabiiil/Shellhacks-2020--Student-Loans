from flask import *
import requests



app = Flask(__name__)

customerId = '5f7080d8f1bac107157e1856'
apiKey = '69f11d6f3573cbce72b64f85821c1523'
loanId = "5f70818ff1bac107157e1858"
accountId = "5f708118f1bac107157e1857"

@app.route("/")
def method():
	return {"status":200}


@app.route("/userinfo", methods=["GET"])
def getuinfo():
	out = {}
	loanraw = requests.get(
		'http://api.reimaginebanking.com/loans/5f70818ff1bac107157e1858?key=69f11d6f3573cbce72b64f85821c1523')
	
	loanjson = json.loads(loanraw.text)
	out["loan_remaining"] = loanjson["amount"]
	out["monthly_payment"] = loanjson["monthly_payment"]

	return loanjson

@app.route("/loancalculate", methods=["POST"])
def calculate():
	print(request.get_json())

	return "it worked!"


@app.route("/debug")
def debug():
	r = requests.post(
		"http://localhost:5000/loancalculate",
		data=json.dumps({
			"hello":"world"
		}),
		headers={'content-type': 'application/json'}
	)
	print(r.text)
	return "a"

if __name__ == "__main__":
	app.run(debug=True)
