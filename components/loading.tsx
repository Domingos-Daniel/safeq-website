"use client"

export default function Loading() {
  return (
    <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
      <div className="text-center">
        {/* SAFEQ Letters Animation */}
        <div className="flex items-center justify-center space-x-2 mb-8">
          {["S", "A", "F", "E", "Q"].map((letter, index) => (
            <div
              key={letter}
              className="text-6xl md:text-8xl font-bold text-blue-600 animate-bounce"
              style={{
                animationDelay: `${index * 0.2}s`,
                animationDuration: "1.5s",
              }}
            >
              {letter}
            </div>
          ))}
        </div>

        {/* Loading Dots */}
        <div className="flex items-center justify-center space-x-2">
          <div className="w-3 h-3 bg-blue-600 rounded-full animate-pulse"></div>
          <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse delay-100"></div>
          <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse delay-200"></div>
        </div>

        {/* Loading Text */}
        <p className="text-gray-600 mt-6 text-lg animate-fade-in">Carregando...</p>

        {/* Progress Bar */}
        <div className="w-64 h-1 bg-gray-200 rounded-full mt-8 mx-auto overflow-hidden">
          <div className="h-full bg-gradient-to-r from-blue-600 to-purple-600 rounded-full animate-progress"></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes progress {
          0% {
            width: 0%;
            transform: translateX(-100%);
          }
          50% {
            width: 100%;
            transform: translateX(0%);
          }
          100% {
            width: 100%;
            transform: translateX(100%);
          }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }

        .animate-progress {
          animation: progress 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}
