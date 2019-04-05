<template>
    <div>
        <p>My name is {{ name }}</p>
        <input type="text" v-model="name">
    </div>
</template>

<script>
    export default {
        data() {
            return {
                name: 'My name'
            }
        },
        methods:{
            calculate: function(a, b){
                if (a && b) {
                    return 1;
                }
                return 0;
            },
            divide: function(a,b){
                return a/b;
            }
        }
    }
</script>