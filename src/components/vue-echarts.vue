<template>
    <div ref="container"></div>
</template>

<script>
    import echarts from "echarts";
    export default {
        name: 'Echarts',
        props:{
          options:{
              type:Object
          }
        },
        watch:{
          options(){
              this.charts.setOption(this.options);
          }
        },
        mounted() {
            const container = this.$refs.container
            const width = document.documentElement.clientWidth;
            container.style.width = width + 'px';
            container.style.height = width * 1.2 + 'px';
            this.charts = echarts.init(container);
            // 使用刚指定的配置项和数据显示图表。
            this.charts.setOption(this.options);
        }
    }
</script>

<style scoped>

</style>