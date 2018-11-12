<template>
  <div class="home">
      <app-home-list></app-home-list>
  </div>
</template>

<script>
// @ is an alias to /src
import AppHomeList from '@/components/home/AppHomeList'

export default {
  name: 'home',
  components: {
    AppHomeList
  }
}
</script>
