import React from "react";
import * as C from "../styles/CommonStyle";
import * as A from "../styles/AIStyle";

import Header from "../components/header";

function AI() {
    const mainTitle = "사상체질 건강관리";
    const subTitle = "AI 허준과 함께하는 매일 한방";

    return (
        <>
            <C.Page>
                <C.Center>
                    <A.Background>
                        <C.PageSpace>
                            <A.AI>
                                <Header mainTitle={mainTitle} subTitle={subTitle} />
                                <A.container>
                                    <A.title>체질별 모아보기</A.title>
                                    <A.content>
                                        <A.btn>태양인</A.btn>
                                        <A.btn>소양인</A.btn>
                                        <A.btn>태음인</A.btn>
                                        <A.btn>소음인</A.btn>
                                    </A.content>
                                </A.container>
                                <A.search>
                                    <A.search_icon>A</A.search_icon>
                                    <A.input placeholder="태양인 건강 관리법을 알려줘" type="text" name="a"></A.input>
                                </A.search>
                                <A.tip>
                                    <A.tip_text>Tip. 이렇게 물어보면 좋아요</A.tip_text>
                                    <br></br>
                                    <A.tip_text> ∙ 건강관리법을 알려줘</A.tip_text>
                                    <A.tip_text> ∙ 피해야 하는 음식을 알려줘</A.tip_text>
                                    <A.tip_text> ∙ 치명적인 병을 알려줘</A.tip_text>
                                    <A.tip_text> ∙ 조심해야하는 생활습관을 알려줘</A.tip_text>
                                </A.tip>
                                <A.answer>
                                    <A.doctor></A.doctor>
                                    <A.answer_container>
                                        <A.answer_text>
                                            태양인의 건강 관리법을 알려드릴게요. 태양인은 발이 다치기 않도록
                                            조심해야해요.
                                        </A.answer_text>
                                    </A.answer_container>
                                </A.answer>
                            </A.AI>
                        </C.PageSpace>
                    </A.Background>
                </C.Center>
            </C.Page>
        </>
    );
}

export default AI;
