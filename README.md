# Printplaner - Schedule your 3D prints!

Printplaner is a browser-based utility to modify `.gcode.3mf` files. It allows you to easily inject a custom start delay and turn off the vibration test without uploading files to any external server.

[![Open in Browser](https://img.shields.io/badge/Launch%20App-Printplaner-green?style=for-the-badge&logo=googlechrome&logoColor=white)](https://hmnxprints.github.io/Printplaner/)
[![Download Files](https://img.shields.io/badge/Download-ZIP%20Archive-blue?style=for-the-badge&logo=github&logoColor=white)](https://github.com/HMNXPrints/Printplaner/archive/refs/heads/main.zip)
[![Support on Ko-fi](https://img.shields.io/badge/Support-Ko--fi-ff5e5b?style=for-the-badge&logo=kofi&logoColor=white)](https://ko-fi.com/HMNXPrints)

---

## Key Features

- **Start Delay Scheduling:** Automatically injects custom wait commands (`M400`) to precisely delay your prints until your preferred time.
- **Vibration Test Toggle:** Scans and comments out the vibration test block in the G-code to reduce printer noise at startup.
- **Multi-Plate Support:** Easily configure global execution times or toggle individual settings for multi-plate 3MF files independently.
- **Runs Locally:** 100% local file processing via JavaScript using `JSZip`. Your data never leaves your computer.
- **Language Support:** Full multi-language support for both **German (DE)** and **English (EN)**.

---

## How to Use (Step-by-Step Guide)

1. **Prepare file:**
Configure all settings in your slicer software and either slice the current print plate individually (Slice plate) or select Slice all from the dropdown menu.
Then click the arrow to the right of the export button and select Export all sliced files to generate the required .gcode.3mf file.

2. **Upload file:**
Switch to the Planner tab, click on "Choose file..." and upload the exported file.

3. **Configure times & options:**
- **Start time:** Set the desired execution time for the plates.
- **Individual plate settings (for multiple plates):** Enable this if plates should have different start times.
- **Vibration test:** The automatic vibration test per plate can be deactivated using the corresponding button.

4. **Convert file & print:**
Click on Modify file. The tool processes the code and automatically downloads a new file with the prefix modified_.... Open this file in the slicer and send it directly to the printer (Print plate).

⚠️ **IMPORTANT:**
Do not slice the downloaded file again in the slicer! This would overwrite the modified code and erase the start delay.

⚠️ **ATTENTION:**
When using the Printplaner for the first time, please stay by your 3D printer to monitor the startup process and ensure everything runs completely smooth.

---

## How to Run the Project

You can run Printplaner using one of the following methods:

### Method A: Live via Web (Recommended)
You can access the live version directly via GitHub Pages:  
🔗 **[Launch Printplaner Web App](https://hmnxprints.github.io/Printplaner/)**

### Method B: Run Locally
Since this is a standard frontend web application, no installation or local server environment is required:
1. Download all files from this repository (`index.html`, `style.css`, `app.js`, `jszip.min.js`) into a single folder.
2. Double-click the `index.html` file to open Printplaner directly in your preferred web browser.

---

## Contributions

Feel free to open an issue or submit a pull request if you find bugs, have ideas for improvements, or want to contribute to the code! 

---

## License [![License: CC BY-NC-ND 4.0](https://img.shields.io/badge/License-CC%20BY--NC--ND%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc-nd/4.0/)

This project is licensed under the **Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)** license with a special exception for developer contributions:

- **Attribution (BY):** You must give appropriate credit to the original author (HMNXPrints).
- **Non-Commercial (NC):** You may not use this material for commercial purposes.
- **No Derivatives (ND):** You may not distribute modified versions of the software.
- **Special Exception:** Modifying the source code is explicitly permitted **solely** for the purpose of submitting bug fixes, improvements, or pull requests back to this original repository.
