import { NavLink } from "react-router-dom";
import URL from "@/constants/url";

function EgovLeftNavAbout() {
  return (
    <div className="nav">
      <div className="inner">
        <h2>학생관리</h2>
        <ul className="menu4">
          <li>
            <NavLink
              to={URL.ABOUT_SITE}
              className={({ isActive }) => (isActive ? "cur" : "")}
            >
              학생목록
            </NavLink>
          </li>
          <li>
            <NavLink
              to={URL.ABOUT_HISTORY}
              className={({ isActive }) => (isActive ? "cur" : "")}
            >
              학생등록
            </NavLink>
          </li>
          <li>
            <NavLink
              to={URL.ABOUT_ORGANIZATION}
              className={({ isActive }) => (isActive ? "cur" : "")}
            >
              성적조회
            </NavLink>
          </li>
          <li>
            <NavLink
              to={URL.ABOUT_LOCATION}
              className={({ isActive }) => (isActive ? "cur" : "")}
            >
              수업현황
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default EgovLeftNavAbout;
