import os

import numpy as np
from dotenv import load_dotenv
from sentence_transformers import SentenceTransformer
from sqlalchemy import create_engine, text
from utils.cosine_similarity import cosine_similarity

load_dotenv()
DSN = os.getenv("DSN")
engine = create_engine(DSN)


def calculate_similarity(query, model_name):
    model = SentenceTransformer(model_name)
    embedded_query = model.encode(query).reshape(1, -1)

    with engine.connect() as connection:
        embeddings_university = np.array(
            [
                np.array(embedding[0][1:-1].split(","), dtype=float)
                for embedding in connection.execute(
                    text("SELECT embeddings_university FROM embeddings")
                ).fetchall()
            ]
        )

        embeddings_program = np.array(
            [
                np.array(embedding[0][1:-1].split(","), dtype=float)
                for embedding in connection.execute(
                    text("SELECT embeddings_program FROM embeddings")
                ).fetchall()
            ]
        )

        embeddings_career = np.array(
            [
                np.array(embedding[0][1:-1].split(","), dtype=float)
                for embedding in connection.execute(
                    text("SELECT embeddings_career FROM embeddings")
                ).fetchall()
            ]
        )

        programs = connection.execute(
            text("SELECT program_id, program FROM embeddings")
        ).fetchall()

    similarity_university = cosine_similarity(embeddings_university, embedded_query)
    similarity_program = cosine_similarity(embeddings_program, embedded_query)
    similarity_career = cosine_similarity(embeddings_career, embedded_query)

    mean_similarity = (
        similarity_university + 2 * similarity_program + 2 * similarity_career
    ) / 5

    index_sorted = np.argsort(-mean_similarity, axis=0).flatten()
    top_indices = index_sorted[:10]

    program_names = [programs[i][1] for i in top_indices]

    return [
        (
            name.rsplit(" at ", 1)[0],
            f"{name.rsplit(' at ', 1)[-1].split(' (')[0]} ({name.rsplit(' (', 1)[-1][:-1]}",
        )
        for name in program_names
    ]
