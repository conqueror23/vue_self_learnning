<template>
  <div>
    <h1>
        Pleaser fill out our form
    </h1>
    <form action="">
        <div id="form-header">
            <slot name='form-header'></slot>
        </div>
        <div id="form-fields">
          <slot name='form-fields'></slot>
        </div>
        <div id='form-contorls'>
            <slot name='form-controls' ></slot>
        </div>
        <div id="usefull-links"></div>
        <ul>
            <li>
                <a href="#">lINK1</a>
                <a href="#">lINK2</a>
                <a href="#">lINK3</a>
                <a href="#">lINK4</a>

            </li>
        </ul>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
        title:'i am changing title'
    };
  },
  methods: {}
};
</script>

<style>
p {
  color: red;
}
</style>
