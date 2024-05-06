import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar';
import TotalBalanceBox from '@/components/TotalBalanceBox';
import React from 'react'

const Home = () => {

    const loggedIn = { firstName: "Ty", lastName: 'Collington', email: 'tyc@producteuralbank.com' };
  return (
    <section className='home'>
        <div className='home-content'>
            <header className='home-header'>
               <HeaderBox 
                type="greeting"
                title="Welcome"
                user={loggedIn?.firstName || 'Guest'}
                subtext="Access and manage your account and transactions efficiently."
               
               />
               <TotalBalanceBox
               accounts={[]}
               totalBanks={10}
               totalCurrentBalance={1900000}
               />
            </header>
            RECENT TRANSACTIONS

        </div>
        <RightSidebar
        user={loggedIn}
        transactions={[]}
        banks={[{ currentBalance: 1965.58}, {currentBalance: 565.58}]}
        />

    </section>
  )
}

export default Home