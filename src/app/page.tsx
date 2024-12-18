export default function Home() {
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Welcome to Admin Portal</h1>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-6">
          <h2 className="text-2xl font-semibold mb-4">Quick Stats</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg">
              <h3 className="text-lg font-medium text-blue-700 dark:text-blue-300">
                Total Users
              </h3>
              <p className="text-3xl font-bold">1,234</p>
            </div>
            <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded-lg">
              <h3 className="text-lg font-medium text-green-700 dark:text-green-300">
                Active Projects
              </h3>
              <p className="text-3xl font-bold">56</p>
            </div>
            <div className="bg-purple-50 dark:bg-purple-900/30 p-4 rounded-lg">
              <h3 className="text-lg font-medium text-purple-700 dark:text-purple-300">
                Total Revenue
              </h3>
              <p className="text-3xl font-bold">$12,345</p>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Recent Activity</h2>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="border-b dark:border-gray-700 last:border-0 pb-4 last:pb-0"
              >
                <p className="text-gray-600 dark:text-gray-300">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {new Date().toLocaleDateString()}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
