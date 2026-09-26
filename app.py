from flask import Flask, render_template
import os

app = Flask(__name__)

BETTING_HOUSES = [
    {"name": "Bora1Bet", "url": "https://bora1bet.vip/register?code=TVSXVQIP1O"},
    {"name": "Betano", "url": "https://acesso-vip.site/brpix/?ref=XZUQWEZJ"},
    
]

@app.route("/")
def home():
    return render_template("index.html", betting_houses=BETTING_HOUSES)

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 10000))
    app.run(host="0.0.0.0", port=port)
