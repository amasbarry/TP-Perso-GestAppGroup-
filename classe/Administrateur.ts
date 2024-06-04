class Administrateur {
    private id_admin: number;
    private nom_admin: string;
    private email_admin: string;
    private mdp_admin: string;
    private id_appren: number | null;
    private id_form: number | null;

    constructor(id_admin: number, nom_admin: string, email_admin: string, mdp_admin: string, id_appren: number | null, id_form: number | null) {
        this.id_admin = id_admin;
        this.nom_admin = nom_admin;
        this.email_admin = email_admin;
        this.mdp_admin = mdp_admin;
        this.id_appren = id_appren;
        this.id_form = id_form;
    }

    // Getters and Setters
    getIdAdmin(): number { return this.id_admin; }
    setIdAdmin(value: number): void { this.id_admin = value; }

    getNomAdmin(): string { return this.nom_admin; }
    setNomAdmin(value: string): void { this.nom_admin = value; }

    getEmailAdmin(): string { return this.email_admin; }
    setEmailAdmin(value: string): void { this.email_admin = value; }

    getMdpAdmin(): string { return this.mdp_admin; }
    setMdpAdmin(value: string): void { this.mdp_admin = value; }

    getIdAppren(): number | null { return this.id_appren; }
    setIdAppren(value: number | null): void { this.id_appren = value; }

    getIdForm(): number | null { return this.id_form; }
    setIdForm(value: number | null): void { this.id_form = value; }
}
