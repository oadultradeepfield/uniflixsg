import os

import numpy as np
from dotenv import load_dotenv
from sentence_transformers import SentenceTransformer
from sqlalchemy import create_engine, text
from utils.cosine_similarity import cosine_similarity

load_dotenv()
DSN = os.getenv("DSN")
engine = create_engine(DSN)


def normalize_scores(scores):
    min_score = np.min(scores)
    max_score = np.max(scores)
    if max_score == min_score:
        return np.ones_like(scores)
    return (scores - min_score) / (max_score - min_score)


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

    similarity_university = normalize_scores(similarity_university)
    similarity_program = normalize_scores(similarity_program)
    similarity_career = normalize_scores(similarity_career)

    mean_similarity = (
        similarity_university + 2 * similarity_program + 2 * similarity_career
    ) / 5

    index_sorted = np.argsort(-mean_similarity, axis=0).flatten()
    top_indices = index_sorted[:10]
    program_names = [programs[i][1] for i in top_indices]

    scores = [
        {
            "university_score": float(similarity_university[i]),
            "program_score": float(similarity_program[i]),
            "career_score": float(similarity_career[i]),
            "mean_score": float(mean_similarity[i]),
        }
        for i in top_indices
    ]

    return [
        (
            name.rsplit(" at ", 1)[0],
            f"{name.rsplit(' at ', 1)[-1].split(' (')[0]} ({name.rsplit(' (', 1)[-1][:-1]}",
            scores[i],
        )
        for i, name in enumerate(program_names)
    ]
