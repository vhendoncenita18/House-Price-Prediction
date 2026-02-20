
export default function DashboardPage() {

  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <section className="pt-24 px-6 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">
        Welcome to your Dashboard
      </h1>

      {user && (
        <div className="bg-gray-100 p-6 rounded-xl shadow">
          <p><strong>Name:</strong> {user.firstName} {user.lastName}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Username:</strong> {user.username}</p>
        </div>
      )}
    </section>
  );
}