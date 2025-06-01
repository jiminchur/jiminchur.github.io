import { GatsbyBrowser } from 'gatsby'
import Layout from './src/components/common/Layout'
import './src/styles/global.css'

// 스무스 스크롤링과 읽기 경험 개선 스타일
import './src/styles/reading-experience.css'

// Prism.js 스타일
import 'prismjs/themes/prism-tomorrow.css'

export const wrapPageElement: GatsbyBrowser['wrapPageElement'] = ({
  element,
  props,
}) => {
  return <Layout {...props}>{element}</Layout>
}
