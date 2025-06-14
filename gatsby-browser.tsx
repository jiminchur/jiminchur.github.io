import { GatsbyBrowser } from 'gatsby'
import Layout from './src/components/common/Layout'
import 'prismjs/themes/prism-tomorrow.min.css'
import './src/styles/theme.css'
import './src/styles/reading.css'

export const wrapPageElement: GatsbyBrowser['wrapPageElement'] = ({
  element,
  props,
}) => {
  return <Layout {...props}>{element}</Layout>
}
