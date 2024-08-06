import React, { useState, useEffect } from "react";
import * as C from "../styles/CommonStyle";
import * as T from "../styles/TestIngStyle";
import Header from "../components/header";
import { useNavigate } from "react-router-dom";

function TestIng() {
  const mainTitle = "사상체질 자가진단";
  const subTitle = "태양인/소양인/태음인/소음인";
  const navigate = useNavigate();
  const [selectedOptions, setSelectedOptions] = useState({
    Q1: "",
    Q2: "",
    Q3: "",
    Q4: "",
    Q5: "",
    Q6: "",
    Q7: "",
    Q8: "",
    Q9: "",
    Q10: "",
    Q11: "",
    Q12: "",
    Q13: "",
    Q14: "",
    Q15: "",
    Q16: "",
    Q17: "",
    Q18: "",
    Q19: "",
    Q20: "",
    Q21: "",
    Q22: "",
    Q23: "",
    Q24: "",
    Q25: "",
    Q26: "",
    Q27: "",
    Q28: "",
    Q29: "",
    Q30: "",
  });

  const questions = [
    {
      id: "Q1",
      question: "1. 체구",
      options: ["목덜미가 굵고 허리 부위가 가늘다", "허리 부위가 굵고 목덜미가 가늘다", "가슴 부위가 넓고 엉덩이가 작다", "엉덩이가 크고 가슴이 좁다"],
    },
    {
      id: "Q2",
      question: "2. 체격",
      options: ["건장하고 어깨 위로 발달되었다", "체구와 풍채가 큰 편이다", "날렵하고 가슴 부위가 발달되었다", "체구가 작고 단정하다"],
    },
    {
      id: "Q3",
      question: "3. 일 처리 방식",
      options: ["시원시원하고 막힘없이 한다", "끝까지 포기하지 않고 꾸준하게 한다", "창의적이고 솔직하게 한다", "세밀하고 꼼꼼하게 한다"],
    },
    {
      id: "Q4",
      question: "4. 성격",
      options: ["낯선 사람과도 쉽게 이야기할 수 있다", "느긋하고 잘 받아들인다", "불의를 참기 어렵다", "예의가 바르고 사람들과 적정한 거리를 둔다"],
    },
    {
      id: "Q5",
      question: "5. 당신은 어디에 속하시나요?",
      options: ["진취적이고 추진력이 강하다", "행동 자체는 느리지만 꾸준하다", "일 벌이기를 좋아하지만 마무리가 쉽지 않다", "행동보다는 사색을 좋아한다"],
    },
    {
      id: "Q6",
      question: "6. 당신이 자주 느끼는 감정은 무엇인가요?",
      options: [
        "앞뒤 가리지 않고 거침없이 행동하고 싶다",
        "마음은 있지만 행동하기 어렵다",
        "하던 일을 마무리하지 못할까 봐 두렵다",
        "모든 일을 완벽하게 처리해야 해서 불안하다",
      ],
    },
    {
      id: "Q7",
      question: "7. 당신의 행동 양식은 어디에 가까운가요?",
      options: ["공격적인 행동을 하는 편이다", "변화를 두려워 한다", "새로운 것을 찾고자 한다", "방어적인 행동을 하는 편이다"],
    },
    {
      id: "Q8",
      question: "8. 자신이 어떻다고 느끼시나요?",
      options: ["급진적이고 함부로 행동할 때가 있다", "보수적이고 욕심이 많은 편이다", "외향적이고 과시하려고 할 때가 있다", "온순하고 편안함을 중시한다"],
    },
    {
      id: "Q9",
      question: "9. 언제 건강 상태가 좋다고 느끼시나요?",
      options: ["소변을 잘 볼 때", "땀을 많이 흘릴 때", "대변을 잘 볼 때", "소화가 잘 될 때"],
    },
    {
      id: "Q10",
      question: "10. 어떤 성향을 가지고 있나요?",
      options: ["과거의 일에는 미련이 없다", "넓게 생각하고 이해해버린다", "크게 포용하고자 한다", "세밀하고 정확하다"],
    },
    {
      id: "Q11",
      question: "11. 욕심이 생기면 어떤 생각을 하나요?",
      options: ["예절과 예의를 차리기보다 마음대로 행동하고 싶다", "더 많은 욕심을 부리고 싶다", "과시하고 싶다", "의리보다는 편안함을 선택하고 싶다"],
    },
    {
      id: "Q12",
      question: "12. 평소 당신에게 부족한 마음은 무엇인가요?",
      options: ["사양하는 마음", "측은히 여기는 마음", "옳고 그른 것을 따지려는 마음", "부끄러운 일을 싫어하는 마음"],
    },
    {
      id: "Q13",
      question: "13. 당신에게 잠재되어 있다고 생각하는 성향은 무엇인가요?",
      options: ["더럽고 거친 면이 있다", "교만하고 포악스러운 면이 있다", "교활하고 간사한 면이 있다", "속임수와 거짓을 일삼는 면이 있다"],
    },
    {
      id: "Q14",
      question: "14. 당신은 어디에 속하시나요?",
      options: [
        "자신은 게으르면서 다른 사람은 부지런히 하도록 한다",
        "자신의 체면과 권위는 높이고 다른 사람은 낮춘다",
        "자신을 공경해주길 바라면서 다른 사람은 가볍게 여긴다",
        "자신에게는 관대하고 다른 사람에게는 박하다",
      ],
    },
    {
      id: "Q15",
      question: "15. 무엇에 가장 관심이 많으신가요?",
      options: ["세상의 권력", "돈과 재물", "명예", "지위"],
    },
    {
      id: "Q16",
      question: "16. 살면서 가장 많이 느끼는 것은 무엇인가요?",
      options: ["자신의 마음을 소중히 여기지 않는다", "자신의 업무에 최선을 다하지 않는다", "자신의 집안을 아끼지 않는다", "스스로 부지런히 움직이지 않는다"],
    },
    {
      id: "Q17",
      question: "17. 어떤 충동을 가장 많이 느끼시나요?",
      options: ["남의 것을 훔치고 싶을 때가 있다", "남의 것을 빼앗고 싶을 때가 있다", "남을 업신여기고 싶은 때가 있다", "남을 질투하고 싶은 때가 있다"],
    },
    {
      id: "Q18",
      question: "18. 당신은 어디에 속하시나요?",
      options: [
        "친구를 사귈 때 여러 조건을 따지지 않는다",
        "가정 일은 중시하지만 외부 일은 가볍게 생각한다",
        "외부 일은 중시하지만 가정 일은 가볍게 생각한다",
        "친구를 사귈 때 여러 조건을 따진다",
      ],
    },
    {
      id: "Q19",
      question: "19. 당신은 어디에 속하시나요?",
      options: [
        "모임을 잘 조직하고 운영하는 일이 잘 안되면 화가 난다",
        "일이 잘 안되면 사치와 향락을 일삼고 싶다",
        "어떤 곳에 거처하는 것이 어려워지면 깊은 슬픔에 빠진다",
        "친구를 사귀지 않아도 웃음이 끊이지 않는다",
      ],
    },
    {
      id: "Q20",
      question: "20. 당신이 원하는 것은 무엇인가요?",
      options: ["제멋대로 하고 싶다", "욕심이 채워질 때까지 풍족해지고 싶다", "출세해서 부귀영화를 누리고 싶다", "남에게 존경받고 싶은 마음이 있다"],
    },
    {
      id: "Q21",
      question: "21. 힘들고 어려운 상태에서 느끼는 감정은 무엇인가요?",
      options: ["부귀(부유함)가 눈 앞에 있는 것 같다", "이익이 눈 앞에 있는 것 같다", "명예가 눈 앞에 있는 것 같다", "권력이 눈 앞에 있는 것 같다"],
    },
    {
      id: "Q22",
      question: "22. 당신이 지닌 성품은 어떠신가요?",
      options: [
        "말소리가 명확하고 사람을 잘 맞이한다",
        "남을 잘 가르치고 원하는 답을 유도해낸다",
        "포용력이 넓고 존경하는 사람에게 잘 대한다",
        "성격이 넓고 평탄하여 사람을 잘 달래고 따르도록한다",
      ],
    },
    {
      id: "Q23",
      question: "23. 감정 조절이 어려울 때 나타나는 증상은 무엇인가요?",
      options: ["슬픔이 깊어지면 분노한다", "기쁨이 넘치면 사치와 향락을 즐긴다", "분노가 심하면 슬픔도 깊어진다", "즐거움이 넘치면 감정에 변화가 나타난다"],
    },
    {
      id: "Q24",
      question: "24. 당신이 자주 느끼는 감정은 무엇인가요?",
      options: [
        "남에게 같이 돕자고 하고 실제로 도울까 걱정한다",
        "남에게 청렴하라고 하고 실제로 청렴할까 걱정한다",
        "상대에게 서로 의지하자고 해놓고 실제로 의지할까 걱정한다",
        "남을 깨우쳐줘야 한다고 해놓고 실제로 깨우칠까 걱정한다",
      ],
    },
    {
      id: "Q25",
      question: "25. 당신은 어디에 속하나요?",
      options: [
        "하고 싶은 것을 못하면 분노가 생긴다",
        "남에게로부터 무언가를 가져오거나 얻지 못할까 두렵다",
        "자기 것을 매우 아끼지만 항상 부족해서 걱정이다",
        "하고 싶은 것을 할 수 있어 즐겁다",
      ],
    },
    {
      id: "Q26",
      question: "26. 사람하는 판단하는 기준은 무엇인가요?",
      options: ["선과 악", "근면과 게으름", "지혜와 어리석음", "능력과 무능력"],
    },
    {
      id: "Q27",
      question: "27. 당신이 꺼려하는 사람은 무엇인가요?",
      options: [
        "세밀하고 빈틈이 없는 사람",
        "재산, 재물을 관리하고 경영하면서 의리가 있는 사람",
        "은혜에 보답하고 어진 마음을 가진 사람",
        "재주가 있고 지혜로운 사람",
      ],
    },
    {
      id: "Q28",
      question: "28. 구토할 경우 증상이 어떠한가요?",
      options: ["아무 이유 없이 구토 증세가 온다", "구토를 한 이후에 병이 나은 적이 많다", "구토를 할 때 열이 난다", "구토를 할 때 몸이 차다"],
    },
    {
      id: "Q29",
      question: "29. 몸이 가벼워지는 경우는 어떨 때인가요?",
      options: [
        "배변 시 덩어리가 크고 양이 많으면 몸이 가볍다",
        "땀을 흘리고 나면 몸이 가볍다",
        "손바닥이 발바닥에 땀이 나면서 몸이 가벼워진다",
        "코 밑에 땀이 나면서 몸이 가벼워진다",
      ],
    },
    {
      id: "Q30",
      question: "30. 당신이 주로 느끼는 증상은 무엇인가요?",
      options: ["평소 소변이 많고 자주 본다", "긴장을 하면 심장이 두근거린다", "몸이 힘들 때 코피가 난다", "땀이 많이 나면 기운이 빠진다"],
    },
  ];
  const [isAllAnswered, setIsAllAnswered] = useState(false);
  useEffect(() => {
    // 모든 질문에 답했는지 확인하는 함수
    const checkAllAnswered = () => {
      return Object.values(selectedOptions).every((option) => option !== "");
    };

    setIsAllAnswered(checkAllAnswered());
  }, [selectedOptions]); // 선택된 옵션이 변경될 때마다 호출

  const handleOptionChange = (question, value) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [question]: value,
    }));
  };

  const handleClick = () => {
    if (!isAllAnswered) {
      return; // 모든 질문에 답하지 않으면 함수 종료
    }

    const optionCounts = [0, 0, 0, 0]; // 1, 2, 3, 4의 선택지 개수를 세기 위한 배열

    // 선택된 옵션의 값을 모두 카운트
    Object.values(selectedOptions).forEach((option) => {
      if (option) {
        optionCounts[parseInt(option) - 1]++;
      }
    });

    const maxIndex = optionCounts.indexOf(Math.max(...optionCounts)) + 1;

    // type 값을 쿼리 파라미터로 추가하여 이동
    navigate(`/test?type=${maxIndex}`);
  };

  return (
    <C.Page>
      <C.Center>
        <T.Background>
          <C.PageSpace>
            <T.Test>
              <T.Nav>
                <Header mainTitle={mainTitle} subTitle={subTitle} />
              </T.Nav>

              <T.TestQuestion>
                {questions.map((q, index) => (
                  <div key={q.id}>
                    <div className="Qtitle">{q.question}</div>
                    {q.options.map((option, optIndex) => (
                      <label key={optIndex}>
                        <input
                          type="radio"
                          name={q.id}
                          value={optIndex + 1} // 1부터 시작하는 선택지 값
                          checked={selectedOptions[q.id] === (optIndex + 1).toString()}
                          onChange={() => handleOptionChange(q.id, (optIndex + 1).toString())}
                        />
                        {option}
                      </label>
                    ))}
                  </div>
                ))}
              </T.TestQuestion>

              <T.ButtonContainer>
                <T.Button
                  onClick={handleClick}
                  disabled={!isAllAnswered} // 모든 질문에 답하지 않으면 비활성화
                  style={{
                    backgroundColor: isAllAnswered ? "#751f3f" : "#ccc", // 답변이 완료되면 기존 색상, 그렇지 않으면 회색
                    cursor: isAllAnswered ? "pointer" : "not-allowed", // 답변이 완료되면 포인터, 그렇지 않으면 not-allowed
                  }}
                >
                  결과 확인하기
                </T.Button>
              </T.ButtonContainer>
            </T.Test>
          </C.PageSpace>
        </T.Background>
      </C.Center>
    </C.Page>
  );
}

export default TestIng;
