import SmallMenu from "./(ListMenu)/smallList";
import NormallList from "./(ListMenu)/normalList.";


export default function NavBar() {
    return (
        <div className="flexBetween flex-row md:px-5 p-5 faddingheader">
            <h1 className=" text-3xl hover:opacity-85 transition cursor-default">Mohanad Khaled</h1>
            <NormallList/>    
            <SmallMenu />
            
        </div>
    );
}