import * as React from 'react'
import styles from './styles.module.css'
import StyledMap from './StyledMap'
interface Props {
  text: string
}
export { StyledMap }
export const ExampleComponent = ({ text }: Props) => {
  return <div className={styles.test}>Example Component: {text}</div>
}
