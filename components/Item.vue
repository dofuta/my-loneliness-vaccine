<!-- Please remove this file from your project -->
<template>
    <b-col md="6" lg="4" class="item_card mt-4">
      <NuxtLink :to="'items/' + item.id">
        <div class="item_card__main p-3">
          <div class="avatar">
            <img :src="item.avatar" alt="">
            <p class="name">{{ item.name }}</p>
          </div>
          <div class="image">
            <img :src="item.image" alt="">
          </div>
          <div class="brand">
            <img :src="item.brand" alt="">
          </div>
        </div>
        <div class="item_card__title">
          <p>{{item.title}}</p>
        </div>
       </NuxtLink>
    </b-col>
</template>
<script>
export default {
  props: {
    id: {
      type: String,
      required: true
    },
    item: {
      type: Object,   // 型がObjectである
      required: true  // 必須のプロパティである
    }
  }
}
</script>
<style lang="scss">
  .item_card {
     text-decoration: none !important;
      transition: ease 0.3s all;
     &:hover {
       opacity: 0.6;
       transition: ease 0.3s all;
     }
    &__main {
      border-radius: 20px;
      background-color: rgb(241, 241, 241);
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
      .image {
        img {
            width: 100%;
        }
      }
      .brand {
        text-align: right;
        img {
          height: 25px;
        }
      }
    }
    &__title {
      text-align: center;
      p {
        padding: 10px;
        font-size: 1.2rem;
      }
    }
  }
</style>
