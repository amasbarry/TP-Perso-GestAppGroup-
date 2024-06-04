class Formateur {
    private id_form: number;
    private nom_form: string;
    private email_form: string;
    private mdp_form: string;

    constructor(id_form: number, nom_form: string, email_form: string, mdp_form: string) {
        this.id_form = id_form;
        this.nom_form = nom_form;
        this.email_form = email_form;
        this.mdp_form = mdp_form;
    }

    getIdForm(): number {
        return this.id_form;
    }

    setIdForm(id_form: number): void {
        this.id_form = id_form;
    }

    getNomForm(): string {
        return this.nom_form;
    }

    setNomForm(nom_form: string): void {
        this.nom_form = nom_form;
    }

    getEmailForm(): string {
        return this.email_form;
    }

    setEmailForm(email_form: string): void {
        this.email_form = email_form;
    }

    getMdpForm(): string {
        return this.mdp_form;
    }

    setMdpForm(mdp_form: string): void {
        this.mdp_form = mdp_form;
    }
}
