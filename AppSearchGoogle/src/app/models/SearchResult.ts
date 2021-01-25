export class SearchResult {
    private _titulo: string;
    private _link: string;

    constructor(titulo: string, link: string) {
        this._titulo = titulo;
        this._link = link;
    }

    get titulo() {
        return this._titulo;
    }

    get link() {
        return this._link;
    }
}