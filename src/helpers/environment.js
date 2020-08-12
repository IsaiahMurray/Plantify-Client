let APIURL = '';


switch (window.location.hostname) {
    case 'localhost' || '127.0.0.1':
    APIURL = 'http://localhost:3002'
    break;

    case 'plantify-gardening-app.herokuapp.com':
        APIURL = 'https://plantify-server.herokuapp.com'
}

export default APIURL;