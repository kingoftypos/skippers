# Skipper

Skipper is a Codeforces Contest Status Tracker that allows users to search for their Codeforces ID and view the contests they have skipped. It fetches data from the Codeforces API to display relevant contest information and helps track user progress in various contests.

## Features

- **Search Functionality**: Easily search for Codeforces users using their handle.
- **Skipped Contests Display**: View the contests a user has skipped (where the verdict is "SKIPPED").
- **Participant Type Filter**: Filter contests by their participant type.
- **Contest Details**: Display contest names.

## Tech Stack

- **React**: Frontend framework for building user interfaces.
- **Axios**: For making HTTP requests to the Codeforces API.
- **Recoil**: State management library to manage global state across the app.
- **Radix UI**: For building accessible and customizable UI components.
- **Tailwind CSS**: Utility-first CSS framework for rapidly building custom designs.

## Installation

To set up and run Skipper on your local machine, follow these steps:

### Clone the Repository

```bash
git clone https://github.com/yourusername/skipper.git
cd skipper
```

### Install Dependencies

```bash
npm install
```

### Start the Development Server

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

### Build for Production

```bash
npm run build
```

This will generate a `build` directory with optimized files.

## Usage

1. Enter a valid Codeforces handle into the search bar.
2. View the list of contests the user has skipped, along with their IDs and names.
3. Use the participant type filter to narrow down results as needed.

## Project Structure

```plaintext
skipper/
├── public/         # Static assets
├── src/
│   ├── components/ # Reusable UI components
│   ├── atoms/      # State management setup
│   ├── styles/     # Tailwind CSS configuration
│   ├── utils/      # Helper functions
│   └── App.js      # Main application component
├── package.json    # Project metadata and dependencies
└── README.md       # Documentation
```

## Contributing

Contributions are welcome! If you'd like to improve Skipper, please follow these steps:

### Fork the Repository

1. Fork the repository.
2. Create a new branch for your feature or bug fix:

```bash
git checkout -b feature-name
```

3. Commit your changes:

```bash
git commit -m "Description of changes"
```

4. Push the branch to your forked repository:

```bash
git push origin feature-name
```

5. Open a pull request in the original repository.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Codeforces API](https://codeforces.com/api) for providing the contest data.
- Open-source libraries and tools used in the project.

