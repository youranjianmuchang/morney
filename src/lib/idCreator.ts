const idKeyName = 'idkey';
let id: number = parseInt(window.localStorage.getItem(idKeyName) || '0') || 0;
function createId() {
    id++;
    window.localStorage.setItem(idKeyName, id.toString());
    return id;
}

export default createId;