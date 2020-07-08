import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export class TagHelper extends Vue {
    createTag(name: string) {
        this.$store.commit('createTag', name);
        if (this.$store.state.tagListError) {
            this.$message.error(this.$store.state.tagListError.message);
        }
    }
}

export default TagHelper;