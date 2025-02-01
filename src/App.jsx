import React from "react";
import "./App.css";

const FebruaryTimetable = () => {
  const schedule = [
    { date: "1.2.2025", slots: ["A", "B", "C", "A", "B", "C + A"] },
    { date: "2.2.2025", slots: ["B", "C", "A", "B", "C", "A + B"] },
    { date: "3.2.2025", slots: ["C", "A", "B", "C", "A", "B + C"] },
    { date: "4.2.2025", slots: ["A", "B", "C", "A", "B", "C + A"] },
    { date: "5.2.2025", slots: ["B", "C", "A", "B", "C", "A + B"] },
    { date: "6.2.2025", slots: ["C", "A", "B", "C", "A", "B + C"] },
    { date: "7.2.2025", slots: ["A", "B", "C", "A", "B", "C + A"] },
    { date: "8.2.2025", slots: ["B", "C", "A", "B", "C", "A + B"] },
    { date: "9.2.2025", slots: ["C", "A", "B", "C", "A", "B + C"] },
    { date: "10.2.2025", slots: ["A", "B", "C", "A", "B", "C + A"] },
    { date: "11.2.2025", slots: ["B", "C", "A", "B", "C", "A + B"] },
    { date: "12.2.2025", slots: ["C", "A", "B", "C", "A", "B + C"] },
    { date: "13.2.2025", slots: ["A", "B", "C", "A", "B", "C + A"] },
    { date: "14.2.2025", slots: ["B", "C", "A", "B", "C", "A + B"] },
    { date: "15.2.2025", slots: ["C", "A", "B", "C", "A", "B + C"] },
    { date: "16.2.2025", slots: ["A", "B", "C", "A", "B", "C + A"] },
    { date: "17.2.2025", slots: ["B", "C", "A", "B", "C", "A + B"] },
    { date: "18.2.2025", slots: ["C", "A", "B", "C", "A", "B + C"] },
    { date: "19.2.2025", slots: ["A", "B", "C", "A", "B", "C + A"] },
    { date: "20.2.2025", slots: ["B", "C", "A", "B", "C", "A + B"] },
    { date: "21.2.2025", slots: ["C", "A", "B", "C", "A", "B + C"] },
    { date: "22.2.2025", slots: ["A", "B", "C", "A", "B", "C + A"] },
    { date: "23.2.2025", slots: ["B", "C", "A", "B", "C", "A + B"] },
    { date: "24.2.2025", slots: ["C", "A", "B", "C", "A", "B + C"] },
    { date: "25.2.2025", slots: ["A", "B", "C", "A", "B", "C + A"] },
    { date: "26.2.2025", slots: ["B", "C", "A", "B", "C", "A + B"] },
    { date: "27.2.2025", slots: ["C", "A", "B", "C", "A", "B + C"] },
    { date: "28.2.2025", slots: ["A", "B", "C", "A", "B", "C + A"] },
  ];

  return (
    <div className="flex justify-center  bg-white p-4">
      <table className="w-4/5 border-collapse bg-white shadow-lg">
        <thead>
          <tr className="bg-blue-500 text-white ">
            <th className="p-3 border">Date</th>
            <th className="p-3 border">05:00 - 09:00</th>
            <th className="p-3 border">09:00 - 13:00</th>
            <th className="p-3 border">13:00 - 17:00</th>
            <th className="p-3 border">17:00 - 21:00</th>
            <th className="p-3 border">21:00 - 01:00</th>
            <th className="p-3 border">01:00 - 05:00</th>
          </tr>
        </thead>
        <tbody>
          {schedule.map((day, index) => (
            <tr
              key={index}
              className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}
            >
              <td className="p-3 border">{day.date}</td>
              {day.slots.map((slot, i) => (
                <td key={i} className="p-3 border">
                  {slot}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FebruaryTimetable;
