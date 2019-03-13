new Vue({
  el:'#app',
  data:{
    name:'song',
    destination:'Sunny Vale',
    website:'www.naver.com',
    goto:'<a href="www.naver.com">gotoThere</a>'
  },
  methods:{
    dest:function(greet){
      return greet + ' ' + this.name + ' will go to ' + this.destination;
    }
  }

});
