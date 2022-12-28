# Backend

## Prerequisites
- The backend is running `Deno`. Install with homebrew by running `brew install deno`.
- The local database is using `Docker`. Install with homebrew by running `brew install docker`.
- The backend is using `Velociraptor CLI` to run commands (for example starting the backend and running tests). See `scripts.yaml` for all available scripts or see the commands section below. Install with command `deno install -qAn vr https://deno.land/x/velociraptor@1.5.0/cli.ts`. Make sure to expose the CLI in your terminal. [See Here](https://deno.land/manual@v1.15.3/tools/script_installer#:~:text=These%20must%20be%20added%20to%20the%20path%20manually%20if%20required).

## Commands
- `docker-compose up -d` in the backend folder to start the database.
- `vr run start` in the root to start the backend.
- `vr run compile` to compile the application.
- `vr run cache` to sync dependencies.
- `vr run vendor` to download dependencies.
- `vr run lint` to lint files in `src`.
- `vr run fmt` to format files in `src`.
- `vr run test` to run test files in `src`. Make sure that the server is running (see `deno run` command).

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

### utils
Contains utility functions that can be reused.
