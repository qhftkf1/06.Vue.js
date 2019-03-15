new Vue({
  el:'#vue-app',
  data:{

    age:28,
    a:1,
    b:0

  },
  // methods:{
  //
  // },
  computed:{
    AddAgeA: function(){
      console.log("thisA");
      return this.age + this.a;
    },
    AddAgeB: function(){
      console.log("thisB");
      return this.age + this.b;
    }
  }

  });
