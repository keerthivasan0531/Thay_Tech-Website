import './SoftwareDeveloper.css'

function SoftwareDevelopment() {
  return (
    <div className="bg-[#F5F5F5] flex items-center p-5">
      <div className="flex-1">
        <h1 className="font-bold text-4xl mb-4 ml-20 animate-down-to-up">
          <b>Software Development</b>
        </h1>
        <p className="ml-20 mb-20 animate-down-to-up" style={{ animationDelay: '0.5s' }}>
          Let decide on what you want. We will deliver what you need.
        </p>
      </div>
      <div className="flex-1 text-right">
        <img
          src="/Software-images/img1-soft.png"
          alt="Head Software Development"
          className="max-w-full h-auto"
        />
      </div>
    </div>
  );
}

export default SoftwareDevelopment;
