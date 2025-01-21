export function getAuthToken() {
    const token = localStorage.getItem('token');
    return token;
}

export function tokenLLoader() {
    return getAuthToken();   
}