
import markdownToHtml from "@/lib/utils/markdown"
import { getDocumentBySlug, getDocumentSlugs, load } from "outstatic/server";
import Image from 'next/image';
import { OstDocument } from "outstatic";
import { Metadata } from "next";
import { absoluteUrl } from "@/lib/utils/utils";
import DateFormatter from "@/components/DateFormatter";
import Navigation from "@/components/Navigation";
import Layout from "@/components/Layout";

const collection = 'ships'

type Ship = {
  tags: { value: string; label: string }[],
  occupied: string
} & OstDocument

interface Params {
  params: {
    slug: string
  }
}

export async function generateMetadata(params: Params): Promise<Metadata> {
  const post = await getData(params)

  if (!post) {
    return {}
  }

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      url: absoluteUrl(`/${collection}/${post.slug}`),
      images: [
        {
          url: absoluteUrl(post?.coverImage || '/images/og-image.png'),
          width: 1200,
          height: 630,
          alt: post.title
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: absoluteUrl(post?.coverImage || '/images/og-image.png')
    }
  }
}

export default async function Post(params: Params) {
  const ship = await getData(params)
  return (
    <Layout>
      <div className="max-w-6xl mx-auto px-5">
        <Navigation />
        <article className="mb-32">
          <div className="relative mb-2 md:mb-4 sm:mx-0 w-full h-52 md:h-96">
            <Image
              alt={ship.title}
              src={ship?.coverImage || ''}
              fill
              className="object-cover object-center"
              priority
            />
          </div>
          {Array.isArray(ship?.tags)
            ? ship.tags.map(({ label }) => (
              <span
                key="label"
                className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
              >
                {label}
            </span>
            ))
            : null}
          <h1 className="font-primary text-2xl font-bold md:text-4xl mb-2">
            {ship.title}
          </h1>
          <div className="md:block md:mb-12 text-slate-600">
            {ship?.description || ''}
          </div>
          <hr className="border-neutral-200 mt-5 mb-5" />
          <div className="max-w-2xl mx-auto">
            <div
              className="prose lg:prose-xl flex flex-col space-y-2"
              dangerouslySetInnerHTML={{ __html: ship.content }}
            />
          </div>


          <div className="grid grid-cols-1 gap-y-5 mb-8 py-5" >
            <a className="justify-self-end" href="mailto:info@lodenarece.cz">
              <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded inline-flex items-center">
                <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122.88 122.88"><path d="M 104.88 98.6 c 1.73 1.74 1.73 4.55 0 6.28 c -1.74 1.74 -4.55 1.74 -6.28 0 l -8.15 -8.15 c -6.82 5.61 -15.29 9.28 -24.57 10.18 v 11.52 c 0 2.45 -1.99 4.44 -4.44 4.44 c -2.45 0 -4.44 -1.99 -4.44 -4.44 v -11.52 c -9.28 -0.9 -17.75 -4.57 -24.57 -10.18 l -8.15 8.15 c -1.74 1.74 -4.55 1.74 -6.28 0 c -1.74 -1.73 -1.74 -4.55 0 -6.28 l 8.15 -8.15 c -5.61 -6.82 -9.28 -15.29 -10.18 -24.57 H 4.44 C 1.99 65.88 0 63.89 0 61.44 C 0 58.99 1.99 57 4.44 57 h 11.52 c 0.9 -9.28 4.57 -17.75 10.18 -24.57 L 18 24.28 c -1.74 -1.74 -1.74 -4.55 0 -6.28 c 1.73 -1.74 4.55 -1.74 6.28 0 l 8.15 8.15 c 6.82 -5.61 15.29 -9.28 24.57 -10.18 V 4.44 C 57 1.99 58.99 0 61.44 0 c 2.45 0 4.44 1.99 4.44 4.44 v 11.53 c 9.28 0.9 17.75 4.57 24.57 10.18 L 98.6 18 c 1.74 -1.73 4.55 -1.73 6.28 0 c 1.74 1.74 1.74 4.55 0 6.28 l -8.15 8.15 c 5.61 6.82 9.28 15.29 10.18 24.57 h 11.53 c 2.45 0 4.44 1.99 4.44 4.44 c 0 2.45 -1.99 4.44 -4.44 4.44 h -11.53 c -0.9 9.28 -4.57 17.75 -10.18 24.57 L 104.88 98.6 L 104.88 98.6 Z M 84.21 90.5 L 65.88 72.17 v 25.93 C 72.75 97.27 79.04 94.56 84.21 90.5 L 84.21 90.5 Z M 57 98.09 V 72.17 L 38.67 90.5 C 43.84 94.56 50.13 97.27 57 98.09 L 57 98.09 Z M 32.38 84.21 l 18.33 -18.33 H 24.79 C 25.61 72.75 28.32 79.04 32.38 84.21 L 32.38 84.21 Z M 24.79 57 h 25.92 L 32.38 38.67 C 28.32 43.84 25.61 50.13 24.79 57 L 24.79 57 Z M 38.67 32.38 L 57 50.71 V 24.79 C 50.13 25.61 43.84 28.32 38.67 32.38 L 38.67 32.38 Z M 65.88 24.79 v 25.92 l 18.33 -18.33 C 79.04 28.32 72.75 25.61 65.88 24.79 L 65.88 24.79 Z M 90.5 38.67 L 72.17 57 h 25.92 C 97.27 50.13 94.56 43.84 90.5 38.67 L 90.5 38.67 Z M 98.09 65.88 H 72.17 L 90.5 84.21 C 94.56 79.04 97.27 72.75 98.09 65.88 L 98.09 65.88 Z" /></svg>
                <span>Mám zájem</span>
              </button>
            </a>
            <iframe src={ship.occupied} className="w-full aspect-video"></iframe>
          </div>

        </article>
      </div>
    </Layout>
  )
}

async function getData({ params }: Params) {
  const db = await load()

  const post = await db
    .find<Ship>({ collection, slug: params.slug }, [
      'title',
      'publishedAt',
      'description',
      'slug',
      'author',
      'content',
      'coverImage',
      'tags',
      'occupied'
    ])
    .first()

  const content = await markdownToHtml(post.content)

  return {
    ...post,
    content
  }
}

export async function generateStaticParams() {
  const posts = getDocumentSlugs(collection)
  return posts.map((slug) => ({ slug }))
}