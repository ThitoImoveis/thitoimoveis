import React from 'react'
import { Line, Bar, Pie } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  Tooltip,
  Legend
)

export default function Charts() {
  const chartData = {
    labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai'],
    datasets: [
      {
        label: 'Imóveis Cadastrados',
        data: [15, 20, 35, 28, 40],
        borderColor: '#EA580C',
        backgroundColor: 'rgba(234, 88, 12, 0.2)',
        tension: 0.4
      }
    ]
  }

  const pieData = {
    labels: ['Corretores', 'Imobiliárias', 'Proprietários'],
    datasets: [
      {
        data: [45, 30, 25],
        backgroundColor: ['#F97316', '#FDBA74', '#FED7AA']
      }
    ]
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
        <Line data={chartData} />
      </div>
      <div>
        <Pie data={pieData} />
      </div>
    </div>
  )
}
