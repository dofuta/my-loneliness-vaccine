<template>
<div>
  <Navbar/>
  <b-container>
    <h1 class="mt-5">{{ item.title }}</h1>
    <b-row class="item">
      <b-col lg="6" class="item__main">
        <img :src="item.image" alt="">
      </b-col>
      <b-col lg="6" class="item__desc">
        <h2>My vaccine to beat loneliness:<br/>{{ item.title }}!</h2>
        <div class="avatar">
          <img :src="item.avatar" alt="">
          <p class="name">{{ item.name }}</p>
        </div>
        <div class="desc">
          <p v-html="item.desc"></p>
        </div>
        <div class="fav">
          <img :src="require('~/assets/heart.png')" alt="">
          <p>189 people loved this recommendation</p>
        </div>
        <div class="order">
          <a :href="item.amazon_link" target="_blank" rel="noopner">
            <img :src="require('~/assets/amazon.png')" alt="">
          </a>
           <a :href="item.discord_link" target="_blank" rel="noopner">
            <img :src="require('~/assets/discord_button.png')" alt="">
          </a>
        </div>
      </b-col>
    </b-row>
  </b-container>
</div>
</template>
<script>
import {mapState} from 'vuex';

export default {
  computed: {
    ...mapState(['items']),
    item() {
      return this.items.find(i => i.id === this.$route.params.id);
    }
  }
}
</script>
<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Jost:wght@300;400;700&display=swap');
  body {
    font-family: 'Jost', sans-serif !important;
  }
  .item {
    &__main {
      border-radius: 5px;
      background-color: rgb(241, 241, 241);
      img {
        width: 100%;
      }
    }
    &__desc {
      padding: 20px 40px;
      .avatar {
        display: flex;
        img {
          border-radius: 50%;
          height: 50px;
        }
        p {
          margin-left: 15px;
          line-height: 50px;
        }
      }
      .desc {
        p {
          font-size: 1rem;
          font-style: italic;
          line-height: 1.8rem;
        }
      }
      .fav {
        display: flex;
        img {
          height: 25px;
        }
        p {
          font-size: 0.7rem;
          margin-left: 5px;
          line-height: 25px;
        }
      }
      .order {
        padding: 20px 0;
        img {
          width: 200px;
          transition: ease 0.3s all;
          &:hover {
            opacity: 0.6;
            transition: ease 0.3s all;
          }
        }
      }
    }
  }
</style>
