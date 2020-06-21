import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export class TagHelper extends Vue {
    createTag() {
        const name = prompt("请输入标签名称");
        if (!name) { return window.alert('标签名不能为空'); }
        this.$store.commit('createTag', name);
    }
}

export default TagHelper;