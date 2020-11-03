const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name:'',
     lastName:''
    };
  },
  watch:{
    counter(value){
      if(value > 50){
        this.counter=0
      }
    }
  },
  computed:{
    fullName(){
      if(this.name === '' || this.lastName === ''){
        return ''
      }
      return this.name + ' ' + this.lastName
    }
  },
  methods:{
    outputFullName(){
      if(this.name === ''){
        return ''
      }
      return this.name + ' ' + 'Khan'
    },
    add(num){
      this.counter=this.counter+num
    },
    reduce(num){
      this.counter=this.counter-num
    },
    resetInput(){
      this.name=""
    }
  }
});

app.mount('#events');
