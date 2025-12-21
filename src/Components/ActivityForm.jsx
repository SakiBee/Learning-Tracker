import { useForm } from "react-hook-form";

function ActivityForm({
  onSubmit,
  statuses,
  selectedStatus,
  setSelectedStatus,
  editingId,
}) {
  const { register, handleSubmit } = useForm();
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-3 mb-6"
    >
      <input
        {...register("title", { required: true })}
        className="bg-black/30 border border-[#333] p-3 rounded-xl text-white outline-none focus:border-[#0096ff]"
        placeholder="Topic Name"
      />
      <textarea
        {...register("description")}
        className="bg-black/30 border border-[#333] p-3 rounded-xl text-white outline-none focus:border-[#0096ff] h-16 resize-none"
        placeholder="Quick notes..."
      />

      <div className="flex justify-between gap-2 mt-1">
        {statuses.map(s => (
          <button
            key={s.label}
            type="button"
            onClick={() => setSelectedStatus(s.label)}
            className={`flex-1 py-2 px-1 text-[10px] font-bold rounded-lg border transition-all ${
              selectedStatus === s.label
                ? "border-[#0096ff] bg-[#0096ff] text-white"
                : "border-[#333] bg-black/20 text-gray-500 hover:border-gray-500"
            }`}
          >
            {s.label}
          </button>
        ))}
      </div>

      <button className="bg-[#0096ff] text-white p-3 mt-2 rounded-xl font-bold active:scale-95 transition-all">
        {editingId ? "Save Changes" : "Log Progress"}
      </button>
    </form>
  );
}

export default ActivityForm;
