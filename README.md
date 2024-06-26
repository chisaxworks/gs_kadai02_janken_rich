# ①課題番号-プロダクト名
02-じゃんけんアプリリッチver

## ②課題内容（どんな作品か）
- 芸人神経衰弱  
前回の芸人さんの相方マッチングゲームに関連して、芸人さんの神経衰弱にしました。  
一般的な同じカードが揃ったらではなくて、芸人コンビの正しいペアになったらOKというゲームです。  
前回のブラッシュアップでも良かったですが、せっかくなので新しいゲームにチャレンジしました。

## ③DEMO
- [芸人神経衰弱](https://chisaxworks.github.io/gs_kadai02_janken_rich/memory.html)
- ちなみに作った[ゲームの入り口](https://chisaxworks.github.io/gs_kadai02_janken_rich/)にも追加しました

## ④作ったアプリケーション用のIDまたはPasswordがある場合

- ID: 今回なし
- PW: 今回なし

## ⑤工夫した点・こだわった点
- 全体    
    - 神経衰弱は結構難しかったので、まずは最低限実現したい、コンビが合致したらOKというものの実現に注力しました.
    - ランダムに並べるという点でどうしても配列が必要だったので動画予習をしましたが結局かなりググりました（配列だけではなくランダムにするというロジックが必要だった）  
- 機能面  
    - タイマーと連動させて1枚目クリックすると時間のカウントが始まり、全て終わるとカウントが止まるという機能にしました。
    - 以前の相方マッチングゲームと同様にコンビ名も出るようにしました。また判定内容によってタイマー横の表示は色を変えています。
    - 実際の神経衰弱のようにカードが消えてしまうのは、芸人さんの顔を覚えてもらう意味では勿体無いと思い透明度を下げる形をとりました。
    - 表になっているカードは2回クリックしても動作しないようにしてあります。
    - 今回も合致した場合は音声を入れています（合致しないときのブブーまで入れるとうるさいゲームになるので一旦入れていません）  
- なくてもいいけどな機能面
    - 作業をしている中でずっとタイマーが動くのが少し気になる時があったのでうっすらSTOPボタンを用意しています（タイマーが止まるだけでゲームは続けられます）
    - 使い方はどこかに入れたかったので、今回は多少うざいかもですがクリックとかなくても分かるように流れる文字にしました
- 追記：重さの解消
    - どうしても1回目にゲームをすると画像の読み込みが遅くて、画像が表示されてから裏側に戻る時間が短くなってしまう（だからと言って裏側に戻る時間を伸ばすと通常時に待ちが発生してしまう）点について解消しました。
    - 対策の内容は以下のとおりです。
        - まずランダム配列で各カードに設定された芸人さんの画像をカードのdivの背景に読み込ませます。html上ではそのdiv内にimgタグ（カードの裏側が表示）を設定しているので画面上は裏側が表示されます。
        - ここで一度画像を読み込ませているので、その後クリックの際に改めて読み込みは発生しない＝遅延が出ないです。
        - クリックした際にはカードのdiv内のimgタグ（子要素）をemptyメソッドで消すことで背景の芸人さんの画像が表示されます。
        - その後、合致していないので元の裏側に戻すのは元々裏側画像を入れる処理をしていたので、それをそのまま活用しています。

## ⑥難しかった点・次回トライしたいこと(又は機能)

- 自分自身きちんと初めて学ぶ箇所だったこともあり、ググってもなぜそれで動くのかという理解にかなり時間がかかりました。
- 個人的に躓いて解決に時間がかかったのは大きく２点
  1. 変数をクリックイベントの条件文の中で宣言してしまい、別の条件の時に使えなかった　→ 外で宣言をすれば良いと分かり解決
  2. 近いですがクリックイベントの中で使えるthisを外でも使いたい場合のセレクターの記述方法　→ "'#"+変数名+"'"　ではなく "#"+変数名で行けた
- トライしたいこととしてはカードをくるっと回るような動きは出来そうだったのですが、思ったより時間かかりそうで見送りました。また追って試してみたいと思います。
- 追記：1回目にゲームする際画像の読み込みが遅い点について、解消しました。（工夫した点に追記しました）

## ⑦質問・疑問・感想、シェアしたいこと等なんでも
- 参考記事：今回はメインのものだけ記載します　下記をベースに細かいメソッドなどは都度ググりました
  1. [神経衰弱１](https://note.com/one_programming/n/n96176e4825d2)
  2. [神経衰弱2](https://kazutameblog.com/javascript/toranp-narvous/)
  3. [配列のシャッフル](https://qiita.com/pure-adachi/items/77fdf665ff6e5ea22128)
  4. [ストップウォッチ](https://qiita.com/RyujiWatanabe/items/d93a59d2ad02a33cecca)
