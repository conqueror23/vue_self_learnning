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
      <button v-on:click="submit">Submit</button>
    </div>
  </formHelper>
</template>

<script>
export default {};
</script>

<style>
</style>
