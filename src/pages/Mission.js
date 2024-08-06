import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import * as C from "../styles/CommonStyle";
import * as M from "../styles/MissionStyle";

import Header from "../components/header";
import MissionSpace from "../components/mission/missionSpace";
import Loading from "../components/Loading";

// 오늘 날짜를 YYYY-MM-DD 형식으로 반환하는 함수
const getTodayDate = () => {
  const currentDate = new Date();
  return currentDate.toISOString().split("T")[0];
};

function Mission() {
  const mainTitle = "매일한방 매일습관";
  const subTitle = "나의 체질에 맞는 건강 습관 만들기";

  const navigate = useNavigate();
  const [dateInfo, setDateInfo] = useState("");
  const [completedMissions, setCompletedMissions] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const fetchData = async () => {
        // setLoading(true);
        try {
          const todayDate = getTodayDate();
          const storedDate = localStorage.getItem("date");

          if (!storedDate || storedDate !== todayDate) {
            // 날짜 생성 API 호출
            const createResponse = await axios.post(
              `${process.env.REACT_APP_API}/missions/`,
              { date: todayDate },
              {
                headers: {
                  Authorization: `Token ${token}`,
                },
              }
            );
            setDateInfo(createResponse.data);
            localStorage.setItem("date", todayDate); // 로컬 스토리지에 날짜 저장
          } else {
            // 날짜 조회 API 호출
            const fetchResponse = await axios.get(`${process.env.REACT_APP_API}/missions/${todayDate}/`, {
              headers: {
                Authorization: `Token ${token}`,
              },
            });
            setDateInfo(fetchResponse.data);
          }
        } catch (error) {
          console.error("날짜 정보를 불러오는데 실패했습니다:", error);
        } finally {
          setLoading(false);
        }
      };

      const fetchCompletedMissions = async () => {
        // setLoading(true);
        try {
          const response = await axios.get(`${process.env.REACT_APP_API}/missions/`, {
            headers: {
              Authorization: `Token ${token}`,
            },
          });
          setCompletedMissions(response.data);
        } catch (error) {
          console.error("미션 정보를 불러오는데 실패했습니다:", error);
        } finally {
          setLoading(false);
        }
      };

      fetchData();
      fetchCompletedMissions();
    } else {
      navigate("/join");
    }
  }, [navigate]);

  const handleMissionClick = async (field) => {
    const todayDate = dateInfo.date;
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/join");
      return;
    }

    // 클라이언트 상태를 즉시 업데이트
    setDateInfo((prevInfo) => ({
      ...prevInfo,
      [field]: !prevInfo[field],
    }));

    // setLoading(true);
    try {
      await axios.patch(
        `${process.env.REACT_APP_API}/missions/${todayDate}/`,
        { [field]: !dateInfo[field] },
        {
          headers: {
            Authorization: `Token ${token}`,
          },
        }
      );

      // 미션이 업데이트된 후, completedMissions도 다시 가져와서 업데이트
      const fetchCompletedMissions = async () => {
        // setLoading(true);
        try {
          const response = await axios.get(`${process.env.REACT_APP_API}/missions/`, {
            headers: {
              Authorization: `Token ${token}`,
            },
          });
          setCompletedMissions(response.data);
        } catch (error) {
          console.error("미션 정보를 불러오는데 실패했습니다:", error);
        } finally {
          setLoading(false);
        }
      };

      const fetchData = async () => {
        // setLoading(true);
        try {
          // 날짜 조회 API 호출
          const fetchResponse = await axios.get(`${process.env.REACT_APP_API}/missions/${todayDate}/`, {
            headers: {
              Authorization: `Token ${token}`,
            },
          });
          setDateInfo(fetchResponse.data);
        } catch (error) {
          console.error("날짜 정보를 불러오는데 실패했습니다:", error);
        } finally {
          setLoading(false);
        }
      };

      fetchData();
      fetchCompletedMissions();
    } catch (error) {
      console.error(`${field} 정보를 업데이트하는데 실패했습니다:`, error);
      setDateInfo((prevInfo) => ({
        ...prevInfo,
        [field]: !prevInfo[field],
      }));
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <C.Page>
        <C.Center>
          <M.Background>
            <C.PageSpace>
              <M.Mission>
                <Header mainTitle={mainTitle} subTitle={subTitle} />
                <M.Title>오늘의 미션</M.Title>
                {dateInfo && <MissionSpace dateInfo={dateInfo} completedMissions={completedMissions} onMissionClick={handleMissionClick} />}
              </M.Mission>
            </C.PageSpace>
          </M.Background>
        </C.Center>
      </C.Page>
    </>
  );
}

export default Mission;
