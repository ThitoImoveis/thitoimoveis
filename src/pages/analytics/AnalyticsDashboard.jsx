import React from 'react'
import AnalyticsCard from './AnalyticsCard'
import Charts from './Charts'

export default function AnalyticsDashboard() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">Painel de Análise</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <AnalyticsCard title="Imóveis Cadastrados" value="128" />
        <AnalyticsCard title="Visitas no Portal" value="3.245" />
        <AnalyticsCard title="Leads Captados" value="87" />
        <AnalyticsCard title="Corretores Ativos" value="14" />
      </div>

      <div className="mt-6 bg-white p-4 rounded shadow">
        <h2 className="text-lg font-semibold mb-4">Gráficos de Desempenho</h2>
        <Charts />
      </div>
    </div>
  )
}
