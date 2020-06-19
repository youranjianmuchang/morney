import createId from '@/lib/idCreator'
const tagListKeyName = 'tagList';
const tagListModel: TagListModel = {
    data: [],
    create(name: string) {
        const names = this.data.map(tag => tag.name);
        if (names.indexOf(name) >= 0) { return 'duplicated' }
        this.data.push({ 'id': createId().toString(), 'name': name });
        this.save();
        return 'success';
    },
    fetch() {
        this.data = JSON.parse(
            window.localStorage.getItem(tagListKeyName) || "[]"
        );
        return this.data
    },
    update(id: string, name: string) {
        const ids = this.data.map(tag => tag.id);
        if (ids.indexOf(id) >= 0) {
            const names = this.data.map(tag => tag.name);
            if (names.indexOf(name) >= 0) {
                return 'duplicated'
            } else {
                const currentTag = window.findTag(id);
                if (currentTag) {
                    currentTag.name = name;
                    this.save();
                    return 'success';
                } else {
                    return 'not found'
                }
            }
        } else {
            return 'not found';
        }
    },
    save() {
        window.localStorage.setItem(tagListKeyName, JSON.stringify(this.data));
    },
    remove(id: string) {
        let index = 0;
        for (let i = 0; i < this.data.length; i++) {
            if (this.data[i].id === id) {
                index = i;
                break;
            }
        }
        this.data.splice(index, 1);
        this.save();
        return true;
    }
}
export { tagListModel }