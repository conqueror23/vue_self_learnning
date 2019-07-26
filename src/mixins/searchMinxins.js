export default{
    computed: {
        filteredList:function(){
            return this.listh.filter((item)=>{
                return item.match(this.search)
            })
        }
    },
}