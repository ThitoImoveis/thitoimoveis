import React from 'react'

export default function AnalyticsCard({ title, value }) {
  return (
    <div className="bg-white p-4 rounded shadow text-center">
      <p className="text-sm text-gray-500">{title}</p>
      <p className="text-2xl font-bold text-orange-600">{value}</p>
    </div>
  )
}
