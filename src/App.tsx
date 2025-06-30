import Header from "./blocks/Header";
import Footer from "./blocks/Footer";
import Block from "./blocks/Block";
import { useState, useEffect } from "react";
import axios from "axios";
import type { CryptoData } from "./lib/cryptoData";
import FAQSection from "./sections/FAQSection";
import HeroSection from "./sections/HeroSection";
import MarketTrendsSection from "./sections/MarketTrendsSection";
import StartTradingSection from "./sections/StartTradingSection";
import TestimonialsSection from "./sections/TestimonialsSection";
import TradersSayingSection from "./sections/TradersSayingSection";
import DownloadAppSection from "./sections/DownloadAppSection";

function App() {
  const [filterTypeCoin, setFilterTypeCoin] = useState('');
  const [cardLoading, setCardLoading] = useState(true);
  const [cardData, setCardData] = useState<CryptoData[]>([]);

  const pathname = window.location.pathname;

  useEffect(() => {
    const abortController = new AbortController();

    const fetchCryptoData = async () => {
      try {
        setCardLoading(true);
        const response = await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&${filterTypeCoin && `category=${filterTypeCoin}&`}&per_page=10&precision=4&price_change_percentage=1h%2C24h%2C7d`,{
          signal: abortController.signal,
          method: 'GET',
          headers: { 
            accept: 'application/json', 
            'x-cg-demo-api-key': import.meta.env.VITE_COINGECKO_API_KEY 
          }
        });
        setCardData(response.data);
      } catch (err) {
        if (!abortController.signal.aborted) {
          console.error('Ошибка при получении данных:', err);
        }
      } finally {
        if (!abortController.signal.aborted) {
          setCardLoading(false);
        }
      }
      return () => abortController.abort();
    };



    fetchCryptoData();
  }, [filterTypeCoin])

  return (<>
    <Header path={pathname} />
    <Block>
      <HeroSection />
    </Block>
    <Block>
      <MarketTrendsSection
        cardLoading={ cardLoading }
        cardData={ cardData }
        filterValue={ filterTypeCoin } 
        setFilterValue={ setFilterTypeCoin } 
      />
    </Block>
    <Block color="grey">
      <StartTradingSection />
    </Block>
    <Block>
      <TestimonialsSection />
    </Block>
    <Block color="grey">
      <TradersSayingSection />
    </Block>
    <Block>
      <DownloadAppSection />
    </Block>
    <Block>
      <FAQSection />
    </Block>
    <Footer path={pathname} />
  </>
  )
}

export default App;
