from utils.embeddings import calculate_similarity


def get_program_recommendations(query, model_name):
    recommendations = calculate_similarity(query, model_name)

    return [
        {"program_title": program_title, "university": university, "scores": scores}
        for program_title, university, scores in recommendations
    ]
