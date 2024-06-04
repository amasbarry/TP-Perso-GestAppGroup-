class TP {
    private id_tp: number;
    private nom_tp: string;
    private description: string;
    private mdp_org: string;

    constructor(id_tp: number, nom_tp: string, description: string, mdp_org: string) {
        this.id_tp = id_tp;
        this.nom_tp = nom_tp;
        this.description = description;
        this.mdp_org = mdp_org;
    }

    getIdTp(): number {
        return this.id_tp;
    }

    setIdTp(id_tp: number): void {
        this.id_tp = id_tp;
    }

    getNomTp(): string {
        return this.nom_tp;
    }

    setNomTp(nom_tp: string): void {
        this.nom_tp = nom_tp;
    }

    getDescription(): string {
        return this.description;
    }

    setDescription(description: string): void {
        this.description = description;
    }

    getMdpOrg(): string {
        return this.mdp_org;
    }

    setMdpOrg(mdp_org: string): void {
        this.mdp_org = mdp_org;
    }
}
