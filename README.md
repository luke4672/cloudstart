# starterProject

StarterProjekt für Praktikanten zum erlernen der grundlegenden Technik von Projekten des Cloud-Teams

## Getting started

Ordnerstruktur/wichtige Files:
  

    - ./backup                  sql dumps
    - ./frontend                client bzw. nginx html 
    - ./dev                     nginx (webserver) Konfiguration, SSL-Zertifikat, hosts
    - ./src                     Backend
    - ./src/main                Backend Logik, REST API und Entity-Klassen
    - ./src/resources           JPA-Konfiguration persistence.xml
    - ./src/webapp              Servlet Konfiguration web.xml
    - ./pom.xml                 Backend Libaries und Abhängikeiten für Maven
    - ./docker-compose.yml      Docker Compose File welcher die Applikationsteile definiert
    - ./init.sh                 Script zum starten der Applikation

  



1. docker-compose up
2. ng serve (davor die dependencies installieren 'npm install')
3. localhost:4200  -> Frontend
4. http://localhost:8080/backend/api/hello/world -> Beispiel REST-Ressource

Wenn tomcat neu gestartet ist und man erstmals etwas einfügt kann es ein paar Sekunden dauern bis es erscheint.
Das ist ein Feature und dient dazu den Benutzer aus seinem hektischen Altag in einen kurzen Ruhemoment zu versetzen.

Der nginx container stoppt automatisch weil in 'hosts' keine IP ist.
Wenn man seine eigene einrägt, kann man das auch benutzen.
Davor muss man aber in todo.service.ts die URL ändern.

Wenn man tomcat lokal laufen lassen will um zu debuggen muss man in ThreadState 
und in todo.service.ts auch die Pfade anpassen.
Außerdem kann man nur tomcat 9 benutzen, für tomcat 10 muss man erst die Namen von
javax in jakarta ändern.

## Aufgaben

Baue eine TODO-Liste Applikation

1. TodoAPI.kt File erweitern um fehlende REST Schnittstellen  (siehe TODO im genannten File)
2. Frontend für CRUD Operationen bauen mit einer Technik deiner Wahl (siehe TODO in ./frontend/index.html)

## Gruppenmitglieder
| Name      | Matrikelnummer |
|-----------|----------------|
| Isabel    | 8471449        |
| Bastian   | 1712020        |
| Luke-Leon | 7744107        |