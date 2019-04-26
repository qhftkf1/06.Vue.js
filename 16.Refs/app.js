


new Vue({
  el:'#vue-app',
  data:{
    output:"Your fav food"
  },
  methods:{
    readRef:function(){
      console.log(this.$refs.test.innertest);
      this.output=this.$refs.test.innertest;
    }
  }
});
