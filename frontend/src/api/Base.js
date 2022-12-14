export class Base {
    #baseUrl;
    #baseOpt;
    #headers;
    constructor() {
        this.#baseUrl = `http://localhost:3001/api/v1/`
        this.#headers = {
            'Content-Type': 'application/json'
        }
        this.#baseOpt = {}
    }

    setBearerAuth(token) {
        this.#headers.Authorization = `Bearer ${token}`;
        return this;
    }

    async #fetchData(endpoint, opt = {}) {
        const res = await fetch(`${this.#baseUrl}/${endpoint}`, {
            ...opt,
            headers: this.#headers
        });

        // if (!res.ok) throw new Error(res.statusText);

        if (opt.parseResponse !== false && res.status !== 204)
            return res.json();

        return undefined;
    }

    async get(endpoint, opt = {}) {
        return await this.#fetchData(endpoint, {
            ...opt,
            method: 'GET'
        })
    }

    async post(endpoint, body, opt = {}) {
        return await this.#fetchData(endpoint, {
            ...opt,
            method: 'POST',
            body: JSON.stringify(body)
        })
    }

    async update(endpoint, opt = {}) { }

    async delete(endpoint, opt = {}) { 
        return await this.#fetchData(endpoint, {
            ...opt,
            method: 'DELETE'
        })
    }
}