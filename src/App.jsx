import { useState } from "react";
import {
  FaBars, FaBell, FaPhone, FaWhatsapp, FaEnvelope
} from "react-icons/fa";

import {
  PieChart, Pie, Cell, ResponsiveContainer
} from "recharts";

const COLORS = ["#4F46E5", "#9333EA", "#F97316", "#10B981", "#6B7280", "#9CA3AF"];

export default function App() {
  const [open, setOpen] = useState(true);

  const stats = [
    { title: "Monthly Target", value: "₹12,00,000", percent: 68, color: "blue" },
    { title: "Achieved (This Month)", value: "₹8,16,000", percent: 68, color: "green" },
    { title: "Balance to Achieve", value: "₹3,84,000", percent: 32, color: "orange" },
    { title: "Yearly Target", value: "₹1,44,00,000", percent: 57, color: "purple" },
    { title: "New Leads Today", value: "12", percent: 100, color: "blue" }
  ];

  const chartData = [
    { name: "Facebook", value: 120 },
    { name: "Instagram", value: 85 },
    { name: "Website", value: 65 },
    { name: "WhatsApp", value: 30 },
    { name: "Referral", value: 20 },
    { name: "Others", value: 10 }
  ];

  const leads = [
    {
      name: "Amit Singh",
      phone: "+91 98765 43210",
      source: "Facebook",
      interest: "Rice, Oil",
      last: "21 May 24",
      lastType: "Called",
      next: "23 May 24",
      time: "11:00 AM",
      priority: "Hot",
      color: "red",
      initials: "AS"
    },
    {
      name: "Pooja Reddy",
      phone: "+91 91234 56789",
      source: "Instagram",
      interest: "Atta, Pulses",
      last: "21 May 24",
      lastType: "WhatsApp",
      next: "22 May 24",
      time: "03:00 PM",
      priority: "Warm",
      color: "orange",
      initials: "PR"
    },
    {
      name: "Nikhil Kumar",
      phone: "+91 99876 54321",
      source: "Website",
      interest: "Dry Fruits",
      last: "20 May 24",
      lastType: "Called",
      next: "22 May 24",
      time: "11:30 AM",
      priority: "Warm",
      color: "orange",
      initials: "NK"
    },
    {
      name: "Sunita Menon",
      phone: "+91 87564 32109",
      source: "Enquiry",
      interest: "Spices, Tea",
      last: "20 May 24",
      lastType: "Meeting",
      next: "23 May 24",
      time: "04:00 PM",
      priority: "Hot",
      color: "red",
      initials: "SM"
    },
    {
      name: "Rohit Gupta",
      phone: "+91 78901 23456",
      source: "Facebook",
      interest: "Masala, Oil",
      last: "19 May 24",
      lastType: "Called",
      next: "24 May 24",
      time: "12:00 PM",
      priority: "Cold",
      color: "blue",
      initials: "RG"
    }
  ];

  return (
    <div className="layout">

      {/* SIDEBAR */}
      <aside className={`sidebar ${open ? "" : "collapse"}`}>
        <div className="logo">🛒 RetailTrade CRM</div>

        <nav>
          <p className="active">Dashboard</p>
          <p>My Leads</p>
          <p>Enquiries</p>
          <p>Follow Ups <span className="badge">8</span></p>
          <p>Customers</p>
          <p>Products</p>
          <p>Orders</p>
          <p>Reports</p>
          <p>WhatsApp</p>
          <p>Calendar</p>
          <p>Tasks</p>
          <p>Settings</p>
        </nav>

        <div className="profile">
          <img src="https://i.pravatar.cc/40" />
          <div>
            <b>Rohit Sharma</b>
            <span>Online</span>
          </div>
        </div>
      </aside>

      {/* MAIN */}
      <main className="main">

        {/* HEADER */}
        <div className="header">
          <div>
            <h1>Good Morning, Rohit 👋</h1>
            <p>Here's what's happening with your sales today.</p>
          </div>

          <div className="header-icons">
            <FaPhone />
            <FaBell />
            <FaBars onClick={() => setOpen(!open)} />
          </div>
        </div>

        {/* STATS */}
        <div className="stats">
          {stats.map((s, i) => (
            <div className="card" key={i}>
              <p className="title">{s.title}</p>
              <h2>{s.value}</h2>

              <div className="progress">
                <div className={`bar ${s.color}`} style={{ width: s.percent + "%" }}></div>
              </div>

              <span>{s.percent}%</span>
            </div>
          ))}
        </div>

        {/* GRID */}
        <div className="grid">

          {/* TABLE */}
          <div className="table card">
            <div className="tableHeader">
              <h3>Today's Lead Queue</h3>
              <span className="pill">24 Leads</span>
            </div>

            <table>
              <thead>
                <tr>
                  <th>Lead / Contact</th>
                  <th>Source</th>
                  <th>Interested In</th>
                  <th>Last Activity</th>
                  <th>Next Follow Up</th>
                  <th>Priority</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {leads.map((lead, i) => (
                  <tr key={i}>

                    {/* LEAD */}
                    <td className="lead">
                      <span className={`avatar ${lead.color}`}>
                        {lead.initials}
                      </span>
                      <div>
                        <b>{lead.name}</b>
                        <p className="sub">{lead.phone}</p>
                      </div>
                    </td>

                    {/* SOURCE */}
                    <td>{lead.source}</td>

                    {/* INTEREST */}
                    <td>{lead.interest}</td>

                    {/* LAST */}
                    <td>
                      <div className="sub">{lead.last}</div>
                      <span className="sub2">{lead.lastType}</span>
                    </td>

                    {/* NEXT */}
                    <td>
                      <div className="next">{lead.next}</div>
                      <span className="time">{lead.time}</span>
                    </td>

                    {/* PRIORITY */}
                    <td>
                      <span className={`badge ${lead.color}`}>
                        {lead.priority}
                      </span>
                    </td>

                    {/* ACTION */}
                    <td className="actions">
                      <div className="iconBtn green"><FaPhone /></div>
                      <div className="iconBtn green"><FaWhatsapp /></div>
                      <div className="iconBtn blue"><FaEnvelope /></div>
                    </td>

                  </tr>
                ))}
              </tbody>
            </table>

            <div className="viewAll">View All Leads →</div>
          </div>

          {/* RIGHT PANEL */}
          <div className="right">

            <div className="card">
              <h3>Lead Source</h3>

              <ResponsiveContainer width="100%" height={220}>
                <PieChart>
                  <Pie data={chartData} innerRadius={70} dataKey="value">
                    {chartData.map((_, i) => (
                      <Cell key={i} fill={COLORS[i]} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>

            <div className="card">
              <h3>My Daily Performance</h3>

              <div className="progressLine">
                <p>Calls Made</p><span>53%</span>
              </div>
              <div className="progress small"><div className="bar blue" style={{width:"53%"}}></div></div>

              <div className="progressLine">
                <p>Leads Connected</p><span>56%</span>
              </div>
              <div className="progress small"><div className="bar green" style={{width:"56%"}}></div></div>

              <div className="progressLine">
                <p>Conversions</p><span>38%</span>
              </div>
              <div className="progress small"><div className="bar orange" style={{width:"38%"}}></div></div>
            </div>

            <div className="card">
              <h3>Recent Enquiries</h3>
              <p>Rahul Verma <span className="new">New</span></p>
              <p>Meena Patel <span className="new">New</span></p>
            </div>

          </div>

        </div>

        {/* FOLLOW UPS */}
        <div className="card follow">
          <h3>Upcoming Follow Ups</h3>

          <div className="followGrid">

            {[
              { name:"Amit Singh", text:"Rice, Oil", time:"Today • 11:00 AM", color:"red", initials:"AS" },
              { name:"Pooja Reddy", text:"Atta, Pulses", time:"Today • 03:00 PM", color:"purple", initials:"PR" },
              { name:"Nikhil Kumar", text:"Dry Fruits", time:"Today • 04:30 PM", color:"green", initials:"NK" },
              { name:"Sunita Menon", text:"Spices, Tea", time:"Tomorrow • 11:00 AM", color:"blue", initials:"SM" }
            ].map((f,i)=>(

              <div className="followCard" key={i}>

                <div className={`avatar ${f.color}`}>
                  {f.initials}
                </div>

                <div className="followText">
                  <b>{f.name}</b>
                  <p>{f.text}</p>
                  <span>{f.time}</span>
                </div>

                <div className="iconBtn green">
                  <FaPhone />
                </div>

              </div>

            ))}

          </div>

          <div className="viewAll">View All Follow Ups →</div>

        </div>

      </main>
    </div>
  );
}