# Assignment 3 - University Course Management System

## File Organization
- `models.js`: Contains the `Student` class definition with immutable `id` defined via `Object.defineProperty()`, alongside methods like `addCourse()` and `getAverage()`.
- `database.js`: Simulates asynchronous database fetching using `setTimeout()` and callbacks.
- `analytics.js`: Houses analytic calculations (`calculateClassAverage`, `findTopStudent`, and higher-order `filterStudents`).
- `main.js`: Main execution script that fetches data, converts raw data to `Student` instances, verifies immutability, and generates analytics.
- `package.json`: Configures ES6 module support (`"type": "module"`).

## Challenges Faced
1. **Property Immutability**: Setting `writable: false` and `configurable: false` with `Object.defineProperty` ensured strict protection over `id` re-assignment without breaking instance initialization.
2. **Asynchronous Flow Management**: Handling callback-driven architecture required delaying execution logic until data resolution inside `setTimeout`.
3. **ES6 Module Configuration**: Ensured proper cross-file exports and Node.js execution through appropriate `package.json` module settings.