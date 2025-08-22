# Lagrange Interpolation Solver 🧮

This project implements a solver for the Lagrange interpolation problem. It reads data points from a JSON file, performs calculations using BigInts to ensure precision, and outputs the result of the interpolation. It's designed to be run from the command line, taking the JSON file path as an argument. This tool is particularly useful when dealing with large numbers and varying bases, providing an accurate interpolation result.

## 🚀 Key Features

- **Precise Calculations:** Utilizes BigInts to avoid precision issues during interpolation.
- **Base Conversion:** Supports y-values in various bases (2-36) specified in the JSON input.
- **Fractional Arithmetic:** Implements addition and multiplication of fractions with GCD simplification for accurate weight calculations.
- **Command-Line Interface:** Accepts a JSON file path as a command-line argument for easy execution.
- **Flexible Input:** Reads data points and configuration parameters from a JSON file.
- **Simplified Output:** Returns the interpolated result as a string.

## 🛠️ Tech Stack

- **Language:** JavaScript
- **Runtime Environment:** Node.js
- **Core Modules:**
    - `fs` (Node.js file system module)
- **Data Format:** JSON

## 📦 Getting Started

### Prerequisites

- Node.js installed on your system. You can download it from [nodejs.org](https://nodejs.org/).

### Installation

1.  Clone the repository:

    ```bash
    git clone <repository_url>
    cd <repository_directory>
    ```

2.  No installation steps are required as there are no dependencies to install using `npm` or `yarn`.

### Running Locally

1.  Navigate to the project directory in your terminal.
2.  Run the `minimal.js` script with the path to your JSON data file as an argument:

    ```bash
    node minimal.js sample1.json
    ```

    Replace `sample1.json` with the actual path to your JSON file.

## 📂 Project Structure

```
.
├── minimal.js       # Main script for Lagrange interpolation
├── sample1.json      # Sample JSON data file
├── sample2.json      # Another sample JSON data file
└── README.md         # This README file
```


## 🤝 Contributing

Contributions are welcome! If you have suggestions or improvements, please open an issue or submit a pull request.

1.  Fork the repository.
2.  Create a new branch for your feature or bug fix.
3.  Commit your changes.
4.  Push to your fork.
5.  Submit a pull request.


## 💖 Thanks

Thank you for checking out this project! We hope it's helpful for your Lagrange interpolation needs.

This is written by [readme.ai](https://readme-generator-phi.vercel.app/).
