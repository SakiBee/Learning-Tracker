
function PrintComponent({ activities, statuses, startEdit, setActivities }) {
  console.log(activities, "here");

  return (
    <div className="max-h-[280px] overflow-y-auto space-y-3 pr-2">
      {activities.map(act => {
        const statusStyle = statuses.find(s => s.label === act.status)?.color;
        console.log(statusStyle, "style");
        return (
          <div
            key={act.id}
            className="p-4 bg-white/5 border border-white/10 rounded-2xl"
          >
            <div className="flex justify-between items-start">
              <div className="grow">
                <div className="flex items-center gap-2 mb-1">
                  <span
                    className={`text-[9px] px-2 py-0.5 rounded-full border ${statusStyle}`}
                  >
                    {act.status}
                  </span>
                  <span className="text-[10px] text-gray-500">{act.date}</span>
                </div>
                <h3 className="text-white font-bold">{act.title}</h3>
                <p className="text-gray-400 text-xs mt-1">{act.description}</p>
              </div>
              <div className="flex gap-3 ml-4">
                <button
                  onClick={() => startEdit(act)}
                  className="text-gray-500 hover:text-white text-xs"
                >
                  Edit
                </button>
                <button
                  onClick={() =>
                    setActivities(activities.filter(a => a.id !== act.id))
                  }
                  className="text-red-900 hover:text-red-500 text-xs"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default PrintComponent;
