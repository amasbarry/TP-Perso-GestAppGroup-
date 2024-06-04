class Apprenant {
    private id_appren: number;
    private id_groupe: number | null;
    private nom_appren: string;
    private email_appren: string;
    private mdp_appren: string;
    private role_appren: 'Formateur' | 'User';

    constructor(id_appren: number, id_groupe: number | null, nom_appren: string, email_appren: string, mdp_appren: string, role_appren: 'Formateur' | 'User') {
        this.id_appren = id_appren;
        this.id_groupe = id_groupe;
        this.nom_appren = nom_appren;
        this.email_appren = email_appren;
        this.mdp_appren = mdp_appren;
        this.role_appren = role_appren;
    }

    getIdAppren(): number {
        return this.id_appren;
    }

    setIdAppren(id_appren: number): void {
        this.id_appren = id_appren;
    }

    getIdGroupe(): number | null {
        return this.id_groupe;
    }

    setIdGroupe(id_groupe: number | null): void {
        this.id_groupe = id_groupe;
    }

    getNomAppren(): string {
        return this.nom_appren;
    }

    setNomAppren(nom_appren: string): void {
        this.nom_appren = nom_appren;
    }

    getEmailAppren(): string {
        return this.email_appren;
    }

    setEmailAppren(email_appren: string): void {
        this.email_appren = email_appren;
    }

    getMdpAppren(): string {
        return this.mdp_appren;
    }

    setMdpAppren(mdp_appren: string): void {
        this.mdp_appren = mdp_appren;
    }

    getRoleAppren(): 'Formateur' | 'User' {
        return this.role_appren;
    }

    setRoleAppren(role_appren: 'Formateur' | 'User'): void {
        this.role_appren = role_appren;
    }
}
