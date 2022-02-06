
//  乱数を取得する関数
function getRandomIntInclusive(min, max)
{
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

//  存在している馬名かどうかを返す
function isExistingUmaName(umaName)
{
    for(var listUmaName of allUmaData)
    {
        if(listUmaName == umaName)
        {
            return true;
        }
    }
    return false;
}

//  対象の馬名の文字ごとにMatch, Near, Missのラベルを付けたものを返す
function getUmaNameMatchLabels(targetUmaName, inputUmaName)
{
    var letterLabels = [];

    for(i = 0; i < inputUmaName.length; ++i)
    {
        var inputLetter = inputUmaName[i];
        var targetLetter = targetUmaName[i];

        if(targetLetter === undefined)
        {
            letterLabels.push({index: i, letter: inputLetter, label: "Miss"});
        }
        else if(inputLetter == targetLetter)
        {
            letterLabels.push({index: i, letter: inputLetter, label: "Match"});
        }
        else if(targetUmaName.indexOf(inputLetter) > 0)
        {
            letterLabels.push({index: i, letter: inputLetter, label: "Near"});
        }
        else
        {
            letterLabels.push({index: i, letter: inputLetter, label: "Miss"});
        }
    }

    return letterLabels;
}

//  文字表示用のコンポーネント
Vue.component("letter-component",
{
    props: ["label", "inputLetter"],
    template: '<span class="{{label}}Letter">{{inputLetter}}</span>',
})

//  Vueのオブジェクト
var app = new Vue({ 
    el: '#app',
    data:
    {
        message: "",    //  ユーザーへのメッセージ
        targetUmaName: "Uma",   //  答えの馬の名前
        raceNumber: 1,  //  レース番号、最大12Rまで
        currentInputUmaName: "",  //  現在入力された馬の名前
        inputHistories: [],   //  入力履歴
        matchLetters: [],
        nearLetters: [],
        missLetters: [],
        xxxLetters:
        [
            {index: 0, letter: "ナ", label: "Match"},
            {index: 1, letter: "リ", label: "Match"},
            {index: 2, letter: "タ", label: "Near"},
        ],
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
            //  存在する馬名かどうかチェックする
            var exists = isExistingUmaName(this.currentInputUmaName);

            if(exists)
            {
                this.message = "存在する馬名です";
            }
            else
            {
                this.message = "エラー、存在しない馬名です";
                return;
            }

            var letterLabels = getUmaNameMatchLabels(this.targetUmaName, this.currentInputUmaName);

            this.message = letterLabels;
            this.inputHistories.push({raceNumber: this.raceNumber, letterLabels: letterLabels});

            this.raceNumber += 1;
        },
    }
});

//  ブラウザの更新でゲームの初期化を行う
app.reset();

