import { Link } from "react-router-dom";

export default function DashboardPage() {
  const storedUser = localStorage.getItem("user");

  let user = null;
  try {
    user = storedUser ? JSON.parse(storedUser) : null;
  } catch {
    user = null;
  }

  const stats = [
    { id: 1, label: "Predictions Made", value: "24", note: "This month" },
    { id: 2, label: "Saved Properties", value: "12", note: "Bookmarked homes" },
    { id: 3, label: "Avg. Confidence", value: "92%", note: "Model reliability" },
    { id: 4, label: "Market Alerts", value: "3", note: "New updates" },
  ];

  const quickActions = [
    {
      id: 1,
      title: "New Prediction",
      description: "Estimate a house value using your latest property inputs.",
      to: "/predict",
      cta: "Start Predicting",
    },
    {
      id: 2,
      title: "Browse Houses",
      description: "Explore available houses and compare your options quickly.",
      to: "/houses",
      cta: "View Listings",
    },
    {
      id: 3,
      title: "Prediction History",
      description: "Review your past predictions and monitor pricing patterns.",
      to: "/history",
      cta: "Open History",
    },
  ];

  const recentActivity = [
    "Predicted a 3-bedroom house in Cebu City",
    "Saved a listing in Davao City",
    "Viewed weekly market trend update",
  ];

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-8 max-w-7xl mx-auto">
      <div className="rounded-2xl bg-gradient-to-r from-blue-700 to-cyan-600 text-white p-6 sm:p-8 shadow-lg">
        <p className="text-blue-100 text-sm">House Price Prediction Dashboard</p>
        <h1 className="mt-2 text-2xl sm:text-3xl font-bold">Welcome back{user ? `, ${user.firstName}` : ""}</h1>
        <p className="mt-2 text-blue-100 max-w-2xl">
          Track your property insights, run new price predictions, and keep up with market trends from one place.
        </p>
      </div>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6">
        {stats.map((item) => (
          <article key={item.id} className="rounded-xl bg-white p-5 shadow-sm border border-gray-100">
            <p className="text-sm text-gray-500">{item.label}</p>
            <p className="mt-2 text-3xl font-bold text-gray-800">{item.value}</p>
            <p className="mt-1 text-xs text-gray-500">{item.note}</p>
          </article>
        ))}
      </div>

      <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 rounded-xl bg-white p-5 sm:p-6 shadow-sm border border-gray-100">
          <h2 className="text-xl font-semibold text-gray-800">Quick Actions</h2>
          <p className="text-sm text-gray-500 mt-1">Jump into your most-used features.</p>

          <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-4">
            {quickActions.map((action) => (
              <div key={action.id} className="rounded-lg border border-gray-200 p-4 hover:border-blue-400 transition-colors">
                <h3 className="font-semibold text-gray-800">{action.title}</h3>
                <p className="text-sm text-gray-600 mt-2 min-h-[48px]">{action.description}</p>
                <Link
                  to={action.to}
                  className="inline-block mt-4 text-sm font-semibold text-blue-600 hover:text-blue-700"
                >
                  {action.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>

        <aside className="rounded-xl bg-white p-5 sm:p-6 shadow-sm border border-gray-100">
          <h2 className="text-xl font-semibold text-gray-800">Account Summary</h2>

          {user ? (
            <div className="mt-4 space-y-2 text-sm text-gray-700">
              <p><span className="font-semibold">Name:</span> {user.firstName} {user.lastName}</p>
              <p><span className="font-semibold">Email:</span> {user.email}</p>
              <p><span className="font-semibold">Username:</span> {user.username}</p>
            </div>
          ) : (
            <p className="mt-4 text-sm text-gray-600">No user profile found in local storage.</p>
          )}

          <Link
            to="/history"
            className="inline-block mt-5 text-sm font-semibold text-blue-600 hover:text-blue-700"
          >
            View History
          </Link>
        </aside>
      </div>

      <div className="mt-6 rounded-xl bg-white p-5 sm:p-6 shadow-sm border border-gray-100">
        <h2 className="text-xl font-semibold text-gray-800">Recent Activity</h2>
        <ul className="mt-4 space-y-3">
          {recentActivity.map((activity) => (
            <li key={activity} className="flex items-start gap-3 text-sm text-gray-700">
              <span className="mt-1 h-2 w-2 rounded-full bg-blue-600" aria-hidden="true"></span>
              <span>{activity}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
