const axios = require('axios');
const router = require('express').Router();

const env = process.env;
const HOST = env.AUTH0_HOST;
const CLIENT_ID = env.AUTH0_CLIENT_ID;
const CLIENT_SECRET = env.AUTH0_CLIENT_SECRET;
const REDIRECT_URI = env.AUTH0_REDIRECT_URI;

function post(url, data) {
    return axios({
        method: 'POST',
        baseURL: HOST,
        url: url,
        data: data,
        headers: {
            'Content-Type': 'application/json; charset=utf-8'
        },
        validateStatus: status => status === 200
    });
}

router.post('/start', (req, res) => {
    post('/passwordless/start', Object.assign({}, req.body, {
        client_id: CLIENT_ID,
        connection: 'sms',
        send: 'code'
    }))
    .then(response => res.send(response.data))
    .catch(error => res.send(error));
});

router.post('/validate', (req, res) => {
    post('/oauth/token', Object.assign({}, req.body, {
        audience: HOST,
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
        grant_type: 'password',
        redirect_uri: REDIRECT_URI,
        scope: 'openid'
    }))
    .then(response => res.send(response.data))
    .catch(error => res.send(error));
});

module.exports = router;
