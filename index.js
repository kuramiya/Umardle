
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
            letterLabels.push({index: i, letter: inputLetter, label: "MissLetter"});
        }
        else if(inputLetter == targetLetter)
        {
            letterLabels.push({index: i, letter: inputLetter, label: "MatchLetter"});
        }
        else if(targetUmaName.indexOf(inputLetter) > 0)
        {
            letterLabels.push({index: i, letter: inputLetter, label: "NearLetter"});
        }
        else
        {
            letterLabels.push({index: i, letter: inputLetter, label: "MissLetter"});
        }
    }

    return letterLabels;
}

//  すべてが一致しているラベル群かどうかを返す
function isAllLabelMatched(letterLabels)
{
    for(letterLabel of letterLabels)
    {
        if(letterLabel.label != "MatchLetter") return false;
    }
    return true;
}

//  文字表示用のコンポーネント
Vue.component("letter-component",
{
    props: ["label", "letter"],
    template: '<span>{{letter}}</span>',
});

//  Vueのオブジェクト
var app = new Vue({ 
    el: '#app',
    data:
    {
        message: "",    //  ユーザーへのメッセージ
        messageStyle: "",   //  メッセージの就職方法
        targetUmaName: "Uma",   //  答えの馬の名前
        raceNumber: 1,  //  レース番号、最大12Rまで
        raceEnabled: true,  //  ゲームが実行可能かどうか
        currentInputUmaName: "",  //  現在入力された馬の名前
        inputHistories: [],   //  入力履歴
        nearLetters: [],
        missLetters: [],
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
            this.raceEnabled = true;
            this.message = "";
            this.messageStyle = "";
            this.currentInputUmaName = "";
            this.inputHistories = [];
        },

        //  入力をチェックする関数
        checkInput: function()
        {
            if(this.raceEnabled == false) return;

            //  存在する馬名かどうかチェックする
            var exists = isExistingUmaName(this.currentInputUmaName);

            if(exists)
            {
                this.message = "";
                this.messageStyle = "";
            }
            else
            {
                this.message = "入力エラー。リストにない馬名です。";
                this.messageStyle = "text-danger";
                return;
            }

            var letterLabels = getUmaNameMatchLabels(this.targetUmaName, this.currentInputUmaName);

            this.inputHistories.push({racenumber: this.raceNumber, letterlabels: letterLabels});

            if(isAllLabelMatched(letterLabels))
            {
                this.raceEnabled = false;
                this.message = "正解しました！　おめでとうございます！";
                this.messageStyle = "text-success";
                return;
            }

            this.currentInputUmaName = "";
            this.raceNumber += 1;

            if(this.raceNumber > 12)
            {
                this.racenumber = 12;
                this.raceEnabled = false;
                this.message = "本日のレースは終了しました……。（答え：" + this.targetUmaName + "）";
                this.messageStyle = "text-danger";
            }
        },
    }
});

//  ブラウザの更新でゲームの初期化を行う
app.reset();

