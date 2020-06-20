import createId from '@/lib/idCreator'
const tagListKeyName = 'tagList';
const tagListStore = {
    tagList: [] as Tag[],
    createTag() {
        const name = prompt("请输入标签名称");
        if (name) {
            const names = this.tagList.map(tag => tag.name);
            if (names.indexOf(name) >= 0) {
                alert("标签已存在");
                return 'duplicated'
            } else {
                this.tagList.push({ 'id': createId().toString(), 'name': name });
                this.saveTag();
                alert("添加成功");
                return 'success';
            }
        }
    },
    fecthTag() {
        this.tagList = JSON.parse(
            window.localStorage.getItem(tagListKeyName) || "[]"
        );
        return this.tagList;
    },
    findTag(id: string) {
        return this.tagList.filter(tag => tag.id === id)[0];
    },
    updateTag(id: string, name: string) {
        const ids = this.tagList.map(tag => tag.id);
        if (ids.indexOf(id) >= 0) {
            const names = this.tagList.map(tag => tag.name);
            if (names.indexOf(name) >= 0) {
                return 'duplicated'
            } else {
                const currentTag = this.tagList.filter(tag => tag.id === id)[0];
                if (currentTag) {
                    currentTag.name = name;
                    this.saveTag();
                    return 'success';
                } else {
                    return 'not found'
                }
            }
        } else {
            return 'not found';
        }
    },
    removeTag(id: string) {
        let index = 0;
        for (let i = 0; i < this.tagList.length; i++) {
            if (this.tagList[i].id === id) {
                index = i;
                break;
            }
        }
        this.tagList.splice(index, 1);
        this.saveTag();
        return true;
    },
    saveTag() {
        window.localStorage.setItem(tagListKeyName, JSON.stringify(this.tagList));
    }
}
tagListStore.fecthTag();
export default tagListStore;