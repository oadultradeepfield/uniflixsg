from database.migrate import migrate_data_to_db
from flask import Flask, jsonify, request
from routes.program import get_program_recommendations

app = Flask(__name__)
migrate_data_to_db()


@app.route("/api/recommend", methods=["POST"])
def recommend_program():
    data = request.get_json()
    personal_interest = data.get("personal_interest", "")
    career_prospect = data.get("career_prospect", "")

    if not personal_interest or not career_prospect:
        return jsonify({"error": "Both fields are required"}), 400

    recommendations = get_program_recommendations(personal_interest, career_prospect)
    return jsonify(recommendations)


if __name__ == "__main__":
    app.run(debug=True)
