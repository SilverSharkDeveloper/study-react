import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { RouteContext } from "./contexts/RouteContext";
import { useSelector } from "react-redux";

const Job = () => {
  const { table } = useContext(RouteContext);
  const { title } = useParams();
  const job = useSelector((state) => state.jobs);
  let skillList ;
  if(title){
    skillList = job[title].skills.map((skill) => (
        <tr>
          <td>{skill}</td>
        </tr>
      ));
  }
 
  return (
    <div>
        <div>
        <Link to="/intro">개발자 소개 페이지</Link>
      </div>
    
       { skillList && <table style={table}>
            <thead>
            <tr>
                <th>기술</th>
            </tr>
            </thead>
            <tbody>{skillList}</tbody>
        </table>}
      <h1>{!skillList && "존재하지 않는 직업입니다."}</h1>
    </div>
  );
};

export default Job;
