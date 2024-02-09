import LanguageSwitcher from "./LanguageSwitcher";

export default function Page(){
    return <><LanguageSwitcher  onlanguagechange={(value)=>{alert(value)}}/><div>
        hello</div></>

}