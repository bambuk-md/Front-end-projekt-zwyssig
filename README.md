# Dokumentation des Projektes

## Informationen zur OrdnerStruktur
-Im Ordner Comps sind alle Komponente des Projektes, um die Ordnerstruktur zu verbessern (inklusiv die CSS Dateien)
-Index.tsx rendert alle Komponente

## Frontend und Backend starten
Im Ganzen Projekt werden Requests zur Addresse: http://127.0.0.1:3000 geschickt. Es ist also zu empfehlen, zuerst das Backend, danach das Frontend zu starten. 

## Informationen zum Routing: 
Index.tsx rendert das Komponent "Chooser" (Routechooser.tsx), was alle andere Komponente rendert. Als default (localhost...:3001/) wird das VerifyLogin Komponent gerendert. Dieses schaut, ob man eingelogt ist. Wenn nicht wird man zum Komponent Login geführt, sonst zum Komponent Main. Wenn man direkt zu (localhost...:3001/main) geht, und man nicht eingelogt ist, wird zu (localhost:3001/) navigiert, wo wieder geschaut wird, ob man eingelogt ist...

# Informationen zu GitHub
Das Projekt ist unter: (https://github.com/bambuk-md/Front-end-projekt-zwyssig) zu finden. 

# Informationen zur Quellenangabe
Neben den Code, den ich kopiert, teilweise kopiert habe, wird die Quelle angegeben.

# Informationen zur Einhaltung von Coderichtlinien
Zur Einhaltung von Coderichtlinien wurde das Tool ESLint verwendet. Es wurden keine Errors, Warnings angezeigt. 

# Informationen zu Commits
Alle Commits sind im File commits.txt zu finden.