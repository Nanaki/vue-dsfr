<script>
import { defineComponent } from 'vue'
import { getRandomId } from '../../utils/random-utils.js'

export default defineComponent({
  name: 'DsfrFileUpload',

  props: {
    id: {
      type: String,
      default: () => getRandomId('file-upload'),
    },
    label: {
      type: String,
      default: 'Ajouter un fichier',
    },
    hint: {
      type: String,
      default: '',
    },
    error: {
      type: String,
      default: '',
    },
    modelValue: {
      type: String,
      default: '',
    },
  },

  emits: ['update:modelValue', 'change'],

  methods: {
    onChange ($event) {
      this.$emit('update:modelValue', $event.target.value)
      this.$emit('change', $event.target.files)
    },
  },
})
</script>

<template>
  <div
    class="fr-upload-group"
    :class="{ 'fr-input-group--error': error }"
  >
    <label
      class="
    fr-label"
      :for="id"
    >
      {{ label }}
      <span
        v-if="hint"
        class="fr-hint-text"
      >{{ hint }}</span>
    </label>
    <input
      :id="id"
      class="fr-upload"
      type="file"
      :aria-describedby="`${id}-desc`"
      v-bind="$attrs"
      :value="modelValue"
      @change="onChange($event)"
    >
    <p
      v-if="error"
      :id="`${id}-desc`"
      class="fr-error-text"
    >
      {{ error }}
    </p>
  </div>
</template>

<style src="@gouvfr/dsfr/dist/component/upload/upload.css" />
