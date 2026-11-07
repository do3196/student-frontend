import { Link } from "react-router-dom";

import { default as EgovLeftNav } from "@/components/leftmenu/EgovLeftNavAbout";

function EgovAboutSite() {
  return (
    <div className="container">
      <div className="c_wrap">
        {/* <!-- Location --> */}
        <div className="location">
          <ul>
            <li>
              <Link to="" className="home">
                Home
              </Link>
            </li>
            <li>
              <Link to="">학생관리</Link>
            </li>
            <li>소개</li>
          </ul>
        </div>
        {/* <!--// Location --> */}

        <div className="layout">
          {/* <!-- Navigation --> */}
          <EgovLeftNav></EgovLeftNav>
          {/* <!--// Navigation --> */}

          <div className="contents SITE_INTRO" id="contents">
            {/* <!-- 본문 --> */}

            <h1 className="tit_3">학생관리</h1>

            <p className="txt_1">
              학생의 학번, 이름, 학과, 재학상태 등의
              <br />
              기본 정보를 조회하고 관리할 수 있습니다.
            </p>

            <h2 className="tit_4">멀티미디어학과 소개</h2>

            <h3 className="tit_5">개요</h3>

            <p className="msg_1">
              멀티미디어학과는 소프트웨어 개발과 디지털 콘텐츠 제작 역량을 함께 갖춘 융합형 인재를 양성합니다.
              <br />
              웹·앱 개발, 영상 콘텐츠, 3D 디자인, 인공지능 및 디지털 미디어 기술을 중심으로 실무형 교육을 제공합니다.
            </p>
            {/* <!--// 본문 --> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default EgovAboutSite;
