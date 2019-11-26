export default class LoginServices {
    constructor() {
        this._apiBase = 'https://thawing-fjord-70166.herokuapp.com'
    }

    setResource = async (url, mail, password) => {
        let user = {
            email: mail,
            password: password
        };

        const res = await fetch(`${this._apiBase}${url}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(user)
        });
        
        return res.status;
    }

    setLogIn = async (mail, password) => {
        const res = await this.setResource('/login/', mail, password);
        return res;
    }
}