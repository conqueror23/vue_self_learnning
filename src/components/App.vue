<template>
<div>
<newHeader />
<router-view>

</router-view>
  

</div>
</template>

<script>
import HHeader from "../components/Header";
import { bus } from "../index";
import formOne from "../components/formOne";
import formTwo from "../components/formTwo";
import addBlog from '../components/addBLog';
import showBlog from '../components/showBlog'

import newHeader from '../components/newheader'

export default {
  name: "app",
  components: {
    HHeader,
    addBlog,
    showBlog,
    newHeader,
    'form-one': formOne,
    'form-two': formTwo
  },
  data() {
    return {
      formNo :2,
      title: "dynamic changing title"
    };
  },
  methods: {
    updateTitle($event) {
      this.title = $event;
    }
  },
  created() {
    bus.$on("titleChanged", data => {
      this.title = data;
    });
  }
};
</script>


<style>
</style>

<style scoped>
#app {
  text-align: center;
}

#app h1 {
  color: #2c3e50;
  font-weight: 300;
  margin: 0;
}

.banner {
  height: 200px;
  background-color: #f6f6f6;
  padding: 50px 10px;
}

.bottom {
  padding: 80px 10px;
  font-size: 24px;
  font-weight: 300;
}

.fade {
  font-size: 14px;
}

.logo {
  animation: spin 4s 1s infinite linear;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
