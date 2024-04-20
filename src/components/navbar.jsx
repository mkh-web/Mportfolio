import SmallMenu from "./(ListMenu)/smallList";
import NormallList from "./(ListMenu)/normalList.";
import MynameAsComponent from "./(ListMenu)/myname";


export default function NavBar() {

   

    return (
        <div className="flexBetween flex-row md:px-5 p-5 faddingheader sticky top-0 w-full">
            <MynameAsComponent/>
            <NormallList/>    
            <SmallMenu />
            
        </div>
    );
}