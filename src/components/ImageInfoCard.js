export default function ImageInfoCard({ image, title, description }) {
  return (
    <div className="card flex flex-col md:flex-row gap-0 overflow-hidden p-0">
      {/* Image Section */}
      <div className="w-full md:w-1/2">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover min-h-[300px] md:min-h-[400px]"
        />
      </div>

      {/* Content Section */}
      <div className="w-full md:w-1/2 flex flex-col justify-center p-6 md:p-8">
        <h3 className="text-2xl font-semibold mb-3 text-prdf-primary">
          {title}
        </h3>
        <p className="text-base text-prdf-text-dark leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
