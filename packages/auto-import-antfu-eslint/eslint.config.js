import antfu from '@antfu/eslint-config'
import autoImport from './.eslintrc-auto-import.js'

export default antfu({
  languageOptions: {
    globals: autoImport?.globals,
  },
})
