import React from "react"
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js"
import { Doughnut } from "react-chartjs-2"

ChartJS.register(ArcElement, Tooltip, Legend)

export const data = {
  labels: ["Perte", "Vente de t-shirt", "Retour de marchendise", "Gains"],
  datasets: [
    {
      label: "dinnars",
      data: [12, 19, 3, 33],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 1.3,
    },
  ],
}

export function Shart() {
  return (
    <div className="md:px-5 md:py-4 bg-white border rounded-lg shadow-lg h-1/2 mx-8 my-4">
      <Doughnut data={data} options={{ responsive: true }} />
    </div>
  )
}
