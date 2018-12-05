export function saveToLocal(key, value) {
    let addrStore = window.localStorage.__address__;
    if (!addrStore) {
        addrStore = {};
        addrStore[key] = {};
    } else {
        addrStore = JSON.parse(addrStore);
        if (!addrStore[key]) {
            addrStore[key] = {};
        }
    }
    addrStore[key] = value;
    window.localStorage.__address__ = JSON.stringify(addrStore);
};
export function loadFromLocal(key, def) {
    let addrStore = window.localStorage.__address__;
    if (!addrStore) {
        return def;
    }
    addrStore = JSON.parse(addrStore);
    if (!addrStore) {
        return def
    }
    let ret = addrStore[key];
    return ret || def;
};