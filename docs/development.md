# Development

## Installation and Setup
- Make sure that Docker is installed on your system
- Install packages with `npm install -D`
- Create file called `.env` in root, with the following values
```ini
# MOONBEAM DEVELOPMENT NODE
MOONBEAM_VERSION=0.25.0
MOONBEAM_CONTAINER_NAME="moonbeam_development"
```

## Execution
- Make sure that Docker is running on your system
- Run `npm run dev-f` to launch the frontend of the site
- Run `npm run dev-b` to launch the backend of the site