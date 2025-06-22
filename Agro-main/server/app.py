from flask import Flask,request,render_template
import numpy as np
import joblib

# importing model
model = joblib.load('model.jb')
sc = joblib.load('standscaler.jb')
ms = joblib.load('minmaxscaler.jb')

# creating flask app
app = Flask(__name__)

# @app.route('/')st
# def index():
#     return render_template("index.html")

@app.route("/",methods=['POST'])
def predict():
    data = request.json
    N = data['N']
    P = data['P']
    K = data['K']
    temp = data['temperature']
    humidity = data['humidity']
    ph = data['ph']
    rainfall = data['rainfall']

    feature_list = [N, P, K, temp, humidity, ph, rainfall]
    single_pred = np.array(feature_list).reshape(1, -1)
    d={}
    scaled_features = ms.transform(single_pred)
    final_features = sc.transform(scaled_features)
    prediction = model.predict(final_features)

    crop_dict = {1: "Rice", 2: "Maize", 3: "Jute", 4: "Cotton", 5: "Coconut", 6: "Papaya", 7: "Orange",
                 8: "Apple", 9: "Muskmelon", 10: "Watermelon", 11: "Grapes", 12: "Mango", 13: "Banana",
                 14: "Pomegranate", 15: "Lentil", 16: "Blackgram", 17: "Mungbean", 18: "Mothbeans",
                 19: "Pigeonpeas", 20: "Kidneybeans", 21: "Chickpea", 22: "Coffee"}

    if prediction[0] in crop_dict:
        crop = crop_dict[prediction[0]]
        result = "{} is the best crop to be cultivated right there".format(crop)
        d["crop"] = crop
    else:
        result = "Sorry, we could not determine the best crop to be cultivated with the provided data."
    
    d["res"] = result
    return d

# python main
if __name__ == "__main__":
    app.run(debug=True)