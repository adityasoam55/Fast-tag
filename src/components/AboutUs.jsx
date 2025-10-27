export default function AboutUs() {
  return (
    <section className="bg-gray-50 py-16 px-6 md:px-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-12">
        {/* Left Content */}
        <div className="md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            About Us
          </h2>

          <p className="text-gray-700 text-base leading-relaxed mb-4">
            Welcome to{" "}
            <span className="font-semibold text-blue-600">FASTag Recharge</span>
            , your trusted platform for FASTag recharge. We make it easy for
            vehicle owners to recharge their FASTag quickly and securely from
            anywhere.
          </p>

          <p className="text-gray-700 text-base leading-relaxed">
            Our goal is to save your time at toll plazas by providing a smooth
            recharge experience with multiple payment options. With reliable
            service, exciting offers, and dedicated support, we are here to make
            your travel easier and more convenient.
          </p>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <img
            src="/FASTag-card.png"
            alt="FASTag Card"
            className="rounded-xl shadow-lg w-full max-w-md"
          />
        </div>
      </div>
    </section>
  );
}
