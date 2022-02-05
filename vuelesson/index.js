Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
})

var app = new Vue({ 
    el: '#app',
    data: {
        message: 'Hello Vue!',
        seen: true,
        actNumber: 0,
        myInput: "xxx",

        groceryList: [
            {id: 0, text: 'Veg'},
            {id: 1, text: 'Cheese'},
            {id: 2, text: 'Else'},
        ]
    },
    methods:
    {
        runAction: function()
        {
            this.actNumber = this.actNumber + 1
        }
    }
});

app.message = "xxx"
