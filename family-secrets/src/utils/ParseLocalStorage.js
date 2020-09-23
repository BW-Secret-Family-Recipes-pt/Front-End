export let id = ''
export let token = ''

if (localStorage.getItem('user')) {
    const userID = JSON.parse(localStorage.getItem('user'));
    id = userID.id;
    token = userID.token;
}