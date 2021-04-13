<template lang="pug">
  div(v-if="error.statusCode === 404")
    PageNotFound

  div(v-else)
    h1 An error occured

</template>

<script>
export default {
  props: ["error"]
};
</script>
