<script>
import { defineComponent } from 'vue'

// import '@gouvfr/dsfr/dist/component/navigation/navigation.module.js'

import { getRandomId } from '../../utils/random-utils.js'

import DsfrNavigationItem from './DsfrNavigationItem.vue'
import DsfrNavigationMenuLink from './DsfrNavigationMenuLink.vue'
import DsfrNavigationMenu from './DsfrNavigationMenu.vue'
import DsfrNavigationMegaMenu from './DsfrNavigationMegaMenu.vue'

export default defineComponent({
  name: 'DsfrNavigation',

  components: {
    DsfrNavigationItem,
    DsfrNavigationMenuLink,
    DsfrNavigationMenu,
    DsfrNavigationMegaMenu,
  },

  props: {
    id: {
      type: String,
      default: () => getRandomId('menu'),
    },
    label: {
      type: String,
      default: 'Menu principal',
    },
    navItems: {
      type: Array,
      default: () => [],
    },
  },

  data () {
    return {
      expandedMenuId: undefined,
    }
  },

  methods: {
    toggle (id) {
      if (id === this.expandedMenuId) {
        this.expandedMenuId = undefined
        return
      }
      this.expandedMenuId = id
    },
  },

})
</script>

<template>
  <nav
    :id="id"
    class="fr-nav"
    role="navigation"
    :aria-label="label"
  >
    <ul class="fr-nav__list">
      <!-- @slot Slot par défaut pour le contenu de la liste. Sera dans `<ul class="fr-nav__list">` -->
      <slot />
      <DsfrNavigationItem
        v-for="(navItem, idx) of navItems"
        :key="idx"
      >
        <DsfrNavigationMenuLink
          v-if="navItem.to && navItem.text"
          v-bind="navItem"
          :expanded-id="expandedMenuId"
          @click="toggle($event)"
        />
        <DsfrNavigationMenu
          v-else-if="navItem.title && navItem.links"
          v-bind="navItem"
          :expanded-id="expandedMenuId"
          @toggle-id="toggle($event)"
        />
        <DsfrNavigationMegaMenu
          v-else-if="navItem.title && navItem.menus"
          v-bind="navItem"
          :expanded-id="expandedMenuId"
          @toggle-id="toggle($event)"
        />
      </DsfrNavigationItem>
    </ul>
  </nav>
</template>

<style src="@gouvfr/dsfr/dist/component/navigation/navigation.main.min.css" />

<style scoped>
.fr-nav__list {
  position: relative;
}
</style>
