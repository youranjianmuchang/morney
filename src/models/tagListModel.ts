const tagListKeyName = 'tagList';
type TagListModel = {
    data: string[];
    fetch: () => string[];
    create: (name: string) => 'success' | 'duplicated';
    save: () => void;
}
const tagListModel: TagListModel = {
    data: [],
    create(name: string) {
        if (this.data.indexOf(name) >= 0) { return 'duplicated' }
        this.data.push(name);
        this.save();
        return 'success';
    },
    fetch() {
        this.data = JSON.parse(
            window.localStorage.getItem(tagListKeyName) || "[]"
        );
        return this.data
    },
    save() {
        window.localStorage.setItem(tagListKeyName, JSON.stringify(this.data));
    }
}
export { tagListModel }