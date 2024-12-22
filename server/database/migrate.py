import os

import pandas as pd
from dotenv import load_dotenv
from sqlalchemy import create_engine, inspect

load_dotenv()
DSN = os.getenv("DSN")


def migrate_data_to_db():
    df = pd.read_csv("data/embedded_university_and_progam.csv")

    indices = df.index
    program = df[["program"]]
    embeddings_university = df.iloc[:, 4:388]
    embeddings_program = df.iloc[:, 388:772]
    embeddings_career = df.iloc[:, 772:1156]

    program.insert(loc=0, column="id", value=indices)
    embeddings_university.insert(loc=0, column="id", value=indices)
    embeddings_program.insert(loc=0, column="id", value=indices)
    embeddings_career.insert(loc=0, column="id", value=indices)

    engine = create_engine(os.getenv("DSN"))
    inspector = inspect(engine)

    existing_tables = inspector.get_table_names()

    if "program" not in existing_tables:
        program.to_sql("program", engine, if_exists="fail", index=False)
    else:
        print("Table 'program' already exists. Skipping migration.")

    if "embeddings_university" not in existing_tables:
        embeddings_university.to_sql(
            "embeddings_university", engine, if_exists="fail", index=False
        )
    else:
        print("Table 'embeddings_university' already exists. Skipping migration.")

    if "embeddings_program" not in existing_tables:
        embeddings_program.to_sql(
            "embeddings_program", engine, if_exists="fail", index=False
        )
    else:
        print("Table 'embeddings_program' already exists. Skipping migration.")

    if "embeddings_career" not in existing_tables:
        embeddings_career.to_sql(
            "embeddings_career", engine, if_exists="fail", index=False
        )
    else:
        print("Table 'embeddings_career' already exists. Skipping migration.")
