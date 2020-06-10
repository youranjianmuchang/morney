const recordListKeyName = 'recordList';
const recordListModel = {
    clone(data: RecordItem) {
        return JSON.parse(JSON.stringify(data));
    },
    fetch() {
        return JSON.parse(
            window.localStorage.getItem(recordListKeyName) || "[]"
        ) as RecordItem[];
    },
    save(data: RecordItem | RecordItem[]) {
        window.localStorage.setItem(recordListKeyName, JSON.stringify(data));
    }
}
export { recordListModel }