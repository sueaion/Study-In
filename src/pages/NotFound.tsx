import { useNavigate } from "react-router-dom";
import notFoundImg from "@/assets/404-illustration.png";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center min-h-screen bg-background font-sans">
      
      <div className="flex items-start gap-[50px]">

        {/* 이미지 카드 */}
        <div className="bg-gray-100 rounded-2xl w-[320px] h-[320px] flex items-center justify-center">

          {/* 캐릭터 wrapper */}
          <div className="relative">

            {/* 땀 */}
            <svg
              className="absolute -top-6 left-10"
              width="50"
              height="40"
              viewBox="0 0 60 60"
              fill="none"
            >
              <path d="M10 10 Q5 15 10 20" stroke="#5C8EF2" strokeWidth="4" strokeLinecap="round"/>
              <path d="M25 5 Q20 10 25 15" stroke="#5C8EF2" strokeWidth="4" strokeLinecap="round"/>
              <path d="M40 10 Q35 15 40 20" stroke="#5C8EF2" strokeWidth="4" strokeLinecap="round"/>
              <path d="M15 25 Q10 30 15 35" stroke="#5C8EF2" strokeWidth="4" strokeLinecap="round"/>
              <path d="M30 20 Q25 25 30 30" stroke="#5C8EF2" strokeWidth="4" strokeLinecap="round"/>
              <path d="M45 25 Q40 30 45 35" stroke="#5C8EF2" strokeWidth="4" strokeLinecap="round"/>
            </svg>

            {/* 캐릭터 */}
            <img
              src={notFoundImg}
              alt="404"
              className="w-[200px]"
            />

          </div>

        </div>

        {/* 텍스트 */}
        <div className="flex flex-col">

          <h1 className="text-3xl font-bold text-primary mb-2">
            404
          </h1>

          <h2 className="text-xl font-medium text-gray-900 mb-2">
            페이지를 찾을 수 없습니다.
          </h2>

          <p className="text-base text-gray-500 mb-6">
            페이지가 존재하지 않거나 사용할 수 없는 페이지입니다.
            <br />
            웹 주소가 올바른지 확인해 주세요.
          </p>

          <div className="flex gap-4">

            <button
              onClick={() => navigate("/")}
              className="px-6 py-2 bg-primary text-white rounded-lg font-medium"
            >
              메인으로
            </button>

            <button
              onClick={() => navigate(-1)}
              className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg font-medium"
            >
              이전 페이지
            </button>

          </div>

        </div>

      </div>

    </div>
  );
};

export default NotFound;