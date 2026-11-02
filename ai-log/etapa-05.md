# Jurnal AI - Etapa 5: State local și evenimente

## Data: 26 Octombrie 2026

### Activități efectuate
1. **Păstrarea listei în State (`useState`)**: 
   - Am transformat array-ul de date statice din `App.jsx` în `TASKURI_INITIALE` și l-am asociat stării componentei prin hook-ul `useState`[cite: 1, 2, 3].
2. **Implementarea funcțiilor imutabile de modificare**: 
   - Am scris funcția `handleToggle` utilizând `.map()` pentru a comuta starea de bifare a unei intervenții pe baza id-ului, respectând imutabilitatea[cite: 2, 3, 4].
   - Am scris funcția `handleDelete` utilizând `.filter()` pentru a elimina o intervenție din listă fără a modifica direct starea anterioară[cite: 2, 3, 4].
3. **Valoarea derivată pentru contor**: 
   - Am calculat dinamic numărul de intervenții active direct din listă la fiecare randare, evitând stocarea redundantă a contorului în `state`[cite: 3, 4].
4. **Transmiterea prin Props**: 
   - Am transmis funcțiile `onToggle` și `onDelete` prin intermediul componentei intermediare `InterventieList` către fiecare componentă `InterventieCard`[cite: 2, 3, 4].
5. **Comutarea temei (Light / Dark Mode)**: 
   - Am adăugat starea pentru temă, preluând preferința inițială a sistemului de operare și permițând utilizatorului să comute manual tema printr-un buton dedicat în antet[cite: 9].
   - Am actualizat atributul `data-theme` pe elementul `<html>` și am definit variabilele CSS corespunzătoare în `App.css`[cite: 9, 10].
6. **Stilizare și Verificare**: 
   - Am adăugat stilurile pentru checkbox, carduri interactive, starea tăiată a textului pentru elementele finalizate și butonul de ștergere cu etichetă de accesibilitate (`aria-label`)[cite: 4].
   - Am verificat absența erorilor sau a avertismentelor în consola browserului.

### Observații
- Modificările efectuate sunt stocate local în memorie (sesiunea browserului) și se resetează la reîncărcarea paginii, urmând a fi conectate la un API în Etapa 6[cite: 7, 14].