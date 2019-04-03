<template>
<div id="s_detail">

  <div class="orange_wrapper">
    <div class="orange_container">
      <div class="header l-1">WADAI SYLLABUS</div>
      <div class="title u-mt10 l-1">{{ details[0].title }}</div>
    </div>
    <div class="wrapper">
      <div class="grid_wrapper">
        <div class="grid">
          <div class="content_title l-2">開講時期</div>
          <div class="content l-1"> {{ details[0].term }} </div>
        </div>
        <div class="grid">
          <div class="content_title l-2">曜日</div>
          <div class="content l-1"> {{ details[0].time }} </div>
        </div>
        <div class="grid">
          <div class="content_title l-2">学年</div>
          <div class="content l-1"> {{ details[0].target }} </div>
        </div>
        <div class="grid">
          <div class="content_title l-2">形式</div>
          <div class="content l-1"> 講義 </div>
        </div>
        <div class="grid">
          <div class="content_title l-2">取得単位</div>
          <div class="content l-1"> 2 </div>
        </div>
        <div class="grid">
          <div class="content_title l-2">教員</div>
          <div class="content l-1"> {{ details[0].teacher }} </div>
        </div>
      </div>
      <div class="content_wrapper u-mt6">
        <div class="content_title l-2">成績評価</div>
        <div class="Description u-mt2 l-1">原則として，定期試験（９０％），
          毎回の授業で取り組む課題（１０％）で評価します。
          詳細は授業中に説明するので注意してください。 
        </div>
      </div>
      <div class="content_wrapper u-mt6">
        <div class="content_title l-2">概要</div>
        <div class="Description u-mt2 l-1">この授業では，
          多くの分野において基礎となるシステムと情報について，
          とくにビジネスデザインプログラムおよび情報学に関連する
          授業科目に関する基本的な事項について，
          簡単な演習を交えながら学びます。内容としては，
          集合と論理，社会科学において適用範囲の広いシステム論や
          情報論，さらにそれらの応用としてのロジカルシンキングや
          システムシンキングを扱います。なるべく数学的な内容には
          深入りせずに説明します。また，SPIやフェルミ推定・
          ビジネスフレームワークを用いた問題など就職活動のペーパー
          ／Webテストやグループワークなどで出題されるような問題も
          取り上げて，受講者に主体的に考えてもらいながら，
          受講者同士のグループワークも取り入れて授業を進めていきたい
          と考えています。この科目は，担当教員の
          システムコンサルタントとしての実務経験を活かした
          ビジネスモデルやデザインプロセスに関する授業内容を含みます。
        </div>
      </div>
    </div>
  </div>
  <RetTopBtn></RetTopBtn>

</div>
</template>

<script>
import RetTopBtn from "../components/RetTopBtn.vue";

export default {
  name: 's_detail',
  data () {
    return {
        message: "マクロ経済学",
        details: [],
    }
  },
  created: function() {
    if(this.$route.params.title != null) {
      this.message = this.$route.params.title; //データ受け取り
    }
    console.log(this.message);
    fb
    .collection("syllabus")
    .orderBy("title")
    .startAt(this.message)
    .endAt(this.message + '\uf8ff')
    .get()
    .then(snap => {
      const array = [];
      snap.forEach(doc => {
        array.push(doc.data());
      });
      this.details = array
    });
  },
  components: {
    RetTopBtn: RetTopBtn,
  }
};
</script>

<style lang="scss" scoped>

.orange_wrapper {
  position: absolute;
  top: 0;
  height: 100%;
  width: 100vw;
  background-color: #EF8732;
  min-width: 320px;
}

.orange_container {
  position: absolute;
  height: 50%;
  width: 100vw;
  background-color: #EF8732;
}

.header {
  position: absolute;
  top: 10%;
  left: 5%;
  width: 80vw;
  font-size: 3vh;
  font-weight: 600;
}

.title {
  position: absolute;
  top: 10%;
  left: 4.5%;
  width: 80vw;
  font-size: 6vh;
  font-weight: 600;
}

.wrapper {
  position: absolute;
  top: 30%;
  left: 5%;
  height: 60%;
  width: 90vw;
  overflow-x: hidden;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  overflow-scrolling: touch;
}

.grid_wrapper {
  width: 90%;
  height: 50%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}

.grid {
  width: 100%;
  height: 100%;
}

.content_title {
  font-size: 0.75em;
  height: 30%;
}

.content {
  height: 70%;
  white-space: nowrap;
  font-size: 1.6em;
  font-weight: 600;
}

.content_wrapper {
  width: 90%;
}

</style>
