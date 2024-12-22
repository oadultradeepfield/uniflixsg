from flask import Flask, jsonify, request

from database.migrate import migrate_data_to_db
from routes.program import get_program_recommendations

app = Flask(__name__)
migrate_data_to_db()


@app.route("/api/recommend", methods=["POST"])
def recommend_program():
    data = request.get_json()
    query = data.get("query", "")

    if not query:
        return jsonify({"error": "Query is required"}), 400

    recommendations = get_program_recommendations(query)
    return jsonify(recommendations)


if __name__ == "__main__":
    app.run(debug=True)
