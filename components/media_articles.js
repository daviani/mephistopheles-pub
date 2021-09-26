import MiddleComponent from './main_middle-component'
import Link from 'next/link'

const Articles = ({ allArticles }) => {

  const put = allArticles[0]
  console.log(typeof allArticles)
  console.log(typeof put)

  return (
    <>
      {allArticles.map(article => (
          <MiddleComponent>
            <div key={article.id}
                 className='px-10 py-6 rounded-lg bg-white w-full mx-auto'
            >
              <div className='flex justify-between items-center'>
                <span
                  className='font-light text-gray-600'
                >
                  {article.date}
                </span>
                <button
                  className='px-2 py-1 bg-yellow-500 text-gray-100 font-bold rounded hover:bg-yellow-600'
                >
                  {article.authorName}
                </button>
              </div>
              <div className='mt-2'>
                <p className='text-2xl text-gray-700 font-bold hover:text-gray-600'>
                  {article.title}
                </p>
                <p className='mt-2 text-gray-600'>
                  {article.articleDescribe}
                </p>
              </div>
              <div className='flex justify-between items-center mt-4'>
                <Link
                  href={article.urlToArticles}
                  passHref
                >
                  <p className='text-yellow-500 hover:text-yellow-600 hover:underline '>
                    {article.textToLink}
                  </p>
                </Link>
              </div>
            </div>
          </MiddleComponent>
        )
      )}
    </>
  )
}

export default Articles