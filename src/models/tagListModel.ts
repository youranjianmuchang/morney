const tagListKeyName = 'tagList';
type Tag = {
    id: string;
    name: string;
}
type TagListModel = {
    data: Tag[];
    fetch: () => Tag[];
    create: (name: string) => 'success' | 'duplicated';
    save: () => void;
}
const tagListModel: TagListModel = {
    data: [],
    create(name: string) {
        const names = this.data.map(tag => tag.name);
        if (names.indexOf(name) >= 0) { return 'duplicated' }
        this.data.push({ 'id': name, 'name': name });
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