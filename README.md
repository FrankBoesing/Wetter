# Wetter & Kalender

Drei mobilfreundliche HTML-Anwendungen im gemeinsamen Design. Die Seiten werden statisch über **GitHub Pages** veröffentlicht – ohne eigenen Server und ohne Benutzerkonto.

## Anwendungen

- **[Wetter öffnen](https://frankboesing.github.io/Wetter/)**
- **[Kalender öffnen](https://frankboesing.github.io/Wetter/Kalender.html)**
- **[Regenradar öffnen](https://frankboesing.github.io/Wetter/Regenradar.html)**

## Wetter

Die Wetterseite bietet:

- Aktuelle Wetterbedingungen sowie Stundenverlauf für 24 Stunden und 7-Tage-Vorhersage.
- Bis zu vier auswählbare und im Browser gespeicherte Orte.
- Wetterdetails, Luftqualität und Polleninformationen.
- Regionale amtliche MoWaS-Warnmeldungen.
- Sonnenaufgang, Sonnenuntergang, Tageslänge sowie Mondphase, Beleuchtung und Mondauf/-untergang.
- Einen Verkehrsbutton, der Google Maps mit aktivierter Verkehrsebene und dem aktuell ausgewählten Ort öffnet (Zoomstufe 14,92).
- Einen Regenradar-Einstieg, der den aktiven Wetterort samt Koordinaten an `Regenradar.html` übergibt.

**Hinweis:** Für aktuelle Wetter-, Luftqualitäts- und Warnmeldungsdaten sowie Google Maps ist eine Internetverbindung erforderlich.

## Regenradar

- Interaktive Einbettung des NIERAD-Regenradars ohne API-Key oder Benutzerkonto.
- Beim Aufruf aus der Wetterseite werden Name und Koordinaten des ausgewählten Ortes übergeben.
- Ohne gültige Ortskoordinaten in der URL wird die Gesamtansicht Deutschland angezeigt.
- Die Radar-Seite selbst verarbeitet keine Wetterdaten; Karte, Zeitleiste und kurzfristige Prognose kommen von NIERAD.

## Kalender

Der Kalender ist ein eigenständiger, vollständig offline nutzbarer Feiertags- und Ereigniskalender:

- Gesetzliche Feiertage für alle 16 deutschen Bundesländer.
- Berücksichtigung regionaler Sonderregelungen, beispielsweise in Bayern sowie in Teilen Sachsens und Thüringens.
- Monatsansicht, Jahresübersicht und chronologische Feiertagsliste.
- ISO-Kalenderwochen und anpassbarer Wochenbeginn.
- Meteorologische und astronomische Jahreszeitenwechsel.
- Berechnete Mondphasen: Neu-, Viertel- und Vollmond.
- Fest hinterlegte, in Deutschland sichtbare Mondfinsternisse für 2027 bis 2036.
- Einstellbares Erscheinungsbild; Einstellungen werden lokal im Browser gespeichert.

Es gibt keine Terminverwaltung, Ereigniserstellung oder Erinnerungsfunktion.

## Dateien

| Datei | Zweck |
|---|---|
| `index.html` | Leitet auf die Wetterseite weiter |
| `Wetter.html` | Wetterübersicht |
| `Kalender.html` | Feiertags- und Ereigniskalender |
| `Regenradar.html` | Eingebettetes NIERAD-Regenradar; übernimmt den Wetterort über URL-Parameter oder zeigt Deutschland |\n| `manifest.webmanifest` | PWA-Name, Startseite, Anzeigemodus und App-Icons |\n| `service-worker.js` | App-Shell-Cache, Aktualisierung und Offline-Fallback |\n| `offline.html` | Lokale Offline-Hinweisseite |\n| `icons/` | PNG-Icons für App-Launcher und maskable Darstellung |
| `README.md` | Projektbeschreibung und Links |

## Progressive Web App

- Die Anwendung ist über GitHub Pages (HTTPS) als PWA installierbar.
- Das Manifest startet die App auf der Wetterseite; Kalender und Regenradar sind innerhalb derselben App erreichbar.
- Der Service Worker speichert die lokalen HTML-Seiten, das Manifest und die App-Icons im Cache und stellt bei Offline-Navigation die gespeicherte Seite bzw. eine Offline-Fallback-Seite bereit.
- Der Cache enthält in dieser ersten Ausbaustufe nur die App-Shell. Wetter-, Luftqualitäts-, Warnungs- und Radar-Daten werden nicht offline gespeichert und benötigen weiterhin eine Internetverbindung.

## Betrieb

Die HTML-Dateien können direkt im Browser geöffnet werden. Für die Veröffentlichung über GitHub Pages wird im Repository unter **Settings → Pages** der Branch `main` mit dem Verzeichnis `/ (root)` ausgewählt.

Die Wetterseite benötigt für ihre aktuellen Daten Internetzugriff. Die Feiertags- und astronomischen Kalenderberechnungen erfolgen lokal im Browser.
