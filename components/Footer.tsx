import { absoluteUrl, normalizeHtmlExtension } from "@/lib/utils/utils"
import SocialContact from "./SocialContact"

const Footer = () => {
  return (
    <>
      <footer className="bg-gray-800 text-white border-t border-neutral-200">
        <div className="max-w-6xl mx-auto px-5 p-5 text-slate-400">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 sm:gap-x-6 lg:gap-x-8 gap-y-5 sm:gap-y-6 lg:gap-y-8 mb-8">
            <div className="flex flex-col gap-1">
              <h3 className="font-semibold text-l"> KONTAKTNÍ ÚDAJE</h3>
              <div>
                <p>Telefonní číslo: <strong> +420 724 549 937</strong></p>
                <p>E-mail: <strong><a href="mailto:info@lodenarece.cz">info@lodenarece.cz</a></strong></p>
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <h3 className="font-semibold text-l">ZAJÍMAVÉ ODKAZY</h3>
              <a href="https://www.novinky.cz/cestovani/clanek/orlicka-prehrada-na-hausbotu-za-klidem-i-pamatkami-40401174" target="_blank">Na hausbótu za klidem i památkami</a>
              <a href="https://youtu.be/i0mm_MLkomU?si=zswtCsXmy_3osLsD" target="_blank">Expedice Orlík Hausbot Navis</a>
              <a href="https://youtu.be/S5FnU8ZS87E?feature=shared" target="_blank">S Krajánkem po Orlíku</a>
              <a href="https://www.lodenarece.cz/krajanek24a.mp4" target="_blank">Expedice Krajánek</a>
              

            </div>
            <div className="flex flex-col gap-1">
              <h3 className="font-semibold text-l"> DALŠÍ INFORMACE</h3>
              <div>
                <p><a href={normalizeHtmlExtension(absoluteUrl('/pages/about'))}>Kdo jsme</a></p>
                <p><a href={absoluteUrl('/gdpr.pdf')} target="_blank">Ochrana osobních údajů</a></p>
                <p><a href={absoluteUrl('/address.pdf')} target="_blank">Cesta k nám</a></p>
              </div>

              <h3 className="font-semibold text-l"> NAŠI PARTNEŘI</h3>
              <a href="http://www.chatkytrhovky.cz/" target="_blank">chatkytrhovky.cz</a>
              <a href="https://www.pohadkovachaloupka.cz/" target="_blank">Pohádková chaloupka</a>
            </div>

          </div>


        </div>
      </footer>

      <footer className="bg-black text-white border-t border-neutral-200">
        <div className="max-w-6xl mx-auto px-5 p-5">
          <div className="flex">
            <p className="text-sm flex-1 text-slate-400">© 2018 - 2024 LODĚ NA ŘECE</p>
            <SocialContact></SocialContact>
          </div>
        </div>

      </footer>
    </>
  )
}

export default Footer