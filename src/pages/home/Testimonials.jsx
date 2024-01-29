import { FaStar } from "react-icons/fa";

const Testimonials = () => {
  return (
    <div className="section-container py-16">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="md:w-1/2 ">
          <img
            src="images/home/testimonials/testimonials.png"
            className="max-w-full max-h-full"
            alt="Dummy Image"
          />
        </div>
        <div className="md:w-1/2">
          <div className="text-left pr-[4px]">
            <p className="subtitle1">Testimonials</p>
            <h2 className="title1">What Our Customers Say About Us</h2>
            <blockquote className="my-5 text-secondary leading-[30px]">
              I had the pleasure of dining at Foodi last night, and I am still
              raving about the expericence! The attention of the detail in
              presentation and service was impaccable.
            </blockquote>
            {/* Review section */}
            <div className="flex items-center gap-4 flex-wrap">
              <div className="avatar-group border-none -space-x-6 rtl:space-x-reverse">
                <div className="avatar border-none">
                  <div className="w-16">
                    <img src="/images/home/testimonials/testimonial1.png" />
                  </div>
                </div>
                <div className="avatar border-none">
                  <div className="w-16">
                    <img src="/images/home/testimonials/testimonial2.png" />
                  </div>
                </div>
                <div className="avatar border-none">
                  <div className="w-16">
                    <img src="/images/home/testimonials/testimonial3.png" />
                  </div>
                </div>
                <div className="avatar border-none bg-gray-700 placeholder">
                  <div className="w-16 text-white">
                    <span>+99</span>
                  </div>
                </div>
              </div>
              <div className="space-y-1">
                <h5 className="text-lg font-semibold">Customer Feedback</h5>
                <div className="flex items-center gap-2">
                  <FaStar className="text-yellow-400" />
                  <span className="font-medium">4.9</span>{" "}
                  <span className="text-[#807e7e]">(18.6k Reviews)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
