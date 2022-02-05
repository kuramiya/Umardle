# Umardle
Wordle uma version

## UI設計

[開始・リセットボタン]

当たった文字：□□□□□□□□□

惜しい文字：

外れた文字：

第Xレース

[テキストボックス][実行ボタン]

第1レース：入力履歴

第2レース：入力履歴

## 処理のメモ

1. 入力した馬名が全リストの馬名に存在しているか確認する
    1. 存在していない場合は、エラーメッセージを表示する
1. 対象の馬名と１字ずつ比較する
1. 文字ごとに完全一致、採用、非採用の分類分けをし、リストに登録する、表示する
    1. 過去の採用を完全一致に移す必要もあり
1. すべてが完全一致の場合（完全一致の文字数が対象の馬名の文字数と同じ数になった）、ゲーム完了、そのメッセージを表示する


# 参考サイト

## G1レース勝利馬
https://www.jra.go.jp/datafile/seiseki/replay/2022/g1.html

## Vue.js
https://jp.vuejs.org/v2/guide/index.html

# JavaScript基礎

## コメント
//で書く

## 乱数
https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Math/random

## リストに挿入する
https://maku77.github.io/js/array/push.html


