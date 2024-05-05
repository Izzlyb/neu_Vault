
import HeaderBox from "@/components/HeaderBox";
import RightSidebar from "@/components/RightSidebar";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import Image from "next/image";

export default function Home() {

  const loggedIn = {
    firstName: "I.J.",
    lastName: "Leonyork",
    email: "contact@jsmastery.pro"
  }

  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox 
              type="greeting"
              title="Banking Header"
              subtext="Access and manage your account and transactions efficiently" 
              user={loggedIn?.firstName || "Guest"} 
            />
          {/* <h3>Hello to the Banking Application from Adrian Hajdin at JavaScript Mastery</h3> */}
          <TotalBalanceBox
              accounts = {[]} 
              totalBanks={1}
              totalCurrentBalance={1250.58}
            />
        </header>

        RECENT TRANSACTION
      </div>

      <RightSidebar 
          user={loggedIn}
          transactions={[]}
          banks={[{currentBalance: 9824.25}, {currentBalance: 2987.50}]}
      />
    </section>
  );
}
