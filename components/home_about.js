import { useRouter } from 'next/router'
import i18n from '../lib/i18n'

const About = () => {
  const { locale } = useRouter()
  return (
    <div className="rounded overflow-hidden text-center p-5">
      <h3 className="text-center text-yellow-500 text-5xl m-8 bastille ">
        {i18n.home.about_title[locale]}
      </h3>
      <p className="mt-12 text-base">
        {i18n.home.about_body_1[locale]}
      </p>
      <p className="m-4 text-base">
        {i18n.home.about_body_2[locale]}
      </p>
      <p className="m-4 text-base">
        {i18n.home.about_body_3[locale]}
      </p>
      <p className="m-4 text-base">
        {i18n.home.about_body_4[locale]}
      </p>
      <p className="m-4 text-lg">
        {i18n.home.about_body_5[locale]}
      </p>
    </div>
  )
}

export default About