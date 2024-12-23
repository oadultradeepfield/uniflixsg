import os

from dotenv import load_dotenv
from flask import Flask, jsonify, request
from flask_cors import CORS

from database.migrate import migrate_data_to_db
from routes.program import get_program_recommendations

load_dotenv()

app = Flask(__name__)

migrate_data_to_db()

allowed_origins = os.getenv("ALLOWED_ORIGINS", "").split(",")
if not allowed_origins:
    print("Warning: No allowed origins specified in .env file")

CORS(app, resources={r"/*": {"origins": allowed_origins}})


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
