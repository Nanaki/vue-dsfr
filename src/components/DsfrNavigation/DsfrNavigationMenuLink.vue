<script>
import { defineComponent } from 'vue'
import { getRandomId } from '../../utils/random-utils.js'

export default defineComponent({
  name: 'DsfrNavigationMenuLink',

  props: {
    id: {
      type: String,
      default: () => getRandomId('menu-link'),
    },
    to: {
      type: [String, Object],
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
  },

  emits: ['toggle-id'],

  computed: {
    isExternal () {
      return typeof this.to === 'string' && this.to.startsWith('http')
    },
  },
})
</script>

<template>
  <a
    v-if="isExternal"
    class="fr-nav__link"
    data-testid="nav-external-link"
    :href="to"
    @click="$emit('toggle-id', id)"
  >
    {{ text }}
  </a>
  <router-link
    v-else
    class="fr-nav__link"
    data-testid="nav-router-link"
    :to="to"
    @click="$emit('toggle-id', id)"
  >
    {{ text }}
  </router-link>
</template>
