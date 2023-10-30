import AppBar from "./components/appBar/AppBar";
import Header from "./components/header/Header";
import TransactionsSection from "./components/transactions/TransactionsSection";
import WalletSection from "./components/wallet/WalletSection";

function App() {
  return (
    <div className="">
      <Header />
      <WalletSection />
      <TransactionsSection />
      <AppBar />
    </div>
  );
}

export default App;
