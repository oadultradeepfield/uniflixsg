import os

import pandas as pd
from dotenv import load_dotenv
from sqlalchemy import create_engine, inspect

load_dotenv()
DSN = os.getenv("DSN")


def migrate_data_to_db():
    df = pd.read_csv("data/embedded_university_and_program.csv")

    indices = df.index
    program = df[["program"]]

    embeddings_university = df.iloc[:, 4:388]
    embeddings_program = df.iloc[:, 388:772]
    embeddings_career = df.iloc[:, 772:1156]

    embeddings_university = embeddings_university.apply(lambda x: x.tolist(), axis=1)
    embeddings_program = embeddings_program.apply(lambda x: x.tolist(), axis=1)
    embeddings_career = embeddings_career.apply(lambda x: x.tolist(), axis=1)

    program.insert(loc=0, column="program_id", value=indices)

    embeddings_university = embeddings_university.to_frame(name="embeddings_university")
    embeddings_program = embeddings_program.to_frame(name="embeddings_program")
    embeddings_career = embeddings_career.to_frame(name="embeddings_career")

    final_df = pd.concat(
        [program, embeddings_university, embeddings_program, embeddings_career], axis=1
    )

    engine = create_engine(DSN)
    inspector = inspect(engine)

    existing_tables = inspector.get_table_names()

    if "embeddings" not in existing_tables:
        final_df.to_sql("embeddings", engine, if_exists="fail", index=False)
    else:
        print("Table 'embeddings' already exists. Skipping migration.")
