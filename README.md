# Umardle
Wordle uma version

## UI設計

[開始・リセットボタン]

第1レース：入力履歴

第2レース：入力履歴

・・・

第Xレース

[テキストボックス][実行ボタン]

惜しい文字

外れた文字

## 処理のメモ

1. 入力した馬名が全リストの馬名に存在しているか確認する
    1. 存在していない場合は、エラーメッセージを表示する
1. 対象の馬名と１字ずつ比較する
1. 文字ごとに完全一致、採用、非採用の分類分けをする
1. 分類分け処理
    1. すべてが一致している→ゲームクリア
    1. 一致リストを更新、不一致の部分があれば入れ替える  
    1. 採用リストを追加（重複は追加しない）、一致リストと重複しているものを削除する
    1. 不採用リスト追加（重複は追加しない）

## 参考サイト

### G1レース勝利馬
https://www.jra.go.jp/datafile/seiseki/replay/2022/g1.html

### Vue.js
https://jp.vuejs.org/v2/guide/index.html

## JavaScript基礎

### コメント
//で書く

### 乱数
https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Math/random

### リストに挿入する
https://maku77.github.io/js/array/push.html

