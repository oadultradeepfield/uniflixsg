import numpy as np


def cosine_similarity(matrix, vector):
    dot_product = np.dot(matrix, vector.T)
    norm_matrix = np.linalg.norm(matrix, axis=1, keepdims=True)
    norm_vector = np.linalg.norm(vector)
    return dot_product / (norm_matrix * norm_vector)
