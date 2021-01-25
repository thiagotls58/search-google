export class Search {
    private _query: string;

    constructor(query: string) {
        this._query = query;
    }

    get query() {
        return this._query;
    }
}