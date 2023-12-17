import Layout from '../components/Layout'
import { load } from 'outstatic/server'
import ContentGrid from '../components/ContentGrid'
import markdownToHtml from '@/lib/utils/markdown'
import Background from '@/components/Background'

export default async function Index() {
  const { content, allPosts, allProjects } = await getData()

  return (
    <Layout>      
      {/* <div className='hidden md:block relative h-72'>
        <Background></Background>
      </div> */}
      <div className="max-w-6xl mx-auto px-5">
        <section className="mt-16 mb-16 md:mb-12">          
          <h2 className="mb-8 text-5xl md:text-6xl font-bold tracking-tighter leading-tight">
            LODĚ NA ŘECE
          </h2>
          <div
            className="prose lg:prose-2xl home-intro"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </section>
        {allPosts.length > 0 && (
          <ContentGrid
            title="Naše lodě"
            items={allPosts}
            collection="ships"
            priority
          />
        )}
        {allProjects.length > 0 && (
          <ContentGrid
            title="Rady a tipy"
            items={allProjects}
            collection="projects"
          />
        )}
      </div>
    </Layout>
  )
}

async function getData() {
  const db = await load()

  const page = await db
    .find({ collection: 'pages', slug: 'home-cs', }, ['content'])
    .first()

  const content = await markdownToHtml(page.content)

  const allPosts = await db
    .find({ collection: 'ships' }, [
      'title',
      'publishedAt',
      'slug',
      'coverImage',
      'description',
      'tags'
    ])
    .sort({ slug: 1 })
    .toArray()

  const allProjects = await db
    .find({ collection: 'projects' }, ['title', 'slug', 'coverImage'])
    .sort({ publishedAt: -1 })
    .toArray()

  return {
    content,
    allPosts: allPosts.sort((f,s) => {
      const orders = ['housbot-navis','krajanek-673','krajanek-672','krajanek-670'];
      return orders.indexOf(f.slug) - orders.indexOf(s.slug);
    }),
    allProjects
  }
}