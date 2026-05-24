// ==========================================================================
// 1. ÜBERSETZUNGEN (i18n) & LOCALES
// ==========================================================================
const translations = {
    de: {
        title: "Printplaner - Plane deine 3D-Drucke!",
        subtitle: "Bitte lies dir kurz die Anleitung und Funktionsweise durch, bevor du loslegst.",
        uploadText: ".gcode.3mf-Datei auswählen...",
        individualMode: "Individuelle Platteneinstellungen verwenden",
        startTime: "Startzeit",
        processBtn: "Datei bearbeiten",
        noTime: "Keine Änderungen angewählt",
        disabled: "Plate deaktiviert",
        pastTime: "Zeit liegt in der Vergangenheit",
        delayMsg: "Delay von {seconds} Sekunden wird eingefügt",
        errNoPlates: "Keine plate_x.gcode Dateien gefunden",
        errPast: "{file} liegt in der Vergangenheit",
        errConfig: "{file} enthält keinen CONFIG_BLOCK_END Block",
        tooltipRemove: "Datei entfernen",
        tooltipChange: "Andere Datei auswählen",
        skipVibrationTitle: "Vibrationstest",
        statusVibSkipped: "Vibrationstest wird übersprungen",
        statusVibSkippedNoDelay: "Vibrationstest wird übersprungen - Kein Startdelay",
        statusVibOff: " + Vibrationstest aus",
        // Tabs
        tabPlaner: "Planer",
        tabAnleitung: "Anleitung",
        tabFunktion: "Funktionsweise",
        
        // Kompletter HTML Guide für Deutsch (Anleitung)
        guideHTML: `
            <div class="guide-content" style="line-height: 1.6; margin-bottom: 20px;">

<div style="margin-bottom: 25px; padding: 15px; background: rgba(234, 179, 8, 0.1); border-left: 4px solid #eab308; border-radius: 6px; color: var(--text-color);">
            <strong style="color: #eab308; display: block; margin-bottom: 5px;">⚠️ WICHTIG:</strong>
            <span style="color: #ffffff;">Printplaner wurde nur mit Bambu Lab Slicer und Bambu Lab Druckern getestet. Andere Slicersoftware und Druckermodelle funktionieren möglicherweise nicht.</span>
        </div>

                <h2 style="margin-top: 0; margin-bottom: 20px;">Schritt-für-Schritt Anleitung</h2>
                
                <ul style="list-style-type: none; padding-left: 0; margin-bottom: 25px;">
                    <li style="margin-bottom: 18px;">
                        <strong>1. Datei vorbereiten:</strong> 
                        <ul style="padding-left: 20px; margin-top: 5px; list-style-type: circle;">
                            <li>Nimm alle Einstellungen in deiner Slicersoftware vor und slice entweder die aktuelle Druckplatte einzeln (<code>Druckplatte&nbsp;slicen</code>) oder wähle im Dropdown-Menü <code>Alle&nbsp;slicen</code>.</li>
                            <li>Klicke danach rechts auf den Pfeil neben dem Export-Button und wähle <code>Alle&nbsp;gesliceten&nbsp;Dateien&nbsp;exportieren</code>, um die benötigte <code>.gcode.3mf</code>-Datei zu erzeugen.</li>
                        </ul>
                    </li>
                    <li style="margin-bottom: 18px;">
                        <strong>2. Datei hochladen:</strong>
                        <ul style="padding-left: 20px; margin-top: 5px; list-style-type: circle;">
                            <li>Wechsle hier zum Reiter <strong>Planer</strong>, klicke auf <em>„Datei auswählen...“</em> und lade die eben exportierte Datei hoch.</li>
                        </ul>
                    </li>
                    <li style="margin-bottom: 18px;">
                        <strong>3. Zeiten & Optionen einstellen:</strong>
                        <ul style="padding-left: 20px; margin-top: 5px; list-style-type: circle;">
                            <li><strong>Startzeit:</strong> Gewünschte Uhrzeit für die Platten festlegen.</li>
                            <li><strong>Individuelle Platteneinstellungen (bei mehreren Platten):</strong> Aktivieren, falls Platten unterschiedliche Startzeiten haben sollen.</li>
                            <li><strong>Vibrationstest:</strong> Über den entsprechenden Button lässt sich der automatische Vibrationstest pro Platte deaktivieren.</li>
                        </ul>
                    </li>
                    <li style="margin-bottom: 18px;">
                        <strong>4. Datei konvertieren & drucken:</strong>
                        <ul style="padding-left: 20px; margin-top: 5px; list-style-type: circle;">
                            <li>Klicke auf <strong>Datei bearbeiten</strong>. Das Tool modifiziert den Code und lädt automatisch eine neue Datei mit dem Präfix <code>modified_...</code> herunter. Öffne diese Datei im Slicer und sende sie direkt an den Drucker (<code>Druckplatte drucken</code>).</li>
                        </ul>
                    </li>
                </ul>
                
                <div style="margin-top: 25px; padding: 15px; background: rgba(234, 179, 8, 0.1); border-left: 4px solid #eab308; border-radius: 6px; color: var(--text-color);">
                    <strong style="color: #eab308; display: block; margin-bottom: 5px;">⚠️ WICHTIG:</strong>
                    <span style="color: #ffffff;">Die heruntergeladene Datei im Slicer <strong>auf keinen Fall erneut slicen!</strong> Das würde den modifizierten Code überschreiben und die Startverzögerung löschen.</span>
                </div>

                <div style="margin-top: 25px; padding: 15px; background: rgba(239, 68, 68, 0.1); border-left: 4px solid #ef4444; border-radius: 6px; color: var(--text-color);">
                    <strong style="color: #ef4444; display: block; margin-bottom: 5px;">⚠️ ACHTUNG:</strong>
                    <span style="color: #ffffff;"><strong>Bleibe</strong> bei der ersten Nutzung des Printplaner <strong>unbedingt an deinem 3D-Drucker</strong>, um den Startvorgang zu überwachen und sicherzustellen, dass alles glatt läuft.</span>
                </div>
            </div>
        `,

        // Komplette HTML Erklärung für Deutsch (Funktionsweise)
        funktionHTML: `
            <div class="tab-content-inner">
                <h2>Wie funktioniert der Printplaner?</h2>
                <p>Dieses Tool entpackt die 3MF-Datei direkt lokal in deinem Browser und analysiert die enthaltenen G-Code-Dateien der einzelnen Druckplatten.</p>
                
                <h3>Startverzögerung</h3>
                <p>Nach dem Konfigurationsblock wird der Wartebefehl <code>M400 S[Sekunden]</code> sowie der Befehl <code>M1002 gcode_claim_action : 5</code> eingefügt. Dein 3D-Drucker zeigt daraufhin die Meldung <em>"M400"</em> im Display an und zählt im Hintergrund die Sekunden herunter, wodurch die gewünschte Startverzögerung entsteht.</p>
                
                <h3>Vibrationstest deaktivieren</h3>
                <p>Der Printplaner sucht im G-Code gezielt nach dem spezifischen Code-Block, der für den Vibrationstest zuständig ist. Dieser Block wird im G-Code auskommentiert, sodass die Maschine ihn beim Druckstart einfach überspringt.</p>
                
                <div class="warning-box" style="margin-top: 25px; padding: 15px; background: rgba(239, 68, 68, 0.1); border: 1px solid #ef4444; border-radius: 10px; color: #ffffff;">
                    <strong style="color: #ef4444; display: block; margin-bottom: 5px;">⚠️ ACHTUNG:</strong>
                    <span style="color: #ffffff;"><strong>Bleibe</strong> bei der ersten Nutzung des Printplaner <strong>unbedingt an deinem 3D-Drucker</strong>, um den Startvorgang zu überwachen und sicherzustellen, dass alles glatt läuft.</span>
                </div>
            </div>
        `
    },
    en: {
        title: "Printplaner - Schedule your 3D prints!",
        subtitle: "Please take a moment to read the Instructions and How it works before you get started.",
        uploadText: "Select .gcode.3mf file...",
        individualMode: "Use individual plate settings",
        startTime: "Start Time",
        processBtn: "Modify file",
        noTime: "No changes selected",
        disabled: "Plate disabled",
        pastTime: "Time is in the past",
        delayMsg: "Delay of {seconds} seconds will be inserted",
        errNoPlates: "No plate_x.gcode files found",
        errPast: "{file} is in the past",
        errConfig: "{file} does not contain a CONFIG_BLOCK_END block",
        tooltipRemove: "Remove file",
        tooltipChange: "Choose another file",
        skipVibrationTitle: "Vibration Test",
        statusVibSkipped: "Vibration test will be skipped",
        statusVibSkippedNoDelay: "Vibration test will be skipped - No start delay",
        statusVibOff: " + Vibration test off",
        // Tabs
        tabPlaner: "Planner",
        tabAnleitung: "Instructions",
        tabFunktion: "How it works",
        
        // Kompletter HTML Guide für Englisch (Anleitung)
        guideHTML: `
            <div class="guide-content" style="line-height: 1.6; margin-bottom: 20px;">

<div style="margin-bottom: 25px; padding: 15px; background: rgba(234, 179, 8, 0.1); border-left: 4px solid #eab308; border-radius: 6px; color: var(--text-color);">
    <strong style="color: #eab308; display: block; margin-bottom: 5px;">⚠️ IMPORTANT:</strong>
    <span style="color: #ffffff;">Printplaner was only tested with Bambu Lab Slicer and Bambu Lab printers. Other slicer software and printer models may not work.</span>
</div>

                <h2 style="margin-top: 0; margin-bottom: 20px;">Step-by-Step Guide</h2>
                
                <ul style="list-style-type: none; padding-left: 0; margin-bottom: 25px;">
                    <li style="margin-bottom: 18px;">
                        <strong>1. Prepare file:</strong> 
                        <ul style="padding-left: 20px; margin-top: 5px; list-style-type: circle;">
                            <li>Configure all settings in your slicer software and either slice the current print plate individually (<code>Slice&nbsp;plate</code>) or select <code>Slice&nbsp;all</code> from the dropdown menu.</li>
                            <li>Then click the arrow to the right of the export button and select <code>Export&nbsp;all&nbsp;sliced&nbsp;files</code> to generate the required <code>.gcode.3mf</code> file.</li>
                        </ul>
                    </li>
                    <li style="margin-bottom: 18px;">
                        <strong>2. Upload file:</strong>
                        <ul style="padding-left: 20px; margin-top: 5px; list-style-type: circle;">
                            <li>Switch to the <strong>Planner</strong> tab, click on <em>"Choose file..."</em> and upload the exported file.</li>
                        </ul>
                    </li>
                    <li style="margin-bottom: 18px;">
                        <strong>3. Configure times & options:</strong>
                        <ul style="padding-left: 20px; margin-top: 5px; list-style-type: circle;">
                            <li><strong>Start time:</strong> Set the desired execution time for the plates.</li>
                            <li><strong>Individual plate settings (for multiple plates):</strong> Enable this if plates should have different start times.</li>
                            <li><strong>Vibration test:</strong> The automatic vibration test per plate can be deactivated using the corresponding button.</li>
                        </ul>
                    </li>
                    <li style="margin-bottom: 18px;">
                        <strong>4. Convert file & print:</strong>
                        <ul style="padding-left: 20px; margin-top: 5px; list-style-type: circle;">
                            <li>Click on <strong>Modify file</strong>. The tool processes the code and automatically downloads a new file with the prefix <code>modified_...</code>. Open this file in the slicer and send it directly to the printer (<code>Print plate</code>).</li>
                        </ul>
                    </li>
                </ul>
                
                <div style="margin-top: 25px; padding: 15px; background: rgba(234, 179, 8, 0.1); border-left: 4px solid #eab308; border-radius: 6px; color: var(--text-color);">
                    <strong style="color: #eab308; display: block; margin-bottom: 5px;">⚠️ IMPORTANT:</strong>
                    <span style="color: #ffffff;">Do <strong>not slice the downloaded file again</strong> in the slicer! This would overwrite the modified code and erase the start delay.</span>
                </div>

                <div style="margin-top: 25px; padding: 15px; background: rgba(239, 68, 68, 0.1); border-left: 4px solid #ef4444; border-radius: 6px; color: var(--text-color);">
                    <strong style="color: #ef4444; display: block; margin-bottom: 5px;">⚠️ ATTENTION:</strong>
                    <span style="color: #ffffff;">When using the Printplaner for the first time, please <strong>stay by your 3D printer</strong> to monitor the startup process and ensure everything runs completely smooth.</span>
                </div>
            </div>
        `,

        // Komplette HTML Erklärung für Englisch (Funktionsweise)
        funktionHTML: `
            <div class="tab-content-inner">
                <h2>How does Printplaner work?</h2>
                <p>This tool unpacks the 3MF file directly locally in your browser and analyzes the G-code files contained for each print plate.</p>
                
                <h3>Start Delay</h3>
                <p>After the configuration block, the wait command <code>M400 S[seconds]</code> and the command <code>M1002 gcode_claim_action : 5</code> are inserted. Your 3D printer will display the message <em>"M400"</em> on the screen and count down the seconds in the background, creating the desired start delay.</p>
                
                <h3>Deactivate Vibration Test</h3>
                <p>Printplaner searches in the G-Code specifically for the unique code block responsible for the vibration test. This block is commented out within the G-code, allowing the machine to simply skip it during the print start sequence.</p>
                
                <div class="warning-box" style="margin-top: 25px; padding: 15px; background: rgba(239, 68, 68, 0.1); border: 1px solid #ef4444; border-radius: 10px; color: #ffffff;">
                    <strong style="color: #ef4444; display: block; margin-bottom: 5px;">⚠️ ATTENTION:</strong>
                    <span style="color: #ffffff;">When using the Printplaner for the first time, please <strong>stay by your 3D printer</strong> to monitor the startup process and ensure everything runs completely smooth.</span>
                </div>
            </div>
        `
    }
};

let currentLang = localStorage.getItem("lang") || "de";
let zipData = null;
let plateFiles = [];
let globalSkipVibration = false; 
let plateVibrationStates = [];
let hasJustDownloaded = false; 

// ==========================================================================
// 2. DOM-ELEMENTE INITIALISIEREN
// ==========================================================================
const fileInput = document.getElementById("fileInput");
const uploadLabel = document.getElementById("uploadLabel");
const fileStatusContainer = document.getElementById("fileStatusContainer");
const fileNameDisplay = document.getElementById("fileNameDisplay");
const removeFileBtn = document.getElementById("removeFileBtn");
const changeFileLabel = document.getElementById("changeFileLabel");

const plateSection = document.getElementById("plateSection");
const platesContainer = document.getElementById("platesContainer");
const processBtn = document.getElementById("processBtn");
const globalTimeInput = document.getElementById("globalTime");
const globalSkipVibrationBtn = document.getElementById("globalSkipVibrationBtn");
const individualMode = document.getElementById("individualMode");
const multiPlateOptions = document.getElementById("multiPlateOptions");
const themeToggle = document.getElementById("themeToggle");
const langToggle = document.getElementById("langToggle");

const lightbox = document.getElementById("imageLightbox");
const lightboxImg = document.getElementById("lightboxImg");

// ==========================================================================
// 3. CORE UI-LOGIK (THEME / SPRACHE / TABS)
// ==========================================================================
function updateLanguageUI() {
    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        if (translations[currentLang][key]) {
            if (el.tagName === "INPUT" && el.type === "button") {
                el.value = translations[currentLang][key];
            } else {
                el.innerHTML = translations[currentLang][key];
            }
        }
    });

    // 1. Injiziere den kompletten HTML-Guide direkt in den Anleitung-Tab
    const anleitungContainer = document.getElementById("tabContentAnleitung");
    if (anleitungContainer) {
        anleitungContainer.innerHTML = translations[currentLang].guideHTML;
    }

    // NEW: 2. Injiziere die komplette Funktionsweise direkt in den Funktion-Tab
    const funktionContainer = document.getElementById("tabContentFunktion");
    if (funktionContainer) {
        funktionContainer.innerHTML = translations[currentLang].funktionHTML;
    }

    // 3. Fallback für den Text der Upload-Zone
    const uploadPrompt = document.getElementById("uploadPrompt");
    if (uploadPrompt && (!plateFiles || plateFiles.length === 0)) {
        uploadPrompt.innerText = translations[currentLang].uploadText;
    }

    if (removeFileBtn) removeFileBtn.title = translations[currentLang].tooltipRemove;
    if (changeFileLabel) changeFileLabel.title = translations[currentLang].tooltipChange;

    langToggle.innerText = currentLang === "de" ? "EN" : "DE";
    
    if (plateFiles && plateFiles.length > 0) {
        updateAllInfos();
    }
}

langToggle.addEventListener("click", () => {
    currentLang = currentLang === "de" ? "en" : "de";
    localStorage.setItem("lang", currentLang);
    updateLanguageUI();
});

if (localStorage.getItem("theme") === "light") {
    document.body.classList.add("light-mode");
    themeToggle.innerText = "🌙 Dark Mode";
}

themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
    const isLight = document.body.classList.contains("light-mode");
    themeToggle.innerText = isLight ? "🌙 Dark Mode" : "☀️ Light Mode";
    localStorage.setItem("theme", isLight ? "light" : "dark");
});

globalSkipVibrationBtn.addEventListener("click", () => {
    hasJustDownloaded = false; // Zurücksetzen bei Einstellungsänderung
    globalSkipVibration = !globalSkipVibration;
    
    if (globalSkipVibration) {
        globalSkipVibrationBtn.innerHTML = '<span class="icon-skipped">✖</span>';
    } else {
        globalSkipVibrationBtn.innerHTML = '<span class="icon-active">✔</span>';
    }
    
    updateAllInfos(); 
});

// ==========================================================================
// TAB-SWITCH LOGIK
// ==========================================================================
const tabButtons = document.querySelectorAll(".tab-btn");
const tabContents = document.querySelectorAll(".tab-content");

tabButtons.forEach(button => {
    button.addEventListener("click", () => {
        tabButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        tabContents.forEach(content => content.classList.add("hidden"));
        const targetTab = button.getAttribute("data-tab");
        document.getElementById(`tabContent${targetTab}`).classList.remove("hidden");
    });
});

updateLanguageUI();
setInterval(updateAllInfos, 1000); 

// ==========================================================================
// 4. DATEI MANAGEMENT (LOAD / RESET)
// ==========================================================================
fileInput.addEventListener("change", load3mf);
if (removeFileBtn) removeFileBtn.addEventListener("click", resetFileSelection);

async function load3mf() {
    const file = fileInput.files[0];
    if (!file) return;

    if (uploadLabel) uploadLabel.classList.add("hidden");
    if (fileNameDisplay) fileNameDisplay.innerText = file.name;
    if (fileStatusContainer) fileStatusContainer.classList.remove("hidden");

    zipData = await JSZip.loadAsync(file);
    plateFiles = [];

    zipData.forEach((path) => {
        const lower = path.toLowerCase();
        if (lower.startsWith("metadata/plate_") && lower.endsWith(".gcode")) {
            plateFiles.push(path);
        }
    });

    plateFiles.sort((a, b) => {
        const numA = parseInt(a.match(/plate_(\d+)/i)?.[1] || 0);
        const numB = parseInt(b.match(/plate_(\d+)/i)?.[1] || 0);
        return numA - numB;
    });

    if (plateFiles.length === 0) {
        alert(translations[currentLang].errNoPlates);
        resetFileSelection();
        return;
    }

    individualMode.checked = false;
    hasJustDownloaded = false;

    await generatePlateUI();

    multiPlateOptions.classList.toggle("hidden", plateFiles.length <= 1);
    plateSection.classList.remove("hidden");
}

function resetFileSelection() {
    fileInput.value = "";
    zipData = null;
    plateFiles = [];
    plateVibrationStates = [];
    hasJustDownloaded = false;
    
    if (fileStatusContainer) fileStatusContainer.classList.add("hidden");
    if (fileNameDisplay) fileNameDisplay.innerText = "";
    if (uploadLabel) uploadLabel.classList.remove("hidden");
    
    plateSection.classList.add("hidden");
    platesContainer.innerHTML = "";
    globalTimeInput.value = "";
    globalTimeInput.classList.remove("has-value");
    individualMode.checked = false;
    globalSkipVibration = false;
    globalSkipVibrationBtn.innerHTML = '<span class="icon-active">✔</span>';
}

// ==========================================================================
// 5. PLATE DYNAMISCHE UI-GENERIERUNG
// ==========================================================================
async function generatePlateUI() {
    platesContainer.innerHTML = "";
    plateVibrationStates = [];

    for (let index = 0; index < plateFiles.length; index++) {
        const plate = plateFiles[index];
        const plateNum = plate.match(/plate_(\d+)/i)?.[1] || (index + 1);
        
        plateVibrationStates.push(false);

        const exactPathLower = `metadata/plate_${plateNum}.png`;
        const exactPathUpper = `metadata/Plate_${plateNum}.png`;
        
        let pngFile = zipData.file(exactPathLower) || zipData.file(exactPathUpper);

        if (!pngFile) {
            zipData.forEach((path) => {
                if (path.toLowerCase() === exactPathLower) {
                    pngFile = zipData.file(path);
                }
            });
        }

        let imgSrc = "";
        if (pngFile) {
            const base64 = await pngFile.async("base64");
            imgSrc = `data:image/png;base64,${base64}`;
            
            try {
                imgSrc = await new Promise((resolve) => {
                    const img = new Image();
                    img.onload = () => {
                        const canvas = document.createElement("canvas");
                        canvas.width = img.width;
                        canvas.height = img.height;
                        const ctx = canvas.getContext("2d");
                        
                        ctx.clearRect(0, 0, canvas.width, canvas.height);
                        ctx.drawImage(img, 0, 0);
                        resolve(canvas.toDataURL("image/png"));
                    };
                    img.onerror = () => resolve(`data:image/png;base64,${base64}`);
                    img.src = `data:image/png;base64,${base64}`;
                });
            } catch (e) {
                console.error("Fehler beim Verarbeiten der Bildtransparenz:", e);
            }
        }
        const card = document.createElement("div");
        card.className = "plate-card";

        card.innerHTML = `
            <div class="plate-content-wrapper">
                <div class="plate-info-side">
                    <div class="plate-top">
                        <label>
                            <input type="checkbox" id="enabled_${index}" checked>
                            ${plate}
                        </label>
                    </div>
                    
                    <div class="individual-time hidden" id="individualContainer_${index}">
                        <div class="plate-settings-row">
                            <div class="plate-time-container">
                                <span class="plate-label" data-i18n="startTime">Startzeit</span>
                                <input type="datetime-local" id="time_${index}">
                            </div>
                            <div class="plate-vibration-container">
                                <span class="plate-label" data-i18n="skipVibrationTitle">Vibrationstest</span>
                                <button type="button" id="skipVibrationBtn_${index}" class="toggle-btn">
                                    <span class="icon-active">✔</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    
                    <div class="info" id="info_${index}">
                         ${translations[currentLang].noTime}
                    </div>
                </div>
                ${imgSrc ? `
                <div class="plate-image-side">
                    <img src="${imgSrc}" alt="Plate ${plateNum} Preview" class="plate-preview-img" id="imgBtn_${index}">
                </div>
                ` : ""}
            </div>
        `;
        platesContainer.appendChild(card);

        document.getElementById(`enabled_${index}`).addEventListener("change", () => {
            hasJustDownloaded = false;
            updateAllInfos();
        });
        
        const localTimeInput = document.getElementById(`time_${index}`);
        localTimeInput.addEventListener("input", (e) => {
            hasJustDownloaded = false; // Zurücksetzen bei Änderung
            if (e.target.value) {
                e.target.classList.add("has-value");
            } else {
                e.target.classList.remove("has-value");
            }
            updateAllInfos();
        });

        const localVibBtn = document.getElementById(`skipVibrationBtn_${index}`);
        localVibBtn.addEventListener("click", () => {
            hasJustDownloaded = false; // Zurücksetzen bei Änderung
            plateVibrationStates[index] = !plateVibrationStates[index];
            if (plateVibrationStates[index]) {
                localVibBtn.innerHTML = '<span class="icon-skipped">✖</span>';
            } else {
                localVibBtn.innerHTML = '<span class="icon-active">✔</span>';
            }
            updateAllInfos();
        });

        if (imgSrc) {
            document.getElementById(`imgBtn_${index}`).addEventListener("click", () => {
                lightboxImg.src = imgSrc;
                lightbox.classList.remove("hidden");
            });
        }
    }

    addGlobalListeners();
    updateMode();
}

function addGlobalListeners() {
    globalTimeInput.removeEventListener("input", handleGlobalTimeInput);
    individualMode.removeEventListener("change", updateMode);
    
    globalTimeInput.addEventListener("input", handleGlobalTimeInput);
    individualMode.addEventListener("change", updateMode);
}

function handleGlobalTimeInput(e) {
    hasJustDownloaded = false; // Zurücksetzen bei Änderung
    if (e.target.value) {
        e.target.classList.add("has-value");
    } else {
        e.target.classList.remove("has-value");
    }
    updateAllInfos();
}

function updateMode() {
    hasJustDownloaded = false; // Zurücksetzen beim Modus-Wechsel
    const useIndividual = individualMode.checked;
    
    const globalSettingsRow = document.querySelector(".global-settings-row");
    if (globalSettingsRow) {
        globalSettingsRow.style.display = useIndividual ? "none" : "flex";
    }

    plateFiles.forEach((_, index) => {
        const container = document.getElementById(`individualContainer_${index}`);
        if (container) {
            container.classList.toggle("hidden", !useIndividual);
        }
    });

    updateAllInfos();
}

// ==========================================================================
// 6. EVENT-AUSWERTUNG, LIVE-BERECHNUNG & RAHMEN-LOGIK
// ==========================================================================
function updateAllInfos() {
    // Die Zeile "hasJustDownloaded = false;" wurde hier entfernt!
    if (!zipData || plateFiles.length === 0) return;

    const useIndividual = individualMode.checked;
    const now = new Date(); 

    plateFiles.forEach((_, index) => {
        const checkbox = document.getElementById(`enabled_${index}`);
        const info = document.getElementById(`info_${index}`);
        const timeInput = document.getElementById(`time_${index}`);
        
        if (!checkbox || !info || !timeInput) return;

        const enabled = checkbox.checked;
        const card = checkbox.closest(".plate-card");

        if (enabled) {
            if (card) card.classList.add("active-plate");
        } else {
            if (card) card.classList.remove("active-plate");
            info.innerText = translations[currentLang].disabled;
            return;
        }

        let targetDate;
        let hasTime = false;
        let skipVibrationForThisPlate = useIndividual ? plateVibrationStates[index] : globalSkipVibration;

        if (useIndividual) {
            const value = timeInput.value;
            if (value) {
                hasTime = true;
                targetDate = new Date(value);
            }
        } else {
            const value = globalTimeInput.value;
            if (value) {
                hasTime = true;
                targetDate = new Date(value);
            }
        }

        if (!hasTime) {
            if (skipVibrationForThisPlate) {
                info.innerText = translations[currentLang].statusVibSkippedNoDelay;
            } else {
                info.innerText = translations[currentLang].noTime;
            }
            return;
        }

        const totalSeconds = Math.floor((targetDate - now) / 1000);

        if (totalSeconds <= 0) {
            info.innerText = translations[currentLang].pastTime;
            return;
        }

        let msg = translations[currentLang].delayMsg.replace("{seconds}", totalSeconds);
        if (skipVibrationForThisPlate) {
            msg += translations[currentLang].statusVibOff;
        }
        info.innerText = msg;
    });
}

// ==========================================================================
// 7. G-CODE MODIFIKATION & EXPORT (PROCESS)
// ==========================================================================
processBtn.addEventListener("click", process3mf);

async function process3mf() {
    const useIndividual = individualMode.checked;
    let anyChangesMade = false;
    let activePlatesCount = 0;
    const now = new Date(); 

    for (let i = 0; i < plateFiles.length; i++) {
        const enabled = document.getElementById(`enabled_${i}`).checked;
        if (enabled) activePlatesCount++;
    }

    if (activePlatesCount === 0) {
        alert(currentLang === "de" ? "Bitte aktiviere mindestens eine Druckplatte." : "Please enable at least one print plate.");
        return; 
    }

    for (let i = 0; i < plateFiles.length; i++) {
        const enabled = document.getElementById(`enabled_${i}`).checked;
        if (!enabled) continue;

        let targetDateValue = useIndividual ? document.getElementById(`time_${i}`).value : globalTimeInput.value;
        let skipVibrationForThisPlate = useIndividual ? plateVibrationStates[i] : globalSkipVibration;

        const gcodeFile = zipData.file(plateFiles[i]);
        let gcode = await gcodeFile.async("string");
        let fileModified = false;

        if (skipVibrationForThisPlate) {
            const lines = gcode.split(/\r?\n/);
            let foundConfigBlockEnd = false;
            let insideMechMode = false;
            let mechModeCounter = 0;

            for (let j = 0; j < lines.length; j++) {
                const lineLower = lines[j].toLowerCase();

                if (!foundConfigBlockEnd) {
                    if (lineLower.includes("; config_block_end")) {
                        foundConfigBlockEnd = true;
                    }
                    continue; 
                }

                if (lineLower.includes("mech mode")) {
                    mechModeCounter++;
                    if (mechModeCounter === 1) {
                        insideMechMode = true;
                        continue; 
                    } else if (mechModeCounter === 2) {
                        insideMechMode = false;
                        continue; 
                    }
                }

                if (insideMechMode) {
                    if (!lines[j].trim().startsWith(";")) {
                        lines[j] = ";" + lines[j];
                        fileModified = true;
                    }
                }
            }
            if (fileModified) {
                gcode = lines.join("\n");
            }
        }

        if (targetDateValue) {
            const targetDate = new Date(targetDateValue);
            const seconds = Math.floor((targetDate - now) / 1000);

            if (seconds > 0) {
                const lines = gcode.split(/\r?\n/);
                let configBlockIndex = -1;

                for (let j = 0; j < lines.length; j++) {
                    if (lines[j].toLowerCase().includes("; config_block_end")) {
                        configBlockIndex = j;
                        break;
                    }
                }

                if (configBlockIndex !== -1) {
                    const insertBlock = `;ADD STARTDELAY\nM1002 gcode_claim_action : 5\nM400 S${seconds}`;
                    lines[configBlockIndex] = lines[configBlockIndex] + "\n" + insertBlock;
                    gcode = lines.join("\n");
                    fileModified = true;
                } else {
                    alert(translations[currentLang].errConfig.replace("{file}", plateFiles[i]));
                    continue;
                }
            } else {
                alert(translations[currentLang].errPast.replace("{file}", plateFiles[i]));
                return;
            }
        }

        if (fileModified) {
            anyChangesMade = true;
            zipData.file(plateFiles[i], gcode); 
        }
    }

    // Fehlerprüfung vor dem Download
    if (!anyChangesMade && !hasJustDownloaded) {
        alert(translations[currentLang].errNoPlates.includes("No")
            ? "No changes were made! Please select a future start time or toggle the vibration test button."
            : "Es wurden keine Änderungen vorgenommen! Bitte wähle eine Startzeit in der Zukunft oder deaktiviere den Vibrationstest.");
        return;
    }

    // Download ausführen
    const originalName = fileInput.files[0].name;
    const newFileName = `modified_${originalName}`;
    const new3mf = await zipData.generateAsync({ type: "blob" });

    const a = document.createElement("a");
    a.href = URL.createObjectURL(new3mf);
    a.download = newFileName;
    a.click();

    // Zustand merken für Folgeklicks
    hasJustDownloaded = true; 

    // Erfolgs-Animation für den Button
    const processBtnElement = document.getElementById("processBtn");
    if (processBtnElement) {
        const originalText = processBtnElement.value;
        processBtnElement.classList.add("success");
        processBtnElement.value = currentLang === "de" ? "✓ Datei konvertiert!" : "✓ File modified!";
        
        setTimeout(() => {
            processBtnElement.classList.remove("success");
            processBtnElement.value = originalText;
        }, 1500);
    }
}

// ==========================================================================
// 8. LIGHTBOX EVENT-LISTENER (SCHLIESSEN)
// ==========================================================================
if (lightbox) {
    lightbox.addEventListener("click", () => {
        lightbox.classList.add("hidden");
        lightboxImg.src = "";
    });
}