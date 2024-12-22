from utils.embeddings import calculate_similarity


def get_program_recommendations(query):
    recommendations = calculate_similarity(query)
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
