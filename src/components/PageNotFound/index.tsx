import { useTranslation } from "react-i18next";

const PageNotFound = () => {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-4">
      {/* Main content container */}
      <div className="text-center max-w-lg mx-auto">
        {/* 404 Number */}
        <h1 className="text-[120px] sm:text-[180px] md:text-[220px] font-bold text-gray-800 leading-none">
          {t("404.code")}
        </h1>

        {/* Not Found Text */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl text-gray-600 mb-4 font-medium">
          {t("404.not_found_text")}
        </h2>

        {/* Error Message */}
        <p className="text-sm sm:text-base md:text-lg text-gray-500 mb-8">
          {t("404.message")}
        </p>

        {/* Optional: Back to Home Button */}
        <button
          onClick={() => window.history.back()}
          className="px-6 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors duration-300"
        >
          {t("404.back_button")}
        </button>
      </div>
    </div>
  );
};

export default PageNotFound;
