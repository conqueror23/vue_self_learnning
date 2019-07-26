<template>
  <formHelper>
    <div slot="form-header">
      <h3>Form 2 Headers</h3>
    </div>
    <div slot="form-fields">
      <input type="text" name="name" placeholder="name" required />
      <input type="password" name="password" placeholder="password" required />
    </div>
    <div slot="form-controls">
      <h4>form 2 contorls</h4>
      <button>Submit</button>
    </div>
  </formHelper>
</template>

<script>
import formHelper from '../components/formHelper'
export default {
  components:{
    formHelper,
  }
};
</script>

<style>
</style>
