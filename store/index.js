// store/index.js
import Vuex from 'vuex';

const createStore = () => {
  return new Vuex.Store({
    state: () => ({
      items: [
        {
          id: "7",
          title: "GIBSON Guiter",
          image: require("~/assets/gibson.png"),
          avatar: require("~/assets/face4.jpg"),
          name: "Katy Perry",
          price: "12,000",
          brand: require("~/assets/logo_snowpeak.png"),
          desc: "Recently, I have been feeling lonely a lot. It was always music that soothed my exhausted and lonely heart during my Corona days. I always play the guitar alone. My mind is sharpened when I write new short songs and upload them to social media in the middle of the night, or when I compose on a quiet morning with a cup of coffee.",
          amazon_link: "https://www.amazon.co.jp/dp/B089TWXX5J/ref=cm_sw_em_r_mt_dp_V43EPVJVAQKFAV0G7PJQ?_encoding=UTF8&psc=1",
          discord_link: "https://discord.com/invite/32JBNXf"
        },
        {
          id: "5",
          title: "NIKE Running Shoes",
          image: require("~/assets/nike.png"),
          avatar: require("~/assets/face5.jpg"),
          name: "Beyoncé",
          price: "12,000",
          brand: require("~/assets/logo_nike.png"),
          desc: "In these times of Corona, whenever I feel lonely, I go for a run around my house; after about 10 to 20 minutes of running, all the bad thoughts that have been going through my head disappear cleanly. By the time I get home and take a shower, I often have a new great idea in my head.",
          amazon_link: "https://www.amazon.co.jp/dp/B06XWKZZR7/ref=cm_sw_em_r_mt_dp_4PYS1G2R04Z9642KABKY",
          discord_link: "https://discord.com/invite/qC6wuEF"
        },
        {
          id: "1",
          title: "snow peak Vault SDE-080RH",
          image: require("~/assets/snowpeak.png"),
          avatar: require("~/assets/face3.jpg"),
          name: "George Clooney",
          price: "47,000",
          brand: require("~/assets/logo_snowpeak.png"),
          desc: "When I feel lonely in the city life, I always go camping. I take the bare minimum of my belongings, get on my motorcycle, and head for the quiet forest where the river flows. Building a bonfire, fishing, and looking at the beautiful stars calms me down. These days, more and more people are coming to camp alone, so it's a great way to make friends.",
          amazon_link: "https://www.amazon.co.jp/dp/B093PZPV27/ref=cm_sw_em_r_mt_dp_VVE8BAF2JNQQ7REAM963?_encoding=UTF8&psc=1",
          discord_link: "https://discord.com/invite/jwxRSBT"
        },
        {
          id: "2",
          title: "BIANCHI C SPORT 3",
          image: require("~/assets/bianchi.png"),
          avatar: require("~/assets/face2.jpeg"),
          name: "Adeline Wilson",
          price: "68,000",
          brand: require("~/assets/logo_bianchi.png"),
          desc: "Whenever I feel lonely, I take my favorite bike and cycle around the nearby park.<br/>I highly recommend cyclying through the forest on a sunny afternoon, breathing slowly, as it naturally heals your mind.<br/>I change the course according to my mood that day.I also recommend cylcling for about 30 minutes in the morning on weekdays before work.",
          amazon_link: "https://www.amazon.co.jp/dp/B0828G1DVP/ref=cm_sw_em_r_mt_dp_70MKQ1HZ7NTE2G28VM77",
          discord_link: "https://discord.com/invite/KCkRuFqE"
        },
        {
          id: "3",
          title: "Timo Balls CARBON",
          image: require("~/assets/butterfly.png"),
          avatar: require("~/assets/face1.png"),
          name: "Timo Balls",
          price: "17,000",
          brand: require("~/assets/logo_butterfly.png"),
          desc: "Whenever I feel lonely, I participate in table tennis tournaments. There are many table tennis courts in my hometown, so I go there to practice every morning when I have a lot of time. It's a sport that requires a lot of concentration, so I can enjoy playing mindlessly.",
          amazon_link: "https://www.amazon.co.jp/dp/B093PZPV27/ref=cm_sw_em_r_mt_dp_VVE8BAF2JNQQ7REAM963?_encoding=UTF8&psc=1",
          discord_link: "https://discord.com/invite/PpAgDbX"
        },
        {
          id: "4",
          title: "MINECRAFT",
          image: require("~/assets/mojang.png"),
          avatar: require("~/assets/face6.jpg"),
          name: "Justin Bieber",
          price: "12,000",
          brand: require("~/assets/logo_mojang.png"),
          desc: "I believe that games are one of the best ways to play.<br/>I have connected with a lot of friends through games. Minecraft is a great tool for me to expand my creativity. Let's play together.",
          amazon_link: "https://www.amazon.co.jp/dp/B07D131MS4/ref=cm_sw_em_r_mt_dp_VMSCDPSGJW447TAFXQ6Q",
          discord_link: "https://discord.com/invite/minecraft"
        },
        {
          id: "6",
          title: "Record Player",
          image: require("~/assets/record.png"),
          avatar: require("~/assets/face1.png"),
          name: "Json Smith",
          price: "12,000",
          brand: require("~/assets/logo_sony.png"),
          desc: "Recently, I have been feeling lonely a lot. It was always music that soothed my exhausted and lonely heart during my Corona days. I always play the guitar alone. My mind is sharpened when I write new short songs and upload them to social media in the middle of the night, or when I compose on a quiet morning with a cup of coffee.",
          amazon_link: "https://www.amazon.co.jp/dp/B07PQ7MD9S/ref=cm_sw_em_r_mt_dp_520DEKD3MR4YHESNDTCR",
          discord_link: "https://discord.com/invite/7DNNkf5TvV"
        },
      ]
    }),
  })
}

export default createStore;
