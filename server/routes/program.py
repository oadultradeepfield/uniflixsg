from utils.embeddings import calculate_similarity


def get_program_recommendations(personal_interest, career_prospect):
    query = f"I am interested in {personal_interest}. Upon graduation, I want to work as {career_prospect}."
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
