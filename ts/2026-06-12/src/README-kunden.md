Erstelle ein Programm. Gefordert ist eine Factory!
- Es gibt vier Kontoarten
- Privatkonten besitzen die Eigenschaft Saldo und die Methode Überweisung
- Geschäftskonten besitzen die Eigenschaft Saldo und den Boolean gebürgt. Zudem die Methode Überweisung.
- Mitarbeiterkonten haben ein Saldo und können ebenfalls überweisen
- Die Überweisung ist bei jedem Kontotypen anders. So können Mitarbeiter beispielsweise nur digital überweisen.
- Es soll eine FactoryKlasse mit dem Namen "FactoryKonten" erstellt werden, mit der Create Methode, die alle Kontotypen erstellen kann.
- Für den Default gibt es einen weiteren Kontotypen mit dem Namen "StandardKonto", welches Saldo und Überweisung hat.
- Jede Klasse soll eine Methode haben, mit dem Namen Info. Über diese wird der Name des Kontotypen returned (Privat, Mitarbeiter usw.)