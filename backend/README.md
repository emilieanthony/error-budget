# Backend

## Prerequisites
Install `deno` with homebrew by running `brew install deno`.

## Commands
- `docker-compose up -d` in the backend folder to start the database.
- `deno run --allow-net --allow-env --allow-read --watch src/main.ts` in the root to start the backend.
- `deno compile --output app src/main.ts` to compile the application.
- `deno cache --lock=deno.lock --lock-write src/deps.ts` to sync dependencies.
- `deno vendor src/deps.ts` to download dependencies.
- `deno lint` to lint files in `src`.
- `deno fmt` to format files in `src`.
- `deno test` to run test files in `src`.

### How to run
- Start the database (see commands)
- Start the backend (see commands)

## Folder structure

### Data
Contains all SQL schemas

### handlers
Contains network layer specific code (handlers). Basic request validation is done here. Response is set here.

### domain
Contains all domain specific logic.

### repository
Contains database logic for fetching entities from a database.
