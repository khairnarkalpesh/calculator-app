
# Calculator App

A responsive calculator application built with **React.js**, **CSS**, and **JavaScript**. This app includes a history panel that tracks and stores calculations using **localStorage**. It is fully responsive and works seamlessly across various screen sizes.

![image](https://github.com/user-attachments/assets/a9ee4850-e2fc-408f-b9aa-7169b73c4b7d)

## Features

1. **Basic Calculator Operations**  
   - Perform addition, subtraction, multiplication, and division.  
   - Default result is set to `0`.

2. **Evaluation of Expressions**  
   - Use the `=` button to calculate and display the result of the expression.

3. **History Panel**  
   - Toggle the visibility of the history panel using a hamburger icon.  
   - On screens smaller than `576px`, the history panel appears as an overlay.

4. **History Tracking**  
   - Calculation history is stored in **localStorage**.  
   - New entries are added to the history when the `=` button is clicked.

5. **Scrollable History**  
   - Easily navigate through the calculation history with a scrollable panel.

6. **Delete Button**  
   - Clear the entire calculation history with a single button click.

7. **Responsive Design**  
   - The app is fully responsive and adapts to screen sizes ranging from `300px` to full-screen displays.

---

## Tech Stack

- **Frontend**: React.js, CSS, JavaScript  
- **Storage**: localStorage  

## Installation

Follow these steps to set up and run the project locally:

1. **Clone the Repository**  
   ```bash
   git clone https://github.com/khairnarkalpesh/calculator-app.git
   cd calculator-app
   ```

2. **Install Dependencies**  
   ```bash
   npm install
   ```

3. **Run the Application**  
   ```bash
   npm start
   ```

4. **Open in Browser**  
   The app will open automatically in your default browser at `http://localhost:3000`.

---

## Usage

1. **Perform Calculations**  
   - Use the buttons to input numbers and operators.  
   - Press `=` to evaluate the expression and display the result.

2. **View History**  
   - Click the hamburger icon to toggle the history panel.  
   - Scroll through past calculations.

3. **Clear History**  
   - Click the delete button (🗑️) to clear the entire calculation history.

---

## Folder Structure

```
calculator-app/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Calculator.js
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── package.json
└── README.md
```

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.

---
