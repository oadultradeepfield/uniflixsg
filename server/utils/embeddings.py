import os

import numpy as np
from dotenv import load_dotenv
from sentence_transformers import SentenceTransformer
from sklearn.metrics.pairwise import cosine_similarity
from sqlalchemy import create_engine, text

load_dotenv()
DSN = os.getenv("DSN")
engine = create_engine(DSN)

model = SentenceTransformer("all-MiniLM-L6-v2")


def calculate_similarity(query):
    embedded_query = model.encode(query).reshape(1, -1)

    with engine.connect() as connection:
        embeddings_university = np.array(
            connection.execute(
                text("SELECT embedding FROM embeddings_university")
            ).fetchall()
        ).reshape(-1, embedded_query.shape[1])

        embeddings_program = np.array(
            connection.execute(
                text("SELECT embedding FROM embeddings_program")
            ).fetchall()
        ).reshape(-1, embedded_query.shape[1])

        embeddings_career = np.array(
            connection.execute(
                text("SELECT embedding FROM embeddings_career")
            ).fetchall()
        ).reshape(-1, embedded_query.shape[1])

        programs = connection.execute(text("SELECT id, name FROM programs")).fetchall()

    similarity_university = cosine_similarity(embeddings_university, embedded_query)
    similarity_program = cosine_similarity(embeddings_program, embedded_query)
    similarity_career = cosine_similarity(embeddings_career, embedded_query)

    mean_similarity = (
        similarity_university + 2 * similarity_program + 2 * similarity_career
    ) / 5

    index_sorted = np.argsort(-mean_similarity, axis=0).flatten()
    top_indices = index_sorted[:10]

    program_names = [programs[i][1] for i in top_indices]

    return [(name, name.split()[-1]) for name in program_names]
