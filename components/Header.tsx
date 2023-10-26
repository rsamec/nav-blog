import SocialContact from "./SocialContact";

const Header = () => {
  return (<header className="bg-black text-white border-t border-neutral-200">
    <div className="max-w-6xl mx-auto px-5 p-3">
      <div className="flex">
        <span className="text-xs flex-1">Telefon<strong> +420 724 549 937</strong> | e-mail:<strong><a href="mailto:info@lodenarece.cz">info@lodenarece.cz</a></strong></span>        
      </div>
    </div>
  </header>)    
}

export default Header;