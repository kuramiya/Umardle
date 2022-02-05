
//  乱数を取得する関数
function getRandomIntInclusive(min, max)
{
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}


//  Vueのオブジェクト
var app = new Vue({ 
    el: '#app',
    data:
    {
        randomNumber: 0,
        targetUmaName: "Uma",   //  答えの馬の名前
        raceNumber: 1,  //  レース番号、最大12Rまで
        currentInputUmaName: "",  //  現在入力された馬の名前
        inputUmaNameList: [],   //  入力された馬の名前リスト
    },
    methods:
    {
        //  答えの馬を設定する関数
        setTargetUma: function()
        {
            this.randomNumber = getRandomIntInclusive(0, allUmaData.length - 1);
            this.targetUmaName = allUmaData[this.randomNumber];
        },

        //  ゲームを初期化する関数
        reset: function()
        {
            this.setTargetUma();    //  答えの馬の設定
            this.raceNumber = 1;    //  レース番号の初期化
        },

        //  入力をチェックする関数
        checkInput: function()
        {
            this.inputUmaNameList.push(this.currentInputUmaName);

        },
    }
});

//  ブラウザの更新でゲームの初期化を行う
app.reset();

