# csv-to-json
Convert structured CSV data into a nested JSON dictionary using Node.js. Supports multi-line rows and grouped attributes.

This project reads a structured `.csv` file and converts it into a nested JSON dictionary format using JavaScript.

### Features
- Parses multi-line CSV entries
- Groups related data under unique identifiers
- Outputs structured and readable JSON

### Usage
1. Place your input CSV in the root directory (e.g., `input.csv`).
2. Run the script using Node.js:
   ```bash
   node index.js
3. The converted JSON will be displayed or saved as needed.

### Example Output
```bash
{
  "1": {
    "name": "Item-1",
    "attr1": "A",
    "attr2": [1, 2, 3],
    "attr3": "B",
    "attr4": [1, 2]
  }
}
```

### Setup
To get started:
```
git clone https://github.com/your-username/csv-to-json.git
cd csv-to-json
npm install
```
