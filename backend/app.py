import os

from database.migrate import migrate_data_to_db
from dotenv import load_dotenv
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from routes.program import get_program_recommendations

load_dotenv()

app = FastAPI()

migrate_data_to_db()

allowed_origins = os.getenv("ALLOWED_ORIGINS", "").split(",")
if not allowed_origins:
    print("Warning: No allowed origins specified in .env file")

app.add_middleware(
    CORSMiddleware,
    allow_origins=allowed_origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class RecommendationRequest(BaseModel):
    query: str
    model_name: str = ""


@app.post("/api/recommend")
async def recommend_program(data: RecommendationRequest):
    if not data.query:
        raise HTTPException(status_code=400, detail="Query is required")

    recommendations = get_program_recommendations(data.query, data.model_name)
    return recommendations


if __name__ == "__main__":
    import uvicorn

    uvicorn.run(app, host="0.0.0.0", port=8000, debug=True)
