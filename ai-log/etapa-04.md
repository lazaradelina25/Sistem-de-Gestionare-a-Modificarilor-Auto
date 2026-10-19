# Etapa 4 – Componente construite din date

## Obiectiv
Înlocuirea listei afișate temporar ca JSON cu o listă de carduri generate din date, folosind componente React și props.

## Ce am realizat
- Am creat componenta `InterventieCard.jsx`, care afișează informațiile unei singure intervenții auto.
- Am creat componenta `InterventieList.jsx`, care primește lista de intervenții prin props și generează cardurile folosind `map()`.
- Am folosit atributul `key={task.id}` pentru identificarea unică a fiecărui card.
- Am implementat afișarea unui mesaj explicit atunci când lista este goală.
- Am integrat componenta `InterventieList` în `App.jsx`.
- Am păstrat cele trei intervenții de exemplu: schimb ulei și filtre, înlocuire plăcuțe de frână și instalare suspensie sport.

## Testare
- Am verificat afișarea celor trei intervenții în browser.
- Am verificat afișarea mesajului „Nu există nicio intervenție.” atunci când array-ul este gol.
- Am restaurat datele inițiale după testare.
- Am verificat consola browserului și nu au fost vizibile erori sau avertismente React în captura realizată.

## Utilizarea AI
Am folosit ChatGPT pentru identificarea și corectarea unei erori de sintaxă în `InterventieCard.jsx`, pentru verificarea componentelor React și pentru ghidare în testarea listei goale.

## Concluzie
Etapa 4 este implementată la nivelul componentelor și al testelor efectuate în browser. Actualizarea documentației și publicarea modificărilor pe GitHub urmează să fie finalizate.