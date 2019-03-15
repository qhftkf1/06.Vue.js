new Vue({
  el:'#vue-app',
  data:{
    name:'song',
    age:28,
    x:0,
    y:0
  },
  methods:{
    Increase: function(inc){
      return this.age += inc;
    },
    Decrease: function(dec){
      return this.age -= dec;
    },
    updateXY:function(event){
     this.x = event.offsetX;
     this.y = event.offsetY;
   },
   click: function(){
     alert("click this");
   }
  }
  });
