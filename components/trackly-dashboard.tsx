'use client'

import { useState } from 'react'
import {
  Bell,
  Bookmark,
  Car,
  ChevronDown,
  CircleHelp,
  Grid2X2,
  Headphones,
  Home,
  LayoutGrid,
  Menu,
  MoreVertical,
  Plane,
  Plus,
  Search,
  Settings,
  ShoppingBag,
  Sparkles,
  Tag,
  TrendingUp,
  Tv,
  Watch,
  Zap,
} from 'lucide-react'

const watches = [
  { title: 'Nike Pegasus 41', type: 'Product', tone: 'green', detail: 'Under ₹5,000  •  Any website', price: '₹5,299', checked: '2 hours ago', icon: 'shoe' },
  { title: 'iPhone 15 (128GB)', type: 'Product', tone: 'green', detail: 'Under ₹60,000  •  Amazon, Flipkart', price: '₹62,999', checked: '1 hour ago', icon: 'phone' },
  { title: 'Delhi → Goa', type: 'Flight', tone: 'blue', detail: 'Under ₹6,000  •  Any platform', price: '₹7,249', checked: '3 hours ago', icon: 'flight', dates: 'Travel dates: 10 Apr – 15 Apr' },
  { title: 'Delhi → Jaipur', type: 'Ride', tone: 'cyan', detail: 'Under ₹800  •  BlaBlaCar, Others', price: '₹850', checked: 'This Friday', icon: 'car', dates: 'Date: This Friday' },
  { title: 'Interstellar', type: 'OTT', tone: 'purple', detail: 'Under ₹100  •  Rent or Stream (Legal)', price: 'Not available yet', checked: '4 hours ago', icon: 'movie' },
  { title: 'Goa – 2 Nights', type: 'Hotel', tone: 'green', detail: 'Under ₹2,500/night  •  Any platform', price: '₹3,100', checked: '6 hours ago', icon: 'hotel', dates: 'Dates: 12 Apr – 14 Apr' },
]

const navItems = [
  [Home, 'Dashboard'], [Plus, 'Add Watch'], [Watch, 'My Watches'], [Bell, 'Notifications'], [Bookmark, 'Saved Searches'], [Grid2X2, 'Platforms'], [Settings, 'Settings'],
]

function ProductThumb({ kind }: { kind: string }) {
  return <div className={`product-thumb ${kind}`} aria-hidden="true"><div className="thumb-shape" /></div>
}

export function TracklyDashboard() {
  const [activeTab, setActiveTab] = useState('All (6)')
  const [query, setQuery] = useState('')
  const [added, setAdded] = useState(false)

  return (
    <div className="trackly-shell">
      <header className="topbar">
        <div className="brand"><div className="brand-mark"><Sparkles /></div><div><div className="brand-name">Trackly <span>Beta</span></div><div className="brand-tagline">Tell it. We&apos;ll watch.</div></div></div>
        <nav className="topnav"><a className="active">Home</a><a>How it works</a><a>Supported Platforms</a><a>Pricing</a></nav>
        <div className="top-actions"><Search /><Bell className="notification-icon" /><span className="avatar">A</span><span>Ankit</span><ChevronDown /></div>
      </header>
      <div className="body-grid">
        <aside className="sidebar">
          <div className="sidebar-links">{navItems.map(([Icon, label]) => <button key={label as string} className={label === 'Dashboard' ? 'selected' : ''}><Icon /><span>{label as string}</span>{label === 'Notifications' && <b>3</b>}</button>)}</div>
          <div className="plan-card"><div className="plan-title">Free Plan <CircleHelp /></div><div className="plan-count">3 / 5 active watches</div><div className="progress"><i /></div><button><Zap /> Upgrade Plan</button></div>
        </aside>
        <main className="content">
          <section className="hero">
            <div className="hero-copy"><h1>What are you looking for?</h1><p>Tell us in your own words. We&apos;ll keep an eye on it.</p></div>
            <div className="hand-note">One place for all<br />your wants <span>↘</span></div>
            <div className="watch-input"><Sparkles /><input value={query} onChange={(e) => setQuery(e.target.value)} placeholder={'e.g. “Nike shoes under ₹5,000”, “Delhi to Jaipur ride under ₹800”, “Interstellar on OTT”…'} /><button onClick={() => setAdded(true)}><Plus /> Add Watch</button></div>
            <div className="quick-chips">{[[ShoppingBag,'Products'],[Plane,'Flights'],[Car,'Rides'],[Tv,'Movies / OTT'],[LayoutGrid,'Hotels'],[Grid2X2,'More']].map(([Icon, label]) => <button key={label as string}><Icon />{label as string}</button>)}</div>
            <div className="examples"><b>Examples:</b><span>“iPhone 15 under 60k”</span><span>“Goa flight under 6k next month”</span><span>“Interstellar to rent under 100”</span>{added && <em>Watch added</em>}</div>
          </section>
          <section className="watch-section"><div className="section-heading"><h2>My Watches</h2><button className="sort">Newest First <ChevronDown /></button></div><div className="tabs">{['All (6)','Products (3)','Travel (2)','Entertainment (1)'].map((tab) => <button key={tab} className={activeTab === tab ? 'active' : ''} onClick={() => setActiveTab(tab)}>{tab}</button>)}</div><div className="watch-list">{watches.map((item) => <article className="watch-row" key={item.title}><ProductThumb kind={item.icon} /><div className="watch-info"><div className="watch-title">{item.title} <span className={`pill ${item.tone}`}>{item.type}</span></div><div className="watch-detail">{item.detail}</div><div className="watch-price">{item.price !== 'Not available yet' ? <>Current lowest: <strong>{item.price}</strong> <TrendingUp /></> : <>Not available yet <CircleHelp /></>}</div><div className="watch-time">{item.dates || `Last checked: ${item.checked}`}</div></div><div className="watch-status"><span><i /> Watching</span><button aria-label={`More options for ${item.title}`}><MoreVertical /></button><button className="details">View Details</button></div></article>)}</div></section>
        </main>
        <aside className="rightbar"><Panel title="Recent Notifications" action="View all"><Notification kind="shoe" title="Price Drop!" text="Nike Pegasus 41 is now ₹5,299 (down from ₹5,799)" time="2 hours ago" /><Notification kind="flight" title="New Option Found" text="Delhi → Goa flight at ₹6,249" time="5 hours ago" /><Notification kind="headphones" title="Back in Stock" text="Sony WH-1000XM5 is back in stock at ₹29,990" time="1 day ago" /></Panel><Panel title="Price Insights" action="See trends"><div className="sparkline"><svg viewBox="0 0 280 70" preserveAspectRatio="none"><path d="M0 40 L28 26 L55 46 L82 24 L110 25 L138 12 L164 31 L192 17 L220 40 L248 25 L280 43 V70 H0Z" /><polyline points="0,40 28,26 55,46 82,24 110,25 138,12 164,31 192,17 220,40 248,25 280,43" /></svg></div><div className="insight"><TrendingUp /><p>Prices for your watched items are <b>10% lower</b> than last month on average.</p></div></Panel><Panel title="Supported Platforms" action="View all"><div className="platforms">{['Amazon','Flipkart','Myntra','Croma','BlaBlaCar','MakeMyTrip','Netflix','Hotstar'].map((p, i) => <div key={p}><div className={`platform-logo p${i}`}>{p[0]}</div><small>{p}</small></div>)}</div><div className="many">+ Many more...</div></Panel><div className="pro-card"><div className="crown">♛</div><h3>Get More with Pro</h3><p>More watches, faster checks, priority<br />notifications and more.</p><button>Upgrade to Pro <span>→</span></button></div></aside>
      </div>
      <footer><div className="footer-brand"><div className="brand-mark"><Sparkles /></div><b>Trackly</b><small>Tell it. We&apos;ll watch.</small></div><div className="footer-links"><span>About</span><span>Privacy</span><span>Terms</span><span>Contact</span><b>𝕏</b><b>in</b><b>▶</b></div></footer>
    </div>
  )
}

function Panel({ title, action, children }: { title: string, action: string, children: React.ReactNode }) { return <section className="panel"><div className="panel-heading"><h3>{title}</h3><a>{action}</a></div>{children}</section> }
function Notification({ kind, title, text, time }: { kind: string, title: string, text: string, time: string }) { return <div className="notification"><ProductThumb kind={kind} /><div><b>{title}</b><p>{text}</p><small>{time}</small></div><i /></div> }
