**SIN Validator Web App**

This project implements a simple web application that validates Canadian Social Insurance Numbers (SINs) using the Luhn algorithm. It provides immediate feedback to the user, indicating whether the entered SIN is valid or invalid.

**Features**

-   **SIN validation:** Accurately validates SINs based on the Luhn algorithm.
-   **Input validation:**
    -   Checks if the SIN contains exactly 9 digits.
    -   Ensures the SIN contains only numeric characters.
-   **Clear error messages:** Provides specific error messages to guide the user:
    -   "Invalid SIN: SIN must contain exactly 9 digits."
    -   "Invalid SIN" (if the SIN fails the Luhn algorithm check)
-   **Real-time feedback:** Displays the validation result immediately after the user clicks the "Validate" button.

**Technologies Used**

-   **TypeScript:** Ensures type safety and improves code maintainability.
-   **HTML:** Structures the basic layout of the web page.
-   **CSS:** Provides minimal styling for the elements. (You can add more elaborate styling if desired.)

**Assumptions**

-   The SIN is entered as a string, potentially containing non-digit characters (spaces, hyphens, etc.).
-   The web app is running in a browser environment where `document` and its related methods are available.

**How to Run the App Locally**

1.  **Prerequisites:** Make sure you have Node.js and npm installed on your system.
2.  **Clone the repository:** Clone this repository to your local machine.   
3.  **Install dependencies:** Open your terminal, navigate to the project directory, and run `npm install` to install the required dependencies (TypeScript).
4.  **Compile the code:** Run `npx tsc` to compile the TypeScript code (`index.ts`) into JavaScript (`index.js`).
5.  **Start a web server:** You'll need a simple web server to run the app. You can use `serve` or `http-server`. Install one of them globally (e.g., `npm install --global serve`) and then run it from the project directory (e.g., `serve`).
6.  **Open in browser:** The web server will provide you with a URL (like `http://localhost:5000`). Open this URL in your web browser to access the SIN validator app.

**Additional Notes**

-   This implementation focuses on functionality over styling. You can enhance the appearance of the web app by adding more CSS.
-   For security reasons, it's generally not recommended to validate SINs client-side. This implementation is primarily for educational purposes. In a real-world scenario, you would typically send the SIN to a server for validation.

**Further Enhancements**

-   More robust error handling: Could provide more specific error messages for different Luhn algorithm failure scenarios.
-   Accessibility: Could improve accessibility by adding ARIA attributes and keyboard navigation support.
-   Server-side validation: For production use, implement server-side validation for security and data integrity.
