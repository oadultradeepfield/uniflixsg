import csv
import os

from dotenv import load_dotenv
from sqlalchemy import create_engine, inspect

load_dotenv()
DSN = os.getenv("DSN")


def migrate_data_to_db():
    with open("data/embedded_university_and_program.csv", mode="r") as file:
        reader = csv.reader(file)
        next(reader)
        data = [row for row in reader]

    indices = [row[0] for row in data]
    program = [(row[0], row[1]) for row in data]
    embeddings_university = [row[4:388] for row in data]
    embeddings_program = [row[388:772] for row in data]
    embeddings_career = [row[772:1156] for row in data]

    program_with_id = [(indices[i], program[i][1]) for i in range(len(indices))]
    embeddings_university_with_id = [
        (indices[i], *embeddings_university[i]) for i in range(len(indices))
    ]
    embeddings_program_with_id = [
        (indices[i], *embeddings_program[i]) for i in range(len(indices))
    ]
    embeddings_career_with_id = [
        (indices[i], *embeddings_career[i]) for i in range(len(indices))
    ]

    engine = create_engine(DSN)
    inspector = inspect(engine)

    existing_tables = inspector.get_table_names()

    if "program" not in existing_tables:
        with engine.connect() as connection:
            connection.execute("CREATE TABLE program (id INTEGER, program_name TEXT)")
            connection.execute(
                "INSERT INTO program (id, program_name) VALUES (?, ?)", program_with_id
            )
    else:
        print("Table 'program' already exists. Skipping migration.")

    if "embeddings_university" not in existing_tables:
        with engine.connect() as connection:
            connection.execute(
                "CREATE TABLE embeddings_university (id INTEGER, embedding_data REAL[])"
            )
            connection.execute(
                "INSERT INTO embeddings_university (id, embedding_data) VALUES (?, ?)",
                embeddings_university_with_id,
            )
    else:
        print("Table 'embeddings_university' already exists. Skipping migration.")

    if "embeddings_program" not in existing_tables:
        with engine.connect() as connection:
            connection.execute(
                "CREATE TABLE embeddings_program (id INTEGER, embedding_data REAL[])"
            )
            connection.execute(
                "INSERT INTO embeddings_program (id, embedding_data) VALUES (?, ?)",
                embeddings_program_with_id,
            )
    else:
        print("Table 'embeddings_program' already exists. Skipping migration.")

    if "embeddings_career" not in existing_tables:
        with engine.connect() as connection:
            connection.execute(
                "CREATE TABLE embeddings_career (id INTEGER, embedding_data REAL[])"
            )
            connection.execute(
                "INSERT INTO embeddings_career (id, embedding_data) VALUES (?, ?)",
                embeddings_career_with_id,
            )
    else:
        print("Table 'embeddings_career' already exists. Skipping migration.")


migrate_data_to_db()
