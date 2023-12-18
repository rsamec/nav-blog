
import markdownToHtml from "@/lib/utils/markdown"
import { getDocumentSlugs, load } from "outstatic/server";
import Image from 'next/image';
import { OstDocument } from "outstatic";
import { Metadata } from "next";
import { absoluteUrl, imageUrl } from "@/lib/utils/utils";
import Navigation from "@/components/Navigation";
import Layout from "@/components/Layout";

const collection = 'pages'

type Page = {
  
} & OstDocument

interface Params {
  params: {
    slug: string
  }
}

export async function generateMetadata(params: Params): Promise<Metadata> {
  const page = await getData(params)

  if (!page) {
    return {}
  }

  return {
    title: page.title,
    description: page.description,
    openGraph: {
      title: page.title,
      description: page.description,
      type: 'article',
      url: absoluteUrl(`/${collection}/${page.slug}`),
      images: [
        {
          url: absoluteUrl(page?.coverImage || '/images/og-image.png'),
          width: 1200,
          height: 630,
          alt: page.title
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title: page.title,
      description: page.description,
      images: absoluteUrl(page?.coverImage || '/images/og-image.png')
    }
  }
}

export default async function Page(params: Params) {
  const page = await getData(params)
  return (
    <Layout>
      <div className="max-w-6xl mx-auto px-5">
        <Navigation />
        <article className="mb-32">
          <div className="relative mb-2 md:mb-4 sm:mx-0 w-full h-52 md:h-96">
            <Image
              alt={page.title}
              src={imageUrl(page?.coverImage)}
              fill
              className="object-cover object-center"
              priority
            />
          </div>
         
          <h1 className="font-primary text-2xl font-bold md:text-4xl mb-2">
            {page.title}
          </h1>
          <div className="md:block md:mb-12">
            {page?.description || ''}
          </div>

          <section>
            <div className="max-w-xl mx-auto">
              <div
                className="prose lg:prose-xl flex flex-col space-y-2"
                dangerouslySetInnerHTML={{ __html: page.content }}
              />
            </div>
          </section>
          
        </article>
      </div>
    </Layout>
  )
}

async function getData({ params }: Params) {
  const db = await load()

  const page = await db
    .find<Page>({ collection, slug: params.slug }, [
      'title',
      'publishedAt',
      'description',
      'slug',
      'author',
      'content',  
      'coverImage',
    ])
    .first()
  const content = await markdownToHtml(page.content)

  return {
    ...page,
    content,
  }
}

export async function generateStaticParams() {
  const posts = getDocumentSlugs(collection)
  return posts.map((slug) => ({ slug }))
}