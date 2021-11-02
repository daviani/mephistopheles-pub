import i18n from '../lib/i18n'
import { useRouter } from 'next/router'
import Link from 'next/link'

const LegacyMain = () => {
  const { locale } = useRouter()

  const url = (
    <Link href={i18n.main.url[locale]} passHref>
          <span className='hover:text-yellow-500 cursor-pointer'>
            {i18n.main.url[locale]}
          </span>
    </Link>
  )

  return (
    <>
      <h2 className='text-center text-yellow-500 text-5xl m-8'>
        {i18n.legacy.main_title[locale]}
      </h2>

      <h3 className='text-yellow-500 text-xl mx-8 my-2'>
        {i18n.legacy.title_0[locale]}
      </h3>
      <p className='ml-16 mr-8 text-sm'>
        <strong>
          {i18n.legacy.paragraph_0[locale]}
        </strong>
        {i18n.legacy.paragraph_1[locale]}
      </p>
      <p className='ml-16 mr-8 text-sm'>
        <strong>
          {i18n.legacy.paragraph_2[locale]}
        </strong>
        {url}
        {' '}
        {i18n.legacy.paragraph_3[locale]}
      </p>
      <p className='ml-16 mr-8 text-sm'>
        <strong>
          {i18n.legacy.paragraph_4[locale]}
        </strong>
        {' '}
        {i18n.legacy.paragraph_5[locale]}
      </p>
      <p className='ml-16 mr-8 text-sm'>
        <strong>
          {i18n.legacy.paragraph_6[locale]}
        </strong>
        {i18n.legacy.paragraph_7[locale]}
        {url}
        {i18n.legacy.paragraph_8[locale]}
      </p>
      <p className='ml-16 mr-8 text-sm'>
        <strong>
          {i18n.legacy.paragraph_9[locale]}
        </strong>
        {i18n.legacy.paragraph_10[locale]}
      </p>
      <p className='ml-16 mr-8 text-sm'>
        <strong>
          {i18n.legacy.paragraph_11[locale]}
        </strong>
        {i18n.legacy.paragraph_12[locale]}
      </p>
      <p className='ml-16 mr-8 text-sm'>
        {i18n.legacy.paragraph_13[locale]}
      </p>
      <h3 className='text-yellow-500 text-xl mx-8 my-2'>
        {i18n.legacy.title_1[locale]}
      </h3>
      <p className='ml-16 mr-8 text-sm'>
        {i18n.legacy.paragraph_14[locale]}
        {url}
        {i18n.legacy.paragraph_15[locale]}
      </p>
      <p className='ml-16 mr-8 text-sm'>
        <strong>
          {i18n.legacy.paragraph_16[locale]}
        </strong>
        <span className='text-red-500'>
          {i18n.legacy.legal_form[locale]}
        </span>
        {' '}
        {i18n.main.secondary_title[locale]}{' '}
        {i18n.legacy.paragraph_17[locale]}{' '}
        <span className='text-red-500'>
          {i18n.legacy.share_capital[locale]}
        </span>
        {' €'}
        {i18n.legacy.paragraph_18[locale]}{' '}
        <span className='text-red-500'>
          {i18n.legacy.intra_Community_VAT_number[locale]}
        </span>
        {' - '}
        {i18n.main.address[locale]}{' '}{i18n.main.zipcode[locale]}{' '}{i18n.main.city[locale]}{' '}
      </p>
      <p className='ml-16 mr-8 text-sm'>
        <strong>
          {i18n.legacy.paragraph_19[locale]}
        </strong>
        <span className='text-red-500'>
          {i18n.legacy.name_of_the_person_responsible_for_the_publication[locale]}
        </span>
        {' - '}
        <span className='text-red-500'>
        {i18n.legacy.contact_of_the_person_responsible_for_the_publication[locale]}
        </span>
      </p>
      <p className='ml-16 mr-8 text-sm'>
        {i18n.legacy.paragraph_20[locale]}
      </p>
      <p className='ml-16 mr-8 text-sm'>
        <strong>
          Webmaster :
        </strong>
        Fillatre D. – d.fillatre.pro@gmail.com
      </p>
      <p className='ml-16 mr-8 text-sm'>
        <strong>
          {i18n.legacy.paragraph_21[locale]}
        </strong>
        {i18n.legacy.paragraph_22[locale]}
      </p>
      <p className='ml-16 mr-8 text-sm'>
        <strong>
          {i18n.legacy.paragraph_23[locale]}
        </strong>
        <span className='text-red-500'>
          {i18n.legacy.name_of_the_data_protection_officer[locale]}
        </span>

      </p>
      <h3 className='text-yellow-500 text-xl  mx-8 my-2'>
        {i18n.legacy.title_2[locale]}
      </h3>
      <p className='ml-16 mr-8 text-sm'>
        {i18n.legacy.paragraph_24[locale]}
      </p>
      <p className='ml-16 mr-8 text-sm mt-2'>
        {i18n.legacy.paragraph_25[locale]} {url}
        {i18n.legacy.paragraph_26[locale]} {url}
        {i18n.legacy.paragraph_27[locale]}
      </p>
      <p className='ml-16 mr-8 text-sm mt-2'>
        {i18n.legacy.paragraph_28[locale]} {url}
        {i18n.legacy.paragraph_29[locale]} {url}
        {i18n.legacy.paragraph_30[locale]} {url} {
        i18n.legacy.paragraph_31[locale]}
      </p>
      <h3 className='text-yellow-500 text-xl  mx-8 my-2'>
        {i18n.legacy.title_3[locale]}
      </h3>
      <p className='ml-16 mr-8 text-sm'>
        {i18n.legacy.paragraph_32[locale]} {url} {i18n.legacy.paragraph_33[locale]} {url} {i18n.legacy.paragraph_34[locale]}{url} {i18n.legacy.paragraph_35[locale]}
      </p>
      <p className='ml-16 mr-8 text-sm mt-2'>
        {i18n.legacy.paragraph_36[locale]} {url} {i18n.legacy.paragraph_37[locale]} {url} {i18n.legacy.paragraph_38[locale]}
      </p>
      <h3 className='text-yellow-500 text-xl  mx-8 my-2'>
        {i18n.legacy.title_4[locale]}
      </h3>
      <p className='ml-16 mr-8 text-sm'>
        {i18n.legacy.paragraph_39[locale]} {url} {i18n.legacy.paragraph_40[locale]}
      </p>
      <p className='ml-16 mr-8 text-sm mt-2'>
        {i18n.legacy.paragraph_41[locale]}
      </p>
      <p className='ml-16 mr-8 text-sm mt-2'>
        {url} {i18n.legacy.paragraph_42[locale]}
      </p>
      <h3 className='text-yellow-500 text-xl mx-8 my-2'>
        {i18n.legacy.title_5[locale]}
      </h3>
      <p className='ml-16 mr-8 text-sm'>
        {url} {i18n.legacy.paragraph_42[locale]} {url}
      </p>
      <p className='ml-16 mr-8 text-sm mt-2'>
        {i18n.legacy.paragraph_44[locale]}
      </p>
      <h3 className='text-yellow-500 text-xl mx-8 my-2'>
        {i18n.legacy.title_6[locale]}
      </h3>
      <p className='ml-16 mr-8 text-sm'>
        {url} {i18n.legacy.paragraph_45[locale]}
        {url} {i18n.legacy.paragraph_46[locale]}
      </p>
      <p className='ml-16 mr-8 text-sm mt-2'>
        {url} {i18n.legacy.paragraph_47[locale]}
        {url} {i18n.legacy.paragraph_48[locale]}
        {url} {i18n.legacy.paragraph_49[locale]}
        {url} {i18n.legacy.paragraph_50[locale]}
      </p>
      <h3 className='text-yellow-500 text-xl mx-8 my-2'>
        {i18n.legacy.title_7[locale]}
      </h3>
      <p className='ml-16 mr-8 text-sm'>
        {i18n.legacy.paragraph_51[locale]}
      </p>
      <h4 className='ml-12 mx-12 my-1'>
        {i18n.legacy.title_71[locale]}
      </h4>
      <p className='ml-16 mr-8 text-sm'>
        {i18n.legacy.paragraph_52[locale]} {url}
        {i18n.legacy.paragraph_53[locale]}
        <span className='text-red-500'>
          {i18n.legacy.name_of_the_legal_representative_of_the_company[locale]}
        </span>
        {i18n.legacy.paragraph_54[locale]}
      </p>
      <p className='ml-16 mr-8 text-sm mt-2'>
        {i18n.legacy.paragraph_55[locale]} {url}
        {i18n.legacy.paragraph_56[locale]} {url}
        {i18n.legacy.paragraph_57[locale]} {url}
        {i18n.legacy.paragraph_58[locale]} {url}
        {i18n.legacy.paragraph_59[locale]}
      </p>
      <h4 className='ml-12 mx-12 my-1'>
        {i18n.legacy.title_72[locale]}
      </h4>
      <p className='ml-16 mr-8 text-sm mt-2'>
        {url} {i18n.legacy.paragraph_60[locale]}
      </p>
      <ul className='list-outside'>
        <li className='ml-20 mr-8 text-sm mt-2'>
          {'- '} {i18n.legacy.paragraph_61[locale]}
        </li>
        <li className='ml-20 mr-8 text-sm mt-2'>
          {'- '} {i18n.legacy.paragraph_62[locale]}
        </li>
        <li className='ml-20 mr-8 text-sm mt-2'>
          {'- '} {i18n.legacy.paragraph_63[locale]}
        </li>
        <li className='ml-20 mr-8 text-sm mt-2'>
          {'- '} {i18n.legacy.paragraph_64[locale]}
          {url} {i18n.legacy.paragraph_65[locale]}
        </li>
        <li className='ml-20 mr-8 text-sm mt-2'>
          {'- '} {i18n.legacy.paragraph_66[locale]}
        </li>
      </ul>
      <p className='ml-16 mr-8 text-sm mt-2'>
        {url} {i18n.legacy.paragraph_67[locale]}
      </p>
      <h4 className='ml-12 m-4 mx-12 my-1'>
        {i18n.legacy.title_73[locale]}
      </h4>
      <p className='ml-16 mr-8 text-sm '>
        {i18n.legacy.paragraph_68[locale]} {url} {i18n.legacy.paragraph_69[locale]}
      </p>
      <ul className='list-outside mt-2'>
        <li className='ml-20 mr-8 text-sm mt-2'>
          {'- '} {i18n.legacy.paragraph_70[locale]}
        </li>
        <li className='ml-20 mr-8 text-sm mt-2'>
          {'- '} {i18n.legacy.paragraph_71[locale]}
        </li>
        <li className='ml-20 mr-8 text-sm mt-2'>
          {'- '} {i18n.legacy.paragraph_72[locale]}
        </li>
        <li className='ml-20 mr-8 text-sm mt-2'>
          {'- '} {i18n.legacy.paragraph_73[locale]}
        </li>
        <li className='ml-20 mr-8 text-sm mt-2'>
          {'- '} {i18n.legacy.paragraph_74[locale]}
        </li>
        <li className='ml-20 mr-8 text-sm mt-2'>
          {'- '} {i18n.legacy.paragraph_75[locale]}
          {url} {i18n.legacy.paragraph_76[locale]}
        </li>
      </ul>
      <p className='ml-16 mr-8 text-sm mt-2'>
        {i18n.legacy.paragraph_77[locale]} {url}
        {i18n.legacy.paragraph_78[locale]} {url}
        {i18n.legacy.paragraph_79[locale]}
      </p>
      <p className='ml-16 mr-8 text-sm mt-2'>
        {i18n.legacy.paragraph_80[locale]} {url}
        {i18n.legacy.paragraph_81[locale]} {url}
        {i18n.legacy.paragraph_82[locale]}
      </p>
      <p className='ml-16 mr-8 text-sm mt-2'>
        {i18n.legacy.paragraph_80[locale]} {url}
        {i18n.legacy.paragraph_81[locale]} {url}
        {i18n.legacy.paragraph_82[locale]}
      </p>
      <p className='ml-16 mr-8 text-sm mt-2 text-xs'>
        {i18n.main.secondary_title[locale]} {' – DPO, '}
        <span className='text-red-500'>
          {i18n.legacy.name_of_the_data_protection_officer[locale]}
        </span>
           <br />
        {i18n.main.address[locale]}{' '}{i18n.main.zipcode[locale]}{' '}{i18n.main.city[locale]}{' '}
      </p>
      <p className='ml-16 mr-8 text-sm mt-2'>
        {i18n.legacy.paragraph_83[locale]} {url}
        {i18n.legacy.paragraph_84[locale]}
      </p>
      <p className='ml-16 mr-8 text-sm mt-2'>
        {i18n.legacy.paragraph_85[locale]} {url}
        {i18n.legacy.paragraph_86[locale]} {url}
        {i18n.legacy.paragraph_87[locale]}
      </p>
      <h4 className='ml-12 m-4 mx-12 my-1'>
        {i18n.legacy.title_74[locale]}
      </h4>
      <p className='ml-16 mr-8 text-sm'>
        {url} {i18n.legacy.paragraph_88[locale]} {url}
        {i18n.legacy.paragraph_89[locale]}
      </p>
      <p className='ml-16 mr-8 text-sm mt-2'>
        {url} {i18n.legacy.paragraph_90[locale]}
        {url} {i18n.legacy.paragraph_91[locale]}
        {url} {i18n.legacy.paragraph_92[locale]}
      </p>
      <p className='ml-16 mr-8 text-sm mt-2'>
        {i18n.legacy.paragraph_93[locale]} {url}
        {i18n.legacy.paragraph_94[locale]}
      </p>
      <p className='ml-16 mr-8 text-sm mt-2'>
        {i18n.legacy.paragraph_95[locale]} {url}
        {i18n.legacy.paragraph_96[locale]}
      </p>
      <h3 className='text-yellow-500 text-2xl mx-8 my-2'>
        {i18n.legacy.title_8[locale]}
      </h3>
      <p className='ml-16 mr-8 text-sm mt-2'>
        {i18n.legacy.paragraph_97[locale]}
      </p>
      <p className='ml-16 mr-8 text-sm mt-2'>
        {i18n.legacy.paragraph_98[locale]} {url}
        {i18n.legacy.paragraph_99[locale]} {url}
        {i18n.legacy.paragraph_100[locale]} {url}
      </p>
      <h4 className='ml-12 m-4 mx-12 my-1'>
        {i18n.legacy.title_81[locale]}
      </h4>
      <p className='ml-16 mr-8 text-sm'>
        {i18n.legacy.paragraph_101[locale]} {url}
        {i18n.legacy.paragraph_102[locale]}
      </p>
      <p className='ml-16 mr-8 text-sm mt-2'>
        {i18n.legacy.paragraph_103[locale]} {url}
        {i18n.legacy.paragraph_104[locale]}
      </p>
      <h3 className='text-yellow-500 text-2xl mx-8 my-2'>
        {i18n.legacy.title_9[locale]}
      </h3>
      <p className='ml-16 mr-8 text-sm'>
        {i18n.legacy.paragraph_105[locale]} {url}
        {i18n.legacy.paragraph_106[locale]} {url}
        {i18n.legacy.paragraph_107[locale]} {url}
        {i18n.legacy.paragraph_108[locale]}
      </p>
      <p className='ml-16 mr-8 text-sm mt-2'>
        {i18n.legacy.paragraph_109[locale]}
      </p>
      <h4 className='ml-12 m-4 mx-12 my-1'>
        {i18n.legacy.title_91[locale]}
      </h4>
      <p className='ml-16 mr-8 text-sm'>
        {i18n.legacy.paragraph_110[locale]}
      </p>
      <p className='ml-16 mr-8 text-sm mt-2'>
        {url} {i18n.legacy.paragraph_111[locale]}
        {url} {i18n.legacy.paragraph_112[locale]}
      </p>
      <p className='ml-16 mr-8 text-sm mt-2'>
        {i18n.legacy.paragraph_113[locale]}
        {url} {i18n.legacy.paragraph_114[locale]}
      </p>
      <p className='ml-16 mr-8 text-sm mt-2'>
        {i18n.legacy.paragraph_115[locale]}
        {url} {i18n.legacy.paragraph_116[locale]}
      </p>
      <p className='ml-16 mr-8 text-sm mt-2'>
        {i18n.legacy.paragraph_117[locale]} {url}
        {i18n.legacy.paragraph_118[locale]} {url}
        {i18n.legacy.paragraph_119[locale]} {url}
        {i18n.legacy.paragraph_120[locale]}
      </p>
      <p className='ml-16 mr-8 text-sm mt-2'>
        {i18n.legacy.paragraph_121[locale]} {url}
        {i18n.legacy.paragraph_122[locale]}
      </p>
      <p className='ml-16 mr-8 text-sm mt-2'>
        {i18n.legacy.paragraph_124[locale]} {url}
        {i18n.legacy.paragraph_125[locale]} {url}
        {i18n.legacy.paragraph_126[locale]}
      </p>
      <p className='ml-16 mr-8 text-sm mt-2'>
        {i18n.legacy.paragraph_127[locale]} {url}
        {i18n.legacy.paragraph_128[locale]} {url}
        {i18n.legacy.paragraph_129[locale]}
      </p>
      <h4 className='ml-12 m-4 mx-12 my-1'>
        {i18n.legacy.title_92[locale]}
      </h4>
      <p className='ml-16 mr-8 text-sm'>
        {url} {i18n.legacy.paragraph_130[locale]}
      </p>
      <p className='ml-16 mr-8 text-sm mt-2'>
        {i18n.legacy.paragraph_131[locale]}
      </p>
      <p className='ml-16 mr-8 text-sm mt-2'>
        {i18n.legacy.paragraph_132[locale]} {url}
        {i18n.legacy.paragraph_133[locale]}
      </p>
      <p className='ml-16 mr-8 text-sm mt-2'>
        {i18n.legacy.paragraph_134[locale]} {url}
        {i18n.legacy.paragraph_135[locale]}
      </p>
      <h3 className='text-yellow-500 text-2xl mx-8 my-2'>
        {i18n.legacy.title_10[locale]}
      </h3>
      <p className='ml-16 mr-8 text-sm mt-2 mb-8'>
        {i18n.legacy.paragraph_136[locale]} {url}
        {i18n.legacy.paragraph_137[locale]}

        <span className='text-red-500'>
          {i18n.legacy.city_of_the_court_of_jurisdiction_in_case_of_a_dispute[locale]}
       </span>
      </p>
    </>
  )
}

export default LegacyMain