export default function Loading() {
  return (
    <div className="flex justify-center items-center min-h-[50vh] flex-col">
      <div className="border-4 border-gray-200 border-t-blue-500 rounded-full w-12 h-12 animate-spin"></div>
      <p className="mt-5 text-gray-600">Loading...</p>
    </div>
  )
}