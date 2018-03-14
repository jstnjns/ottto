export const mapModulesOptions = (modules = []) => (
  modules.map((module) => ({
    value: module.id,
    label: module.name,
  }))
)


export const mapAttributesOptions = ({ type: { attributes }}) => (
  attributes.map((attribute) => ({
    value: attribute.name,
    label: attribute.label,
  }))
)


export const mapOperatorsOptions = ({ type }) => {
  switch(type) {
    case 'number':
      return [
        { value: '==', label: 'is' },
        { value: '!=', label: 'is not' },
        { value: '<', label: 'is less than' },
        { value: '>', label: 'is greater than' },
      ]
    default:
      return [
        { value: '==', label: 'is' },
        { value: '!=', label: 'is not' },
      ]
  }
}


export const mapValuesOptions = (attribute) => {
  switch(attribute.type) {
    case 'boolean':
      return [
        { value: 'true', label: attribute.options[1].label },
        { value: 'false', label: attribute.options[0].label },
      ]
    case 'number':
      return [
        { value: 1, label: '1' },
        { value: 2, label: '2' },
        { value: 3, label: '3' },
        { value: 4, label: '4' },
        { value: 5, label: '5' },
      ]
    case 'color':
      return [
        { value: '#FF0000', label: 'Red' },
        { value: '#00FF00', label: 'Green' },
        { value: '#0000FF', label: 'Blue' },
      ]
    default:
      return []
  }
}
