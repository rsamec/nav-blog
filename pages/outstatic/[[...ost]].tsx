import 'outstatic/outstatic.css'
import { Outstatic, OstSSP } from 'outstatic'
import { load } from 'outstatic/server'

export default Outstatic

//export const getServerSideProps = OstSSP

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: false
  }
}

export const getStaticProps = async () => {
  if (process.env.NODE_ENV === 'production') {
    return { notFound: true };
  }
  return { props: {} };
}