<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'DsfrSkipLinks',

  props: {
    links: {
      type: Array,
      required: true,
    },
  },
})
</script>

<template>
  <div class="fr-skiplinks">
    <nav
      class="fr-container"
      role="navigation"
      aria-label="Accès rapide"
    >
      <ul class="fr-skiplinks__list">
        <li
          v-for="link of links"
          :key="link.id"
        >
          <a
            class="fr-link"
            :href="`#${link.id}`"
          >{{ link.text }}</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<style src="@gouvfr/dsfr/dist/component/skiplink/skiplink.main.min.css" />
