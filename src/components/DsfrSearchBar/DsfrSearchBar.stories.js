import DsfrSearchBar from './DsfrSearchBar.vue'

export default {
  components: DsfrSearchBar,
  title: 'Éléments/Barre de recherche - Search bar',
  argTypes: {
    label: { control: 'text' },
    dark: { control: 'boolean' },
    hideIcon: { control: 'boolean' },
    labelVisible: { control: 'boolean' },
    placeholder: { control: 'text' },
    buttonText: { control: 'text' },
    modelValue: { control: 'text' },
    large: { control: 'boolean' },
  },
}

export const IconOnly = (args) => ({
  components: {
    DsfrSearchBar,
  },
  data () {
    return args
  },
  template: `
    <div :data-rf-theme="dark ? 'dark' : ''" style="background-color: var(--w); padding: 1rem;">
      <DsfrSearchBar
        :label="label"
        :dark="dark"
        :placeholder="placeholder"
        :labelVisible="labelVisible"
        :button-text="buttonText"
        :hide-icon="hideIcon"
        v-model="modelValue"
      />
    </div>
  `,
})
IconOnly.args = {
  label: 'Label de search bar',
  dark: false,
  hideIcon: false,
  placeholder: 'Rechercher',
  buttonText: '',
  labelVisible: false,
  modelValue: '',
}

export const TextNoIcon = (args) => ({
  components: {
    DsfrSearchBar,
  },
  data () {
    return args
  },
  template: `
    <div :data-rf-theme="dark ? 'dark' : ''" style="background-color: var(--w); padding: 1rem;">
      <DsfrSearchBar
        :label="label"
        :dark="dark"
        :placeholder="placeholder"
        :labelVisible="labelVisible"
        :hide-icon="hideIcon"
        :button-text="buttonText"
      />
    </div>
  `,
})
TextNoIcon.args = {
  label: 'Label de search bar',
  dark: false,
  hideIcon: true,
  placeholder: 'Rechercher',
  buttonText: 'Rechercher',
  labelVisible: false,
  large: false,
  modelValue: '',
}

export const SearchBarLarge = (args) => ({
  components: {
    DsfrSearchBar,
  },
  data () {
    return args
  },
  template: `
    <div :data-rf-theme="dark ? 'dark' : ''" style="background-color: var(--w); padding: 1rem;">
      <DsfrSearchBar
        :label="label"
        :dark="dark"
        :placeholder="placeholder"
        :labelVisible="labelVisible"
        :hide-icon="hideIcon"
        :button-text="buttonText"
        :large="large"
      />
    </div>
  `,
})
SearchBarLarge.args = {
  label: 'Label de search bar',
  dark: false,
  hideIcon: true,
  placeholder: 'Rechercher',
  buttonText: 'Rechercher',
  labelVisible: false,
  modelValue: '',
  large: true,
}
