const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name:'',
      confirmedName:''
    };
  },
  methods:{
    submitForm(e){
      alert('Submitted!')
    },
    confirmInput(){
      this.confirmedName = this.name
    },
    setName(event){
      this.name=event.target.value
    },
    add(num){
      this.counter=this.counter+num
    },
    reduce(num){
      this.counter=this.counter-num
    }
  }
});

app.mount('#events');
