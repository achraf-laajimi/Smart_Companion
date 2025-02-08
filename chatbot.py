from flask import Flask, request, jsonify
from flask_cors import CORS
import google.generativeai as genai
from rapidfuzz import process  # Import fuzzy matching

app = Flask(__name__)
CORS(app)  

UR_GEMINI_API_KEY = "AIzaSyCqTpA_yFBxOAEuETe92yHvs5g1UVX0728"
genai.configure(api_key=UR_GEMINI_API_KEY)

model = genai.GenerativeModel('gemini-pro')
elements = {}  # Store section mappings

@app.route("/update-elements", methods=["POST"])
def update_elements():
    global elements
    data = request.json
    elements = {key.lower().strip(): value for key, value in data.get("elements", {}).items()}
    return jsonify({"status": "success", "elements": elements})

@app.route("/chatbot", methods=["POST"])
def chatbot():
    data = request.json
    user_message = data.get("message", "").strip().lower()

    try:
        # Ask Gemini which section the user is referring to
        prompt = f"""
        The user said: '{user_message}'. 
        Given these sections: {list(elements.keys())}, which section name best matches the user's intent?
        Respond with ONLY the most relevant section name, nothing else.
        """
        response = model.generate_content(prompt)
        gpt_response = response.text.strip().lower()

        # Use fuzzy matching to find the best section
        best_match, score, _ = process.extractOne(gpt_response, elements.keys(), score_cutoff=60)

        if best_match:
            return jsonify({
                "response": f"Go to {best_match}.",
                "elementId": elements[best_match]
            })

        return jsonify({
            "response": "I couldn't find the section you're looking for.",
            "elementId": None
        })

    except Exception as e:
        print("Error calling Gemini API:", e)
        return jsonify({"response": "Sorry, I can't find what you are looking for.", "elementId": None})

if __name__ == "__main__":
    app.run(debug=True)
