import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import * as H from "../styles/components/HeaderStyle";
import Loading from "../components/Loading";

import back from "../img/back_w.png";
import profile from "../img/profile.png";

function HeaderMypage() {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };

  const [userInfo, setUserInfo] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const id = localStorage.getItem("user_id");
    if (token) {
      const fetchUserData = async () => {
        try {
          const response = await axios.get(`${process.env.REACT_APP_API}/accounts/user/${id}/`, {
            headers: {
              Authorization: `Token ${token}`,
            },
          });
          setUserInfo(response.data);
        } catch (error) {
          console.error("사용자 정보를 불러오는데 실패했습니다:", error);
        } finally {
          setLoading(false);
        }
      };

      fetchUserData();
    }
  }, []);

  return (
    <>
      <H.Header>
        <H.Arrow onClick={handleBackClick}>
          <img src={back} alt="뒤로가기" />
        </H.Arrow>
        <H.TitleImg>
          <img src={profile} alt="프로필" />
          <H.Title>
            <H.MainTitle>{userInfo.name ? userInfo.name : "-"}</H.MainTitle>
            <H.SubName>{userInfo.is_member ? "회원" : "비회원"}</H.SubName>
          </H.Title>
        </H.TitleImg>

        <H.ArrowSpace></H.ArrowSpace>
      </H.Header>
    </>
  );
}

export default HeaderMypage;
