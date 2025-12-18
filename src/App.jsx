import React, { useState, useContext, createContext } from "react";
import { useForm } from "react-hook-form";
import FormComponent from "./Components/FormComponent";
import PrintComponent from "./Components/PrintComponent";

export const MyContext = createContext();

function App() {
  const [activities, setActivities] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [selectedStatus, setSelectedStatus] = useState("Completed");

  const { register, handleSubmit, reset, setValue } = useForm();

  const statuses = [
    {
      label: "Completed",
      color: "bg-green-500/20 text-green-400 border-green-500/30",
    },
    {
      label: "Need Revision",
      color: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
    },
    {
      label: "Need Supervision",
      color: "bg-purple-500/20 text-purple-400 border-purple-500/30",
    },
  ];

  const onSubmit = data => {
    const activityData = { ...data, status: selectedStatus };

    if (editingId) {
      setActivities(
        activities.map(act =>
          act.id === editingId ? { ...act, ...activityData } : act
        )
      );
      setEditingId(null);
    } else {
      const newActivity = {
        ...activityData,
        id: Date.now(),
        date: new Date().toLocaleDateString(),
      };
      setActivities([newActivity, ...activities]);
    }
    reset();
    setSelectedStatus("Completed");
  };

  const startEdit = act => {
    setEditingId(act.id);
    setValue("title", act.title);
    setValue("description", act.description);
    setSelectedStatus(act.status);
  };

  return (
    <div className="m-0 p-0 w-screen h-screen flex items-center justify-center bg-[#0a0a0c] font-sans overflow-hidden relative">
      <div className="relative z-10 bg-white/5 backdrop-blur-[20px] border border-white/10 p-8 rounded-[30px] w-full max-w-[500px] shadow-2xl">
        <h1 className="text-white text-3xl font-extrabold mb-6 text-center tracking-tight">
          Learning Tracker
        </h1>
        <FormComponent
          onSubmit={onSubmit}
          statuses={statuses}
          selectedStatus={selectedStatus}
          setSelectedStatus={setSelectedStatus}
          editingId={editingId}
          setActivities={setActivities}
        />

        <PrintComponent
          activities={activities}
          statuses={statuses}
          startEdit={startEdit}
          setActivities={setActivities}
        />
      </div>
    </div>
  );
}

export default App;
