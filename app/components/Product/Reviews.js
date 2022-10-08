import { AiTwotoneStar } from "react-icons/ai";

const Reviews = () => {
  return (
    <div className="flex items-start gap-10 md:flex-nowrap flex-wrap">
      <div className="border p-5 md:w-2/6 w-full">
        <h1 className="text-orange font-bold md:text-5xl text-2xl">5.00</h1>
        <p className="text-sm">⭐⭐⭐⭐⭐</p>
        <p className="text-sm">Based on 1 reviews</p>
        <div className="mt-3 border-t pt-5">
          <img
            src="data:image/png;base64,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"
            alt=""
          />
        </div>
      </div>
      <div className="py-5 md:py-0 flex-1">
        <h3 className="text-bold text-title text-lg">ADD YOUR REVIEW</h3>
        <p>Your rating: ⭐⭐⭐⭐⭐</p>
        <textarea
          className="w-full border p-2 h-40 mt-2"
          placeholder="Your review"
        />
        <button className="btn-white bg-orange text-white">Submit</button>
      </div>
    </div>
  );
};

export default Reviews;
