# Credit Card Form

## 📦 Getting Started

You can start working on this project in two ways:

- **Option 1:** Clone the repository.
- **Option 2:** Download the project as a ZIP archive.

### 📂 Project Setup

1. Open the project folder in your code editor.
2. Install dependencies `npm install`
3. Start the development server `npm run dev`
4. The project will be available at: `http://localhost:5173/`

### 🚀 Working Process

1. **Create a new branch** for your task: `git checkout -b <your-branch-name>`
2. Make your changes and commit them.
3. Push your branch to your forked repository: `git push origin <your-branch-name>`
4. **Open a Pull Request (PR)** with your solution.
5. Share the **link to your PR** or invite us to review it.

### Task 1: Improve Form Usability

You’re provided with a basic payment form.

Your task:

- 👉 Make the form **user-friendly and clear**.
- 👉 Add **labels and placeholders** to explain each input’s purpose.
- 👉 Ensure a **logical and clean layout** (group related fields where appropriate).
- 👉 Apply simple, consistent styling using **MUI** or **TailwindCSS** to improve readability.
- 👉 Style the submit button to match the overall design and background.
- 👉 Nice to have - **autocomplete** on fields.

### Task 2: Add Form Validation (yup)

Implement basic validation using **yup** together with **react-hook-form**.

Validation rules:

- 👉 **Card Number** – required, must be **16 digits** (Visa/Mastercard) or **15 digits** (Amex).
- 👉 **Expiry Date** – required, must be in **MM/YY** format and not expired.
- 👉 **CVV** – required, must be:
    - **3 digits** (Visa/Mastercard).
    - **4 digits** (Amex).
- 👉 **Cardholder Name** – required. If **Amex** is selected, name must have at least **5 characters**.

Display clear validation error messages near each input.

### Task 3: Prepare Form Payload (Console.log)

When submitting the form, prepare a payload suitable for backend processing.  
Instead of raw form data, parse and structure it before sending.

- 👉 **Log the prepared payload** to the console.
- 👉 Example parsing:
    - **expiryDate** input (`12/34`) should become:
        - `expiryMonth: '12'`
        - `expiryYear: '2034'`
    - Card number should be sent without spaces.

---

### Task 4 (Optional, Nice to Have): Input Formatting

Make inputs user-friendly by adding basic input formatting:

- 👉 **Card Number Field**:

    - Format input as the user types: e.g., `1234 5678 9012 3456`.
    - Ensure card number is stored and submitted without spaces.

- 👉 **Expiry Date Field**:
    - Format input as `MM/YY` automatically while typing.
