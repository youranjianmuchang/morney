import clone from '@/lib/clone';
const recordListKeyName = 'recordList';
const recordListStore = {
    recordList: [] as RecordItem[],
    createRecord(record: RecordItem) {
        const newRecord: RecordItem = clone(record);
        newRecord.createAt = new Date();
        this.recordList.push(newRecord);
        this.saveRecord();
    },
    fetchRecord() {
        this.recordList = JSON.parse(
            window.localStorage.getItem(recordListKeyName) || "[]"
        );
        return this.recordList;
    },
    saveRecord() {
        window.localStorage.setItem(recordListKeyName, JSON.stringify(this.recordList));
    }
}
recordListStore.fetchRecord();
export { recordListStore };