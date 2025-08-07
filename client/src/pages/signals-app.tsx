import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Users, Bell, Shield, Smartphone, Activity, TrendingUp, ArrowUp, ArrowDown, DollarSign, BarChart3, Globe, Crosshair, ExternalLink, Award, X, Target } from 'lucide-react';
import { SiApple, SiGoogleplay } from 'react-icons/si';
import { useTranslation } from 'react-i18next';
import Navigation from '../components/Navigation';
import SEOHead from '../components/SEOHead';
import FAQ from '../components/FAQ';

export default function SignalsApp() {
  const [isLoading, setIsLoading] = useState<string | null>(null);
  const { t } = useTranslation();

  const handleDownloadClick = (platform: string) => {
    setIsLoading(platform);
    // Simulate download action
    setTimeout(() => {
      setIsLoading(null);
      alert(`Redirecting to ${platform} store...`);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <SEOHead 
        title="GoldSniper App Features - Professional Gold Trading Signals"
        description="Discover GoldSniper's advanced features for XAUUSD trading. Get 93% accurate signals, real-time alerts, expert analysis, and professional trading tools on mobile."
        keywords="goldsniper app features, XAUUSD trading app, gold signals mobile app, trading alerts, professional gold analysis, mobile trading platform"
        canonical="https://goldsniper.replit.app/signals-app"
      />
      <Navigation currentPage="features" />

      {/* Hero Section */}
      <section className="relative bg-black py-12 md:py-20 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-6 md:mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              {t('hero.title')}
              <br />
              <span className="text-[color:var(--brand-orange)]">{t('hero.titleHighlight')}</span> 🥇
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-4 md:mb-6 leading-relaxed max-w-4xl mx-auto">
              {t('hero.subtitle')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center">
              <Button 
                onClick={() => handleDownloadClick('android-hero')}
                disabled={isLoading === 'android-hero'}
                className="bg-green-600 hover:bg-green-700 text-white font-bold py-6 px-12 rounded-xl transition-all duration-200 flex items-center justify-center space-x-4 h-16 text-xl shadow-xl transform hover:scale-105 min-w-[280px]"
              >
                {isLoading === 'android-hero' ? (
                  <>
                    <div className="loading-spinner mr-2"></div>
                    <span>Loading...</span>
                  </>
                ) : (
                  <>
                    <SiGoogleplay className="w-8 h-8" />
                    <span>Get on Google Play</span>
                  </>
                )}
              </Button>
              <Button 
                onClick={() => handleDownloadClick('ios-hero')}
                disabled={isLoading === 'ios-hero'}
                className="bg-black hover:bg-gray-900 text-white font-bold py-6 px-12 rounded-xl transition-all duration-200 flex items-center justify-center space-x-4 h-16 text-xl shadow-xl transform hover:scale-105 min-w-[280px] border-2 border-gray-700"
              >
                {isLoading === 'ios-hero' ? (
                  <>
                    <div className="loading-spinner mr-2"></div>
                    <span>Loading...</span>
                  </>
                ) : (
                  <>
                    <SiApple className="w-8 h-8" />
                    <span>Download on App Store</span>
                  </>
                )}
              </Button>
            </div>
          </div>
          
          {/* App Preview */}
          <div className="relative flex justify-center">
            <div className="hero-phone">
              <img 
                src="https://cdn.prod.website-files.com/61389171fc46d55b610c07fe/614a4da80502ad8434e17664_Group%20150.png" 
                alt="GoldSniper app interface showing gold trading signals" 
                className="w-80 md:w-96 h-auto max-w-full object-contain" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* App Demo Video Section */}
      <section className="bg-gray-900 py-12 md:py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-4 md:mb-8">
            <h2 className="text-3xl font-bold text-white mb-3">See GoldSniper in Action</h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-2 md:mb-4">
              Watch how professional traders use our mobile app to receive and execute high-precision gold trading signals.
            </p>
          </div>
          
          <div className="relative bg-black rounded-2xl p-4">
            <div className="aspect-video rounded-xl overflow-hidden mb-6">
              <iframe
                src="https://www.youtube.com/embed/lLdbwqSMRB0"
                title="GoldSniper Trading Signals App Demo"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
            <p className="text-gray-300 text-center">Experience the power of real-time gold trading signals</p>
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section id="features" className="bg-black py-12 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-6 md:mb-10">
            <h2 className="text-3xl font-bold text-white mb-3">Why Choose Gold Sniper?</h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-2 md:mb-4">
              We give real-time signals on a daily basis and always focus on the best options rather than overtrading the bad ones. Our free gold signals will allow you to earn in the most efficient and convenient ways possible.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-10">
            <Card className="fade-in bg-gray-900 border-[color:var(--brand-orange)]/30 hover:border-[color:var(--brand-orange)] transition-colors">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-[color:var(--brand-orange)] rounded-xl flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Experienced traders by your side 🥇</h3>
                <p className="text-gray-400 text-lg">Our trade experts are here to help you. Use their 10+ years of experience to finally break into the gold market.</p>
              </CardContent>
            </Card>
            
            <Card className="fade-in bg-gray-900 border-[color:var(--brand-orange)]/30 hover:border-[color:var(--brand-orange)] transition-colors">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-[color:var(--brand-orange)] rounded-xl flex items-center justify-center mb-4">
                  <Bell className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Gold Buy and Sell Signals 🥇</h3>
                <p className="text-gray-400">Get our signals delivered to your phone and start trading more successfully. You can trade whenever and wherever you want if you follow our gold price live signals with real-time alerts via mobile notifications.</p>
              </CardContent>
            </Card>
            
            <Card className="fade-in bg-gray-900 border-[color:var(--brand-orange)]/30 hover:border-[color:var(--brand-orange)] transition-colors">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-[color:var(--brand-orange)] rounded-xl flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Never be overwhelmed by trading the Gold market 🥇</h3>
                <p className="text-gray-400">Knowledge is power; the more you know, the better your trading game will be. Only the strongest trades in current market conditions are provided by our trading analysts.</p>
              </CardContent>
            </Card>
            
            <Card className="fade-in bg-gray-900 border-[color:var(--brand-orange)]/30 hover:border-[color:var(--brand-orange)] transition-colors">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-[color:var(--brand-orange)] rounded-xl flex items-center justify-center mb-4">
                  <Smartphone className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Simple & Easy to Use Interface 🥇</h3>
                <p className="text-gray-400">There's no need to waste time trying to figure out a confusing user interface! The Gold Sniper mobile app features a simple, user-friendly design that gets you precisely what you need without any fuss or effort. You can quickly navigate across all pages.</p>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center bg-gradient-to-r from-[color:var(--brand-orange)] to-[color:var(--amber-accent)] rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-black mb-6">All of the most latest and popular features of Gold Sniper are now accessible on your mobile device!</h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-black text-white hover:bg-gray-900 font-bold py-4 px-8 rounded-xl transition-all duration-200 flex items-center justify-center space-x-3 text-lg shadow-xl">
                <SiApple className="w-6 h-6" />
                <span>Download for iPhone</span>
              </Button>
              <Button className="bg-black text-white hover:bg-gray-900 font-bold py-4 px-8 rounded-xl transition-all duration-200 flex items-center justify-center space-x-3 text-lg shadow-xl">
                <SiGoogleplay className="w-6 h-6" />
                <span>Download for Android</span>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* How Signals Work */}
      <section className="bg-gray-900 py-12 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-6 md:mb-10">
            <h2 className="text-3xl font-bold text-white mb-3">How do Gold Sniper Signals Work? 🥇</h2>
            <p className="text-lg text-gray-400 max-w-4xl mx-auto mb-2 md:mb-4">
              Our analysts scrutinize every component to guarantee that you have a simple-to-use gold signals system for a high-quality trading experience. If you follow our live trading ideas, you can quickly duplicate our live trades on your trading account.
            </p>
          </div>
          
          <div className="grid md:grid-cols-1 lg:grid-cols-5 gap-4 md:gap-6 mb-4 md:mb-8">
            <div className="text-center fade-in">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">1</div>
              <p className="text-gray-300 text-lg">Our analyst identify a market opportunity that might result in a profitable trade</p>
            </div>
            
            <div className="text-center fade-in">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">2</div>
              <p className="text-gray-300 text-lg">Following a risk analysis, they determine the TP and SL that will maximize profit while ensuring that any losses are minimized</p>
            </div>
            
            <div className="text-center fade-in">
              <div className="w-16 h-16 bg-[color:var(--brand-orange)] rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">3</div>
              <p className="text-gray-300 text-lg">The signal is confirmed and immediately delivered to your phone</p>
            </div>
            
            <div className="text-center fade-in">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">4</div>
              <p className="text-gray-300 text-lg">You execute the trade on your brokerage account, keeping the TP and SL in mind!</p>
            </div>
            
            <div className="text-center fade-in">
              <div className="w-16 h-16 bg-pink-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">5</div>
              <p className="text-gray-300 text-lg">Rest without being anxious about the trade, grab a drink, and wait for the next one! Check your bank account, see how much money you've made and feel good! 💰</p>
            </div>
          </div>
        </div>
      </section>

      {/* How to Read Signals */}
      <section className="bg-black py-12 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">How to Read Gold Sniper's Gold Signals 🥇</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              In our Gold signals terminal, you will find the following information:
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 mb-8 md:mb-16">
            <Card className="bg-gray-900 border-[color:var(--brand-orange)]/30">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-4">
                  <Activity className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Status</h3>
                <p className="text-gray-400 mb-4">The signal's current status:</p>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-green-400 font-medium">Live</span>
                    <span className="text-gray-500">- Follow the alert and enter the market</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <span className="text-red-400 font-medium">Closed</span>
                    <span className="text-gray-500">- Signal is no longer operational</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-900 border-[color:var(--brand-orange)]/30">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-[color:var(--brand-orange)] rounded-xl flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Action</h3>
                <p className="text-gray-400 mb-4">Buy or Sell signals with current price</p>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <ArrowUp className="w-4 h-4 text-green-400" />
                    <span className="text-green-400 font-medium">BUY</span>
                    <span className="text-gray-500">- Gold buy signals</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <ArrowDown className="w-4 h-4 text-red-400" />
                    <span className="text-red-400 font-medium">SELL</span>
                    <span className="text-gray-500">- Gold sell signals</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-900 border-[color:var(--brand-orange)]/30">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center mb-4">
                  <DollarSign className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Entry Price</h3>
                <p className="text-gray-400">Premium members get access to each trade signal's entry price</p>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-900 border-[color:var(--brand-orange)]/30">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Stop Loss</h3>
                <p className="text-gray-400">An automated departure point that safeguards your investment. This is the proposed price for exiting the transaction if it goes against our analysis.</p>
              </CardContent>
            </Card>
          </div>
          
          <div className="bg-gradient-to-r from-red-900/50 to-orange-900/50 rounded-2xl p-8 border border-red-500/30">
            <h3 className="text-2xl font-bold text-white mb-4 text-center">Pay Attention! 🥇</h3>
            <p className="text-gray-300 text-lg mb-6 text-center">There are 3 different ways for XAUUSD signals to get closed:</p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <X className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">Automatically</h4>
                <p className="text-gray-400">By reaching the stop loss level</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">Automatically</h4>
                <p className="text-gray-400">By reaching the take profit level</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-[color:var(--brand-orange)] rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">Manually</h4>
                <p className="text-gray-400">Our team closes the signal based on momentum and market factors</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gold Trading Education */}
      <section className="bg-gray-900 py-12 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">What is Gold Trading According to Gold Sniper? 🥇</h2>
            <p className="text-xl text-gray-400 max-w-4xl mx-auto">
              You should know that gold is a fossil and non-renewable precious metal. The reserves of open mines are drained year after year, resulting in consistent growth in the value of this asset over time.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 md:gap-12 mb-8 md:mb-16">
            <Card className="bg-black border-[color:var(--brand-orange)]/30">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-[color:var(--brand-orange)] rounded-xl flex items-center justify-center mb-6">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">Safe Haven Investment</h3>
                <p className="text-gray-400 text-lg">Gold is also a kind of safe haven for investment capital. Economic downturns always result in a large outflow of money from securities. Fearing disaster such as a result of the stock market crashing will have investors shifting cash to more dependable assets, one of which is gold.</p>
              </CardContent>
            </Card>
            
            <Card className="bg-black border-[color:var(--brand-orange)]/30">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mb-6">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">Long-term Value Growth</h3>
                <p className="text-gray-400 text-lg">The yearly depreciation of fiat money, often known as inflation, can explain the continuous rise in gold prices. Gold's value always rises in the long run, regardless of the macroeconomic environment.</p>
              </CardContent>
            </Card>
          </div>
          
          <div className="bg-gradient-to-r from-[color:var(--brand-orange)] to-[color:var(--amber-accent)] rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-black mb-4">Trading Success Metrics</h3>
            <p className="text-black/80 text-lg mb-6">A steady monthly income of 10-20% is a strong financial accomplishment for a gold trader. You will only need to intraday trade to attain such an outcome in gold trading.</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-black mb-2">10-20%</div>
                <div className="text-black/70">Monthly Income Target</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-black mb-2">M15+</div>
                <div className="text-black/70">Best Timeframe</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-black mb-2">XAU/USD</div>
                <div className="text-black/70">Primary Trading Pair</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trading Tips Section */}
      <section className="bg-black py-12 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Top 7 Tips for Trading Gold Successfully 🥇</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-2 md:mb-4">
              As you can see, following our gold currency signals is straightforward. When a signal appears on our signals app or you receive an alert on your phone, open a trade at the spot price and use the predetermined stop loss and take profit settings.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            <Card className="bg-gray-900 border-[color:var(--brand-orange)]/30">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-4 text-white font-bold text-xl">1</div>
                <h3 className="text-lg font-semibold text-white mb-3">Plan Your Trades</h3>
                <p className="text-gray-400">Before starting a new position, make a plan for entering and exiting a trade. Stick to your strategy and resist the urge to modify it on the spur of the moment.</p>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-900 border-[color:var(--brand-orange)]/30">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center mb-4 text-white font-bold text-xl">2</div>
                <h3 className="text-lg font-semibold text-white mb-3">Risk Management</h3>
                <p className="text-gray-400">Never open positions with all your available capital. Use no more than 20-25% of them for all open positions and no more than 2% for each individual trade.</p>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-900 border-[color:var(--brand-orange)]/30">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-[color:var(--brand-orange)] rounded-xl flex items-center justify-center mb-4 text-white font-bold text-xl">3</div>
                <h3 className="text-lg font-semibold text-white mb-3">Cut Losses Early</h3>
                <p className="text-gray-400">Never aggravate a losing situation. Stop orders should be used to minimize potential losses on all active positions.</p>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-900 border-[color:var(--brand-orange)]/30">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center mb-4 text-white font-bold text-xl">4</div>
                <h3 className="text-lg font-semibold text-white mb-3">Follow the Trend</h3>
                <p className="text-gray-400">Instead of going against the market, go with it. The market is always correct!</p>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-900 border-[color:var(--brand-orange)]/30">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-pink-600 rounded-xl flex items-center justify-center mb-4 text-white font-bold text-xl">5</div>
                <h3 className="text-lg font-semibold text-white mb-3">Big Picture Focus</h3>
                <p className="text-gray-400">Take a look at the big picture. Even if you just trade for a short time, you should always keep an eye on the long-term trend.</p>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-900 border-[color:var(--brand-orange)]/30">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center mb-4 text-white font-bold text-xl">6</div>
                <h3 className="text-lg font-semibold text-white mb-3">Review Your Trades</h3>
                <p className="text-gray-400">Make it a habit to go through your trades. This way, you'll be able to keep track of your profits and losses, as well as discover any flaws.</p>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-900 border-[color:var(--brand-orange)]/30">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-[color:var(--brand-orange)] rounded-xl flex items-center justify-center mb-4 text-white font-bold text-xl">7</div>
                <h3 className="text-lg font-semibold text-white mb-3">Use Stop Loss Orders</h3>
                <p className="text-gray-400">Always protect your capital with stop loss orders. We occasionally provide notes with our signals, such as "Raise the stop loss to breakeven if the price approaches our take profit."</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Market Factors */}
      <section className="bg-gray-900 py-12 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Factors That Impact Gold Prices 🥇</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-2 md:mb-4">
              This is where Gold Sniper can help you know all the different factors affecting gold and find you the best trading opportunities.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 md:gap-12">
            <div className="text-center fade-in">
              <div className="w-20 h-20 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <BarChart3 className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">Supply and Demand</h3>
              <p className="text-gray-300 text-lg">According to volume per day data, jewelry manufacture accounts for half of worldwide demand. Another 40% is made up of investment accounts. When demand is high and supply is low, prices climb.</p>
            </div>
            
            <div className="text-center fade-in">
              <div className="w-20 h-20 bg-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <TrendingUp className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">Market Volatility</h3>
              <p className="text-gray-300 text-lg">Your charting software's real-time trading signals will react to market movements. When stocks are underperforming, investors turn to gold. When stock market expectations are bullish, gold trading levels decrease.</p>
            </div>
            
            <div className="text-center fade-in">
              <div className="w-20 h-20 bg-[color:var(--brand-orange)] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Globe className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">Geopolitics</h3>
              <p className="text-gray-300 text-lg">A simple glance at gold's price history reveals that today's projections are influenced by geopolitical influences. Uncertainty in the financial markets will prompt firms to rush to gold, driving up prices.</p>
            </div>
          </div>
        </div>
      </section>

      {/* App Interface Preview */}
      <section className="bg-black py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="fade-in">
              <h2 className="text-4xl font-bold text-white mb-6">
                Intuitive Trading Interface
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Our app features a clean, professional interface designed for both beginners and experienced traders. Access all critical information at a glance with our streamlined dashboard.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[color:var(--brand-orange)] rounded-full"></div>
                  <span className="text-gray-300">Live market data and price feeds</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[color:var(--brand-orange)] rounded-full"></div>
                  <span className="text-gray-300">One-tap signal execution</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[color:var(--brand-orange)] rounded-full"></div>
                  <span className="text-gray-300">Portfolio performance tracking</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[color:var(--brand-orange)] rounded-full"></div>
                  <span className="text-gray-300">Risk management tools</span>
                </div>
              </div>
              
              <Button className="bg-[color:var(--brand-orange)] hover:bg-[color:var(--amber-accent)] text-white font-bold py-6 px-12 rounded-xl transition-all duration-200 flex items-center justify-center space-x-3 h-16 text-xl shadow-xl transform hover:scale-105 min-w-[200px]">
                <Smartphone className="w-6 h-6" />
                <span>Try Demo</span>
              </Button>
            </div>
            
            <div className="relative fade-in flex justify-center">
              <div className="w-80 h-80 flex items-center justify-center">
                <img 
                  src="https://cdn.prod.website-files.com/61389171fc46d55b610c07fe/614a4da80502ad8434e17664_Group%20150.png" 
                  alt="GoldSniper app interface showing trading dashboard" 
                  className="max-w-full max-h-full object-contain" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Section */}
      <section className="bg-black py-12 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Go Premium 🥇</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-2 md:mb-4">
              Our mobile app will not only provide live updates on gold signals for Premium users, but it will also provide you with these benefits.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4 md:gap-8 mb-8 md:mb-16">
            <div className="bg-gray-900 rounded-2xl p-8 border border-[color:var(--brand-orange)]/30">
              <h3 className="text-2xl font-bold text-white mb-6">Premium Benefits</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <p className="text-gray-300">PREMIUM members get more gold signals, more trading opportunities, and more profits.</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <p className="text-gray-300">PREMIUM members can open several trades per day and receive analysis for each signal.</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <p className="text-gray-300">PREMIUM members can improve their market discernment by comparing their own analysis to ours.</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <p className="text-gray-300">Gold Sniper PREMIUM members earn twice as much when they exit the market.</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-[color:var(--brand-orange)] to-[color:var(--amber-accent)] rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold text-black mb-4">Expert Team</h3>
              <p className="text-black/80 text-lg mb-6">
                We are a team of experienced traders and analysts. We know all there is to know about financial markets as we have over ten years of expertise. We developed Gold Sniper because we know how difficult it can be to trade and remain calm. We are here to assist you in improving your approach and achieving amazing results on your accounts.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-black text-white hover:bg-gray-900 font-bold py-4 px-8 rounded-xl transition-all duration-200 flex items-center justify-center space-x-3 text-lg shadow-xl">
                  <SiApple className="w-6 h-6" />
                  <span>Download for iPhone</span>
                </Button>
                <Button className="bg-black text-white hover:bg-gray-900 font-bold py-4 px-8 rounded-xl transition-all duration-200 flex items-center justify-center space-x-3 text-lg shadow-xl">
                  <SiGoogleplay className="w-6 h-6" />
                  <span>Download for Android</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Performance Stats */}
      <section className="bg-gradient-to-r from-[color:var(--brand-orange)] to-[color:var(--amber-accent)] py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative fade-in flex justify-center">
              <div className="w-80 h-80 flex items-center justify-center">
                <img 
                  src="https://cdn.prod.website-files.com/61389171fc46d55b610c07fe/61484477f7c5051f6345d215_image%2022.png" 
                  alt="App performance statistics and results" 
                  className="max-w-full max-h-full object-contain" 
                />
              </div>
            </div>
            
            <div className="fade-in">
              <h2 className="text-4xl font-bold text-black mb-6">
                Proven App Performance 📈
              </h2>
              <p className="text-xl text-black/80 mb-8">
                Our mobile app delivers consistent results with real-time data processing and lightning-fast signal delivery. Join thousands of successful traders using our platform daily.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-black mb-2">93%</div>
                  <div className="text-black/70">Success Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-black mb-2">17K+</div>
                  <div className="text-black/70">Active Users</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-black mb-2">24/7</div>
                  <div className="text-black/70">Market Coverage</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-black mb-2">&lt; 1s</div>
                  <div className="text-black/70">Signal Delivery</div>
                </div>
              </div>
              
              <Button className="bg-black text-white hover:bg-gray-900 font-bold py-6 px-12 rounded-xl transition-all duration-200 flex items-center justify-center space-x-3 h-16 text-xl shadow-xl transform hover:scale-105 min-w-[200px]">
                <Award className="w-6 h-6" />
                <span>View Results</span>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive Gold Trading Guide - SEO Content */}
      <section className="bg-gray-900 py-12 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Complete Guide to Gold Trading with GoldSniper 📚</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-2 md:mb-4">
              Everything you need to know about trading gold successfully with our professional signals service.
            </p>
          </div>
          
          <div className="prose prose-lg prose-invert max-w-none">
            <div className="bg-black rounded-2xl p-4 md:p-8 mb-4 md:mb-8">
              <h3 className="text-2xl font-bold text-[color:var(--brand-orange)] mb-4">Up-to-the-minute Gold Signals and Trading 🥇</h3>
              <p className="text-gray-300 text-lg mb-4">
                Gold signals are extremely time-sensitive, and you must act fast to secure the best pricing. Prices can fluctuate incredibly quickly, so if you receive a Gold signal notification, you should buy or sell straight away. As a result, if your Gold signals are directly linked to your phone, you will be able to execute trades fast.
              </p>
              <p className="text-gray-300 text-lg">
                The ideal Gold trading app should include several features that enable you to access critical information, receive real-time alerts and watch the pros trade. Why wait when Gold Sniper combines all of this information in a single trade app, giving you all of the tools you need to become a successful Gold trader?
              </p>
            </div>
            
            <div className="bg-black rounded-2xl p-4 md:p-8 mb-4 md:mb-8">
              <h3 className="text-2xl font-bold text-[color:var(--brand-orange)] mb-4">Understanding Global Gold Signals 🥇</h3>
              <p className="text-gray-300 text-lg mb-4">
                Gold trading hours are longer than those of practically any other market in the world, allowing you to trade at virtually any time. The FX market, which is used by brokers all around the world, is often available to professionals, amateur traders, and beginners from all over the world. Gold Sniper signals can help you stay updated about what is going on, no matter where you are.
              </p>
              <p className="text-gray-300 text-lg">
                You can rely on Gold Sniper, the best gold signals app, to keep you trading consistently from practically anywhere. What's stopping you from annihilating the markets if your laptop is connected and internet is available?
              </p>
            </div>
            
            <div className="bg-black rounded-2xl p-4 md:p-8 mb-4 md:mb-8">
              <h3 className="text-2xl font-bold text-[color:var(--brand-orange)] mb-4">Gold Trading Specifics 🥇</h3>
              <p className="text-gray-300 text-lg mb-4">
                When dealing with this precious metal on the OTC market, it is critical to remember that one standard lot equals 100 troy ounces. XAU Is a gold symbol in the gold market. Brokers provide traders the chance to profit from the pricing of this asset by transacting on the XAU/USD pair. The graph depicts the price of one ounce of metal in US dollars.
              </p>
              <p className="text-gray-300 text-lg mb-4">
                Brokers need a minimum contract amount of 0.01 from the lot, which means that you must have 1,550 USD to begin trading gold (including commissions). The greatest degree of leverage available to inexperienced traders is on average 1:1000; nevertheless, dealing with such a large volume of borrowed funds poses severe trading dangers. The ideal degree of leverage is 1:100.
              </p>
              <p className="text-gray-300 text-lg">
                When using leverage, it is critical to pay close attention to the margin trading conditions. Some brokerages set the Stop Out (forced closing of a trade with a poor financial outcome) at 60-70 percent of the trader's deposit, while others put it at 20-30 percent. Furthermore, keep in mind the rules of money management in financial markets. The risk per transaction should not be more than 5-10%. To comply with these requirements, you should deposit at least $200 USD into a trading account.
              </p>
            </div>
            
            <div className="bg-black rounded-2xl p-4 md:p-8 mb-4 md:mb-8">
              <h3 className="text-2xl font-bold text-[color:var(--brand-orange)] mb-4">How Does Gold Work with Gold Sniper? 🥇</h3>
              <p className="text-gray-300 text-lg mb-4">
                In the gold market, gold is basically a currency. It is almost always traded against the US dollar under the symbol XAU/USD. As a result, your approach must monitor changes in the US dollar. A rise in the value of the US dollar might reduce the value of gold. So stay up to date on gold news websites for insights into forthcoming trends and analyses.
              </p>
              <p className="text-gray-300 text-lg">
                When trading gold on the gold market, liquidity is very crucial. Gold has the highest average daily trading volume of any currency pair. You can use a variety of techniques and systems in your gold trading strategy such as gold scalping. All of them will need daily technical examination of price and volume charts.
              </p>
            </div>
            
            <div className="bg-black rounded-2xl p-4 md:p-8 mb-4 md:mb-8">
              <h3 className="text-2xl font-bold text-[color:var(--brand-orange)] mb-4">How to Start Trading Gold with Gold Sniper 🥇</h3>
              <p className="text-gray-300 text-lg mb-4">
                Even for individuals with little to no prior expertise or a little amount of money to invest, trading gold with Gold Sniper is the best choice.
              </p>
              <p className="text-gray-300 text-lg mb-4">
                Some questions you may have:
              </p>
              <ul className="text-gray-300 text-lg mb-4 list-disc list-inside space-y-2">
                <li>How will I know when a new signal is going to go into effect?</li>
                <li>Should I buy or sell, and how much should I pay?</li>
              </ul>
              <p className="text-gray-300 text-lg">
                Our signaling service can answer all of these questions and more!
              </p>
            </div>
            
            <div className="bg-black rounded-2xl p-4 md:p-8">
              <h3 className="text-2xl font-bold text-[color:var(--brand-orange)] mb-4">Best Gold Currency Signals Apps to Use 🥇</h3>
              <p className="text-gray-300 text-lg mb-4">
                First and foremost, choose an app that is compatible with your current devices. If you use a variety of mobile devices, check for the best Gold signal applications to download for both iOS and Android. Because xauusd currency signals are provided in real time, you should act on them as soon as possible to optimize your chances of executing a winning trade.
              </p>
              <p className="text-gray-300 text-lg">
                All of our tips are based on technical analysis of Gold charts as well as fundamental research of economic events and market news.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-6 md:mt-12">
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button className="bg-[color:var(--brand-orange)] hover:bg-[color:var(--amber-accent)] text-black font-bold py-4 px-8 rounded-xl transition-all duration-200 flex items-center justify-center space-x-3 text-lg shadow-xl">
                <SiApple className="w-6 h-6" />
                <span>Download for iPhone</span>
              </Button>
              <Button className="bg-[color:var(--brand-orange)] hover:bg-[color:var(--amber-accent)] text-black font-bold py-4 px-8 rounded-xl transition-all duration-200 flex items-center justify-center space-x-3 text-lg shadow-xl">
                <SiGoogleplay className="w-6 h-6" />
                <span>Download for Android</span>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Download CTA */}
      <section className="bg-black py-12 md:py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Download the Gold Sniper mobile app now! 🥇</h2>
          <p className="text-xl text-gray-300 mb-2 md:mb-4 max-w-3xl mx-auto">
            You can rely on Gold Sniper, the best gold signals app, to keep you trading consistently from practically anywhere. What's stopping you from annihilating the markets if your laptop is connected and internet is available?
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button className="bg-[color:var(--brand-orange)] hover:bg-[color:var(--amber-accent)] text-black font-bold py-4 px-8 rounded-xl transition-all duration-200 flex items-center justify-center space-x-3 text-lg shadow-xl">
              <SiApple className="w-6 h-6" />
              <span>Download for iPhone</span>
            </Button>
            <Button className="bg-[color:var(--brand-orange)] hover:bg-[color:var(--amber-accent)] text-black font-bold py-4 px-8 rounded-xl transition-all duration-200 flex items-center justify-center space-x-3 text-lg shadow-xl">
              <SiGoogleplay className="w-6 h-6" />
              <span>Download for Android</span>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ />

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 gradient-gold rounded-xl flex items-center justify-center">
                  <Crosshair className="text-white w-6 h-6" />
                </div>
                <span className="text-2xl font-bold text-white">GOLDSNIPER</span>
              </div>
              <p className="text-gray-400 mb-6 max-w-md">
                Professional gold trading signals with 93% accuracy. Download our mobile app and join thousands of successful traders worldwide.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-[color:var(--brand-orange)] transition-colors">
                  <ExternalLink className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-[color:var(--brand-orange)] transition-colors">
                  <ExternalLink className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-[color:var(--brand-orange)] transition-colors">
                  <ExternalLink className="w-6 h-6" />
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-6">App Features</h3>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Real-Time Signals</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Market Analysis</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Performance Tracking</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Community Access</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-6">Support</h3>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Support</a></li>
                <li><a href="#" className="hover:text-white transition-colors">User Guide</a></li>
                <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-center md:text-left mb-6 md:mb-0">
                <p className="text-gray-400">&copy; 2024 GoldSniper. All rights reserved.</p>
                <p className="text-sm text-gray-500 mt-1">Trading involves risk. Past performance does not guarantee future results.</p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <Button 
                  onClick={() => handleDownloadClick('android-footer')}
                  disabled={isLoading === 'android-footer'}
                  className="bg-[color:var(--brand-orange)] hover:bg-[color:var(--amber-accent)] text-white font-medium py-2 px-4 rounded-lg transition-colors flex items-center justify-center space-x-2 text-sm"
                >
                  {isLoading === 'android-footer' ? (
                    <>
                      <div className="loading-spinner mr-2"></div>
                      <span>Loading...</span>
                    </>
                  ) : (
                    <>
                      <SiGoogleplay className="w-4 h-4" />
                      <span>Google Play</span>
                    </>
                  )}
                </Button>
                <Button 
                  onClick={() => handleDownloadClick('ios-footer')}
                  disabled={isLoading === 'ios-footer'}
                  variant="outline"
                  className="border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white font-medium py-2 px-4 rounded-lg transition-colors flex items-center justify-center space-x-2 text-sm"
                >
                  {isLoading === 'ios-footer' ? (
                    <>
                      <div className="loading-spinner mr-2"></div>
                      <span>Loading...</span>
                    </>
                  ) : (
                    <>
                      <SiApple className="w-4 h-4" />
                      <span>App Store</span>
                    </>
                  )}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}