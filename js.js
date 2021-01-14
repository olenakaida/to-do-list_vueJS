Vue.createApp({
    data() {
       return {
           items:[],
           enteredValue: "",
           isActive: false,
        active:false,
       };
    },
    methods: {
        addItem: function() {
            if (this.enteredValue !== "") { 
       this.items.push(this.enteredValue),
       this.enteredValue = "";
}
    },
    remove: function(index) {
       this.items.splice(index, 1);
   },
   cross: function() {
   this.isActive = !this.isActive;
 },
 clearAll(){
     this.items=[];
 },
 }
}).mount('#app')