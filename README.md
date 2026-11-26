# Wetter & Kalender

Zwei eigenständige, mobilfreundliche HTML-Anwendungen im gemeinsamen Design. Die Seiten werden statisch über **GitHub Pages** veröffentlicht – ohne eigenen Server und ohne Benutzerkonto.

## Anwendungen

- **[Wetter öffnen](https://frankboesing.github.io/Wetter/)**
- **[Kalender öffnen](https://frankboesing.github.io/Wetter/Kalender.html)**

## Wetter

Die Wetterseite bietet:

- Aktuelle Wetterbedingungen sowie Stundenverlauf für 24 Stunden und 7-Tage-Vorhersage.
- Bis zu vier auswählbare und im Browser gespeicherte Orte.
- Wetterdetails, Luftqualität und Polleninformationen.
- Regionale amtliche MoWaS-Warnmeldungen.
- Sonnenaufgang, Sonnenuntergang, Tageslänge sowie Mondphase, Beleuchtung und Mondauf/-untergang.
- Einen Verkehrsbutton, der Google Maps mit aktivierter Verkehrsebene und dem aktuell ausgewählten Ort öffnet (Zoomstufe 14,92).

**Hinweis:** Für aktuelle Wetter-, Luftqualitäts- und Warnmeldungsdaten sowie Google Maps ist eine Internetverbindung erforderlich.

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
| `README.md` | Projektbeschreibung und Links |

## Betrieb

Die HTML-Dateien können direkt im Browser geöffnet werden. Für die Veröffentlichung über GitHub Pages wird im Repository unter **Settings → Pages** der Branch `main` mit dem Verzeichnis `/ (root)` ausgewählt.

Die Wetterseite benötigt für ihre aktuellen Daten Internetzugriff. Die Feiertags- und astronomischen Kalenderberechnungen erfolgen lokal im Browser.
