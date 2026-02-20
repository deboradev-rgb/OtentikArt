import { motion } from "framer-motion";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from "recharts";

const visitData = [
  { month: "Sep", visits: 420 },
  { month: "Oct", visits: 580 },
  { month: "Nov", visits: 650 },
  { month: "Déc", visits: 890 },
  { month: "Jan", visits: 1100 },
  { month: "Fév", visits: 1350 },
];

const pageData = [
  { page: "Accueil", views: 4500 },
  { page: "Portfolio", views: 3200 },
  { page: "Services", views: 1800 },
  { page: "Contact", views: 1200 },
  { page: "À Propos", views: 900 },
  { page: "Témoignages", views: 750 },
];

const sourceData = [
  { name: "Instagram", value: 45 },
  { name: "Google", value: 30 },
  { name: "Direct", value: 15 },
  { name: "Autres", value: 10 },
];

const COLORS = ["hsl(38, 65%, 50%)", "hsl(38, 65%, 65%)", "hsl(35, 20%, 70%)", "hsl(30, 8%, 55%)"];

export default function DashboardStats() {
  return (
    <div className="space-y-8">
      {/* Visits Chart */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
        className="bg-card rounded-xl border border-border p-6">
        <h2 className="font-heading text-xl font-semibold mb-6">Évolution des Visiteurs</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={visitData}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(35, 20%, 88%)" />
            <XAxis dataKey="month" stroke="hsl(30, 8%, 55%)" fontSize={12} />
            <YAxis stroke="hsl(30, 8%, 55%)" fontSize={12} />
            <Tooltip contentStyle={{ background: "hsl(40, 30%, 97%)", border: "1px solid hsl(35, 20%, 88%)", borderRadius: "8px" }} />
            <Line type="monotone" dataKey="visits" stroke="hsl(38, 65%, 50%)" strokeWidth={3} dot={{ fill: "hsl(38, 65%, 50%)", r: 5 }} />
          </LineChart>
        </ResponsiveContainer>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Page Views */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
          className="bg-card rounded-xl border border-border p-6">
          <h2 className="font-heading text-xl font-semibold mb-6">Vues par Page</h2>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={pageData} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(35, 20%, 88%)" />
              <XAxis type="number" stroke="hsl(30, 8%, 55%)" fontSize={12} />
              <YAxis dataKey="page" type="category" stroke="hsl(30, 8%, 55%)" fontSize={12} width={90} />
              <Tooltip contentStyle={{ background: "hsl(40, 30%, 97%)", border: "1px solid hsl(35, 20%, 88%)", borderRadius: "8px" }} />
              <Bar dataKey="views" fill="hsl(38, 65%, 50%)" radius={[0, 4, 4, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Sources */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
          className="bg-card rounded-xl border border-border p-6">
          <h2 className="font-heading text-xl font-semibold mb-6">Sources de Trafic</h2>
          <div className="flex items-center justify-center">
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie data={sourceData} cx="50%" cy="50%" innerRadius={60} outerRadius={100} dataKey="value" label={({ name, value }) => `${name} ${value}%`}>
                  {sourceData.map((_, i) => (
                    <Cell key={i} fill={COLORS[i % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
