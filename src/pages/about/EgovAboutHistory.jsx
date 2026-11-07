import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import URL from "@/constants/url";
import { default as EgovLeftNav } from "@/components/leftmenu/EgovLeftNavAbout";

function EgovAboutHistory() {
  // 학생 목록 저장
  const [students, setStudents] = useState([]);
  // 학생 등록 입력값
  const [studentNo, setStudentNo] = useState("");
  const [name, setName] = useState("");
  const [department, setDepartment] = useState("");
  const [status, setStatus] = useState("재학");
  // 학생 목록 조회
  const loadStudents = async () => {
    try {
      const response = await fetch("http://localhost:8080/students",{
          method: "GET",
          credentials: "include",
        }
      );

      if (!response.ok) {
        throw new Error("학생 목록 조회 실패");
      }

      const data = await response.json();
      setStudents(data);
    } catch (error) {
      console.error(error);
      alert("학생 목록을 불러오지 못했습니다.");
    }
  };
  // 페이지가 처음 실행될 때 학생 목록 조회
  useEffect(() => {loadStudents();}, []);
  // 학생 등록
  const addStudent = async (event) => {
    event.preventDefault();
    const student = {studentNo: studentNo, name: name, department: department, status: status,};
    try {
      const response = await fetch("http://localhost:8080/students",{method: "POST",
          headers: {"Content-Type": "application/json",},
          credentials: "include",
          body: JSON.stringify(student),
        }
      );
      if (!response.ok) {throw new Error("학생 등록 실패");}
      alert("학생이 등록되었습니다.");
      // 입력값 초기화
      setStudentNo("");
      setName("");
      setDepartment("");
      setStatus("재학");
      // 학생 목록 다시 조회
      loadStudents();
    } catch (error) {
      console.error(error);
      alert("학생 등록에 실패했습니다.");
    }
  };
  // 학생 삭제
  const deleteStudent = async (studentNo) => {
    const result =
      window.confirm("학생을 삭제하시겠습니까?");
    if (!result) {return;}
    try {
      const response = await fetch(`http://localhost:8080/students/${studentNo}`,{
          method: "DELETE",
          credentials: "include",
        }
      );
      if (!response.ok) {throw new Error("학생 삭제 실패");}
      alert("학생이 삭제되었습니다.");
      loadStudents();       // 삭제 후 목록 다시 조회
    } catch (error) {
      console.error(error);
      alert("학생 삭제에 실패했습니다.");
    }
  };
  return (
    <div className="container">
      <div className="c_wrap">
        <div className="location">
          <ul>
            <li>
              <Link to={URL.MAIN} className="home">Home</Link>
            </li>
            <li>학생관리</li>
            <li>학생등록</li>
          </ul>
        </div>
        <div className="layout">
          {/* 왼쪽 메뉴 */}
          <EgovLeftNav />
          {/* 본문 */}
          <div className="contents SITE_INTRO" id="contents">
            <h1 className="tit_3">학생등록</h1>
            <p className="txt_1">
              학생의 기본정보를 등록하고
              등록된 학생 목록을 조회할 수 있습니다.
            </p>
            {/* 학생 등록 */}
            <h2 className="tit_4">학생 정보 등록</h2>
            <h3 className="tit_5">학생 기본정보</h3>
            <form onSubmit={addStudent}>
              <div>
                <label>학번</label>

                <input
                  type="text"
                  value={studentNo}
                  onChange={(e) =>
                    setStudentNo(e.target.value)
                  }
                  required
                />

              </div>


              <br />


              <div>

                <label>
                  이름
                </label>

                <input
                  type="text"
                  value={name}
                  onChange={(e) =>
                    setName(e.target.value)
                  }
                  required
                />

              </div>


              <br />


              <div>

                <label>
                  학과
                </label>

                <input
                  type="text"
                  value={department}
                  onChange={(e) =>
                    setDepartment(e.target.value)
                  }
                  required
                />

              </div>


              <br />


              <div>

                <label>
                  상태
                </label>

                <select
                  value={status}
                  onChange={(e) =>
                    setStatus(e.target.value)
                  }
                >

                  <option value="재학">
                    재학
                  </option>

                  <option value="휴학">
                    휴학
                  </option>

                </select>

              </div>


              <br />


              <button type="submit">
                학생 등록
              </button>


            </form>



            <br />
            <br />


            {/* =================================
                학생 목록
            ================================== */}

            <h2 className="tit_4">
              학생 목록
            </h2>


            <table
              border="1"
              width="100%"
            >

              <thead>

                <tr>

                  <th>
                    학번
                  </th>

                  <th>
                    이름
                  </th>

                  <th>
                    학과
                  </th>

                  <th>
                    상태
                  </th>

                  <th>
                    관리
                  </th>

                </tr>

              </thead>


              <tbody>


                {students.map((student) => (

                  <tr
                    key={student.studentNo}
                  >

                    <td>
                      {student.studentNo}
                    </td>

                    <td>
                      {student.name}
                    </td>

                    <td>
                      {student.department}
                    </td>

                    <td>
                      {student.status}
                    </td>

                    <td>

                      <button
                        type="button"
                        onClick={() =>
                          deleteStudent(
                            student.studentNo
                          )
                        }
                      >

                        삭제

                      </button>

                    </td>

                  </tr>

                ))}


              </tbody>

            </table>


          </div>

        </div>

      </div>

    </div>
  );
}

export default EgovAboutHistory;