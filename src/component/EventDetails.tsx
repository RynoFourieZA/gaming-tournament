const EventDetails = () => {
  return (
    <section className="mx-auto gaming-bg-img-4 mt-0 py-8" id="event">
      <div className="my-4 max-w-screen-xl mx-auto">
        <h2 className="text-5xl font-bold text-white mb-20 text-center">
          Tournament Details
        </h2>
        <div className="flex justify-between mb-8">
          <div className="bg-white/20 p-4 rounded-xl w-[45%]">
            <p className="text-white text-3xl mb-2">Date & Time</p>
            <p className="text-white text-3xl font-bold mb-4">
              August 10, 2025 at 6PM SAST
            </p>
          </div>
          <div className="bg-white/20 p-4 rounded-xl w-[45%]">
            <p className="text-white text-3xl mb-2">Location</p>
            <p className="text-white text-3xl font-bold mb-4">
              Online - Streamed live on Twitch
            </p>
          </div>
        </div>
        <div className="flex justify-between mb-8">
          <div className="bg-white/15 p-4 rounded-xl w-[45%]">
            <p className="text-white text-3xl mb-2">Prize Pool</p>
            <p className="text-white text-3xl font-bold mb-4">R50,000</p>
          </div>
          <div className="bg-white/15 p-4 rounded-xl w-[45%]">
            <p className="text-white text-3xl mb-2">Format</p>
            <p className="text-white text-3xl font-bold mb-4">
              Round Robin, Double Elimination
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventDetails;
