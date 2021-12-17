Feladat leírása

Titanic.json – ez egy adat tábla json formában, a fontosabb részek az oszlopok leírása – „attributes”, illetve a sorok - „rows”
Label_age, label_sex.json, stb – ezek az egyes oszlopokról tartalmaznak statisztikai információt
 
A feladat részei:

Frontend legyen create-react-app -pel készült React alkalmazás:

- Hook-ok - opcionális
- A nyelv legyen Javascript
- UI -hoz használj Ant Design komponens-eket

1. Töltsd be az adatot - titanic.json -  egy tetszőleges egyszerű web serverről (lehet Spring Boot, NodeJs vagy Python, amit szeretnél)
jelenítsd meg az adat táblát egy Ant Design table komponensben

2. Az egyes oszlop header-re kattintva töltődjön be az oszlophoz tartozó label_[attribute_name].json

3. A „topTenvValuesAndCount” mezőt felhasználva vizualizáld a kiválasztott mező eloszlását egy oszlop diagrammal

- Ha az attribútum típusa „categorical” – ez egy egyszerű bar chart, ebben az esetben a „value” mező a kategória neve, a „count” pedig a darabszám

- Ha az attribútum típusa „numerical” – ez egy histogram  - ebben az esetben a „value” egy intervallum (tól -ig határok), a „count” pedig darab szám

A vizualizációhoz ajánlott a Highcharts / D3 használata
 
Tesztek: kérlek készíts néhány unit tesztet, amit hasznosnak gondolsz.

Valamilyen hibakezelés: backend + frontend.
- pl NotFound error kezelése: BE + FE
 
A megoldást egy publikus Git repo-ba és legyen benne egy minimális readme, ami elmondja, hogyan kell elindítani a backend-et/frontend-et.

HatáridŐ. 4 - 7 nap
 