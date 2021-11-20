// store/index.js
import Vuex from 'vuex';

const createStore = () => {
  return new Vuex.Store({
    state: () => ({
      items: [
        {
          id: "1",
          title: "test1",
          image: require("~/assets/snowpeak.png"),
          avatar: require("~/assets/face1.png"),
          name: "Json Smith",
          price: "12,000",
          brand: require("~/assets/logo_snowpeak.png"),
          desc: "Whenever I feel lonely, I take my favorite bike and cycle around the nearby park.<br/>I highly recommend cyclying through the forest on a sunny afternoon, breathing slowly, as it naturally heals your mind.<br/>I change the course according to my mood that day.I also recommend cylcling for about 30 minutes in the morning on weekdays before work.",
          amazon_link: " https://www.amazon.co.jp/dp/B093PZPV27/ref=cm_sw_em_r_mt_dp_VVE8BAF2JNQQ7REAM963?_encoding=UTF8&psc=1",
          discord_link: "https://discord.com/invite/jwxRSBT"
        },
        {
          id: "2",
          title: "test2",
          image: require("~/assets/snowpeak.png"),
          avatar: require("~/assets/face1.png"),
          name: "Json Smith",
          price: "12,000",
          brand: require("~/assets/logo_snowpeak.png"),
          desc: "Whenever I feel lonely, I take my favorite bike and cycle around the nearby park.<br/>I highly recommend cyclying through the forest on a sunny afternoon, breathing slowly, as it naturally heals your mind.<br/>I change the course according to my mood that day.I also recommend cylcling for about 30 minutes in the morning on weekdays before work.",
          amazon_link: " https://www.amazon.co.jp/dp/B093PZPV27/ref=cm_sw_em_r_mt_dp_VVE8BAF2JNQQ7REAM963?_encoding=UTF8&psc=1",
          discord_link: "https://discord.com/invite/jwxRSBT"
        },
        {
          id: "3",
          title: "test2",
          image: require("~/assets/snowpeak.png"),
          avatar: require("~/assets/face1.png"),
          name: "Json Smith",
          price: "12,000",
          brand: require("~/assets/logo_snowpeak.png"),
          desc: "Whenever I feel lonely, I take my favorite bike and cycle around the nearby park.<br/>I highly recommend cyclying through the forest on a sunny afternoon, breathing slowly, as it naturally heals your mind.<br/>I change the course according to my mood that day.I also recommend cylcling for about 30 minutes in the morning on weekdays before work.",
          amazon_link: " https://www.amazon.co.jp/dp/B093PZPV27/ref=cm_sw_em_r_mt_dp_VVE8BAF2JNQQ7REAM963?_encoding=UTF8&psc=1",
          discord_link: "https://discord.com/invite/jwxRSBT"
        },
        {
          id: "4",
          title: "test2",
          image: require("~/assets/snowpeak.png"),
          avatar: require("~/assets/face1.png"),
          name: "Json Smith",
          price: "12,000",
          brand: require("~/assets/logo_snowpeak.png"),
          desc: "Whenever I feel lonely, I take my favorite bike and cycle around the nearby park.<br/>I highly recommend cyclying through the forest on a sunny afternoon, breathing slowly, as it naturally heals your mind.<br/>I change the course according to my mood that day.I also recommend cylcling for about 30 minutes in the morning on weekdays before work.",
          amazon_link: " https://www.amazon.co.jp/dp/B093PZPV27/ref=cm_sw_em_r_mt_dp_VVE8BAF2JNQQ7REAM963?_encoding=UTF8&psc=1",
          discord_link: "https://discord.com/invite/jwxRSBT"
        },
        {
          id: "5",
          title: "test2",
          image: require("~/assets/snowpeak.png"),
          avatar: require("~/assets/face1.png"),
          name: "Json Smith",
          price: "12,000",
          brand: require("~/assets/logo_snowpeak.png"),
          desc: "Whenever I feel lonely, I take my favorite bike and cycle around the nearby park.<br/>I highly recommend cyclying through the forest on a sunny afternoon, breathing slowly, as it naturally heals your mind.<br/>I change the course according to my mood that day.I also recommend cylcling for about 30 minutes in the morning on weekdays before work.",
          amazon_link: " https://www.amazon.co.jp/dp/B093PZPV27/ref=cm_sw_em_r_mt_dp_VVE8BAF2JNQQ7REAM963?_encoding=UTF8&psc=1",
          discord_link: "https://discord.com/invite/jwxRSBT"
        },
        {
          id: "6",
          title: "test2",
          image: require("~/assets/snowpeak.png"),
          avatar: require("~/assets/face1.png"),
          name: "Json Smith",
          price: "12,000",
          brand: require("~/assets/logo_snowpeak.png"),
          desc: "Whenever I feel lonely, I take my favorite bike and cycle around the nearby park.<br/>I highly recommend cyclying through the forest on a sunny afternoon, breathing slowly, as it naturally heals your mind.<br/>I change the course according to my mood that day.I also recommend cylcling for about 30 minutes in the morning on weekdays before work.",
          amazon_link: " https://www.amazon.co.jp/dp/B093PZPV27/ref=cm_sw_em_r_mt_dp_VVE8BAF2JNQQ7REAM963?_encoding=UTF8&psc=1",
          discord_link: "https://discord.com/invite/jwxRSBT"
        },
        {
          id: "7",
          title: "test2",
          image: require("~/assets/snowpeak.png"),
          avatar: require("~/assets/face1.png"),
          name: "Json Smith",
          price: "12,000",
          brand: require("~/assets/logo_snowpeak.png"),
          desc: "Whenever I feel lonely, I take my favorite bike and cycle around the nearby park.<br/>I highly recommend cyclying through the forest on a sunny afternoon, breathing slowly, as it naturally heals your mind.<br/>I change the course according to my mood that day.I also recommend cylcling for about 30 minutes in the morning on weekdays before work.",
          amazon_link: " https://www.amazon.co.jp/dp/B093PZPV27/ref=cm_sw_em_r_mt_dp_VVE8BAF2JNQQ7REAM963?_encoding=UTF8&psc=1",
          discord_link: "https://discord.com/invite/jwxRSBT"
        },
      ]
    }),
  })
}

export default createStore;
