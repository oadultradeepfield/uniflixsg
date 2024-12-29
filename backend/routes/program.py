from utils.embeddings import calculate_similarity


def get_program_recommendations(query, model_name):
    recommendations = calculate_similarity(query, model_name)
    result = []

    for rec in recommendations:
        program_title, university = rec
        result.append(
            {
                "program_title": program_title,
                "university": university,
            }
        )

    return result
