
ゲームプログラミングコンテスト
課題一覧

#残機/ボムの実装

##残機

- [ ] プレイヤーがミスしてもゲームが続くようにする
- [ ] 残機は一定のスコアに到達するか特定のアイテムを入手するごとに1つずつ増えていき、最大7つまで増加する
- [ ] 残機が7つの時点で残機増加条件を満たしてもそれ以上増加しない
- [ ] そのかわりスコアボーナスが入る
- [ ] プレイヤーがミスすると残機が1つ減り、プレイヤーはしばらくの間無敵状態でゲームに復帰する
- [ ] 残機が0の状態でミスをするとゲームオーバーになる

##ボム

- [x] 発動すると画面内の雑魚的と弾丸を一掃する（あるいは一部消滅させる）ボムを撃てるようにする
- [ ] ボム発動中、プレイヤーは無敵状態になる
- [x] ボムによって破壊した敵のスコアは半減する
- [ ] ボムは一定のスコアに到達するか特定のアイテムを入手するごとに1つずつ増えていき、最大7つまで増加する-
- [ ] ボムが7つの時点でボム増加条件を満たしてもそれ以上増加しない
- [ ] そのかわりスコアボーナスが入る

#特殊武器の実装
- [ ] 通常弾以外にも自機の攻撃バリエーションを増やす
- [ ] アイテムを入手することで攻撃方法が変化する
- 例：
- [ ]ホーミングミサイル
	- ミサイルよりも前方にいる敵を追跡してヒットする。
	ターゲットが消失するか後方に移動してしまった場合、移動方向を維持したまま飛んでいく
- [ ] 誘爆弾
	通常よりも遅い弾を発射し、敵にヒットすると半径自機3つ分の爆風を発生させる。爆風にぶつかった敵にもヒット判定が生じる
- [ ] レーザー
	前方に向かって真っすぐ照射される。
	範囲内に敵が入るとそれより奥の敵にはヒットしない
- [ ] バリアー
	自機の周りに球形のバリアーが一定時間展開される。
	バリアー展開中はボム以外の攻撃を行うことはできず、ボムを発動するとバリアーは消滅する

・オプション機の実装
　自機に追従するオプション機を追加する
　　オプション機は特定のアイテムを入手することで追加される
　　オプション機は最大3機まで増加する
　　オプション機に敵との当たり判定は存在しない
　　プレイヤーがミスするとオプション機はすべて消滅する
　　オプション機に触れたアイテムは入手扱いになる
　　オプション機はプレイヤーと同じ攻撃を自身の位置から行う

・ボスの実装
　画面の1/5以上を占領するボスキャラクターを配置する
　　ボスキャラクターはHPを持つ（通常弾の一撃では破壊されない）
　　ボスキャラクターは3つの攻撃手段を持ち、一定間隔で繰り返す
　　ボスキャラクターは同時に2体以上出現しない
　　ボスキャラクターの登場位置は固定である
　　ボスキャラクターの登場時に警告メッセージが表示される
　　特殊武器の一部はボスに有効なダメージを与える
　　ボスキャラクターに対してボムは有効なダメージを与える

・スタート/リザルト画面の実装
　ゲーム画面に入る前に簡単なスタート画面を追加する
　　一段目に「ADF Space Shooter TeamXX」と表示するXXは01から続く参加マシンの番号である
　　二段目に「Game Start」と表示する
　　何らかのボタン/キーを押すとゲームが開始される
　残機が0の状態でミスをした場合にリザルト画面を表示する
　　リザルト画面には最終スコアが表示される
　　Rキーまたは何らかのボタンを押すことでゲームを始めから開始できる
　　　どのボタン/キーを押すかは画面で指示される

※すべての課題に取り組む必要はありません
　また要求を一部無視しても構いません