import clone from '@/lib/clone';
const recordListKeyName = 'recordList';
const recordListModel = {
    data: [] as RecordItem[],
    create(record: RecordItem) {
        const newRecord: RecordItem = clone(record);
        newRecord.createAt = new Date();
        this.data.push(newRecord);
    },
    fetch() {
        this.data = JSON.parse(
            window.localStorage.getItem(recordListKeyName) || "[]"
        );
        return this.data;
    },
    save() {
        window.localStorage.setItem(recordListKeyName, JSON.stringify(this.data));
    }
}
export { recordListModel }