const Form = () => {
  const submitHandler = (e) => {
    e.preventDefault();
    console.log("submitted form", e.target);
  };
  return (
    <>
      <div className="form-wrapper w-full h-screen bg-black text-white">
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
          className="flex flex-col items-start gap-4 justify-between p-4"
        >
          <input
            className="px-5 py-2 flex items-start w-1/2 border-2 rounded outline-none"
            type="text"
            placeholder="Enter Title"
          />

          <textarea
            className="h-30 px-5 py-2 flex items-start w-1/2 border-2 rounded outline-none"
            type="text"
            placeholder="Enter Details"
          />
          <button className="bg-white text-black px-5 py-2 flex items-start w-1/2 border-2 rounded outline-none">
            Add Note
          </button>
        </form>
      </div>
    </>
  );
};

export default Form;
