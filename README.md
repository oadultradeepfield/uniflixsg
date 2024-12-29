# UniFliXsg

![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Svelte](https://img.shields.io/badge/svelte-%23f1413d.svg?style=for-the-badge&logo=svelte&logoColor=white)
![SvelteKit](https://img.shields.io/badge/sveltekit-%23ff3e00.svg?style=for-the-badge&logo=svelte&logoColor=white)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![DaisyUI](https://img.shields.io/badge/daisyui-5A0EF8?style=for-the-badge&logo=daisyui&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white)
![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)
![Flask](https://img.shields.io/badge/flask-%23000.svg?style=for-the-badge&logo=flask&logoColor=white)
![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)
![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)
![Google Cloud](https://img.shields.io/badge/GoogleCloud-%234285F4.svg?style=for-the-badge&logo=google-cloud&logoColor=white)

## Project Description

UniFliXsg is an app designed to recommend undergraduate programs from Singapore universities based on a user's search query. It leverages semantic search by encoding the input text with language models and calculating the cosine similarity between the user's query and the programs in the database. The recommendations are influenced by program descriptions and career prospects.

I built this project specifically to learn Svelte and SvelteKit, which turned out to be lovely! I highly recommend giving it a try if you're currently using other frameworks. Additionally, I explored Prisma in this project. The backend was adapted from a previous project, requiring only the implementation of an API using Flask. You can read about the original implementation from this [blog](https://medium.com/towards-data-science/uniflixsg-ai-powered-undergraduate-program-recommendations-for-singapore-universities-b9b448f7ea19) on Medium.

**Note**: This project uses the [all-MiniLM-L12-v2](https://huggingface.co/sentence-transformers/all-MiniLM-L12-v2) and [all-MiniLM-L6-v2](https://huggingface.co/sentence-transformers/all-MiniLM-L6-v2) language models. The former is labeled as "More accurate, but slower," while the latter is "Faster, but less accurate." For more detailed information about these models, please refer to the linked Hugging Face pages.

## Installation

1. To get started, clone this repository:

   ```bash
   git clone https://github.com/oadultradeepfield/uniflixsg.git
   cd uniflixsg
   ```

   This project includes both the backend and frontend (with server-side rendering). The backend consists of Python code for running the language model via an API.

2. To run the backend, it is recommended to use Docker as the project has already been containerized. Refer to the [`.env.example`](/backend/.env.example) file for the environment variable setup.

   ```bash
   cd backend
   docker build -t uniflixsg-server .
   docker run --env-file .env.local -d --name uniflixsg-server -p 8080:8080 uniflixsg-server:latest
   ```

   The server will run on port 8080.

3. To run the frontend, install the required Node packages and build the app. Note that this project is built with Node version 20.18.1, where Prisma is fully supported. Odd-numbered versions like 23.x may not be stable as of the time this README was written. Also, refer to [`.env.example`](/frontend/.env.example) to ensure all environment variables are correctly configured.

   ```bash
   cd frontend
   npm install
   npm run dev -- --open
   ```

## Deployment Detail

The backend, containerized with Docker, is deployed serverlessly on Google Cloud Run, which may experience a cold start. The frontend is hosted on Vercel, while the PostgreSQL database is managed on Neon.

## Usage

1. Access the frontend using the provided Vercel link.
2. Enter a search query (e.g., `I constantly look for ways to make everyday more enjoyable. I love creating interactive tools and visuals that help others grasp concepts easily.`) to receive personalized recommendations. Note that the character limit is set to 150 to minimize computation overhead in the backend.
3. (Optional) Sign in with Google to save your search history. The history includes up to the ten most recent searches, along with their results.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
