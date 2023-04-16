# Hotel Booking Application

Hotel Booking Application is a full-stack web application that allows users to search for hotels, view hotel details, and add new hotels to the database. The application is built using React with TypeScript for the frontend, Golang for the backend, and PostgreSQL for the database.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Features

- Search and view hotel details
- Add new hotels to the database
- Responsive and modern user interface
- RESTful API for managing hotel data
- Containerized with Docker for easy deployment

## Prerequisites

- [Node.js](https://nodejs.org/) (v12 or higher)
- [Go](https://golang.org/) (v1.17 or higher)
- [PostgreSQL](https://www.postgresql.org/) (v9.6 or higher)
- [Docker](https://www.docker.com/) (optional, for containerization)

## Installation

1. Clone the repository:

```
git clone https://github.com/yourusername/Travel-booking-application.git
```
2. Change to the project directory:

```
cd hotel-booking
```

3. Install frontend dependencies:
```
cd frontend && npm install
```

4. Install backend dependencies:

```
cd .. && go mod download
```

5. Set up your PostgreSQL database and update the connection details in the backend configuration.

## Usage

1. Start the React frontend development server:
```
cd frontend
npm start
```

2. Start the Golang backend server:
```
cd .. && go run main.go
```

3. Open a web browser and navigate to `http://localhost:3000` to view the application.

## Deployment

1. Build the Docker images for the frontend, backend, and PostgreSQL:

```
docker-compose build
```

2. Run the Docker containers:

```
docker-compose up
```


3. The application should now be accessible at `http://localhost:3000`.

## Contributing

1. Fork the project repository.

2. Create a new feature branch:

```
git checkout -b feature/my-new-feature
```

3. Make your changes and commit them:

```
git commit -am "Add my new feature"
```

4. Push your feature branch to your fork:

```
git push origin feature/my-new-feature
```

5. Submit a pull request to the original repository.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
