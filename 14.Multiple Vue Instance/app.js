var one = new Vue({
  el:'#vue-app-one',
  data:{
    title:'VUE APP ONE'
  },
  methods:{

  },
  computed:{
    greet:function(){
      return 'Hello from app one:)';
    }
  }
});

var two = new Vue({
  el:'#vue-app-two',
  data:{
    title:'Vue app two'
  },
  methods:{
    changeTitle:function(){
      one.title = "Title changed";
    }
  },
  computed:{
    greet:function(){
      return 'Yo dudes, this is app two:)';
    }
  }
});

two.title="Changed from outside!";
