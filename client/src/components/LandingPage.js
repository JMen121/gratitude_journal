import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";

const LandingPage = (setCurrentUser, setJournalEntries) => {
    return ( 
        <>  
        <section className="title">
          <h1 id="main-title">Gratitude Journal</h1>
        </section>
        <section className="page-body">
          <section className="nav-bar">
            <NavBar setJournalEntries = {setJournalEntries} setCurrentUser={setCurrentUser}/>
          </section>
          <section className="router-body">
            <Outlet />
          </section>
        </section>
      </>
     );
}
 
export default LandingPage;