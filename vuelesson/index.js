Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
});

Vue.component("my-item", {
    props: ["a", "b"],
    template: '<span>{{a}} {{b}} </span>'
});

Vue.component("letter-component", {
    props: ["x", "label", "num"],
    template: '<span>{{label}} {{x}} {{num}}</span>',
});

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
        ],

        testList:
        [
            {index: 0, a: "aaa", b: "bbb"},
            {index: 1, a: "ccc", b: "ddd"},
        ],

        testLetters:
        [
            {index: 0, x: "ナ", label: "Match", num:10},
            {index: 1, x: "リ", label: "Match", num:20},
            {index: 2, x: "タ", label: "Near", num:30},
        ],
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
