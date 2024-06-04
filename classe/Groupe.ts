class Groupe {
    private id_groupe: number;
    private id_tp: number | null;
    private nom: string;
    private descriptions: string;
    private date: Date;

    constructor(id_groupe: number, id_tp: number | null, nom: string, descriptions: string, date: Date) {
        this.id_groupe = id_groupe;
        this.id_tp = id_tp;
        this.nom = nom;
        this.descriptions = descriptions;
        this.date = date;
    }

    getIdGroupe(): number {
        return this.id_groupe;
    }

    setIdGroupe(id_groupe: number): void {
        this.id_groupe = id_groupe;
    }

    getIdTp(): number | null {
        return this.id_tp;
    }

    setIdTp(id_tp: number | null): void {
        this.id_tp = id_tp;
    }

    getNom(): string {
        return this.nom;
    }

    setNom(nom: string): void {
        this.nom = nom;
    }

    getDescriptions(): string {
        return this.descriptions;
    }

    setDescriptions(descriptions: string): void {
        this.descriptions = descriptions;
    }

    getDate(): Date {
        return this.date;
    }

    setDate(date: Date): void {
        this.date = date;
    }
}
